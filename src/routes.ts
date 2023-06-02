import { createRouter, createWebHashHistory } from "vue-router";

import Register from "./views/Register.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/cadastrar',
            component: Register,
        }
    ]
});

export default router;