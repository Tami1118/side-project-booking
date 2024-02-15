<template>
  <LoginHeader />
  <div class="grid grid-cols-1 md:grid-cols-2 bg-neutral-100 h-screen">
    <div class="col hidden md:block">
      <img class="h-screen w-full object-cover object-center overflow-hidden" src="../assets/images/desktop/register.png" />
    </div>
    <div class="col relative overflow-hidden">
      <BgWave />

      <div class="absolute top-0 bottom-0 left-0 w-full h-full flex justify-center items-center px-5 lg:px-0">
        <div class="basis-full lg:basis-1/2 flex flex-col gap-10 duration-300">
          <div class="text-bold z-10">
            <div class="text-primary-100 font-bold text-3h md:text-4 mb-2">享樂酒店，誠摯歡迎</div>
            <h1 class="text-white font-bold text-8 xl:text-12 duration-300">立即註冊</h1>
          </div>

          <div class="flex justify-around items-center z-10">
            <div class="text-white flex flex-col items-center">
              <span class="text-center w-[32px] h-[32px] bg-primary-100 flex items-center justify-center rounded-full" @click="signupStep = 1">1</span>
              <div class="">輸入信箱及密碼</div>
            </div>
            <div class="bg-white h-[1px] grow mx-3"></div>
            <div class="text-white flex flex-col items-center">
              <span class="text-center w-[32px] h-[32px] bg-primary-100 flex items-center justify-center rounded-full" @click="signupStep = 1">2</span>
              <div class="">填寫基本資料</div>
            </div>
          </div>

          <!-- step1 -->
          <div v-if="signupStep === 1">
            <VForm v-slot="{ errors }" @submit="signupStep = 2">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                  <label for="email" class="font-bold text-white">
                    電子信箱
                  </label>
                  <VField name="email" id="email" type="email" rules="required|email" class="p-4 rounded-2" :class="{ 'border border-red-600': errors['email'] }" placeholder="請輸入電子信箱" v-model="signupData.email" />
                  <ErrorMessage class="text-red-600" name="email" />
                </div>


                <div class="flex flex-col gap-2">
                  <label for="password" class="font-bold text-white">
                    密碼
                  </label>
                  <VField name="密碼" id="password" type="password" rules="required|min:8" class="p-4 rounded-2 form-input" :class="{ 'border border-red-600': errors['密碼'] }" placeholder="請輸入密碼" v-model="signupData.password" ref="password" />
                  <ErrorMessage class="text-red-600" name="密碼" />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="password2" class="font-bold text-white">
                    確認密碼
                  </label>
                  <VField name="確認密碼" id="password2" type="password" rules="required|min:8|confirmed:@密碼" class="p-4 rounded-2 form-input" :class="{ 'border border-red-600': errors['確認密碼'] }" placeholder="請再輸入一次密碼" v-model="passwordConfirm" data-vv-as="password" />
                  <ErrorMessage class="text-red-600" name="確認密碼" />
                </div>
              </div>
              <button class="btn-primary font-bold btn text-center mt-10" type="submit">
                下一步
              </button>
            </VForm>
          </div>
          <!-- step2 -->
          <div v-if="signupStep === 2">
            <VForm v-slot="{ errors }" @submit="signup()">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                  <label for="user-name" class="font-bold text-white">姓名</label>

                  <VField name="姓名" type="text" id="user-name" rules="required|min:2" class="p-4 rounded-2" :class="{ 'border border-red-600': errors['姓名'] }" placeholder="請輸入姓名" v-model="signupData.name" />
                  <ErrorMessage class="text-red-600" name="姓名" />
                </div>


                <div class="flex flex-col gap-2">
                  <label for="user-phone" class="font-bold text-white">手機號碼</label>
                  <VField name="手機號碼" type="phone" id="user-phone" rules="required|numeric|min:10|mobile" class="p-4 rounded-2" :class="{ 'border border-red-600': errors['手機號碼'] }" placeholder="請輸入手機號碼" v-model="signupData.phone" />
                  <ErrorMessage class="text-red-600" name="手機號碼" />
                </div>

                <DateSelect />
                <CitySelect />
                <div class="mt-3">
                  <VField name="詳細地址" type="text" rules="required" v-model="detailedAddress" class="form-input mt-1 block w-full" :class="{ 'border border-red-600': errors['詳細地址'] }" placeholder="請輸入詳細地址" />
                  <ErrorMessage class="text-red-600" name="詳細地址" />
                </div>

              </div>
              <button class="btn-primary font-bold btn text-center mt-10" type="submit">
                完成註冊
              </button>
            </VForm>
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
// Basic
import { storeToRefs } from 'pinia';

// Components
import LoginHeader from "@/components/layouts/LoginHeader.vue";
import BgWave from '@/assets/svg/BgWave.vue';
import DateSelect from '@/components/widgets/DateSelect.vue'
import CitySelect from '@/components/widgets/CitySelect.vue'

// User
import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore()
const { signupStep, signupData, passwordConfirm, detailedAddress } = storeToRefs(userStore)
const signup = userStore.signup
</script>