// Utilities
import { defineStore } from 'pinia'
import { User, Student } from '@/types/user'
import {ref, type Ref, computed} from 'vue';
import {login} from "@/api/auth";

export const useAppStore = defineStore('app', {
  state: () => {
    const user: Ref<User | null> = ref({
      "email": "h1810124@nushigh.edu.sg",
      "gradYear": 2023,
      "name": "Prannaya Gupta",
      "nush_sid": "h1810124",
      "pfp": null
    } as Student);
    const loggedIn = computed(() => user.value != null)
    return {user, loggedIn};
  },
  actions: {
    logout() {
      this.user = null;
    },
    async login(username: string, password: string) {
      const res = await login(username, password)
      if(res) {
        this.user = res;
      }
    }
  },
})
