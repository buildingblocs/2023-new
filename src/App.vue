<template>
<v-app>


  <v-navigation-drawer v-model="drawerShown" temporary app>
    <v-list dense nav>
      <v-list-item>
        <!-- bruh idk how to correctly get the image sia  <v-img :src="require('@src/assets/logo.png')" ></v-img>-->
        <h3 class="orangeicon">BuildingBlocs</h3>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="item in drawerRoutes" :to="item.path" @click="drawerShown = false"
                    style="text-decoration: none; color: inherit;" :key="item.name">
        <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title v-text="item.name"></v-list-item-title>
      </v-list-item>
    </v-list>
</v-navigation-drawer>

<v-app-bar app :color="'primary'" dark>
    <v-app-bar-nav-icon @click="drawerShown = !drawerShown"></v-app-bar-nav-icon>
    <v-toolbar-title>
      </v-toolbar-title> 
    <v-spacer></v-spacer>
      <!-- bruh idk how to correctly get the image sia  <v-img :src="require('@src/assets/logo.png')" ></v-img>-->
      <h3 style="padding-right: 20px;">BuildingBlocs</h3>
      
  </v-app-bar>

  <v-main>
    <router-view />
  </v-main>
</v-app>
</template>

<script lang="ts" setup>
import {
  ref,
  type Ref,
} from 'vue';





/** Vuetify Theme */

const drawerShown: Ref<boolean> = ref(false)

const drawerRoutes = [
  {
    name: "Home",
    path: "/",
    icon: "mdi-home",
  },
  {
    name: "About",
    path: "/about",
    icon: "mdi-information",
  },
  {
    name: "Events",
    path: "/events",
    icon: "mdi-calendar-multiple-check",
  },
  {
    name: "Competitions",
    path: `/competitions`,
    icon: "mdi-trophy-variant"
  },
  {
    name: "Our Team",
    path: "/team",
    icon: "mdi-account-group"
  },
  {
    name: "Partners",
    path: "/partners",
    icon: "mdi-domain"
  },
  {
    name: "Register",
    path: "/Register",
    icon: "mdi-account-plus"
  }
]
</script>
