<script setup lang="ts">
import { useLoginStore } from '@/stores/loginStore';
import { ref } from 'vue';

import {useRouter, useRoute} from 'vue-router';

const loginStore = useLoginStore();
const router = useRouter();
const route = useRoute();

const username = ref("");
const password = ref("");

async function onSubmit() {
    let r = await loginStore.login(username.value, password.value);
    if (r) {
        // router.push(route.query.next);
    }
}

</script>


<template>
    <div class="login-wrapper" @submit.prevent="onSubmit">
        <form class="form">
            <div class="row g-3">
                <div class="col-12">
                    <div class="form-floating">
                        <input type="text" class="form-control" v-model="username" name="username"/>
                        <label for="">Имя пользователя</label>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-floating">
                        <input type="password" class="form-control" v-model="password" name="password" />
                        <label for="">Пароль</label>
                    </div>
                </div>
            </div>
            <div class="row  mt-3 justify-content-end">
                <div class="col-auto">
                    <button class="btn btn-lg btn-primary">Войти</button>
                </div>
            </div>
        </form>
    </div>
</template>