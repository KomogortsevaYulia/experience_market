<script setup lang="ts">
import { useProjectStore } from "@/stores/projectStore";
import { ref, onBeforeMount } from "vue";

import { Carousel } from 'bootstrap'

function onMounted() {
  Carousel("#carouselImage")
}

const show = ref(true);
const showCreate = ref(false);
const layout = ref(true);
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
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active"
          aria-current="true"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item">
          <!-- <img
            src="https://avatars.mds.yandex.net/i?id=78fdc9be1a46b5fa0fc0b0b53d5e3d990318de50-5236398-images-thumbs&n=13"
            class="d-block w-30 justify-content-end" alt="..."> -->
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="#777"></rect>
          </svg>

          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p>Some representative placeholder content for the first slide of the carousel.</p>
              <p><a class="btn btn-lg btn-primary" href="#"> Зарегестрироваться сейчас</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="#777"></rect>
          </svg>

          <div class="container">
            <div class="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p><a class="btn btn-lg btn-primary" href="#">Создать проект</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item active">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="#777"></rect>
          </svg>

          <div class="container">
            <div class="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>Some representative placeholder content for the third slide of this carousel.</p>
              <p><a class="btn btn-lg btn-primary" href="#">Рулетка проектов</a></p>
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
      <div class="col-3 border g-0 rounded" width="100%" height="200">
        Фильтры
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
                <router-link :to="'/projects/'+project.id">
                  <h5 class="card-title">{{ project.title }}</h5>
                </router-link>

                <p class="card-text">{{ project.descriptions }}</p>
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
