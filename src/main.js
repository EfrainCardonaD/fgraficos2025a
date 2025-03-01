import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import "flowbite/src/themes/default.css";
import './darkmode.js'; // Importa el archivo darkmode.js



createApp(App).use(router).mount('#app')

const app = createApp(App)
app.use(router)
app.mount('#app')

