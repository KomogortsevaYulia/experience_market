<script setup lang="ts">
import router from '@/router';
import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


const loginStore = useUserStore();

const email = ref("");
const password = ref("");

async function onSubmit() {
  let result = await loginStore.login(email.value, password.value);


}

</script>


<template>

  <div class="auth-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6  mt-3">
          <h1 class="row justify-content-center mb-3 ">Авторизация</h1>
          <p>
            <router-link :to="{ name: 'register' }">
              <div class="row justify-content-center"> Необходим аккаунт?</div>
            </router-link>
          </p>
          <form @submit.prevent="onSubmit()">
            <fieldset class="form-group mb-2">
              <input class="form-control form-control-lg" type="text" v-model="email" placeholder="Email" />
            </fieldset>
            <fieldset class="form-group mb-2">
              <input class="form-control form-control-lg" type="password" v-model="password" placeholder="Password" />
            </fieldset>
            <div class="row justify-content-center">
              <button class="btn btn-lg btn-primary pull-xs-right">
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>