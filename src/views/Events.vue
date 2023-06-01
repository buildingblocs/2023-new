<template>
  <transition :name="'slide-fade'">
    <v-container fluid style="padding-left: 0px; padding-right: 0px;">
  <section ref="page0" style="padding-top: 0px; padding-bottom: 0px;">
    <v-row class="text-center justify-center align-center">
    <v-col cols="12">
      <div class="px-8 ma-2">
        <h1 style="font-size: 60px;">Our Events</h1>
      </div>
    </v-col>
    </v-row>
  </section>

  <section>
    <v-row>
      <v-col cols="12" sm="7">
        <div class="pa-4 ma-4" width="100%">
          <h6 style="font-size: 20px; font-family:'Courier New'">12-13 March 2023</h6>
          <h1 style="font-size: 35px;">March Conference</h1><br>
          <p style="font-size: 20px;">
            The March Conference aims to foster an interest in programming by featuring three beginner-level workshops on Python, Data Analytics, and HTML, CSS and Javascript.
            To put our participants' learning to the test, we have the "Starvation" challenge, our very own open-source hackathon that sums up the conference!
          </p>
        </div>
        <button @click="router.push('/home')" style=" background: #FFB546; border-radius: 16px;
          padding: 10px 24px; margin-bottom: 30px; margin-left: 30px;
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
          letter-spacing: 0em;
          text-align: center;">Learn more</button>
      </v-col>
      <v-col cols="12" sm="5">
        <br><br>
        <p style="text-align: center;"><v-img src="/assets/scrolling/img6.png"></v-img></p>
      </v-col>
    </v-row>
  </section>

  <section style="background-color: rgba(255, 181, 70, 0.3); padding-right: 0px; padding-left: 0px;">
    <v-row>
      <v-col cols="12" sm="5">
        <!-- <br><br> -->
        <p style="text-align: center;"><v-img src="/assets/gallery/img2.jpg"></v-img></p>
      </v-col>
      <v-col cols="12" sm="7">
        <div class="pa-4 ma-4" width="100%">
          <h6 style="font-size: 20px; font-family:'Courier New'">13-15 April 2023</h6>
          <h1 style="font-size: 35px;">BBCS x FOSSASIA Summit</h1><br>
          <p style="font-size: 20px;">
            The FOSSASIA Summit 2023 is a hybrid event conducted both online and in-person, part of a series of FOSSASIA events held since 2009. Participate to connect with businesses, developers, and tech communities from around the world and learn about the latest developments in open source! BuildingBloCS is proud to be partnering FOSSASIA to present several workshops and talks, as well as our very own exhibition booth at the FOSSASIA Summit 2023.
          </p>
        </div>
        <button @click="router.push('/home')" style=" background: #FFB546; border-radius: 16px;
          padding: 10px 24px; margin-bottom: 30px; margin-left: 30px;
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
          letter-spacing: 0em;
          text-align: center;">Learn more</button>
      </v-col>
    </v-row>
  </section>

  <section>
    <v-row>
      <v-col cols="12" sm="7">
        <div class="pa-4 ma-4" width="100%">
          <h6 style="font-size: 20px; font-family:'Courier New'">29-30 May, 5 June 2023</h6>
          <h1 style="font-size: 35px;">June Conference</h1><br>
          <p style="font-size: 20px;">
            The June Conference is our flagship computing event held at NUS School of Computing.
            This year, the theme is <b>Artificial Intelligence</b>. We are holding over 17 workshops, 5 talks and 3 hackathons over 3 tracks to cater to various skill levels!
          </p>
        </div>
        <button @click="router.push('/home')" style=" background: #FFB546; border-radius: 16px;
          padding: 10px 24px; margin-bottom: 30px; margin-left: 30px;
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
          letter-spacing: 0em;
          text-align: center;">Learn more</button>
      </v-col>
      <v-col cols="12" sm="5">
        <!-- <br><br> -->
        <p style="text-align: center;"><v-img src="/assets/scrolling/img9.png"></v-img></p>
      </v-col>
    </v-row>
  </section>



  <section style="background-color: rgba(255, 181, 70, 0.3); padding-right: 0px; padding-left: 0px;">
    <v-row>
      <v-col cols="12" sm="5">
        <!-- <br><br> -->
        <p style="text-align: center;"><v-img src="/assets/scrolling/img10.jpg"></v-img></p>
      </v-col>
      <v-col cols="12" sm="7">
        <div class="pa-4 ma-4" width="100%">
          <h6 style="font-size: 20px; font-family:'Courier New'">4-8 September 2023</h6>
          <h1 style="font-size: 35px;">September Conference</h1><br>
          <p style="font-size: 20px;">
            The upcoming September Conference aims to train students with the competencies of Web Development,
            with workshops on frameworks like React and Vue, in addition to PythonAnywhere (Flask) and
            Continuous Integration & Continuous Deployment (CI/CD).
            This event will cap off with a 3D2N hackathon to test students for their web development skill and competency.
          </p>
        </div>
        <button @click="router.push('/home')" style=" background: #FFB546; border-radius: 16px;
          padding: 10px 24px; margin-bottom: 30px; margin-left: 30px;
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
          letter-spacing: 0em;
          text-align: center;">Learn more</button>
      </v-col>
    </v-row>
  </section>

<section>
  <v-row>
    <v-col cols="12" sm="7">
      <div class="pa-4 ma-4" width="100%">
        <h6 style="font-size: 20px; font-family:'Courier New'">2 December 2023</h6>
        <h1 style="font-size: 35px;">BBCS x BlahajCTF</h1><br>
        <p style="font-size: 20px;">
          The inaugural BlahajCTF is a Capture-the-Flag Competition open to Secondary School and
          Junior College students aiming to learn basic cybersecurity competencies. This year, BBCS
          is involved in the organisation of BlahajCTF in collaboration with Team Blahaj.
        </p>
      </div>
      <button @click="router.push('/home')" style=" background: #FFB546; border-radius: 16px;
        padding: 10px 24px; margin-bottom: 30px; margin-left: 30px;
        font-size: 20px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: center;">Learn more</button>
    </v-col>
    <v-col cols="12" sm="5">
      <!-- <br><br> -->
      <p style="text-align: center;"><v-img src="/assets/scrolling/img11.png" height="100%"></v-img></p>
    </v-col>
  </v-row>
</section>



  <br>
  <section>
  <v-container  height="100%" style="background-color: rgba(255, 181, 70, 0.3);
  margin-left: auto;
  margin-right: auto;
  padding: 5%;
  border-radius: 40px;">
    <v-row align="center" justify="start">
        <v-col :align="'center'" justify="center">
            <v-toolbar-title class="text-wrap" :style="{color: 'black'}">
                <v-card-title style="font-size: 50px; line-height: 1.5cm;" class='text-wrap'>Join us at our next event!</v-card-title><br>
                <span class="text-wrap">
                    If you're a secondary school or pre-university student interested in Computing, this is for you!
                </span>
            </v-toolbar-title>
            <button @click="router.push('/home')" style=" background: #FFB546; border-radius: 16px;
  padding: 10px 24px; margin-top: 30px;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;">Learn more</button>
        </v-col>
    </v-row>
  </v-container>
</section>
<!-- <br> -->
<!-- <section>
  <v-container  height="100%;
  margin-left: auto;
  margin-right: auto;
  padding: 5%;
  border-radius: 40px;">
    <v-row align="center" justify="start">
        <v-col :align="'center'" justify="center">
            <v-toolbar-title class="text-wrap" :style="{color: 'black'}">
                <v-card-title style="font-size: 50px; line-height: 1.5cm;" class='text-wrap'>Organising Schools</v-card-title><br>

            </v-toolbar-title>
            <button @click="router.push('/team')" style=" background: #FFB546; border-radius: 16px;
  padding: 10px 24px; margin-top: 30px;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;">Learn more</button>
        </v-col>
    </v-row>
  </v-container>
</section> -->
<!-- <br>
<section>
  <v-container  height="100%;
  margin-left: auto;
  margin-right: auto;
  padding: 5%;
  border-radius: 40px;">
    <v-row align="center" justify="start">
        <v-col :align="'center'" justify="center">
            <v-toolbar-title class="text-wrap" :style="{color: 'black'}">
                <v-card-title style="font-size: 50px; line-height: 1.5cm;" class='text-wrap'>Our Partners</v-card-title><br>

            </v-toolbar-title>
        </v-col>
    </v-row>
  </v-container>
</section> -->
</v-container>
</transition>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import router from '@/router';

const attrs = ref([
  {
    key: 'today',
    highlight: true,
    dates: new Date(),
  },
  {
    key: 'day1',
    dot: true,
    dates: new Date('2023/05/29'),
    popover: {
      label: "June Conference D1",
      hideIndicator: true,
    },
  },
  {
    key: 'day2',
    dot: true,
    dates: new Date('2023/05/30'),
    popover: {
      label: "June Conference D2",
      hideIndicator: true,
    },
  },
  {
    key: 'day3',
    dates: new Date('2023/06/05'),
    popover: {
      label: "June Conference D3",
      hideIndicator: true,
    },
    dot: {
      style: {
        backgroundColor: "#f00"
      }
    }
  },
]);
</script>
<style>
section {
  margin: 0px;
  padding-top: 64px;
  padding-bottom: 64px;
}
</style>
