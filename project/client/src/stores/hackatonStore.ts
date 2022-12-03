import {defineStore} from "pinia";
import {computed, ref} from "vue";
// import type { Permission } from "@/types";
import axios from "axios";
export const useHackatonsStore = defineStore("hackatons", () => {
   
    //вывести все коллективвы с руководителсями
   async function fetchHackatons():Promise<any> {

        const res =await axios.get('/api/hackatons')
        const data = res.data

        return data
    }

    return {
        fetchHackatons
    }
});