<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3">
        <v-card class="mx-auto pa-4 text-center" height="100%">
            <!-- <v-flex class="text-overline"> -->
                <div class="mx-4 d-flex text-overline">
                    {{ student.nush_sid }} <v-spacer /> Y{{ 6 + (new Date()).getFullYear() - student.gradYear }}
                </div>
            <!-- </v-flex> -->

            <v-avatar v-ripple size="200px" class="justify-center">
              <v-img
                :aspect-ratio="1"
                :width="250"
                :src="`data:image/png;base64,${student.pfp}`"
                class="justify-center"
                cover
                alt="Click to select avatar"
              ></v-img>
            </v-avatar>


            <v-card-title class="justify-center">{{ student.name }}</v-card-title>

            <v-list class="text-left">
                <v-list-subheader>Common Co-authors</v-list-subheader>
                  <v-list-item
                    v-for="member in coauthors" :key="member.email"
                    :value="member.name"
                    :prepend-avatar="'nush_sid' in member ? (`data:image/png;base64,${member.pfp}` ?? '') : ''"
                    :href="`/students/${member.nush_sid}`"
                    active-color="primary"
                  >
                    <v-list-item-title>{{ member.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ member.nush_sid }}</v-list-item-subtitle>
                  </v-list-item>
                  </v-list>
        </v-card>
      </v-col>
      <v-col>

        <v-card class="mx-auto pa-4" height="100%">
                <div class="mx-4 d-flex text-overline">
                    Projects Done <v-spacer />
                    <span :style="{'color': defaults.prefCardView ? 'black': 'primary !important'}">Table View</span><v-switch v-model="defaults.prefCardView" density='compact' label="" style="flex: none; margin-top:-5px; margin-right:5px;margin-left: 5px;" inset></v-switch><span :style="{'color': defaults.prefCardView ? 'primary !important': 'black'}">Card View</span>
                </div>

          <div class="pa-8">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          </div>
          <v-row dense v-if="defaults.prefCardView">
            <v-col :cols="4"  v-for="project in searchProjects()" :key="project.pcode" style="padding-bottom: 20px;">
              <v-card class="mx-auto pa-4" max-width="500px" height="100%">
                <v-flex class="text-overline">
                    <div class="mx-4 d-flex">
                        {{ project.pcode }} <v-spacer /> {{ project.year }}
                    </div>
                </v-flex>
                <v-card-title class="text--primary" style="word-break: normal;">
                    {{ project.title }}
                </v-card-title>
                <v-card-subtitle>
                <p class="text-wrap" v-html="names(project)"></p>
                </v-card-subtitle>
                <v-card-actions>
                  <v-btn
                      color="primary" variant="elevated"
                      :href="'/projects/'+project.pcode.replaceAll('.', '-')">
                      Open
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <v-data-table
            :headers="headers"
            :items="projects"
            v-if="!defaults.prefCardView"
            item-value="name"
            multi-sort
            class="elevation-1"
            loading-text="Loading... Please wait"
            :footer-props="{showFirstLastPage: true, firstIcon: 'mdi-arrow-collapse-left', lastIcon: 'mdi-arrow-collapse-right'}"
            :search="search"
            v-model:sort-by="sortBy"
          >
            <template v-slot:item.title="{ item }">
              <a :href="`/projects/${item.raw.pcode.replaceAll('.', '-')}`">{{ item.raw.title }}</a>
            </template>
            <template v-slot:item.members="{ item }">
              <div v-html="names(item.raw)"></div>
            </template>
          </v-data-table>
        </v-card>



      </v-col>
    </v-row>

  </v-container>
</template>
<script lang="ts" setup>
import fuzzysort from 'fuzzysort'
import { ref, computed, type Ref, onMounted } from 'vue'
import { Student, dummyStudent } from '@/types/user'
import { Project } from "@/types/project"
import { useRoute } from 'vue-router'
import {loadStudent, loadCoauthors} from '@/api/user'
import { loadProjects } from '@/api/projects'
import { useDefaultsStore } from '@/store/defaults'
import names from "@/util/names"

const defaults = useDefaultsStore()

const route = useRoute()

const sid = ref("")

const student = ref(dummyStudent());

const projects: Ref<Project[]> = ref([])

const coauthors: Ref<Student[]> = ref([])

const search = ref("")

const sortBy = ref([{ key: 'pcode', order: 'asc' }])

const headers = ref([
  {title: "Project Code", value: "pcode", key: "pcode", sortable: true},
  {title: "Title", value: "title", key: "title", sortable: true},
  {title: "Members", value: "members", key: "members", sortable: false},
  {title: "Year", value: "year", key: "year", sortable: true}
])

function searchProjects(): Project[] {
  return search.value.length == 0 ? projects.value : fuzzysort.go(search.value, projects.value.map(
  (it) => {
    return {
      ...it,
      combinedMembers: names(it)
    }
  }
  ), {
    keys: ['title', 'pcode', "combinedMembers"]
  }).filter(it => it.score > -3000).map(it => it.obj);
}

onMounted(() => {
  sid.value = (route.params.id as string).replaceAll("-", ".")
  loadStudent(sid.value).then (
    res => {
      student.value = res
      console.log(student.value.pfp);
    }
  )
  loadProjects(sid.value).then(res => projects.value = res)

  loadCoauthors(sid.value).then(res => coauthors.value = res)

})

</script>
<style>
.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}

a {
    text-decoration: none;
    color: #1867C0;
    /* font-weight: bold; */
}
</style>
