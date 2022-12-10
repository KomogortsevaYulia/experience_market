<script setup lang="ts">
import router from '@/router';
import { useLoginStore } from '@/stores/loginStore';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


const loginStore = useLoginStore();

const email = ref("");
const password = ref("");

async function onSubmit() {
    let r = await loginStore.login(email.value, password.value);

}

</script>


<template>

<div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'register' }">
              Need an account?
            </router-link>
          </p>
          <!-- <ul v-if="errors" class="error-messages">
            <li v-for="(v, k) in errors" :key="k">
              {{ k }} {{ errorFilter(v) }}
            </li>
          </ul> -->
          <form @submit.prevent="onSubmit()">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="password"
                placeholder="Password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

    <!-- <div class="login-wrapper" @submit.prevent="onSubmit">
        <form class="form">
            <div class="row g-3">
                <div class="col-12">
                    <div class="form-floating">
                        <input type="text" class="form-control" v-model="email" name="username"/>
                        <label for="">email</label>
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
    </div> -->
</template>