<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, onBeforeMount } from 'vue';
import { useUserStore } from './stores/userStore';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { useProjectStore } from './stores/projectStore';
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const {
  username, permissions
} = storeToRefs(userStore);


async function onLogout() {
  await userStore.logout();
  router.push("/")
}
const countRequestCreateProject = ref()
onBeforeMount(async () => {
    fetchCountRequestCreateProject()
})
async function fetchCountRequestCreateProject() {
    countRequestCreateProject.value = await useProjectStore().fetchCountRequestCreateProject()
}
</script>


<template>
  <div class="container">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none">
        <img src="../src/images/logo.png" style="height: 50px">
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <RouterLink to="/" class="nav-link px-2 link-dark">Главная</RouterLink>
        </li>
        <li>
          <RouterLink to="/projects" class="nav-link px-2 link-dark">Проекты</RouterLink>
        </li>
        <li>
          <RouterLink to="/hackathons" class="nav-link px-2 link-dark">Хакатоны</RouterLink>
        </li>
        <li>
          <RouterLink to="/competitions" class="nav-link px-2 link-dark">Мероприятия</RouterLink>
        </li>
        <li v-if="permissions?.includes('can admin')">
          <RouterLink to="/admin" class="nav-link px-2 link-dark position-relative">Админка
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {{countRequestCreateProject}}
            </span>
          </RouterLink>
        </li>
      </ul>
      <div class="col-md-3 text-end" v-if="username">
        <RouterLink :to="'/profile/' + username" class="me-2">{{ username }}</RouterLink>
        <a href="#" class="btn btn-outline-primary me-2" @click="onLogout()">Выйти</a>
      </div>
      <div class="col-md-3 text-end" v-else="user">
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
