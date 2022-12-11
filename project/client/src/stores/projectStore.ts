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

    //создание проекта
    async function createProject(_title:string,_image:string,_type_project:string,_description:string,_creator?: number,): Promise<any> {
        axios.defaults.headers.authorization  ='Token '+ localStorage.getItem('token')
        
        let res = await axios.post("/api/projects", {
                title: _title,
                image: _image,
                creator: _creator,
                type_project: _type_project,
                description:_description
        })
        
        const data = res.data

        return data
    }

    //изменение статуса рассмотрения проекта
    async function updateProject(_id:number,_status:string): Promise<any> {
        axios.defaults.headers.authorization  ='Token '+ localStorage.getItem('token')
        let res = await axios.patch('/api/projects/'+_id, {
            status: _status,
        })
        
        const data = res.data

        return data
    }

    //вывести все проекты для страницы с заявками у админа
    async function fetchRequestCreateProject(): Promise<any> {
        axios.defaults.headers.authorization  ='Token '+ localStorage.getItem('token')
        const res = await axios.get('/api/projects/requestCreateProject')
        const data = res.data

        return data
    }

    //количество заявок на создание проекта для админки
    async function fetchCountRequestCreateProject(): Promise<any> {
        axios.defaults.headers.authorization  ='Token '+ localStorage.getItem('token')
        const res = await axios.get('/api/projects/requestCreateProject/count')
        const data = res.data

        return data
    }

    return {
        fetchProjects,
        updateProject,
        fetchProject,
        fetchRequestCreateProject,
        createProject,
        fetchCountRequestCreateProject
    }
});