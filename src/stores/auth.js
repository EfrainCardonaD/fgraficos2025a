// stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('jwt_token') || null,
    }),
    actions: {
        setToken(token) {
            this.token = token
            localStorage.setItem('jwt_token', token)
        },
        logout() {
            this.token = null
            localStorage.removeItem('jwt_token')
        }
    }
})
// router/index.js