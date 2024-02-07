<script setup lang="ts">
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
const bannerData = ref<string[]>(banner)
</script>

<template>
  <!-- lg: vw 1920  vh 800
       sm: vw 375   vh 466  -->
  <Swiper class="home-banner h-[466px] lg:h-[800px]"
          :pagination="pagination"
          :modules="modules"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false}"
          :loop="true">
    <SwiperSlide v-for="(item, key) in bannerData" :key="key">
      <div class="bg-neutral-100/60 text-white absolute top-0 left-0 w-full h-full px-5 lg:px-[4.166vw]">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-10 lg:gap-20 h-full pt-[112px]">
          <div class="flex flex-col items-center lg:items-start" style="color: #be9c7c">
            <p class="text-7 lg:text-10 font-bold">享樂酒店</p>
            <p class="lg:text-6 font-bold">Enjoyment Luxury Hotel</p>
            <span class="block w-[2px] lg:w-[500px] h-[84px] lg:h-[2px] bg-gradient-to-b lg:bg-gradient-to-r from-primary-100 mt-5 lg:mt-8"></span>
          </div>
          <p class="text-8 lg:text-12 text-center font-bold">客房旅宿</p>
        </div>
      </div>
      <img class="h-full w-full object-cover" :src="item" alt="Rooms Banner">
    </SwiperSlide>
  </Swiper>
</template>