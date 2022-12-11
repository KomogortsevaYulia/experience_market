<script setup lang="ts">

import router from '@/router';
import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
// const router = useRouter();
const route = useRoute();

const registerStore = useUserStore(); 

const email = ref("");
const password = ref("");
const username= ref("");

async function onSubmit() {
  let un  = await registerStore.register(email.value, password.value,username.value);
  router.push({ path: `/profile/${un}` });
}

</script>


<template>

  <div class="auth-page">
    <div class="container">
      <div class="row justify-content-center ">
        <div class="col-md-6 mt-3">
          <h1 class="row justify-content-center mb-3 ">Регистрация</h1>
          
            <p>
              <router-link :to="{ name: 'login' }">
                <div class="row justify-content-center">Уже имеете аккаунт?</div>
              </router-link>
            </p>
          
          <form @submit.prevent="onSubmit()">
            <fieldset class="form-group mb-2">
              <input class="form-control form-control-lg" type="text" v-model="email" placeholder="Email" />
            </fieldset>
            <fieldset class="form-group mb-2">
              <input class="form-control form-control-lg" type="text" v-model="username" placeholder="Username" />
            </fieldset>
            <fieldset class="form-group mb-2">
              <input class="form-control form-control-lg" type="password" v-model="password" placeholder="Password" />
            </fieldset>
            <div class="row justify-content-center">
              <button class="col-auto btn btn-lg btn-primary pull-xs-right ">
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>