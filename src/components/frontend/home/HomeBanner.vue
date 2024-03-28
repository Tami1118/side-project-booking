<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
const modules = [Pagination, Autoplay];
const pagination = {
  clickable: true,
};

import { ref } from "vue";
import { banner } from "@/stores/homeStore";
const bannerData = ref<string[]>(banner);
</script>

<template>
  <!-- lg: vw 1920  vh 1080  重寬調整(font-size, width, padding-x)
       sm: vw 375   vh 812   重高調整(font-size, height, margin-y) -->
  <section>
    <Swiper class="home-banner h-screen"
            :pagination="pagination"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: false}"
            :modules="modules"
            :loop="true">
      <SwiperSlide v-for="(item, key) in bannerData" :key="key">
        <img class="h-full w-full object-cover" :src="item" alt="Home Banner">
      </SwiperSlide>
    </Swiper>
    <div class="banner-full-bg bg-neutral-100/60"></div>
    <div class="topic-wrap">
      <div class="px-5 lg:px-[4.166vw] h-screen">
        <div class="flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between gap-[4.926vh] lg:gap-0 h-full">
          <div class="w-full lg:max-w-[33.125vw]">
            <div class="flex flex-col items-center lg:items-start" style="color: #be9c7c">
              <h1 class="text-7 lg:text-[2.083vw] font-bold">享樂酒店</h1>
              <p class="lg:text-[1.25vw] font-bold">Enjoyment Luxury Hotel</p>
              <span class="block w-[2px] lg:w-full h-[10.221vh] lg:h-[2px] bg-gradient-to-b from-primary-100 mt-[4.926vh] lg:mt-8"></span>
            </div>
          </div>
          <div class="w-full lg:max-w-[48.125vw]">
            <div class="py-[4.926vh] lg:py-[8.888vh] rounded-[40px] lg:rounded-[80px] border-t-2 border-r-2 border-white bg-gradient-to-b from-white/0 to-primary-10/30 backdrop-blur-sm text-white ms-[10.133vw] lg:ms-auto">
              <div class="-translate-x-[10.133vw] lg:-translate-x-[2.5vw] w-fit">
                <h2 class="text-12 lg:text-[5.208vw] font-bold mb-[2.22vh] sm:text-nowrap">高雄<br>豪華住宿之選</h2>
                <p class="mb-[4.926vh] lg:mb-[5.555vh] lg:text-[1.6667vw]">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                <RouterLink to="/room" class="group rounded-2 bg-white p-5 lg:p-10 flex w-full items-center justify-end lg:text-6 font-bold text-neutral hover:bg-primary-100 hover:text-white duration-500">
                  立即訂房<span class="block ms-4 w-[80px] lg:w-[150px] group-hover:w-[60px] lg:group-hover:w-[120px] h-[1px] bg-neutral group-hover:bg-white duration-500"></span>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.banner-full-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  z-index: 1;
}
.topic-wrap {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  @media (max-width: 1024px){
    top: 0;
  }
}
</style>