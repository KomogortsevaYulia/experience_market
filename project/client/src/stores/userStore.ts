import { defineStore } from "pinia";
import axios from 'axios';
import { ref } from 'vue';


export const useUserStore = defineStore("loginStore", () => {

    const permissions = ref([]);
    const user = ref(null);

    async function login(_email: any, _password: any) {
        let u = await axios.post("/api/users/login", {
            "user": {
                password: _password,
                email: _email
            }
        })

        user.value = u.data.user.username
        permissions.value = u.data.user.permission
        console.log(user.value)
        return user.value;
    }

    async function register(_email: any, _password: any, _username: any) {
        let u = await axios.post("/api/users", {
            "user": {
                username: _username,
                password: _password,
                email: _email
            }
        })

        user.value = u.data.user.username
        permissions.value = u.data.user.permission
        return user.value;
    }

    async function logout() {
        user.value = null
        permissions.value = []
        return user.value;
    }

    return {
        user,
        permissions,
        register,
        login,
        logout
    }
});