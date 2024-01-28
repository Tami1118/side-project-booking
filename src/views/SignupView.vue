<template>
  <UserHeader/>
  <div class="grid grid-cols-1 md:grid-cols-2 bg-neutral-100 h-screen">
    <div class="col hidden md:block">
      <img class="h-screen w-full object-cover object-center overflow-hidden" src="../assets/images/desktop/register.png" />
    </div>   
    <div class="col relative overflow-hidden">
      <div class="absolute top-0 left-0 pt-8 md:pt-18">
        <BgWave/>
      </div>
      <div class="h-full flex justify-center items-center px-5 lg:px-0">
        <div class="basis-full lg:basis-1/2 flex flex-col gap-10 duration-300">
          <div class="text-bold z-10">
            <div class="text-primary-100 font-bold text-3h md:text-4 mb-2">享樂酒店，誠摯歡迎</div>
            <h1 class="text-white font-bold text-8 xl:text-12 duration-300">立即註冊</h1>
          </div>

          <div class="flex justify-around items-center z-10">
            <div class="text-white">
              <div class="text-center border border-white" @click="signupStep = 1">1</div>
              <div class="">輸入信箱及密碼</div>
            </div>
            <div class="bg-white h-[1px] grow"></div>
            <div class="text-white">
              <div class="text-center" @click="signupStep = 1">2</div>
              <div class="">填寫基本資料</div>
            </div>
          </div>
          
          <!-- step1 -->
          <div v-if="signupStep === 1">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <label for="user-email-signup" class="font-bold text-white">電子信箱</label>
                <input 
                  type="email" 
                  id="user-email-signup" 
                  class="p-4 rounded-2" 
                  placeholder="請輸入電子信箱"
                  v-model="signupData.email"
                >
              </div>
              <div class="flex flex-col gap-2">
                <label for="user-password" class="font-bold text-white">密碼</label>
                <input 
                  type="password"  
                  id="user-password" 
                  class="p-4 rounded-2" 
                  placeholder="請輸入密碼"
                  v-model="signupData.password"
                >
              </div>
              <div class="flex flex-col gap-2">
                <label for="user-password" class="font-bold text-white">確認密碼</label>
                <input 
                  type="password" 
                  id="user-password" 
                  class="p-4 rounded-2" 
                  placeholder="請再輸入一次密碼"
                  v-model="passwordConfirm"
                >
              </div>
  
  
  
            </div>
            <div class="btn-primary font-bold btn text-center mt-10" @click="signupStep = 2">
              下一步
            </div>
          </div>
          <!-- step2 -->
          <div v-if="signupStep === 2">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <label for="user-name" class="font-bold text-white">姓名</label>
                <input 
                  type="text"  
                  id="user-name" 
                  class="p-4 rounded-2" 
                  placeholder="請輸入姓名"
                  v-model="signupData.name"
                >
              </div>
              <div class="flex flex-col gap-2">
                <label for="user-phone" class="font-bold text-white">手機號碼</label>
                <input 
                  type="phone"  
                  id="user-phone" 
                  class="p-4 rounded-2" 
                  placeholder="請輸入手機號碼"
                  v-model="signupData.phone"
                >
              </div>

              <DateSelect/>
              <CitySelect/>
  
  
            </div>
            <div class="btn-primary font-bold btn text-center mt-10" @click="signup()">
              完成註冊
            </div>
          </div>


          <div class="text-white flex">
            已經有會員了嗎？
            <span class="btn-text underline decoration-1 ms-2" @click="$router.push('/login')">
              立即登入
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserHeader from "@/layouts/frontend/UserHeader.vue"
import BgWave from '@/components/widgets/BgWave.vue'
import DateSelect from '@/components/widgets/DateSelect.vue'
import CitySelect from '@/components/widgets/CitySelect.vue'
import { storeToRefs } from'pinia' 
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const { signupStep, signupData, passwordConfirm } = storeToRefs(userStore)
const signup = userStore.signup
</script>