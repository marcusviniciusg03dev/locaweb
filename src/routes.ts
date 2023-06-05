import { createRouter, createWebHashHistory } from "vue-router";

import Register from "./views/auth/Register/Main.vue";
import Login from "./views/auth/Login.vue";

import Home from './views/app/Home.vue';

import NotFound from "./views/NotFound.vue";
import { useUserStore } from "./stores/useUserStore";

const routes = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/cadastrar',
            component: Register,
        },
        {
            path: '/',
            name: 'login',
            component: Login,
        },
        {
            path: '/app',
            name: 'home',
            component: Home,
            meta: {
                requireLogin: true,
            }
        },
        {
            path: '/nao-encontrado',
            component: NotFound,
        },
        {
            path: '/:pathMatch(.*)',
            redirect: '/nao-encontrado'
        },
    ]
});

export default routes;