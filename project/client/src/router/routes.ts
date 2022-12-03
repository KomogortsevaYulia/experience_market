import { RouteConfig } from "vue-router";

import RoutesNames from "./routesNames";

export const Routes: RouteConfig[] = [
    {
        path: '/',
        name: RoutesNames.home,
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/projects',
        name: RoutesNames.projects,
        component: () => import('../views/ProjectsView.vue')
    },
    {
        path: '/hackathons',
        name: RoutesNames.hackathons,
        component: () => import('../views/HackathonsView.vue')
    },
    {
        path: '/competitions',
        name: RoutesNames.competitions,
        component: () => import('../views/CompetitionsView.vue')
    },
    {
        path: '/login',
        name: RoutesNames.login,
        component: () => import('../views/LoginView.vue'),
        meta: {
            anonymousOnly: true
        }
    },
    {
        path: '/register',
        name: RoutesNames.register,
        component: () => import('../views/RegisterView.vue'),
        meta: {
            anonymousOnly: true
        }
    },
    
    // {
    //     path: "/editor",
    //     name: RoutesNames.articleCreate,
    //     component: () =>
    //         import(
    //     /* webpackChunkName: "articleCreate" */ "@/views/ArticleCreate.vue"
    //         ),
    //     meta: {
    //         requiresAuth: true
    //     }
    // },
    {
        path: "*",
        redirect: { name: RoutesNames.home }
    }
];