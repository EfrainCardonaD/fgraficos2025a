// stores/auth.js
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'

// Configura la URL base de la API
axios.defaults.baseURL = 'http://localhost:8080/api'

// Configuración global de Axios para agregar el Bearer Token automáticamente
axios.interceptors.request.use(
    (config) => {
        const authStore = useAuthStore()
        if (authStore.token) {
            config.headers['Authorization'] = `Bearer ${authStore.token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)
/*
export async function verifyToken(token) {
    try {
        const response = await axios.post('/api/verify-token', { token });
        if (response.data.mensaje === 'Token válido') {
            return { isValid: true, decoded: response.data.decoded };
        } else {
            return { isValid: false };
        }
    } catch (error) {
        console.error('Error al verificar el token', error);
        return { isValid: false };
    }
}
*/
export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('jwt_token') || null,
    }),

    getters: {
        isAuthenticated: (state) => !!state.token,
    },

    actions: {
        setToken(token) {
            this.token = token
            localStorage.setItem('jwt_token', token)
        },

        logout() {
            this.token = null
            localStorage.removeItem('jwt_token')
            const router = useRouter()
            router.push('/login') // Redirige al login tras cerrar sesión
        },

        async login(userName, password) {
            try {
                const response = await axios.post('/login', { userName, password })
                if (response.data.JWTtoken) {
                    this.setToken(response.data.JWTtoken)
                    return true
                }
            } catch (error) {
                console.error('Error al iniciar sesión:', error)
                return false
            }
        }
    },
})