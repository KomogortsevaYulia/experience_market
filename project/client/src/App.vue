<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useUserStore } from './stores/userStore';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const {
  username,permissions
} = storeToRefs(userStore);


async function onLogout() {
  await userStore.logout();
  router.push("/")
}
</script>


<template>
  <div class="container">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
          <use xlink:href="#bootstrap"></use>
        </svg>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <RouterLink to="/" class="nav-link px-2 link-secondary">Главная</RouterLink>
        </li>
        <li>
          <RouterLink to="/projects" class="nav-link px-2 link-dark">Проекты</RouterLink>
        </li>
        <li><RouterLink to="/hackathons" class="nav-link px-2 link-dark">Хакатоны</RouterLink></li>
        <li><RouterLink to="/competitions" class="nav-link px-2 link-dark">Мероприятия</RouterLink></li>
        <li 
         v-if="permissions?.includes('can admin')" 
          ><RouterLink to="/admin" class="nav-link px-2 link-dark">Админ панель</RouterLink></li>
      </ul>

      <div class="col-md-3 text-end" v-if="username" >
        <RouterLink :to=" '/profile/'+username" class="me-2">{{username}}</RouterLink>
        <a href="#" class="btn btn-outline-primary me-2" @click="onLogout()" >Выйти</a>
      </div>
      <div class="col-md-3 text-end" v-else="user" >
        <RouterLink to="/login" class="btn btn-outline-primary me-2">Войти</RouterLink>
        <RouterLink to="/register" class="btn btn-primary">Регистрация</RouterLink>
      </div>
    </header>
    <RouterView />
  </div>

</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */
</style>
