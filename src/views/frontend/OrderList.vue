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
        <div class="basis-full lg:basis-7/12 bg-white rounded-[20px] p-4 lg:p-10 flex flex-col gap-6 lg:gap-10 h-fit duration-300">
          <order-room-info></order-room-info>
        </div>

        <div class="basis-full lg:basis-5/12 bg-white rounded-[20px] p-4 lg:p-10 flex flex-col gap-6 lg:gap-10 h-fit duration-300">
          <order-room-history></order-room-history>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import orderRoomInfo from '@/components/frontend/orderRoomInfo.vue'
import orderRoomHistory from '@/components/frontend/orderRoomHistory.vue'
</script>