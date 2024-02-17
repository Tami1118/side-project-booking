<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const modules = [Pagination];

const { imageList } = defineProps(["imageList"])
</script>

<template>
  <swiper :pagination="true"
          :modules="modules"
          class="room-list-swiper h-[250px] md:h-[500px] duration-300">
    <swiper-slide class="h-full" v-for="item in imageList" :key="item">
      <img :src="item" class="w-full h-full object-cover" alt="Room Image">
    </swiper-slide>
  </swiper>
</template>