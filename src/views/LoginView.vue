<script setup lang="ts">
import { watch, onMounted } from "vue";
import { storeToRefs } from 'pinia';

import LoginHeader from "@/components/layouts/LoginHeader.vue";

// User
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore()
const { loginData, rememberMe, loginLoading } = storeToRefs(userStore)
const login = userStore.login
const verifyEmail = userStore.verifyEmail

// 記得我存取至 localStorage
watch(rememberMe, (value) => {
  // console.log(value)
  if (value) {
    localStorage.setItem('rememberMe_email', JSON.stringify(loginData.value.email))
    localStorage.setItem('rememberMe', JSON.stringify(true))
  } else {
    localStorage.setItem('rememberMe', JSON.stringify(false))
  }
})

watch(loginData, () => {
  localStorage.setItem('rememberMe_email', JSON.stringify(loginData.value.email))
}, { deep: true })

onMounted(() => {
  const rememberMeValue = localStorage.getItem('rememberMe');
  if (rememberMeValue !== null) {
    rememberMe.value = JSON.parse(rememberMeValue);
  }
  if (rememberMe.value) {
    const rememberMeEmail = localStorage.getItem('rememberMe_email');
    if (rememberMeEmail !== null) {
      loginData.value.email = JSON.parse(rememberMeEmail);
    }
  }
})
</script>

<template>
  <LoginHeader />

  <div class="bg-neutral">
    <div class="flex overflow-hidden">
      <!-- 左圖 -->
      <div class="hidden w-1/2 shrink-0 header-height lg:block">
        <img src="../assets/images/desktop/register.png" class="h-full w-full object-cover" />
      </div>

      <!-- 右表單 -->
      <div class="w-full lg:w-1/2 shrink-0 header-height flex relative">
        <div class="absolute top-0 left-0 w-full pt-8 z-10">
          <img src="/svg/bgwave.svg" class="w-full" alt="bg wave">
        </div>

        <div class="w-full px-5 lg:px-0 py-6 xl:py-0 flex justify-center items-center z-20">
          <div class="w-full lg:w-2/3 xl:w-1/2 mx-auto flex flex-col gap-10 duration-300">
            <div class="text-bold z-10">
              <div class="text-primary-100 font-bold text-3h md:text-4 mb-2">享樂酒店，誠摯歡迎</div>
              <h1 class="text-white font-bold text-8 xl:text-12 duration-300">立即開始旅程</h1>
            </div>

            <VForm v-slot="{ errors }" @submit="login()">
              <div class="flex flex-col gap-4">
                
                <div class="flex flex-col gap-2">
                  <label for="email" class="font-bold text-white">電子信箱</label>
                  <VField name="email"
                          id="email"
                          type="email"
                          rules="required|email"
                          class="p-4 rounded-2"
                          :class="{ 'is-invalid': errors['email'] }"
                          placeholder="hello@exsample.com"
                          v-model="loginData.email" />
                  <ErrorMessage class="invalid-feedback text-red-600" name="email" />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="password" class="font-bold text-white">密碼</label>
                  <VField name="密碼"
                          id="password"
                          type="password"
                          rules="required|min:8"
                          class="p-4 rounded-2"
                          :class="{ 'is-invalid': errors['密碼'] }"
                          placeholder="請輸入密碼"
                          v-model="loginData.password" />
                  <ErrorMessage class="invalid-feedback text-red-600" name="密碼" />
                </div>
                
                <div class="flex justify-between items-center">
                  <label for="remember" class="flex items-center text-white mb-0">
                    <input type="checkbox"
                           id="remember"
                           v-model="rememberMe">
                    <span><font-awesome-icon icon="fa-solid fa-check" :class="rememberMe ? 'block text-white text-3' : 'hidden'" /></span>
                    記住帳號
                  </label>
                  <button type="button" class="btn-text text-3h md:text-4 underline decoration-1" @click="verifyEmail()">忘記密碼</button>
                </div>

              </div>
              <button type="submit" class="btn-primary font-bold btn text-center mt-10 w-full" :disabled="loginLoading">
                會員登入
              </button>
            </VForm>

            <div class="text-white flex">
              還沒有會員嗎？
              <span class="btn-text underline decoration-1 ms-2" @click="$router.push('/signup')">
                前往註冊
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>