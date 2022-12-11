<script setup lang="ts">
import router from '@/router';
import { useProjectStore } from '@/stores/projectStore';
import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import 'bootstrap-icons/font/bootstrap-icons.css';

const userStore = useUserStore();

const route = useRoute();

const {
  id
} = storeToRefs(userStore);

const title = ref("");
const image = ref("");
const type_project = ref("");
const description = ref("");

async function onSubmit() {
  type_project.value="training"
  let project = await useProjectStore().createProject(title.value, image.value, type_project.value, description.value , id.value! );

  router.push({ path: `/projects` });
}

</script>

<template>
  <a class="btn btn-outline-primary" href="/projects"><i class="bi bi-arrow-left"></i>Проекты</a>
  <div class="py-5 text-center">
    <h2>Создание проекта</h2>
    <p class="lead">Для того что бы создать проект вам необходимо заполнить форму ниже и отправить заявку на проверку. В
      ближайшее время администратор рассмотрит заявку и вам придет уведомление о результате.</p>
  </div>

  <form @submit.prevent="onSubmit()">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">
        <h4>Название проекта</h4>
      </label>
      <fieldset>
        <input class="form-control form-control-lg" type="text" v-model="title" placeholder="Название" />
      </fieldset>
    </div>

    <h4 class="mb-3">Тип проекта</h4>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
      <label class="form-check-label" for="flexRadioDefault1">
        Уникальный
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
      <label class="form-check-label" for="flexRadioDefault2">
        Учебный
      </label>
    </div>

    <div class="mb-3">
      <label class="form-label">
        <h4>Описание проекта</h4>
      </label>
      <fieldset>
        <textarea class="form-control form-control-l" v-model="description" rows="3"></textarea>
      </fieldset>
    </div>

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">
        <h4>Ссылка на картинку проекта</h4>
      </label>
      <fieldset>
        <input class="form-control form-control-lg" type="text" v-model="image" placeholder="URL" />
      </fieldset>
    </div>
<div class="row justify-content-center">
    <button class="col-auto btn btn-primary btn-lg" type="submit">Отправить заявку на создание</button></div>
  </form>
</template>
<style>

</style>
