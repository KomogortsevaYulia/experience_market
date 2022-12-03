
import { useLoginStore } from '@/stores/loginStore';
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
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/hackathons',
      name: 'hackathons',
      component: () => import('../views/HackathonsView.vue')
    },
    {
      path: '/competitions',
      name: 'competitions',
      component: () => import('../views/EventView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
      meta: {
        permission: "watch"
      }
    }
  ]
})

// router.beforeEach(async (to, from, next) => {
//   if (to.meta.permission) {
//     const loginStore = useLoginStore();
//     await loginStore.checkLogin();
//     if (!loginStore.can(to.meta.permission)) {
//       next({
//         path: "/login",
//         query: { next: to.fullPath }
//       })
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router
