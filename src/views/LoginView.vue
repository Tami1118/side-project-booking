<template>
  <div class="grid grid-cols-1 md:grid-cols-2 bg-neutral-100 h-screen">
    <div class="col hidden md:block">
      <img class="h-screen w-full object-cover object-center overflow-hidden" src="../assets/images/desktop/register.png" />
    </div>
    <div class="col relative overflow-hidden">
      <BgWave/>

      <div class="h-full flex justify-center items-center px-5 lg:px-0">
        <div class="basis-full lg:basis-1/2 flex flex-col gap-10 duration-300">
          <div class="text-bold z-10">
            <div class="text-primary-100 font-bold text-3h md:text-4 mb-2">享樂酒店，誠摯歡迎</div>
            <h1 class="text-white font-bold text-8 xl:text-12 duration-300">立即開始旅程</h1>
          </div>

          <VForm  v-slot="{ errors }"
            @submit="login()">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <label for="email" class="font-bold text-white">
                  電子信箱
                </label>
                <VField
                  name="email"
                  id="email"
                  type="email"
                  rules="required|email"
                  class="p-4 rounded-2"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入電子信箱"
                  v-model="loginData.email"
                />
                <ErrorMessage class="invalid-feedback text-red-600" name="email"/>
              </div>
              <div class="flex flex-col gap-2">
                <label for="password" class="font-bold text-white">
                  密碼
                </label>
                <VField
                  name="密碼"
                  id="password"
                  type="password"
                  rules="required|min:8"
                  class="p-4 rounded-2"
                  :class="{ 'is-invalid': errors['密碼'] }"
                  placeholder="請輸入密碼"
                  v-model="loginData.password"
                />
                <ErrorMessage class="invalid-feedback text-red-600" name="密碼"/>
              </div>
              <div class="flex justify-between items-center">
                <div>
                  <input type="checkbox" id="remember" class="p-4 rounded-2 me-2">
                  <label for="remember" class="font-bold text-3h md:text-4 text-white">記住帳號</label>
                </div>
                <a href="#" class="block btn-text text-3h md:text-4 underline decoration-1">忘記密碼</a>
              </div>
            </div>
            <button type="submit" class="btn-primary font-bold btn text-center mt-10">
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

</template>

<script setup>
import BgWave from '@/components/widgets/BgWave.vue'
import { storeToRefs } from'pinia' 
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const { loginData } = storeToRefs(userStore)
const login = userStore.login

console.log(loginData)
</script>