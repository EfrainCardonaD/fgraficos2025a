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


const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')






