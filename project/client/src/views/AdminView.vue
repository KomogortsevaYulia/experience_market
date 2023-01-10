<script setup lang="ts">
import { useProjectStore } from '@/stores/projectStore';
import { ref, onBeforeMount } from 'vue';


const countRequestCreateProject = ref()
onBeforeMount(async () => {
    fetchCountRequestCreateProject()
})
async function fetchCountRequestCreateProject() {
    countRequestCreateProject.value = await useProjectStore().fetchCountRequestCreateProject()
}

</script>

<template>
    <div class="row mb-3">
        <div class="col-4 ">
            <div class="row mb-3 me-3">
                <RouterLink  to="/admin/requestCreateProject">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-4 ms-4">
                                    <h2>{{countRequestCreateProject}}</h2>
                                </div>
                                <div class="col">поданных заявок на создание проекта</div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="row mb-3 me-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4 ms-4">
                                <h2>2</h2>
                            </div>
                            <div class="col">поданных заявок на добавление хакатона</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-3 me-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4 ms-4">
                                <h2>5</h2>
                            </div>
                            <div class="col">активных мероприятий</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="row">
                <div class="card">
                    <div class="card-body ">
                        <img src="https://static.tildacdn.com/tild3564-6339-4537-b035-333031353130/shutterstock_7682619.jpg"
                            class="d-block w-50" alt="...">
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="row">
        <div class="card">
            <div class="card-body">
                This is some text within a card body.
            </div>
        </div>
    </div>



</template>

<style>

</style>