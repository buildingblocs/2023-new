<template>
  <v-container fluid class="px-8">
    <h1 style="font-size: 60px">June Conference</h1>
  </v-container>
  <v-row class="mx-auto pa-4">
    <v-col cols="12" md="6">
      <v-card  class="mx-auto pa-8 rounded-xl">
        <p>
          The June Conference is our flagship computing event held at NUS School of Computing.
          This year, the theme is <b>Artificial Intelligence</b>. We are holding over 17 workshops, 5 talks and 3 hackathons over 3 tracks to cater to various skill levels!

        </p>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-carousel>
        <v-carousel-item v-for="img in images" :key="img"> <v-img :src="img" /> </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>

  <v-tabs
    v-model="tab"
    bg-color="white"
    color="primary"
      align-tabs="center"
  >
    <v-tab value="one">Beginner Track</v-tab>
    <v-tab value="two">Intermediate Track</v-tab>
    <v-tab value="three">Advanced Track</v-tab>
  </v-tabs>

  <v-window v-model="tab">
      <v-window-item value="one">
        <section class="ma-4 px-8" v-for="i in [0, 1]" :key="i">
          <h2 style="font-size: 40px;">Day {{ i+1 }}</h2>
          <v-timeline side="end">
            <v-timeline-item
              v-for="item in beginner[i]"
              :key="item.id"
              :dot-color="item.color"
              size="small"
            >
            <!-- <div class="d-flex justify-space-between flex-grow-1"> -->
              <v-row width="100%">
                <v-col cols="12" md="8">
                  <v-alert height="100%"
                    :value="true" class="flex-grow-1"
                    :color="item.color" style="min-width:400px;"
                  >
                      <h3 style="font-size: 30px;">{{ item.title }}</h3>
                      <b><i>{{ item.by }}</i></b>

                  </v-alert>
                </v-col>
                <v-col cols="12" md="4">
                  <v-img :src="item.img" style="margin-left: 20px; min-width: 400px;" class="flex-shrink-0">
                  </v-img>
                </v-col>

              </v-row>
            </v-timeline-item>
          </v-timeline>
        </section>
      </v-window-item>
      <v-window-item value="two">
        <section class="ma-4 px-8" v-for="i in [0, 1]" :key="i">
          <h2 style="font-size: 40px;">Day {{ i+1 }}</h2>
          <v-timeline side="end">
            <v-timeline-item
              v-for="item in intermediate[i]"
              :key="item.id"
              :dot-color="item.color"
              size="small"
            >
            <!-- <div class="d-flex justify-space-between flex-grow-1"> -->
              <v-row width="100%">
                <v-col cols="12" md="8">
                  <v-alert height="100%"
                    :value="true" class="flex-grow-1"
                    :color="item.color" style="min-width:400px;"
                  >
                      <h3 style="font-size: 30px;">{{ item.title }}</h3>
                      <b><i>{{ item.by }}</i></b>

                  </v-alert>
                </v-col>
                <v-col cols="12" md="4">
                  <v-img :src="item.img" style="margin-left: 20px; min-width: 400px;" class="flex-shrink-0">
                  </v-img>
                </v-col>

              </v-row>
            </v-timeline-item>
          </v-timeline>
        </section>
      </v-window-item>
      <v-window-item value="three">
        <section class="ma-4 px-8" v-for="i in [0, 1]" :key="i">
          <h2 style="font-size: 40px;">Day {{ i+1 }}</h2>
          <v-timeline side="end">
            <v-timeline-item
              v-for="item in advanced[i]"
              :key="item.id"
              :dot-color="item.color"
              size="small"
            >
            <!-- <div class="d-flex justify-space-between flex-grow-1"> -->
              <v-row width="100%">
                <v-col cols="12" md="8">
                  <v-alert height="100%"
                    :value="true" class="flex-grow-1"
                    :color="item.color" style="min-width:400px;"
                  >
                      <h3 style="font-size: 30px;">{{ item.title }}</h3>
                      <b><i>{{ item.by }}</i></b>

                  </v-alert>
                </v-col>
                <v-col cols="12" md="4">
                  <v-img :src="item.img" style="margin-left: 20px; min-width: 400px;" class="flex-shrink-0">
                  </v-img>
                </v-col>

              </v-row>
            </v-timeline-item>
          </v-timeline>
        </section>
      </v-window-item>
  </v-window>
</template>
<script lang="ts" setup>
import {
  ref, computed, type Ref, onMounted
} from 'vue';

const images = [
  "/assets/june/img1.png",
  "/assets/june/img2.jpg",
  "/assets/june/img3.jpg",
  "/assets/june/img4.png",
]

const beginner = [
  [
    {
      id: 1,
      color: 'info',
      title: 'Basic Introduction to AI',
      by: "by Lam Yik Ting (DHS) and James Tan Dejun (RVHS)",
      img: "/assets/june/introai.jpg"
    },
    {
      id: 2,
      color: 'success',
      title: "Intro to Python (Part 1)",
      by: "by Wayne Ang, Edwin Liew, Wabiba and Zhe Kai (ACJC)",
      img: "/assets/june/python.jpg"
    },
    {
      id: 3,
      color: 'indigo',
      title: "Intro to Design Thinking",
      by: "by Du Yuhan (MGS)",
      img: '/assets/june/figma.png'
    }
  ],
  [
    {
      id: 1,
      color: 'info',
      title: "Intro to Python (Part 2)",
      by: "by Wayne Ang, Edwin Liew, Wabiba and Zhe Kai (ACJC)",
      img: "/assets/june/img2.jpg"
    },
    {
      id: 2,
      color: 'success',
      title: 'Introduction to Data Processing',
      by: 'by Dhanvine Rameshkumar and Eugene Ang (TJC)',
      img: '/assets/june/img3.jpg'
    },
    {
      id: 3,
      color: 'indigo',
      title: 'Integrating AI with Python',
      by: 'by Lam Yik Ting (DHS), Yau Le Qi and Eugene Ang (TJC)',
      img: '/assets/june/intai.jpg'
    }
  ]
]

const intermediate = [
  [
    {
      id: 1,
      color: 'info',
      title: 'Basic Introduction to AI',
      by: "by Lam Yik Ting (DHS) and James Tan Dejun (RVHS)",
      img: "/assets/june/introai.jpg"
    },
    {
      id: 2,
      color: 'success',
      title: "Intro to Data Processing",
      by: "by Khoo Kai Wen (NUSH) and Ma Jinghong (HCI)",
      img: "/assets/june/python.jpg"
    },
    {
      id: 3,
      color: 'indigo',
      title: "Intro to Scikit-Learn",
      by: "by Karimi Zayan, Khoo Kai Wen (NUSH) and Ma Jinghong (HCI)",
      img: '/assets/june/sklearn.jpg'
    }
  ],
  [
    {
      id: 1,
      color: 'success',
      title: "Intro to Deep Learning",
      by: "by Jed Lim (NUSH), Seth Yong (SP) and Ashwin Lokesh (YIJC)",
      img: "/assets/june/dl.jpg"
    },
    {
      id: 2,
      color: 'indigo',
      title: "Intro to Computer Vision",
      by: "by Ma Weiyi, Saw Zedong and Harry Cheong (DHS)",
      img: '/assets/june/opencv.png'
    }
  ]
]

const advanced = [
  [
    {
      id: 1,
      color: 'success',
      title: 'Integrating AI into a Flask Application (Part 1)',
      by: "by Yap Yuan Xi and Prannaya Gupta (NUSH)",
      img: "/assets/june/flask1.jpg"
    },
    {
      id: 2,
      color: 'indigo',
      title: "Transformers and ViTs",
      by: "by Mahir Shah (NUSH) and Ishneet Singh (TJC)",
      img: '/assets/june/img4.png'
    }
  ],
  [
    {
      id: 1,
      color: 'info',
      title: "Graph Neural Networks",
      by: "by Karimi Zayan and Mahir Shah (NUSH)",
      img: "/assets/june/gnns.jpg"
    },
    {
      id: 2,
      color: 'success',
      title: "Introductory MLOps",
      by: "by Mr Guoren Ng (AISG)",
      img: '/assets/june/'
    },
    {
      id: 3,
      color: 'indigo',
      title: "Integrating AI into a Flask Application (Part 2)",
      by: "by Yap Yuan Xi and Prannaya Gupta (NUSH)",
      img: '/assets/june/'
    }
  ]

]

const tab = ref(null)
</script>
<style>
.v-card p {
  font-size: 1.1rem;
}
</style>
