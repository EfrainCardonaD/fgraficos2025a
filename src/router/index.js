import {createWebHistory, createRouter} from "vue-router";

import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import NotFound from "../components/error/NotFound.vue";


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
        meta: {
            title: 'Login',
            metaTags: [
                {
                    name: 'description',
                    content: 'The home page of our example app.'
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.'
                }
            ]
        }
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
        meta: {
            title: '404 - Página no encontrada'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Si existe una posición guardada (por ejemplo, al usar el botón "atrás")
        // se regresa esa posición. De lo contrario, se vuelve al top.
        return savedPosition || {top: 0}
    }
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Artisan´s Cut';
    next();
});


export default router;