<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const modules = [Pagination, Navigation, Autoplay]
const pagination = {
  clickable: true,
};
const navigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
};

import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import format from "@/mixins/format";

// 取得房型列表
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const { roomList } = storeToRefs(roomStore);
const getFrontRooms = roomStore.getFrontRooms;

onMounted(async () => {
  await getFrontRooms()
})
</script>

<template>
  <section class="bg-neutral" v-if="roomList">
    <div class="home-container py-20 lg:py-30 px-4 lg:px-0 text-white">
      <Swiper :navigation="navigation"
              :spaceBetween="30"
              :modules="modules"
              class="home-room-swiper">
          <div class="home-room-swiper-navigation">
            <div class="swiper-button-prev">
              <span class="material-symbols-outlined text-primary-100">arrow_back</span>
            </div>
            <div class="swiper-button-next">
              <span class="material-symbols-outlined text-primary-100">arrow_forward</span>
          </div>
        </div>
        <SwiperSlide v-for="room in roomList" :key="room._id">
          <div class="flex flex-col lg:flex-row gap-6 lg:gap-20">
            <div class="w-full lg:w-[700px] xl:w-[900px] h-[300px] lg:h-[700px] xl:h-[900px]">
              <Swiper :pagination="pagination"
                      :slidesPerView="'auto'"
                      :modules="modules"
                      class="home-room-swiper-content w-full h-full">
                <SwiperSlide v-for="(item, key) in room.imageUrlList" :key="key">
                  <img :src="item" class="w-full h-full object-cover rounded-r-2 overflow-hidden" alt="Room Image">
                </SwiperSlide>
              </Swiper>
            </div>

            <div class="flex flex-col gap-6 lg:gap-10 grow justify-end pb-[80px] lg:pb-[96px]">
              <div class="text-white">
                <h3 class="text-7 lg:text-10 font-bold mb-2">{{ room.name }}</h3>
                <p class="text-3h lg:text-4">{{ room.description }}</p>
              </div>
              <p class="text-6 lg:text-8 font-bold">NT$ {{ format.toThousands(room.price) }}</p>
              <RouterLink :to="`/room/${room._id}`" class="flex flex-col gap-4">
                <button type="button" class="group rounded-2 bg-white p-5 lg:p-10 flex items-center justify-end text-6 font-bold text-neutral hover:bg-primary-100 hover:text-white duration-500">
                  立即訂房
                  <span class="block ms-4 w-[159px] group-hover:w-[120px] h-[1px] bg-neutral group-hover:bg-white duration-500"></span>
                </button>
              </RouterLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style lang="scss">
.home-room-swiper{
  &-navigation{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 34px;

    .swiper-button-prev,
    .swiper-button-next{
      width: 56px;
      height: 56px;
      left: auto;
      right: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-button-prev{
      margin-right: 68px;
    }
  }
}
</style>