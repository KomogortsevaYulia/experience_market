import type { RouteConfig } from "vue-router";

import RoutesNames from "./routesNames";

export const Routes: RouteConfig[] = [
  {
    path: "/",
    name: RoutesNames.home,
    component: () => import(/* webpackChunkName: "home" */ "@/views/HomeView.vue")
  },
  {
    path: "/login",
    name: RoutesNames.authLogin,
    component: () =>
      import(/* webpackChunkName: "authLogin" */ "@/views/LoginView.vue"),
    meta: {
      anonymousOnly: true
    }
  },
  {
    path: "/register",
    name: RoutesNames.authRegister,
    component: () =>
      import(/* webpackChunkName: "authRegister" */ "@/views/RegisterView.vue"),
    meta: {
      anonymousOnly: true
    }
  },
  {
    path: "/hackathons",
    name: RoutesNames.hackathons,
    component: () =>
      import(
        /* webpackChunkName: "articleCreate" */ "@/views/HackathonsView.vue"
      ),
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: "/projects",
    name: RoutesNames.projects,
    component: () =>
      import(/* webpackChunkName: "articleEdit" */ "@/views/ProjectsView.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/competitions",
    name: RoutesNames.competitions,
    component: () =>
      import(/* webpackChunkName: "articleView" */ "@/views/CompetitionsView.vue")
  },
  {
    path: "*",
    redirect: { name: RoutesNames.home }
  }
];
