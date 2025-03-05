import { createWebHistory, createRouter } from "vue-router";

import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";



const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;