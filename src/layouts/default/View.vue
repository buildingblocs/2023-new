<template>
  <v-main>
    <router-view v-slot="{ Component, route }">
      <!-- Use any custom transition and  to `fade` -->
      <transition :name="(route.meta.transition as string) || 'slide-right'">
        <component :is="Component"  :key="route.path" />
      </transition>
    </router-view>
  </v-main>
</template>

<script lang="ts" setup>
  //
</script>
