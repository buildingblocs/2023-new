<template>
  <transition :name="'slide-fade'">
    <v-container fluid>
  <section style="padding-top: 40px;" ref="page0">
    <v-row class="text-center justify-center align-center">
    <v-col cols="12" md="8">
      <div class="pa-8 ma-4 text-h4" style="background-color: rgba(255, 181, 70, 0.4); border-radius: 30px;">
        Our Events  
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
            blablabla
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="5">
        <br><br>insert pic here
        <v-img src="___"></v-img>
      </v-col>
    </v-row>
  </section>
  
  
  
  
  <!-- <v-container fluid>
    <v-row>
      <v-col cols="12" sm="4">
        <!-- <VCalendar :attributes='attrs' /> -->
      </v-col>
    </v-row>

  </v-container> -->

</template>
<script lang="ts" setup>
import { ref } from 'vue';

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
