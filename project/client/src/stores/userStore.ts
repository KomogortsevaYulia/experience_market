import { defineStore } from "pinia";
import axios from 'axios';
import { ref } from 'vue';


export const useUserStore = defineStore("userStore", () => {

    const permissions = ref(localStorage.getItem('permissions'));
    const id = ref(null);
    const username = ref(localStorage.getItem('username'));
    const token = ref(localStorage.getItem('token'));

    async function login(_email: any, _password: any) {
        let u = await axios.post("/api/users/login", {
            "user": {
                password: _password,
                email: _email
            }
        })

        username.value = u.data.user.username
        id.value = u.data.user.id
        permissions.value = u.data.user.permission
        token.value=u.data.user.token
        localStorage.setItem('username', username.value!)
        localStorage.setItem('permissions', permissions.value!);
        localStorage.setItem('token', token.value!)

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
        id.value = u.data.user.id
        username.value = u.data.user.username
        permissions.value = u.data.user.permission
        token.value=u.data.user.token

        localStorage.setItem('username', username.value!)
        localStorage.setItem('permissions', permissions.value!);
        localStorage.setItem('token', token.value!)

        return username.value;
    }

    async function logout() {
        token.value=null
        id.value = null
        username.value = null
        localStorage.removeItem('username')
        localStorage.removeItem('permissions')
        localStorage.removeItem('token')
        return username.value;
    }

    return {
        username,
        permissions,
        id,
        token,
        register,
        login,
        logout
    }
});