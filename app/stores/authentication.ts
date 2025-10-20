import { defineStore } from "pinia";
import type { userAuthenticated } from "~/types/authentication";

export const useAuthenticationStore = defineStore('authentication', {
  state: () => ({ isAuthenticated: false, user: { name: '', email: '', phone_number: '', uid: '' } }),
  getters: {
    currentUser: (state) => state.user
  },
  actions: {
    setAuthentication(value: boolean) {
      this.isAuthenticated = value
    },
    setUser(user: userAuthenticated) {
      this.user = user
    }
  }
})