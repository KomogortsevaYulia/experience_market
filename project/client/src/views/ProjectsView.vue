<script setup lang="ts">

</script>

<template>
  <div class="projects">
    <h1>Проекты</h1>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

      <!-- <span v-for="project in projectsItems"> -->

        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
              role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            </svg>
            <div class="card-body">
              <!-- <p class="card-text">{{project.title}}</p> -->
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <!-- <small class="text-muted">9 mins</small> -->
              </div>
            </div>
          </div>
        </div>
      <!-- </span> -->


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
