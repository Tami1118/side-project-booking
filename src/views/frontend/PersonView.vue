<template>
  <div class="bg-neutral-100">
    <div class="h-[206px] lg:h-[384px] relative">
      <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
      <div class="absolute top-0 left-0 w-full h-full my-auto">
        <div class="container mx-auto h-full flex flex-col justify-center lg:flex-row lg:justify-start lg:items-center gap-4 lg:gap-6 px-4 sm:px-0 duration-300">
          <div class="w-[72px] h-[72px] lg:w-[144px] lg:h-[144px] rounded-full"></div>
          <h1 class="text-white text-8 lg:text-12">Hello，Jessica</h1>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4 sm:px-0 py-10 lg:py-20">
      <div class="mb-10">
        <button class="py-4 px-6 text-white">個人資料</button>
        <button class="py-4 px-6 text-white">我的訂單</button>
      </div>
      <div class="flex flex-col lg:flex-row gap-10">
        <div class="basis-full lg:basis-5/12 bg-white rounded-[20px] p-4 lg:p-10 flex flex-col gap-6 lg:gap-10 h-fit duration-300">
          <h2 class="text-5 lg:text-6">
            修改密碼
            <!-- {{Boolean(isForm)}} toggle 都沒有反應 -->
            <!-- 修改 {{isFrom ? '1':'2'}} -->
          </h2>

          <!-- <user-acount :is-form="isForm"></user-acount> -->
          <UserAccount/>
        </div>

        <div class="basis-full lg:basis-7/12 bg-white rounded-[20px] p-4 lg:p-10 flex flex-col gap-6 lg:gap-10 h-fit duration-300">
          <h2 class="text-5 lg:text-6">基本資料</h2>
          <div class="flex flex-col gap-6" :class="{'hidden': isForm}">
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
          <user-from :class="{'hidden': !isForm}"></user-from>

          <div v-if="!isForm">
            <button class="btn btn-secondary border border-primary-100 w-fit">編輯</button>
          </div>
          <div v-else>
            <button class="btn bg-neutral-40 text-neutral-60 w-full lg:w-fit">儲存設定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UserAccount from '@/components/frontend/UserAccount.vue'
import userFrom from '@/components/frontend/userForm.vue'
import { ref, onMounted } from "vue";
import { storeToRefs } from'pinia' 
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const getUer = userStore.getUser


onMounted (() => {
  getUer()
})

const isForm = ref(false);
// const toggleFrom = () => {
//   isFrom.value = !isForm.value
// }
</script>