<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
const modules = [Pagination, Autoplay]
const pagination = {
  clickable: true,
}

import { ref } from "vue";
import { banner } from "@/stores/homeStore"
const bannerData = ref(banner)
</script>

<template>
  <Swiper class="home-banner" :loop="true" :pagination="pagination" :modules="modules" :autoplay="{delay: 2000,disableOnInteraction: false}">
    <SwiperSlide v-for="(item, key) in bannerData" :key="key">
      <div class="bg-neutral-100/60 text-white absolute top-0 left-0 w-full h-full px-5 md:px-10 xl:px-20">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-0 h-full pt-[112px]">
          <div class="lg:w-1/3 lg:max-w-[636px]">
            <div class="flex flex-col items-center lg:items-start" style="color: #be9c7c">
              <h1 class="text-7 lg:text-10 font-bold">享樂酒店</h1>
              <p class="lg:text-6 font-bold">Enjoyment Luxury Hotel</p>
              <span class="block w-[2px] lg:w-full h-[83px] lg:h-[2px] bg-gradient-to-b from-primary-100 mt-5"></span>
            </div>
          </div>
          <div class="lg:w-1/2 lg:max-w-[924px]">
            <div class="py-[40px] lg:py-[8.888vh] rounded-[40px] border-t-2 border-r-2 border-white bg-gradient-to-b from-white/0 to-primary-10/30 backdrop-blur-sm text-white ms-[38px] lg:ms-auto">
              <div class="-translate-x-[38px] lg:-translate-x-[48px] w-fit">
                <h2 class="text-12 lg:text-[5.2083vw] font-bold mb-6 text-nowrap">高雄 <br>豪華住宿之選</h2>
                <p class="mb-10 lg:text-[1.6667vw]">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                <RouterLink to="/room" class="group rounded-2 bg-white p-5 lg:p-10 flex w-full items-center justify-end lg:text-6 font-bold text-neutral hover:bg-primary-100 hover:text-white duration-500">
                  立即訂房<span class="block ms-4 w-[80px] group-hover:w-[60px] h-[1px] bg-neutral group-hover:bg-white duration-500"></span>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img class="h-screen w-full object-cover" :src="item" alt="Banner">
    </SwiperSlide>
  </Swiper>
</template>

<!-- 
<div class="flex flex-col bg-white/30 backdrop-blur-sm rounded-[40px] py-[60px] border-t-2 border-r-2 border-white">
  <div class="-translate-x-2">
    <h2 class="text-12 lg:text-25 font-bold">高雄 <br>豪華住宿之選</h2>
    <p>我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
  </div>
</div>
-->