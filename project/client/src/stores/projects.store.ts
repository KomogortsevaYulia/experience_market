import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useProjectsStore = defineStore("globalPageStore", () => {
    
    const projectsItems = ref([])

    const loadingProjects = ref(false);

    async function fetchProjects() {
        let params = {
        }
        loadingProjects.value = true;
        let r = await axios.get('/api/projects', {
            params
        })
        loadingProjects.value = false;
        projectsItems.value = r.data;
    }

    return {
        fetchProjects
    }
})