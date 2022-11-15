<!-- https://github.com/mutoe/vue3-realworld-example-app/blob/master/src/pages/Login.vue -->

<template>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">
              Sign in
            </h1>
            <p class="text-xs-center">
              <AppLink name="register">
                Need an account?
              </AppLink>
            </p>
  
            <!-- <ul class="error-messages">
              <li
                v-for="(error, field) in errors"
                :key="field"
              >
                {{ field }} {{ error ? error[0] : '' }}
              </li>
            </ul> -->
  
            <form
              ref="formRef"
              
            >
              <fieldset
                class="form-group"
                aria-required="true"
              >
                <input
                 
                  class="form-control form-control-lg"
                  type="email"
                  required
                  placeholder="Email"
                >
              </fieldset>
              <fieldset class=" form-group">
                <input
                  
                  class="form-control form-control-lg"
                  type="password"
                  required
                  placeholder="Password"
                >
              </fieldset>
              <button
                class="btn btn-lg btn-primary pull-xs-right"
               
                type="submit"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
//   import { routerPush } from 'src/router'
//   import { api } from 'src/services'
//   import type { LoginUser } from 'src/services/api'
//   import { useUserStore } from 'src/store/user'
//   import { reactive, ref } from 'vue'
//   const formRef = ref<HTMLFormElement | null>(null)
//   const form: LoginUser = reactive({
//     email: '',
//     password: '',
//   })
//   const { updateUser } = useUserStore()
//   const errors = ref()
//   const login = async () => {
//     errors.value = {}
//     if (!formRef.value?.checkValidity()) return
//     const result = await api.users.login({ user: form })
//     if (result.ok) {
//       updateUser(result.data.user)
//       await routerPush('global-feed')
//     } else {
//       errors.value = await result.error
//     }
//   }
  </script>