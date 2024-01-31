<template>
  <swiper :pagination="true"
          :modules="modules"
          class="room-list-swiper h-[250px] md:h-[500px] duration-300">
    <swiper-slide class="h-full" v-for="item in props.imageList" :key="item">
      <img :src="item" class="w-full h-full object-cover" alt="">
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
const props = defineProps(["imageList"])

// Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
const modules = [Pagination];
</script>