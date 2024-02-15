<script setup lang="ts">
import HomeWave from "@/assets/svg/HomeWave.vue";
</script>

<template>
  <section class="bg-neutral text-white overflow-hidden">
    <div class="container mx-auto px-3 md:px-0 pt-20 md:pt-30 pb-10 md:pb-20">
      <div class="flex items-center gap-10 mb-10 md:mb-20">
        <h2 class="text-primary-100 text-8 md:text-12 font-bold">交通<br>方式</h2>
        <span class="h-[2px] w-[194px] bg-gradient-to-r from-primary-100 to-transparent"></span>
      </div>

      <div class="mb-6">
        <p class="mb-4">台灣高雄市新興區六角路123號</p>
        <img class="h-[360px] w-full object-cover rounded-2" src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/map.png?raw=true" alt="">
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="flex flex-col gap-2">
          <font-awesome-icon icon="fa-solid fa-car" class="w-fit text-primary-100 text-8 lg:mb-2" />
          <h3 class="md:text-6 font-bold">自行開車</h3>
          <p class="text-[14px] md:text-4 text-justify">如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。</p>
        </div>
        <div class="flex flex-col gap-2">
          <font-awesome-icon icon="fa-solid fa-train" class="w-fit text-primary-100 text-8 lg:mb-2" />
          <h3 class="md:text-6 font-bold">高鐵/火車</h3>
          <p class="text-[14px] md:text-4 text-justify">如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。</p>
        </div>
        <div class="flex flex-col gap-2">
          <font-awesome-icon icon="fa-solid fa-car-side" class="w-fit text-primary-100 text-8 lg:mb-2" />
          <h3 class="md:text-6 font-bold">禮賓車服務</h3>
          <p class="text-[14px] md:text-4 text-justify">承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567</p>
        </div>
      </div>
    </div>
    <HomeWave />
  </section>
</template>