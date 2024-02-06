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
  <Swiper class="home-banner"
          :pagination="pagination"
          :modules="modules"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false}"
          :loop="true">
    <SwiperSlide v-for="(item, key) in bannerData" :key="key">
      <div class="bg-neutral-100/60 text-white absolute top-0 left-0 w-full h-full px-5 lg:px-[4.166vw]">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-[4.926vh] lg:gap-0 h-full pt-[13.793vh]">
          <div class="flex flex-col items-center lg:items-start" style="color: #be9c7c">
            <p class="text-7 lg:text-[2.083vw] font-bold">享樂酒店</p>
            <p class="lg:text-[1.25vw] font-bold">Enjoyment Luxury Hotel</p>
            <span class="block w-[2px] lg:w-full h-[10.221vh] lg:h-[2px] bg-gradient-to-b from-primary-100 mt-[4.926vh] lg:mt-8"></span>
          </div>
          <p class="text-8 lg:text-12 text-center font-bold">客房旅宿</p>
        </div>
      </div>
      <img class="h-[466px] lg:h-[800px] w-full object-cover" :src="item" alt="Banner">
    </SwiperSlide>
  </Swiper>
</template>