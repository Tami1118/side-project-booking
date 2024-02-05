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
  <div class="relative">
    <Swiper class="home-banner h-screen" :pagination="pagination" :modules="modules" :autoplay="{
      delay: 2000,
      disableOnInteraction: false
    }">
      <SwiperSlide class="h-full" v-for="(item, key) in bannerData" :key="key">
        <div class="bg-neutral-100/60 absolute top-0 left-0 h-full w-full"></div>
        <img class="h-full object-cover w-full" :src="item" alt="">
      </SwiperSlide>
    </Swiper>
    <div class="absolute bottom-0 right-0 text-white z-10">
      <div class="container mx-auto w-full">
        this is content
      </div>
    </div>
  </div>
</template>