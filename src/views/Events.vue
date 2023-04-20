<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="4">
        <VCalendar :attributes='attrs' />
      </v-col>
    </v-row>

  </v-container>

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
