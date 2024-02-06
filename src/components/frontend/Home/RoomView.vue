<script setup>
// Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const modules = [Pagination, Navigation, Autoplay]
const pagination = {
  clickable: true,
}
const navigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}

// Room
import { onMounted } from "vue"
import { storeToRefs } from "pinia";
import { useRoomStore } from "@/stores/roomStore"
const roomStore = useRoomStore()
const { roomList } = storeToRefs(roomStore)
const getFrontRooms = roomStore.getFrontRooms

onMounted(async () => {
  await getFrontRooms()
})
</script>

<template>
  <div class="bg-neutral-100 overflow-hidden" v-if="roomList">
    <div class="container mx-auto py-20 lg:py-30 px-4 xl:px-0">
      <Swiper :navigation="navigation" :spaceBetween="30" :modules="modules" class="home-food-swiper">
        <SwiperSlide v-for="room in roomList" :key="room._id">
          <div class="flex flex-col xl:flex-row gap-6 lg:gap-20">
            <Swiper :pagination="pagination" :slidesPerView="'auto'" :modules="modules" class="home-room-swiper-content h-[300px] md:h-[600px] lg:h-[900px] xl:h-[900px] xl:w-[900px]">
              <SwiperSlide v-for="(item, key) in room.imageUrlList" :key="key">
                <img :src="item" class="w-full h-full object-cover rounded-r-2 overflow-hidden" alt="">
              </SwiperSlide>
            </Swiper>

            <div class="flex flex-col gap-6">
              <div class="text-white">
                <h3 class="text-7 lg:text-10 font-bold mb-2">{{ room.name }}</h3>
                <p class="font-500">{{ room.description }}</p>
              </div>
              <p class="text-6 font-bold">{{ room.price }}</p>

              <RouterLink :to="`/room/${room._id}`" class="flex flex-col gap-4">
                <button type="button" class="group rounded-2 bg-white p-5 flex items-center justify-end text-6 font-bold text-neutral hover:bg-primary-100 hover:text-white duration-500">
                  立即訂房
                  <span class="block ms-4 w-[159px] group-hover:w-[120px] h-[1px] bg-neutral group-hover:bg-white duration-500"></span>
                </button>
              </RouterLink>
            </div>
          </div>
        </SwiperSlide>

        <div class="home-food-swiper-navigation">
          <div class="swiper-button-prev">
            <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-primary-100" />
          </div>
          <div class="swiper-button-next">
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-primary-100" />
          </div>
        </div>
      </Swiper>
    </div>
  </div>
</template>