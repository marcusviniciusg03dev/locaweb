import { createApp } from 'vue'

import { vMaska } from 'maska';
import { createPinia } from 'pinia';

import App from './App.vue';
import routes from './routes';
import { useUserStore } from './stores/useUserStore';

const app = createApp(App);

app.use(createPinia())

routes.beforeEach(({ meta: { requireLogin } }, from, next) => {
    const { signedIn } = useUserStore();

    if (requireLogin && !signedIn) {
        next({ path: from.path });
        return;
    }
    
    if (!requireLogin && signedIn) {
        next({ path: from.path });
        return;
    }
    
    next();
});

app
    .use(routes)
    .directive("maska", vMaska)
    .mount('#app');
