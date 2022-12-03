<script setup lang="ts">
import { useProjectStore } from "@/stores/projectStore";
import { ref, onBeforeMount } from "vue";

const show = ref(true);
const showCreate = ref(false);
const layout = ref(true);
const data = ref()
onBeforeMount(async () => {
  fetchProject()
})
async function fetchProject() {
  data.value = await useProjectStore().fetchProject()
}
</script>

<template>
  <div class="projects">
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active"
          aria-current="true"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="#777"></rect>
          </svg>

          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p>Some representative placeholder content for the first slide of the carousel.</p>
              <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
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
              <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
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
              <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
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
        <span v-for="project in data">

          <div class="card mb-3" >
            <div class="row g-0">
              <div class="col-md-4">
                <svg xmlns="{{ project.images }}" width="100%" height="200" fill="currentColor"
                  class="bi bi-card-image p-2" viewBox="0 0 16 16">
                 </svg>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ project.title }}</h5>
                  <p class="card-text">{{ project.descriptions }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="row shadow-sm">
            <div class="col">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="200" fill="currentColor"
                class="bi bi-card-image" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                <path
                  d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
              </svg>
            </div>
            <div class="col">
              <p class="card-text">{{ project.title }}</p>
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
          </div> -->
        </span>
      </div>
    </div>
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
