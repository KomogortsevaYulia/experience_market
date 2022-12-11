<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { useUserStore } from './stores/userStore';

const loginStore = useUserStore();
const router = useRouter();
const route = useRoute();

const {
  user,permissions
} = storeToRefs(loginStore);

async function onLogout() {
  await loginStore.logout();

  // router.push(route.fullPath);
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
        <li><RouterLink to="/competitions" class="nav-link px-2 link-dark">Конкурсы</RouterLink></li>
        <li v-if="permissions.find((obj: string) => { return obj === 'can admin'; })"><RouterLink to="/admin" class="nav-link px-2 link-dark">Админ</RouterLink></li>
      </ul>

      <div class="col-md-3 text-end" v-if="user" >
        <RouterLink to="/login" class="me-2">{{user}}</RouterLink>
        <RouterLink to="/" class="btn btn-outline-primary me-2" @submit.prevent="onLogout()" >Выйти</RouterLink>
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
