<template>
<v-app>


  <v-navigation-drawer v-model="drawerShown" temporary app>
    <v-list dense nav>
      <v-list-item>
        <h3 class="orangeicon">BuildingBloCS</h3>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="item in drawerRoutes" :to="item.path" @click="drawerShown = false"
                    style="text-decoration: none; color: inherit;" :key="item.name">
        <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title v-text="item.name"></v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>
      <v-list-item href="https://go.buildingblocs.sg/june" style="text-decoration: none; color: inherit;">
        <template v-slot:prepend>
            <v-icon icon="mdi-account-plus"></v-icon>
        </template>
        <v-list-item-title>Register!</v-list-item-title>
      </v-list-item>
    </v-list>
</v-navigation-drawer>

<v-toolbar v-if="route.path == '/'" fixed prominent
      extended
      :extension-height="screenHeight" :color="'primary'" :image="currentImage">
    <!-- <v-app-bar-nav-icon @click="drawerShown = !drawerShown"></v-app-bar-nav-icon> -->
  <v-avatar v-ripple elevation="10" style="padding: 5px; margin:10px; background-color: #fff; width: 60px; height: 60px; margin-top: 20px;">
    <v-img src="/assets/logo.png" aspect-ratio="1/1"  @click="drawerShown = !drawerShown"></v-img>
  </v-avatar>

  <template v-slot:extension>
  <v-container height="100%" style="background-color: rgba(0,0,0,.4);
  margin-left: 20%;
  margin-right: 20%;
  padding: 5%;
  border-radius: 40px;">
    <v-row align="center" justify="start">
        <v-col :align="'center'" justify="center">
            <v-toolbar-title class="text-wrap" :style="{color: 'white'}">
                <v-card-title style="font-size: 50px; line-height: 1.5cm;" class='text-wrap'>{{ titleName }} 2023 is back!</v-card-title><br>
                <span class="text-wrap">
                    Singapore's annual computing education <br> outreach programme
                </span>
            </v-toolbar-title>
            <button @click="router.push('/home')" style=" background: #FFB546; border-radius: 16px;
  padding: 10px 24px; margin-top: 30px;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;">Learn more</button>
        <v-slider style="width: 20%; margin-top:30px"
          v-model="sliderValue"
          step="1" color="#FFB546"  ticks="always"
          min="0"
          max="4"
        ></v-slider>
        </v-col>
    </v-row>
  </v-container>

  </template>



</v-toolbar>

<v-app-bar app v-else collapse extended :extension-height="20" style="width: 90px; background-color: #FFB546;">
  <v-avatar v-ripple elevation="10" style="padding: 5px; margin:10px; background-color: #fff; width: 60px; height: 60px; margin-top: 20px;">
    <v-img src="/assets/logo.png" aspect-ratio="1/1"  @click="drawerShown = !drawerShown"></v-img>
  </v-avatar>
</v-app-bar>

  <v-main v-if="route.path != '/'">
    <router-view v-slot="{ Component, route }">
      <!-- Use any custom transition and  to `fade` -->
      <transition :name="(route.meta.transition as string) || 'slide-right'">
        <component :is="Component"  :key="route.path" />
      </transition>
    </router-view>
  </v-main>
</v-app>
</template>

<script lang="ts" setup>
import {
  ref,
  type Ref, computed, watch, onMounted
} from 'vue';
import { useRoute } from 'vue-router';
import router from './router';

const route = useRoute()

const screenWidth = computed(() => window.innerWidth)
const screenHeight = computed(() => window.innerHeight)

const titleName = computed(() => (screenWidth.value > 720) ? 'BuildingBloCS' : 'BBCS')


const images = [
  "/assets/gallery/img2.jpg",
  "/assets/gallery/img3.png",
  "/assets/gallery/img4.png",
  "/assets/gallery/img5.jpg",
  "/assets/gallery/img6.jpg"
]

const currentImage = ref(images[0])

const sliderValue = ref(0)

const timerInterval: Ref<ReturnType<typeof setInterval> | null> = ref(null)

watch(sliderValue, (oldImage, newImage) => {
  currentImage.value = images[newImage % images.length]
  // if(timerInterval.value != null) clearInterval(timerInterval.value)
  // setInterval(() => {
  //   sliderValue.value = (images.indexOf(currentImage.value)+1)%(images.length)
  //   currentImage.value = images[sliderValue.value]
  // }, 5000);
})


/** Vuetify Theme */

const drawerShown: Ref<boolean> = ref(false)

const drawerRoutes = [
  {
    name: "Home",
    path: "/",
    icon: "mdi-home",
  },
  {
    name: "Events",
    path: "/events",
    icon: "mdi-calendar-multiple-check",
  },
  // {
  //   name: "Competitions",
  //   path: `/competitions`,
  //   icon: "mdi-trophy-variant"
  // },
  {
    name: "Our Team",
    path: "/team",
    icon: "mdi-account-group"
  },
  // {
  //   name: "Partners",
  //   path: "/partners",
  //   icon: "mdi-domain"
  // },
  // {
  //   name: "Register",
  //   path: "https://go.buildingblocs.sg/june",
  //   icon: "mdi-account-plus"
  // }
]

onMounted(() => {
  // timerInterval.value = setInterval(() => {
  //   sliderValue.value = (images.indexOf(currentImage.value)+1)%(images.length)
  //   currentImage.value = images[sliderValue.value]
  // }, 5000);
})
</script>
<style>













.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>
