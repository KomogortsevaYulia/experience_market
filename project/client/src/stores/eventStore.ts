import {defineStore} from "pinia";
import {computed, ref} from "vue";
// import type { Permission } from "@/types";
import axios from "axios";
export const useEventStore = defineStore("events", () => {
   
    //вывести все коллективвы с руководителсями
   async function fetchEvent():Promise<any> {

        const res =await axios.get('/api/events')
        const data = res.data

        return data
    }

    return {
        fetchEvent
    }
});