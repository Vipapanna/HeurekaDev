import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import About from '../components/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/About',
      name: 'about',
      component: about
    },
  ]
})

export default router
