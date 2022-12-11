import { defineStore } from "pinia";
import { computed, ref } from "vue";
// import type { Permission } from "@/types";
import axios from "axios";
export const useProjectStore = defineStore("projects", () => {

    //вывести все созданные проекты 
    async function fetchProjects(): Promise<any> {

        const res = await axios.get('/api/projects')
        const data = res.data

        return data
    }

    //вывести проект
    async function fetchProject(id: number): Promise<any> {

        const res = await axios.get('/api/projects/'+id)
        const data = res.data

        return data
    }

    //вывести все проекты для страницы с заявками у админа
    async function fetchRequestCreateProject(): Promise<any> {

        const res = await axios.get('/api/projects/requestCreateProject')
        const data = res.data

        return data
    }

    return {
        fetchProjects,
        fetchProject,
        fetchRequestCreateProject
    }
});