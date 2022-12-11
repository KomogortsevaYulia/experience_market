
import { useUserStore } from '@/stores/userStore';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //@ts-ignore
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile/:username',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/projects/create',
      name: 'createProject',
      component: () => import('../views/CreateProjectView.vue')
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
    ,
    {
      path: '/admin/requestCreateProject',
      name: 'requestCreateProject',
      component: () => import('../views/RequestCreateProjectView.vue')
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
//     const userStore = useuserStore();
//     await userStore.checkLogin();
//     if (!userStore.can(to.meta.permission)) {
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
