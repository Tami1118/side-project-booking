<template>
  <div>
    <div class="mt-20">header</div>
  </div>


  <div class="container mx-auto px-4">
    <p>房型選擇</p>
    <h2>各種房型，任您挑選</h2>
    <div 
      class="flex flex-wrap mb-12"
      v-for="item in roomData"
      :key="item"
    >
      <!-- 左 -->
      <div class="w-full md:w-7/12">
        <div class="">
          <swiper 
            class="home-banner" 
            :pagination="{ clickable: true }" 
            :navigation="true"
            :modules="modules" 
          >
        <swiper-slide v-for="imgList in item.imageUrlList" :key="imgList">
          <img 
            class="object-cover w-full" 
            :src="imgList" 
            alt="room img"
          >
        </swiper-slide>
      </swiper>
        </div>
      </div>
      <!-- 右 -->
      <div class="w-full md:w-5/12 p-10">
        <h3 class="">{{ item.name }}</h3>
        <p>{{ item.description }}</p>
      </div>

    </div>
  </div>
</template>

<script setup>
// swiper
import { Swiper, SwiperSlide } from "swiper/vue"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
const modules = [ Pagination, Navigation, Autoplay ]

// room
import { onMounted } from 'vue';
import { storeToRefs } from'pinia' 
import { useRoomStore } from '@/stores/roomStore'

const roomStore = useRoomStore()
const { roomData } = storeToRefs(roomStore)
const getFrontRooms = roomStore.getFrontRooms

onMounted(() => {
  getFrontRooms()
})

</script>
  

