import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/Views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sport',
      name: 'sport',
      component: () => import('@/Views/Sport.vue')
    },
    {
      path: '/addtitle',
      name: 'AddTitle',
      component: () => import('@/Views/AddTitle.vue')
    },
    {
      path: '/articles',
      name: 'Articles',
      component: () => import('@/Views/Articles.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
