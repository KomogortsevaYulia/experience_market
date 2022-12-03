<script setup lang="ts">
import { useEventStore } from "@/stores/eventStore";
import { useProjectStore } from "@/stores/projectStore";
import { ref, onBeforeMount } from "vue";

const show = ref(true);
const showCreate = ref(false);
const layout = ref(true);
const data = ref()
onBeforeMount(async () => {
  fetchEvent()
})
async function fetchEvent() {
  data.value = await useEventStore().fetchEvent()
}
</script>

<template>
  <div class="competitions">
    <h1>Конкурсы</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <span v-for="event in data">
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
              role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                dy=".3em">Thumbnail</text>
            </svg>
            <div class="card-body">
              <h2 class="card-text">{{ event.title }}</h2>
              <p class="card-text">{{ event.descriptions }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </span>
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
