import {defineStore} from "pinia";
import {computed, ref} from "vue";
// import type { Permission } from "@/types";
import axios from "axios";
export const useProjectStore = defineStore("projects", () => {
   
    //вывести все коллективвы с руководителсями
   async function fetchProject():Promise<any> {

        const res =await axios.get('/api/projects')
        const data = res.data

        return data
    }

    return {
        fetchProject
    }
});