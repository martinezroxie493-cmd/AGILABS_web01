import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const app = createApp({});

const routes = [
  // define your routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount('#app');
