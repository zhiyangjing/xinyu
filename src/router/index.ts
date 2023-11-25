import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/class',
      name: 'class',
      component: () => import('../views/Class.vue')
    },
    {
      path: '/echo',
      name: 'echo',
      component: () => import('../views/Echo.vue')
    },
    {
      path: '/bud',
      name: 'bud',
      component: () => import('../views/Bud.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/Community.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('../views/Message.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test.vue')
    }
  ]
})

export default router
