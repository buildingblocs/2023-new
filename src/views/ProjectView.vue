<template>
<v-container fluid>

        <v-row>
          <v-col cols="12" class="mx-auto">
            <!-- <v-card class="mx-auto pa-4" height="100%"> -->
            <!-- <v-flex class="text-overline"> -->
                <div class="mx-4 d-flex text-overline">
                    {{ project.pcode }} <v-spacer /> {{ project.year }}
                </div>
            <!-- </v-flex> -->
            <h1 class="mx-4 ptitle"> {{ project.title }} <v-icon icon="mdi-pencil" size="small" class="titleEdit" /> </h1>
                <!-- <v-card-subtitle> -->
                <!--{{ project.authors }}-->
                <div v-html="names(project)" class="mx-4"/>
                <!-- </v-card-subtitle> -->
            <!-- <v-spacer /> -->
            <!-- <MdEditor v-model="tempAbstract" language="en-US" /> -->
            <!-- <mavon-editor v-model="tempAbstract"/> -->
        <!-- </v-card> -->
          </v-col>
          <v-col cols="9" min-width="400px">
            <v-card  class="mx-auto pa-4">
              <!-- height="100%" -->
              <!-- <v-card-title style="text-h2">Project Abstract</v-card-title> -->
              <div class="mx-4 d-flex text-overline">
                        Project Abstract
                    </div>
              <div v-if="!editAbstract">
                        <v-card-text>
                          {{ project.abstract  ? project.abstract : "No Abstract Inserted" }}
                        </v-card-text>
                        <v-row v-if="ownProject">
                          <v-col cols="12" sm="12" md="6">
                            <label id="counter">({{ wordCount(project.abstract) }} words)</label>
                          </v-col>
                          <v-col cols="3" sm="12" md="6" class="text-right">
                            <v-btn
                                icon="mdi-pencil"
                                style="justify: right"
                                color="primary"
                                @click="editAbstract = true; tempAbstract = project.abstract;"
                            >

                            </v-btn>
                          </v-col>
                        </v-row>
                    </div>
                    <div v-if="editAbstract">
                        <v-textarea
                            clearable
                            auto-grow
                            v-model = "tempAbstract"
                            clear-icon="mdi-close-circle"
                            label="Text"
                        ></v-textarea>
                        <v-row>
                          <v-col cols="12" sm="12" md="6">
                            <label id="counter">({{ wordCount(tempAbstract) }} words)</label>
                          </v-col>
                          <v-col cols="3" sm="12" md="6" class="text-right">
                                <v-btn
                                icon="mdi-content-save"
                                color="primary"
                                @click="editAbstract = false; updateAbstract()"
                            >
                            </v-btn>
                          </v-col>
                        </v-row>

                    </div>

            </v-card>
          </v-col>
          <v-col cols="3" class="mx-auto pa-4" height="100%">
            <div class="mx-4 d-flex text-overline">
                        Project Admin
            </div>
            <v-list>
                <v-list-subheader>Project Members</v-list-subheader>
                  <v-list-item
                    v-for="member in project.members" :key="member.email"
                    :value="member.name"
                    :prepend-avatar="'nush_sid' in member ? (`data:image/png;base64,${member.pfp}` ?? '') : ''"
                    active-color="primary"
                    :href="`/students/${'nush_sid' in member ? member.nush_sid : member.email}`"
                  >
                    <v-list-item-title>{{ member.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ 'nush_sid' in member ? member.nush_sid : member.email }}</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-subheader v-if="project.mentors != null && project.mentors != undefined && project.mentors.length > 0">Research Mentor(s)</v-list-subheader>
                  <v-list-item
                    v-for="mentor in project.mentors" :key="mentor.email"
                    :value="mentor.name"
                    active-color="primary"
                    :href="`/mentors/${mentor.email}`">
                    <v-list-item-title>{{ mentor.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ mentor.jobs[0].role }}, {{ mentor.jobs[0].instId }}</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-subheader v-if="project.teacher != null">Teacher Mentor</v-list-subheader>
                  <v-list-item
                  :prepend-avatar="`data:image/png;base64,${project.teacher.pfp}` ?? ''"
                  :href="`/teachers/${project.teacher.email.split('@')[0]}`"
                  v-if="project.teacher != null">
                    <v-list-item-title>{{ project.teacher.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ project.teacher.email }}</v-list-item-subtitle>
                  </v-list-item>
            </v-list>
          </v-col>

          <v-col cols="12" style="margin-bottom: 20px;">
            <div class="mx-4 d-flex text-overline" style="margin-top: 20px;">
                        Project Report
            </div>
            <v-card :style="ownProject ? {'background-color': '#aaa' } : {'height': '80vh'}"  class="text-center justify-center" height="100%">
              <PDFViewer
                :source="`data:application/pdf;base64,${project.reportPdf}`"
                :style="{'height': ownProject ? '80vh' : '100%', 'width': '100%'}"
              /><!-- @download="handleDownload"   v-if="ownProject" -->
              <FileSelector
                v-if="ownProject"
                style="margin-top:20px"
                accept-extensions=".pdf"
                :multiple="false"
                :max-file-size="15 * 1024 * 1024"
                @validated="handleFilesValidated"
                @changed="handleFilesChanged">
                <v-btn block color="primary">
                  Click here to upload a new Report
                </v-btn>

              </FileSelector>
            </v-card>

          </v-col>

          <v-col cols="6" style="margin-top: 20px;"  class="mx-auto pa-4" height="100%" v-if="submissions.length > 0">
            <div class="mx-4 d-flex text-overline">
                        Project Submissions
            </div>
            <v-expansion-panels style="margin-top: 20px;">
              <v-expansion-panel v-for="submission in submissions" :key="`${submission.eventId}_${submission.year}_${submission.code}`">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                    <span v-if="!expanded"><b>{{ submission.eventId }} {{ submission.year }}: {{ submission.code }}</b></span>
                    <span v-else>{{ submission.subTitle }}</span>
                  </template>
              </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <p style="subtitle-2">
                  {{ submission.subAbstract }}
                  </p>


                  <v-list v-if="submission.accs.length > 0">
                    <v-list-subheader>Awards</v-list-subheader>
                      <v-list-item
                        v-for="acc in submission.accs" :key="acc.accId"
                        :value="formatAward(submission, acc)"
                        active-color="primary"
                      >
                        <v-list-item-title v-text="formatAward(submission, acc)"></v-list-item-title>
                      </v-list-item>
                </v-list>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>

        </v-row>
        <v-spacer></v-spacer>



  </v-container>
</template>
<script lang="ts" setup>
import { FsValidationResult } from 'vue-file-selector/dist';
import { useRoute } from 'vue-router'
import { ref, computed, type Ref, onMounted } from 'vue'
import { Project, dummyProject, Submission, Award, Publication } from '@/types/project'
import { loadProject, loadSubmissions, updateProject } from "@/api/projects"
import names from "@/util/names"
import { Teacher } from '@/types/user'
import wordCount from "@/util/wordCount"
import PDFViewer from 'pdf-viewer-vue'
import { emit } from 'process';
import { useAppStore } from '@/store/app';

const appStore = useAppStore()

const ownProject = ref(true)

const route = useRoute()

const pcode = ref("")

const project: Ref<Project> = ref(dummyProject())

const tempAbstract = ref("")

const editAbstract = ref(false)

const submissions: Ref<Submission[]> = ref([])


function updateGeneralProject() {
  updateProject(project.value.pcode, project.value.title, project.value.abstract, project.value.reportPdf).then(
    res => project.value = res ?? project.value
  )
}

function updateAbstract() {
  project.value.abstract = tempAbstract.value.trim() || "" 	// remove leading and trailing spaces from tempAbstract
  updateGeneralProject()
}

function formatAward(submission: Submission, acc: Award | Publication) {
  if('name' in acc) {
    // Award
    if(acc.prize.length > 0) return `🏆 ${acc.name} (${acc.prize})`
    else return acc.name
  } else {
    return `📰 Publication in ${submission.eventId} ${submission.year}`
  }
}

function handleFilesValidated(result: FsValidationResult, files: File[]) {
  console.log('Validation result: ' + result);
}

function getBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result as string);
    }
    reader.onerror = error => { 	// error reading file, or other error
      reject(error); 		// or simply ignore the error
    }
  })
}

function handleFilesChanged(files: File[]) {
  const newReport = files[0];

  getBase64(newReport).then(
    res => {
      project.value.reportPdf = res.substring(28)
      // console.log(res)
      // console.log(project.value.reportPdf)
      updateGeneralProject()
    }
  )

  console.log('Selected files: ');
  console.table(files);
}



onMounted(() => {
  pcode.value = (route.params.id as string).replaceAll("-", ".")
  loadProject(pcode.value).then(res => {
    project.value = res;
    tempAbstract.value = res.abstract;
    // console.log(res.reportPdf);
    ownProject.value = project.value.members.filter(member => member.email == appStore.user?.email).length > 0
    console.log(ownProject.value);
  })
  loadSubmissions(pcode.value).then(res => {
    console.log(res);
    submissions.value = res;
  })
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

  .v-textarea .v-field {
    font-size: 0.875rem;
  }

.titleEdit {
  display: none;
}

.ptitle:hover + .titleEdit {
  display: block;
}

</style>
