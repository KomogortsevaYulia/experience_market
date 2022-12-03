<script setup lang="ts">

import { useHackatonsStore } from "@/stores/hackatonStore";
import { ref, onBeforeMount } from "vue";

const show = ref(true);
const showCreate = ref(false);
const layout = ref(true);
const data = ref()
onBeforeMount(async () => {
  fetchHackatons()
})
async function fetchHackatons() {
  data.value = await useHackatonsStore().fetchHackatons()
}
</script>

<template>
  <div class="hackathons">
    <h1>Хакатоны</h1>

    <span v-for="hackaton in data">
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ hackaton.title }}</h5>
          <p class="card-text">{{ hackaton.description }}</p>
          <a href="#" class="btn btn-primary">Подробнее</a>
        </div>
      </div>
    </span>

  </div>
</template>
<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
