<script setup lang="ts">
const { images } = defineProps(["images"])

// Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const modules = [Pagination, Navigation];
</script>

<template>
  <swiper class="room-list-swiper h-full"
          :pagination="{ clickable: true }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }"
          :loop="true"
          :modules="modules">

          <div class="hidden lg:block">
      <div class="swiper-button-prev bg-white text-block group" style="height: 56px; width: 56px; border-radius: 100%">
        <span class="material-icons text-black group-hover:text-primary-100">keyboard_arrow_left</span>
      </div>
      <div class="swiper-button-next bg-white text-block group" style="height: 56px; width: 56px; border-radius: 100%">
        <span class="material-icons text-black group-hover:text-primary-100">keyboard_arrow_right</span>
      </div>
    </div>

    <swiper-slide v-for="image in images" :key="image">
      <img class="object-cover h-full w-full" :src="image" alt="room img">
    </swiper-slide>
  </swiper>
</template>
