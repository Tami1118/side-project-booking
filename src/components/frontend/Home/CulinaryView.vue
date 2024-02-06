<script setup>
// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/mousewheel';

import { ref } from "vue"
import { supplyInfo } from "@/stores/homeStore"
const culinary = ref(supplyInfo)
</script>

<template>
  <div class="bg-primary-10 overflow-hidden">
    <div class="container mx-auto py-20 lg:py-30 ps-4 xl:ps-0 overflow-visible">
      <div class="flex gap-6 items-center mb-10 lg:mb-20">
        <h2 class="text-primary-100 text-8 lg:text-12 font-bold mb-6 lg:mb-10">佳餚<br>美饌</h2>
        <span class="block h-[2px] w-[200px] bg-gradient-to-r from-primary-100"></span>
      </div>
      <Swiper 
          :slidesPerView="1.2"
          :spaceBetween="24"
          :breakpoints="{
              '1023': {slidesPerView: 3,},
              '767': {slidesPerView: 1.7,},}"
          class="homeFoodSwiper">
        <SwiperSlide v-for="(item, key) in culinary" :key="key">
          <div class="h-[480px] md:h-[560px] xl:h-[600px] relatvie rounded-2 overflow-hidden">
            <img :src="item.imageUrl" class="w-full h-full object-cover" :alt="item.title">
            <div class="absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-b from-white/0 to-neutral/80 backdrop-blur-sm rounded-b-2 overflow-hidden">
              <div class="flex justify-between items-center">
                <h3 class="text-6 font-bold">{{ item.title }}</h3>
                <p class="text-3h lg:text-4 font-bold">{{ item.time }}</p>
              </div>
              <p class="text-justify text-3h lg:text-4 font-500">{{ item.info }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style lang="scss">
.homeFoodSwiper{
  overflow: visible;
}
</style>
