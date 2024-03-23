<script setup lang="ts">
import { ref, computed } from "vue";
import { storeToRefs } from 'pinia';

import LoginHeader from "@/components/layouts/LoginHeader.vue";
import DateSelect from '@/components/widgets/DateSelect.vue';
import CitySelect from '@/components/widgets/CitySelect.vue';

// User
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore();
const signup = userStore.signup;
const { signupStep, passwordConfirm, detailedAddress, signupLoading, signupName, signupEmail, signupPassword, signupPhone } = storeToRefs(userStore);

const readMe = ref<boolean>(false);

// 可以考慮拿掉
// const stepOneForm = computed(() => {
//   return signupData.value.email && signupData.value.password && passwordConfirm.value
// })
// const stepTwoForm = computed(() => {
//   return signupData.value.name && signupData.value.phone && detailedAddress.value && readMe.value
// })
</script>

<template>
  <LoginHeader />

  <div class="bg-neutral">
    <div class="flex overflow-hidden">
      <!-- 左圖 -->
      <div class="hidden lg:w-1/2 shrink-0 lg:block">
        <img src="../assets/images/desktop/register.png" class="h-full w-full object-cover" />
      </div>

      <!-- 右表單 -->
      <div class="w-full lg:w-1/2 shrink-0 flex relative">
        <div class="absolute top-0 left-0 w-full pt-8 z-10">
          <img src="/svg/bgwave.svg" class="w-full" alt="bg wave">
        </div>

        <div class="w-full px-5 lg:px-0 py-6 xl:py-0 flex justify-center items-center z-20">
          <div class="w-full lg:w-2/3 xl:w-1/2 mx-auto flex flex-col gap-10 duration-300">
            <div class="font-bold">
              <h1 class="text-primary-100 text-3h md:text-4 mb-2">享樂酒店，誠摯歡迎</h1>
              <p class="text-white text-8 xl:text-12">立即註冊</p>
            </div>

            <div class="flex justify-around items-center z-10">
              <div class="text-white flex flex-col items-center">
                <span class="text-center w-8 h-8 bg-primary-100 flex items-center justify-center rounded-full" @click="signupStep = 1">1</span>
                輸入信箱及密碼
              </div>
              <div class="bg-white h-[1px] grow mx-3"></div>
              <div class="text-white flex flex-col items-center">
                <span class="text-center w-8 h-8 bg-primary-100 flex items-center justify-center rounded-full" @click="signupStep = 1">2</span>
                填寫基本資料
              </div>
            </div>

            <!-- step1 -->
            <div v-if="signupStep === 1">
              <VForm v-slot="{ errors }" @submit="signupStep = 2">
                <div class="flex flex-col gap-4">
                  
                  <div class="flex flex-col gap-2">
                    <label for="email" class="font-bold text-white">電子信箱</label>
                    <VField name="email"
                            id="email"
                            type="email"
                            rules="required|email"
                            class="form-input"
                            :class="{ 'border border-red-600': errors['email'] }"
                            placeholder="hello@exsample.com"
                            v-model="signupEmail" />
                    <ErrorMessage class="text-red-600" name="email" />
                  </div>

                  <div class="flex flex-col gap-2">
                    <label for="password" class="font-bold text-white">密碼</label>
                    <VField name="密碼"
                            id="password"
                            type="password"
                            rules="required|min:8"
                            class="form-input"
                            :class="{ 'border border-red-600': errors['密碼'] }"
                            placeholder="請輸入密碼"
                            v-model="signupPassword" 
                            ref="password" />
                    <ErrorMessage class="text-red-600" name="密碼" />
                  </div>

                  <div class="flex flex-col gap-2">
                    <label for="password2" class="font-bold text-white">確認密碼</label>
                    <VField name="確認密碼"
                            id="password2"
                            type="password"
                            rules="required|min:8|confirmed:@密碼"
                            class="form-input"
                            :class="{ 'border border-red-600': errors['確認密碼'] }"
                            placeholder="請再輸入一次密碼"
                            v-model="passwordConfirm"
                            data-vv-as="password" />
                    <ErrorMessage class="text-red-600" name="確認密碼" />
                  </div>

                </div>
                <button type="submit"
                        class="btn btn-primary mt-10 disabled:bg-neutral-40 w-full">
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
                    <VField name="姓名"
                            type="text"
                            id="user-name"
                            rules="required|min:2"
                            class="form-input"
                            :class="{ 'border border-red-600': errors['姓名'] }"
                            placeholder="請輸入姓名"
                            v-model="signupName" />
                    <ErrorMessage class="text-red-600" name="姓名" />
                  </div>

                  <div class="flex flex-col gap-2">
                    <label for="user-phone" class="font-bold text-white">手機號碼</label>
                    <VField name="手機號碼" 
                            type="tel"
                            id="user-phone"
                            rules="required|numeric|min:10|mobile"
                            class="form-input"
                            :class="{ 'border border-red-600': errors['手機號碼'] }"
                            placeholder="請輸入手機號碼"
                            v-model="signupPhone" />
                    <ErrorMessage class="text-red-600" name="手機號碼" />
                  </div>

                  <DateSelect />
                  <CitySelect />

                  <div>
                    <VField name="詳細地址"
                            type="text"
                            rules="required"
                            v-model="detailedAddress"
                            class="form-input"
                            :class="{ 'border border-red-600': errors['詳細地址'] }"
                            placeholder="請輸入詳細地址" />
                    <ErrorMessage class="text-red-600" name="詳細地址" />
                  </div>

                  <label for="remember" class="flex items-center text-white mb-0">
                    <input type="checkbox" id="remember" v-model="readMe">
                    <span><font-awesome-icon icon="fa-solid fa-check" :class="readMe ? 'block text-white text-3' : 'hidden'" /></span>
                    我已閱讀並同意本網站個資使用規範
                  </label>
                </div>

                <button class="btn btn-primary mt-10 disabled:bg-neutral-40 w-full"
                        :disabled="signupLoading"
                        type="submit">
                  {{ signupLoading? '驗證中' : '完成註冊' }}
                </button>
              </VForm>
            </div>

            <div class="text-white flex">
              已經有會員了嗎？
              <RouterLink to="/login" class="btn-text underline decoration-1 ms-2">
                立即登入
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
