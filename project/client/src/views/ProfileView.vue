<script setup lang="ts">
import {useRoute} from "vue-router"
import { useProjectStore } from "@/stores/projectStore";
import { ref, onBeforeMount } from "vue";

const route = useRoute();
const idProject=Number(route.params.id);
const project = ref()
onBeforeMount(async () => {
  fetchProject()
})
async function fetchProject() {
  project.value = await useProjectStore().fetchProject(idProject)
}
</script>


<template>
  <h1> Проект</h1>
  <div class="row mt-3 border g-0 rounded p-3"> 
    <div class="row">{{project.title}} + {{project.id}}</div>
    <div class="row">{{project.descriptions}}</div>
    <div class="row">Тэги</div>
    <div class="row"></div>
    <div class="row"></div>
    
      
  </div>
  <div class="row mt-3">
    <div class="col"> 
      <div class="row p-3">Команды и их фильтры</div>
      
      <div class="row border g-0 rounded p-3 m-0">Команда</div>
    </div>
    <div class="col-3 border g-0 rounded p-3"> 
      Инфа
    </div>
  </div>
</template>
<style>

</style>
