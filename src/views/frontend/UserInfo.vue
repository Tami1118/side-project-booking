<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore';

import UserAccount from '@/components/frontend/user/UserAccount.vue';
import UserBanner from "@/components/frontend/user/UserBanner.vue";
import UserFrom from '@/components/frontend/user/UserForm.vue';

const userStore = useUserStore()
const { userInfo, showEditUserInfo } = storeToRefs(userStore)
const getUser = userStore.getUser
const checkUser = userStore.checkUser

onMounted(async() => {
  await checkUser()
  getUser()
})
</script>

<template>
  <div class="bg-neutral">
    <UserBanner />

    <div class="container mx-auto px-4 sm:px-0 pb-10 lg:pb-20">
      <div class="flex flex-col lg:flex-row gap-10">
        <div class="basis-full lg:basis-5/12 bg-white rounded-[20px] p-4 lg:p-10 flex flex-col gap-6 lg:gap-10 h-fit duration-300">
          <h2 class="text-5 lg:text-6">修改密碼</h2>
          <UserAccount />
        </div>

        <div class="basis-full lg:basis-7/12 bg-white rounded-[20px] p-4 lg:p-10 flex flex-col gap-6 lg:gap-10 h-fit duration-300">
          <h2 class="text-5 lg:text-6">基本資料</h2>
          <UserFrom v-if="showEditUserInfo" />
          <div v-if="!showEditUserInfo" class="flex flex-col gap-6">
            <div>
              <p class="font-500 mb-2 text-neutral-80">姓名</p>
              <p class="font-bold">{{ userInfo.name }}</p>
            </div>
            <div>
              <p class="font-500 mb-2 text-neutral-80">手機號碼</p>
              <p class="font-bold">{{ userInfo.phone }}</p>
            </div>
            <div>
              <p class="font-500 mb-2 text-neutral-80">生日</p>
              <p class="font-bold">{{ userInfo.birthday?.replace(/^(\d{4})-(\d{2})-(\d{2})T.*$/, '$1/$2/$3') }}</p>
            </div>
            <div>
              <p class="font-500 mb-2 text-neutral-80">地址</p>
              <p class="font-bold">{{ userInfo.address?.detail }}</p>
            </div>
          </div>
          <div v-if="!showEditUserInfo">
            <button class="btn btn-secondary border border-primary-100 w-fit" @click="showEditUserInfo = true">編輯</button>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>