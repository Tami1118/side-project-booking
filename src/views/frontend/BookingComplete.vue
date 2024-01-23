<template>
  <div class="bg-neutral-100">
    <div class="container mx-auto px-4 sm:px-0 py-10 lg:py-30">
      <div class="flex flex-col lg:flex-row gap-[60px] lg:gap-[72px] duration-300">
        <div class="basis-full lg:basis-7/12">
          <div class="flex flex-col text-white gap-10">
            <div class="pb-10 border-b border-neutral-40">
              <img src="/svg/check.svg" class="w-10 mb-4" alt="">
              <h1 class="text-8 mb-8">恭喜，Jessica！<br>您已預訂成功</h1>
              <p class="font-500">我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。</p>
            </div>

            <div class="flex flex-col gap-6 pb-10 border-b border-neutral-40">
              <p>立即查看你的訂單記錄</p>
              <button class="btn btn-primary">前往我的訂單</button>
            </div>

            <div>
              <h2 class="mb-8 text-6">訂房人資訊</h2>
              <div class="flex flex-col gap-6">
                <div>
                  <p>姓名</p>
                  <p>Jessica Wang</p>
                </div>
                <div>
                  <p>手機號碼</p>
                  <p>+886 912 345 678</p>
                </div>
                <div>
                  <p>電子信箱</p>
                  <p>jessica@sample.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="basis-full lg:basis-5/12">
          <order-room-info></order-room-info>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import orderRoomInfo from "@/components/frontend/orderRoomInfo.vue";
</script>