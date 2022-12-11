<script setup lang="ts">
import { useProjectStore } from "@/stores/projectStore";
import { ref, onBeforeMount } from "vue";
import { Vue } from "vue-property-decorator";

</script>

<template>

  <a class="btn btn-outline-primary" href="/projects"><i class="bi bi-arrow-left"></i>Проекты</a>
  <div class="py-5 text-center">
    <h2>Создание проекта</h2>
    <p class="lead">Для того что бы создать проект вам необходимо заполнить форму ниже и отправить заявку на проверку. В
      ближайшее время администратор рассмотрит заявку и вам придет уведомление о результате.</p>
  </div>


  <form class="row g-1">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"><h4 >Название проекта</h4></label>
      <input type="text" class="form-control" id="exampleFormControlInput1">
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
      <label for="exampleFormControlTextarea1" class="form-label"><h4 >Описание проекта</h4></label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"><h4>Ссылка на картинку проекта</h4></label>
      <input type="text" class="form-control" id="exampleFormControlInput1">
    </div>


    <button class="w-100 btn btn-primary btn-lg" type="submit">Отправить заявку на создание</button>
  </form>
</template>
<style>

</style>
