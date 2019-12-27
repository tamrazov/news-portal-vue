import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/Views/Home.vue';

Vue.use(VueRouter)

const routes = [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
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
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/Views/Contact.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('@/Views/Category.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/Views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/Views/Register.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
