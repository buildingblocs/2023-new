<template>
  <section style="padding-top: 40px;" ref="page0">
    <v-row class="text-center justify-center align-center">
    <v-col cols="12" md="8">Mission Statement
      <div class="pa-8 ma-4 text-h4" style="background-color: rgba(255, 181, 70, 0.4); border-radius: 30px;">
        BuildingBloCS is a <strong>year-long</strong> outreach programme for students, by students, aimed at promoting more exposure to Computing and CS as a whole to Secondary School, JC and IP students.
      </div>

    </v-col>
    </v-row>
  </section>

  <section>
    <v-row>
      <v-col cols="12" sm="7">
        <div class="pa-4 ma-4">
          <h1 style="font-size: 40px;">By students, for students.</h1><br>
          <p style="font-size: 24px;">
            BuildingBloCS is the <strong>largest</strong> nationwide “By Student, For Student” Computing Advocacy Program, aimed at teaching students the way of the coder 💻.

          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="5">
        <v-img src="/src/assets/scrolling/img1.png" style="margin-left: 10%;"></v-img>
      </v-col>
    </v-row>
  </section>

  <section>
    <v-row>
      <v-col cols="12" sm="5">
        <v-img src="/src/assets/scrolling/img4.png"></v-img>
      </v-col>
      <v-col cols="12" sm="7">
        <div class="pa-4 ma-4" width="100%">
          <h1 style="font-size: 40px;">Multi-focused.</h1><br>
          <p style="font-size: 24px;">
            We touch base on various topics, like AI, Cybersecurity and Software Development, to varying levels of complexity. It's truly fun for everyone!

          </p>
        </div>
      </v-col>
    </v-row>
  </section>

<section>
  <v-row>
    <v-col cols="12" sm="7">
      <div class="pa-4 ma-4">
        <h1 style="font-size: 40px;">Passionate Speakers.</h1><br>
        <p style="font-size: 24px;">
          We give opportunities to various speakers to talk about their work and interests, and we don't shy away from getting into the nitty-gritty.

        </p>
      </div>
    </v-col>
    <v-col cols="12" sm="5">
      <v-img src="/src/assets/scrolling/img3.jpg" style="margin-left: 10%;"></v-img>
    </v-col>
  </v-row>
</section>

<section>
  <v-row>
    <v-col cols="12" sm="5">
      <v-img src="/src/assets/scrolling/img2.jpg"></v-img>
    </v-col>
    <v-col cols="12" sm="7">
      <div class="pa-4 ma-4" width="100%">
        <h1 style="font-size: 40px;">Events for everyone.</h1><br>
        <p style="font-size: 24px;">
          We host events for students from Secondary Schools, JCs, Polys and International Schools. All are welcome!

        </p>
      </div>
    </v-col>
  </v-row>
</section>
<section id="timeline" class="pa-8 ma-8">
  <h1 style="font-size: 50px" class="text-left">Our History</h1><br>
<v-timeline align="start" style="margin-bottom: 10%;">
    <v-timeline-item icon="mdi-lightbulb" fill-dot dot-color="red-lighten-2">
      <template v-slot:opposite>
        <strong class="text-h4">2017</strong>
      </template>
      <div>
        <div class="text-h5">Started as VIA@DHS</div>
        <p style="font-size: 19px;">
          An initiative sparked by the Dunman High Infocomm Club and Mr Gi Soong Chee.
        </p>
      </div>
    </v-timeline-item>
    <v-timeline-item>
      <template v-slot:opposite>
        <strong class="text-h4">2018 - 2023</strong>
      </template>
      <div>
        <div class="text-h5">Expansion into other Schools</div>
        <p style="font-size: 19px;">
          We expanded to take organisers from NUSH, TJC, SP and many more institutes around Singapore.
        </p>
      </div>
    </v-timeline-item>
    <v-timeline-item>
      <template v-slot:opposite>
        <strong class="text-h4">March 2023</strong>
      </template>
      <div>
        <div class="text-h5">Our March Conference</div>
        <p style="font-size: 19px;">
          Our March Conference on Computational Thinking, ending with the completely organiser-created game Starvation.
        </p>
      </div>
    </v-timeline-item>
    <v-timeline-item>
      <template v-slot:opposite>
        <strong class="text-h4" style="font-weight: bold;">29th May - 5th June 2023</strong>
      </template>
      <div>
        <div class="text-h5">Our June Conference</div>
        <p style="font-size: 19px;">
          The most important event of this year, do read on to learn more!
        </p>
      </div>
    </v-timeline-item>
    </v-timeline>
</section>



<section style="padding-top: 80px;">
  <v-row>
    <v-col cols="12" sm="7">
      <div class="pa-4" align="left" justify="left" style="margin-left: 80px; margin-right: 80px; margin-top: 40px;">
        <h1 style="font-size: 50px;">Join Us</h1><br>
        <p style="font-size: 30px;">
          for the June Conference to learn coding, the best way.
        </p>
        <div class="d-flex ma-4">
          <v-spacer></v-spacer>
          <v-btn size="x-large" color="#FFB546">Sign Up Now</v-btn>
        </div>

      </div>
    </v-col>
    <v-col cols="12" sm="5">
      <v-img src="/src/assets/scrolling/img5.jpg" style="margin-left: 10%;"></v-img>
    </v-col>
  </v-row>
</section>


</template>

<script lang="ts" setup>
import { ref, type Ref, computed, onMounted } from 'vue'
// import { vScrollReveal } from 'vue-scroll-reveal';

const imageNum = ref('img2.jpg')

const imageNums = ['img2.jpg', 'img3.jpg']

const screenWidth = computed(() => window.innerWidth)

const page0: Ref<HTMLElement | null> = ref(null)

onMounted(() => {
  setInterval(() => {
    imageNum.value = imageNums[(imageNums.indexOf(imageNum.value)+1) % imageNums.length];
  }, 5000)
})

</script>

<style scoped>

section {
  height: 70vh;
  text-align: center;
}

section#landing {
  height: 100vh;
  width: 100vw;
}

section#timeline {
  height: 140vh;
}

.banner {
  /* background-color: #787878; */
  color: white;
  text-align: center;
  height: 100vh;
  width: 100vw;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
}

.content {
  background-color: rgba(0,0,0,.4);
  color: white;
  margin-left: 20%;
  margin-right: 20%;
  padding: 5%;
  border-radius: 40px;
}

.banner .content .name {
  font-size: 48px;
  font-weight: 500;
  line-height: 62px;
  letter-spacing: 0em;
  margin-bottom: 20px;
}

.banner .content .description {
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  margin-bottom: 35px;
}

.banner .content button {
  background: #FFB546;
  border-radius: 16px;
  padding: 10px 24px;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
}

.banner .content button a {
  text-decoration: none;
  color: black;
}

.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}

a {
    text-decoration: none;
    color: #1867C0;
    /* font-weight: bold; */
}
</style>
