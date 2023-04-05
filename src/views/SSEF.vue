<template>
<v-container fluid>
  <v-card>
    <div class="pa-8">
      <v-card-title>
      SSEF
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
      <!-- <v-row justify='center'>
        <v-col cols='auto' align-self="center">
          <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
          ></v-text-field>
        </v-col>
      </v-row> -->
      <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="projects"
        item-value="name"
        multi-sort
        class="elevation-1"
        loading-text="Loading... Please wait"
        :footer-props="{showFirstLastPage: true, firstIcon: 'mdi-arrow-collapse-left', lastIcon: 'mdi-arrow-collapse-right'}"
        :search="search"
        v-model:sort-by="sortBy"
      >
    <template v-slot:item.status="{ item }">
      <v-chip :color="getColor(item.raw.status)">
        {{ item.raw.status }}
      </v-chip>
    </template>


    </v-data-table>
    </div>
  </v-card>
</v-container>


</template>

<script setup>
import {loadProjects} from "@/api/ssef.js";
import { ref, onMounted } from 'vue'
// import type { Ref } from 'vue'


const itemsPerPage = ref(15);

const projects = ref([]);

const search = ref("");

const sortBy = ref([{ key: 'projectCode', order: 'asc' }])

function getColor (status) {
  if (status == "Not Submitted") return 'red'
  else if (status == "Not In Final") return 'orange'
  else return 'green'
}


const headers = ref([
  {title: "Project Code", value: "projectCode", key: "projectCode", sortable: true},
  {title: "Title", value: "title", key: "title", sortable: true},
  {title: "School", value: "school", key: "school", sortable: true},
  {title: "Team Leader", value: "teamLeader", key: "teamLeader", sortable: true},
  {title: "Status", value: "status", key: "status", sortable: true}
])

async function loadSSEF() {
  projects.value = await loadProjects();
}

onMounted(loadSSEF);


</script>
