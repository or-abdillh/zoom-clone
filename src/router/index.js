import { createRouter, createWebHistory } from 'vue-router'import Home from '../views/Home.vue'import Meetings from '../views/Meetings.vue'const routes = [  {    path: '/',    name: 'Home',    component: Home  },  {    path: '/meetings',    name: 'Meetings',    component: Meetings  }]const router = createRouter({  history: createWebHistory(process.env.BASE_URL),  routes})export default router