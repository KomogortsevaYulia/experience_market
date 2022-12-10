import { defineStore } from "pinia";
import axios from 'axios';
import { ref } from 'vue';

export const useLoginStore = defineStore("loginStore", () => {
    const permissions = ref([]);
    const username = ref(null);

    async function login(_email: any, _password: any) {
        let r = await axios.post("/api/users/login", {
            "user": {
                password: _password,
                email: _email
            }
        })

        await checkLogin();
        return username.value;
    }

    async function logout() {
        let r = await axios.post("/api/logout")
        await checkLogin();

        return username.value;
    }

    async function checkLogin() {
        let r = await axios.get("/api/check-login")
        if (r.data.logged) {
            permissions.value = r.data.permissions;
            username.value = r.data.username;
        } else {
            permissions.value = []
            username.value = null
        }
    }

    // function can(permission) {
    //     return permissions.value.includes(permission);
    // }

    return {
        username,
        login,
        logout,
        checkLogin,
        //can
    }
});