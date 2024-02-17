<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/mousewheel';

import { ref } from "vue"
import { supplyInfo } from "@/stores/homeStore"
import type { SupplyInfo } from "@/stores/homeStore"
const culinary = ref<SupplyInfo[]>(supplyInfo)
</script>

<template>
  <section class="bg-primary-10">
    <div class="home-container ms-auto py-20 lg:py-30 ps-4 xl:ps-0 overflow-hidden">
      <div class="flex gap-6 items-center mb-10 lg:mb-20">
        <h2 class="text-primary-100 text-8 lg:text-12 font-bold">佳餚<br>美饌</h2>
        <span class="block h-[2px] w-[200px] bg-gradient-to-r from-primary-100"></span>
      </div>
        <Swiper
          :slidesPerView="1.2"
          :spaceBetween="24"
          :breakpoints="{
            '1280': { slidesPerView: 3.5, },
            '992': { slidesPerView: 2.7, },
            '767': { slidesPerView: 2.2, },
          }"
          class="home-food-swiper">
        <SwiperSlide v-for="item in culinary" :key="item.id">
          <div class="h-[480px] md:h-[560px] xl:h-[600px] relatvie rounded-2 overflow-hidden duration-200">
            <img :src="item.imageUrl" class="w-full h-full object-cover" :alt="item.title">
            <div class="absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-b from-white/0 to-neutral/80 backdrop-blur-sm rounded-b-2 overflow-hidden">
              <div class="flex justify-between items-center mb-4 lg:mb-6">
                <h3 class="text-6 font-bold">{{ item.title }}</h3>
                <p class="text-3h lg:text-4 font-bold">{{ item.time }}</p>
              </div>
              <p class="text-justify text-3h lg:text-4 font-500 ellipsis">{{ item.info }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style lang="scss">
.home-food-swiper {
  overflow: visible;

  &-navigation{
    position: absolute;
    bottom: 0;
    right: 0;
    justify-content: flex-end;
    margin-bottom: 40px;
    margin-right: 40px;
  }
  .swiper-button-prev{
    order: 1;
  }
}
</style>
