<script setup lang="ts">
import { useProjectStore } from "@/stores/projectStore";
import { ref, onBeforeMount } from "vue";
import 'bootstrap-icons/font/bootstrap-icons.css';

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

</script>


<template>
  <a class="btn btn-outline-primary" href="/admin"><i class="bi bi-arrow-left"></i> Панель управления</a>
  <h1> Заявки на создание проекта</h1>
  <table class="table ">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Название</th>
        <th scope="col">Тип</th>
        <th scope="col">Статус</th>
        <th scope="col">Решение</th>
      </tr>
    </thead>
    <tbody v-for="project in data">

      <tr>
        <th scope="row">{{ project.id }}</th>
        <td>{{ project.title }}</td>
        <td>{{ project.type_project }}</td>
        <td>
          <p class="alert alert-danger" v-if=" project.status=='not viewed'" > {{ project.status }} </p>
          <p v-if=" project.status=='created'" > {{ project.status }} </p>
          <p v-if=" project.status=='not created'"> {{ project.status }} </p>
        </td>
        <td>
          <button type="button" class="btn btn-outline-success me-3">Создать</button>
          <button type="button" class="btn btn-outline-warning">Отклонить</button>
        </td>
      </tr>

    </tbody>
  </table>
</template>
<style>

</style>