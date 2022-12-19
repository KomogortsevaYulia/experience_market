import { defineStore } from "pinia";
import axios from 'axios';
import { ref } from 'vue';


export const useUserStore = defineStore("userStore", () => {
    const id = ref(null);
    const permissions = ref(localStorage.getItem('permissions'));
    const username = ref(localStorage.getItem('username'));

    async function login(_email: any, _password: any) {
        let u = await axios.post("/api/users/login", {
            "user": {
                password: _password,
                email: _email
            }
        })
        await getInfoUser();

        return username.value;
    }

    async function register(_email: any, _password: any, _username: any) {
        let u = await axios.post("/api/users", {
            "user": {
                username: _username,
                password: _password,
                email: _email
            }
        })
        await getInfoUser();

        return username.value;
    }

    async function logout() {
        await axios.post("/api/users/logout")
        await getInfoUser();
    }

    async function getInfoUser() {
        let user = await axios.get("/api/users/user")
        console.log(user)
        if (user.data.logged) {

            id.value = user.data.id
            username.value = user.data.username
            permissions.value = user.data.permission
        } else {
            permissions.value = null;
            username.value = null;
        }
        localStorage.setItem('username', username.value!)
        localStorage.setItem('permissions', permissions.value!);
        return username.value;
    }

    return {
        username,
        permissions,
        id,
        register,
        login,
        logout
    }
});