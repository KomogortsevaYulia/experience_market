<script setup lang="ts">
import { useProjectStore } from "@/stores/projectStore";
import { ref, onBeforeMount } from "vue";
import { storeToRefs } from 'pinia';
//@ts-ignore
import { Carousel } from 'bootstrap'
import { useUserStore } from "@/stores/userStore";
import { RouterLink } from "vue-router";
import router from "@/router";


const userStore = useUserStore();
function onMounted() {
  Carousel("#carouselImage")
}

const {
  token
} = storeToRefs(userStore);

const data = ref()
onBeforeMount(async () => {
  fetchProjects()
})
async function fetchProjects() {
  data.value = await useProjectStore().fetchProjects()
}

</script>


<template>
  <div class="projects">

    <div id="myCarousel" class="carousel slide " data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"
          style="background-color:black"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""
          style="background-color:black"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active"
          style="background-color:black" aria-current="true"></button>
      </div>
      <div class="carousel-inner">

        <div class="carousel-item">
          <div class="row m-3 justify-content-around ">
            <div class="col-6">
              <img src="https://synergy.ru/assets/upload/news/academy/127.2.jpg" class="d-block w-50 " alt="...">
            </div>
            <div class="col-auto align-self-center">
              <div class="row mb-3">Скорее участвуй в проектах!</div>
              <div class="row"><a class="btn btn-lg btn-primary" href="/register"> Зарегистрироваться</a></div>
            </div>
          </div>
        </div>

        <div class="carousel-item active">
          <div class="row m-3 justify-content-around ">
            <div class="col-6">
              <img src="https://techcrunch.com/wp-content/uploads/2021/05/GettyImages-1091738564.jpg"
                class="d-block w-50 " alt="...">
            </div>
            <div class="col-auto align-self-center">
              <div class="row mb-3">Создай свой проект и набери команду!</div>
              <div class="row">
                <a class="btn btn-lg btn-primary" v-if="token" href="/projects/create"> Создать проект</a>
                <a class="btn btn-lg btn-primary" v-else="token" href="/login" > Создать проект</a>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row m-3 justify-content-around ">
            <div class="col-6">
              <img src="https://i.pinimg.com/736x/e2/50/d8/e250d879cd86448aa0f26fcb47446b7a.jpg" class="d-block w-50 "
                alt="...">
            </div>
            <div class="col-auto align-self-center">
              <div class="row mb-3">Выбери свой проект с помощью рулетки!</div>
              <div class="row"><a class="btn btn-lg btn-primary" href="#"> Рулетка проектов</a></div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="row mt-3 ms-1">
      <div class="col-2 border g-0 rounded p-3">
        <h3 class="mb-3">Фильтры</h3>
        <h4 class="mt-3">Тип проекта</h4>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Учебный
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          <label class="form-check-label" for="flexCheckChecked">
            Уникальный
          </label>
        </div>
        <h4 class="mt-3">Тэги</h4>
        <div class="row">
          <span class="badge rounded-pill text-bg-primary mb-1">Веб-разработка</span>
          <span class="badge rounded-pill text-bg-secondary mb-1">AI & ML</span>
          <span class="badge rounded-pill text-bg-success mb-1">Инфобез</span>
          <span class="badge rounded-pill text-bg-info mb-1">Дизайн</span>
        </div>
      </div>
      <div class="col-9">
        <input class="form-control  mb-3" type="text" placeholder="Поиск" aria-label="Поиск">
        <div class="card mb-3" v-for="project in data">
          <div class="row g-0">
            <div class="col-md-4 col-3">

              <div id="carouselImage" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner ">

                  <div class="carousel-item active" v-for="img in project.images">
                    <img :src="img" class="d-block w-100" alt="...">
                  </div>
                </div>
              </div>

            </div>
            <div class="col-md-8 ">
              <div class="card-body">
                <router-link :to="'/projects/' + project.id">
                  <h5 class="card-title">{{ project.title }}</h5>
                </router-link>

                <p class="card-text">{{ project.descriptions }}</p>
                <p class="card-text">{{ project.type_project=="unique"?"Уникальный" :"Учебный" }}</p>
                <div class="row justify-content-between">
                  <div class="col">
                    <span class="badge rounded-pill text-bg-primary me-1">Веб-разработка</span>
                    <span class="badge rounded-pill text-bg-secondary me-1">AI & ML</span>
                    <span class="badge rounded-pill text-bg-success me-1">Инфобез</span>
                    <span class="badge rounded-pill text-bg-info me-1">Дизайн</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<style>

</style>
