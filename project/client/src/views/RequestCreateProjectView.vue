<script setup lang="ts">
import { useProjectStore } from "@/stores/projectStore";
import { ref, onBeforeMount } from "vue";
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from "@/router";

const show = ref(true);
const showCreate = ref(false);
const layout = ref(true);
const data = ref()
onBeforeMount(async () => {
  fetchRequestCreateProject()
})
async function fetchRequestCreateProject() {
  data.value = await useProjectStore().fetchRequestCreateProject()
}

async function onLogout(id:number,status:string) {
  await useProjectStore().updateProject(id,status);
  fetchRequestCreateProject();
  router.push({ path: `/admin/requestCreateProject` });
}

</script>


<template>
  <a class="btn btn-outline-primary" href="/admin"><i class="bi bi-arrow-left"></i> Панель управления</a>
  <h1> Заявки на создание проекта</h1>
  <table class="table ">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Название</th>
        <th scope="col">Описание</th>
        <th scope="col">Тип</th>
        <th scope="col">Статус</th>
        <th scope="col">Решение</th>
      </tr>
    </thead>
    <tbody v-for="project in data">

      <tr>
        <th scope="row">{{ project.id }}</th>
        <td>{{ project.title }}</td>
        <td>{{ project.descriptions }}</td>
        <td>{{ project.type_project=="unique"?"Уникальный" :"Учебный" }}</td>
        <td>
          <p class="alert alert-danger" v-if=" project.status=='not viewed'" > {{ project.status }} </p>
          <p v-if=" project.status=='created'" > {{ project.status }} </p>
          <p v-if=" project.status=='not created'"> {{ project.status }} </p>
        </td>
        <td>
          <button v-if=" project.status=='not viewed'" type="button" class="btn btn-outline-success me-3" @click="onLogout( project.id,'created')">Создать</button>
          <button v-if=" project.status=='not viewed'" type="button" class="btn btn-outline-warning" @click="onLogout( project.id,'not created')">Отклонить</button>
        </td>
      </tr>

    </tbody>
  </table>
</template>
<style>

</style>