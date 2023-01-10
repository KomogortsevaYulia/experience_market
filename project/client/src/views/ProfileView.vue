<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from "vue";
import { useUserStore } from '@/stores/userStore';

const route = useRoute();
const username=route.params.username;

const user = ref()
onBeforeMount(async () => {
  getInfoUser()
})
async function getInfoUser() {
  user.value = await useUserStore().getInfoUser()
  console.log(user.value)
}
</script>


<template>
  <h1> Профиль {{username}}</h1>
  
</template>
<style>

</style>
