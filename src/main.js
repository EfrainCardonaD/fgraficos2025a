import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import "flowbite/src/themes/default.css";
import "flowbite/plugin.js";
import './darkmode.js'; // Importa el archivo darkmode.js
import axios from 'axios'
import { createPinia } from 'pinia'



createApp(App).use(router).mount('#app')


// Configura la URL base de la API
axios.defaults.baseURL = 'http://localhost:8080/api'

// Agrega un interceptor para adjuntar el token en el header de cada petición
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('jwt_token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})



const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')






