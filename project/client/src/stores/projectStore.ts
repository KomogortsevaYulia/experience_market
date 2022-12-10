import { defineStore } from "pinia";
import { computed, ref } from "vue";
// import type { Permission } from "@/types";
import axios from "axios";
export const useProjectStore = defineStore("projects", () => {

    //вывести все коллективвы с руководителсями
    async function fetchProjects(): Promise<any> {

        const res = await axios.get('/api/projects')
        const data = res.data

        return data
    }

    //вывести все коллективвы с руководителсями
    async function fetchProject(id: number): Promise<any> {

        const res = await axios.get('/api/projects/'+id)
        const data = res.data

        return data
    }

    return {
        fetchProjects,
        fetchProject
    }
});