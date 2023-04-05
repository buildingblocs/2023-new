// Utilities
import { defineStore } from 'pinia'
import {ref, type Ref, computed} from 'vue';

export const useDefaultsStore = defineStore('defaults', {
  state: () => {
    const prefCardView = ref(false)
    return {prefCardView};
  },
  actions: {
  },
})
