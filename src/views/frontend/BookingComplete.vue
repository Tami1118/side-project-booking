<script setup>
// Basic
import { onMounted, watch } from 'vue'
import { storeToRefs } from "pinia";

// Components
import OrderRoomInfo from "@/components/frontend/OrderRoomInfo.vue";

// Modal
// 補正在處理你的預定
// import { useModalStore } from "@/stores/modalStore"
// const modalStore = useModalStore()
// const { isModalOpen } = storeToRefs(modalStore)

// Order
import { useOrderStore } from "@/stores/orderStore"
const orderStore = useOrderStore()
const { order, userInfo, roomId, totalPrice } = storeToRefs(orderStore)
const getFrontOrder = orderStore.getFrontOrder;

// User
import { useUserStore } from "@/stores/userStore"
import { RouterLink } from 'vue-router';
const userStore = useUserStore()
const { isChecked } = storeToRefs(userStore)

watch(isChecked, (n) => {
  if (n) getFrontOrder()
})

onMounted(async () => {
  await getFrontOrder();
})
</script>

<template>
  <div class="bg-neutral-100">
    <div class="container mx-auto px-4 py-10 lg:py-30">
      <div class="flex flex-col lg:flex-row gap-15 lg:gap-18 duration-300">
        <div class="basis-full lg:basis-7/12" v-if="order">
          <div class="flex flex-col text-white gap-10 lg:gap-20">

            <div class="pb-10 lg:pb-20 border-b border-neutral-40">
              <div class="flex flex-col lg:flex-row gap-4 lg:gap-10 lg:items-center mb-8 lg:mb-10 duration-300">
                <img src="/svg/check.svg" class="w-10" alt="">
                <h1 class="text-8">恭喜，{{ userInfo.name }}！<br>您已預訂成功</h1>
              </div>
              <p class="font-500">我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。</p>
            </div>

            <div class="pb-10 lg:pb-20 border-b border-neutral-40">
              <h2 class="mb-6 lg:mb-10 text-4 lg:text-6">立即查看你的訂單記錄</h2>
              <RouterLink to="/user-order" class="btn btn-primary lg:w-fit">前往我的訂單</RouterLink>
            </div>

            <div>
              <h2 class="mb-8 text-6">訂房人資訊</h2>
              <div class="flex flex-col gap-6">
                <div>
                  <p>姓名</p>
                  <p>{{ userInfo.name }}</p>
                </div>
                <div>
                  <p>手機號碼</p>
                  <p>{{ userInfo.phone }}</p>
                </div>
                <div>
                  <p>電子信箱</p>
                  <p>{{ userInfo.email }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="basis-full lg:basis-5/12">
          <OrderRoomInfo :order="order" :room="roomId" :price="totalPrice" />
        </div>
      </div>
    </div>
  </div>
</template>