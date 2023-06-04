import { createApp } from 'vue'

import App from './App.vue';
import router from './routes';
import { vMaska } from 'maska';

const app = createApp(App);

app
    .directive("maska", vMaska)
    .use(router)
    .mount('#app');
