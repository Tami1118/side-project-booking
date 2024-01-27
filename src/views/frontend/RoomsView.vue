<template>
  <div class="bg-primary-10">
    <div class="container mx-auto px-4">
      <div class="py-10 lg:py-[168px]">
        <p class="text-3h lg:text-5 mb-2 lg:mb-4 font-bold">房型選擇</p>
        <h2 class="text-8 lg:text-12 text-primary-100 mb-10 lg:mb-20">各種房型，任您挑選</h2>
        
        <div class="flex flex-col gap-12">
          <div class="flex flex-wrap lg:flex-row rounded-[24px] overflow-hidden bg-white duration-300" v-for="item in roomData" :key="item">
            <div class="w-full lg:w-7/12">
              <div class="h-[200px] lg:h-[464px]">
                <swiper class="room-list-swiper h-full"
                        :pagination="{ clickable: true }"
                        :navigation="{
                          nextEl: '.swiper-button-next',
                          prevEl: '.swiper-button-prev'
                        }"
                        :loop="true"
                        :modules="modules">

                  <div class="hidden lg:block">
                    <div class="swiper-button-prev bg-white text-block" style="height: 56px; width: 56px; border-radius: 100%">
                      <span class="material-icons text-black">keyboard_arrow_left</span>
                    </div>
                    <div class="swiper-button-next bg-white text-block" style="height: 56px; width: 56px; border-radius: 100%">
                      <span class="material-icons text-black">keyboard_arrow_right</span>
                    </div>
                  </div>

                  <swiper-slide v-for="imgList in item.imageUrlList" :key="imgList">
                    <img class="object-cover h-full w-full" :src="imgList" alt="room img">
                  </swiper-slide>
                </swiper>
              </div>
            </div>

            <div class="w-full lg:w-5/12 flex flex-col gap-6 lg:gap-10 p-4 lg:p-10">
              <div>
                <h3 class="text-7 lg:text-10 mb-2">{{item.name}}</h3>
                <p class="font-500 text-3h lg:text-4">{{item.description}}</p>
              </div>

              <div class="flex flex-wrap gap-2 lg:gap-4 pb-6 lg:pb-10 relative">
                <div class="p-4 h-[97px] aspect-square rounded-2 bg-white flex flex-col justify-between border border-primary-40">
                  <img src="/svg/zoom.svg" class="w-[24px] h-[24px]" alt="">
                  <p class="mt-2 text-3h lg:text-4 text-nowrap">{{item.areaInfo}}坪</p>
                </div>
                <div class="p-4 h-[97px] aspect-square rounded-2 bg-white flex flex-col justify-between border border-primary-40">
                  <img src="/svg/bed.svg" class="w-[24px] py-[5px]" alt="">
                  <p class="mt-2 text-3h lg:text-4 text-nowrap">{{item.bedInfo}}</p>
                </div>
                <div class="p-4 h-[97px] aspect-square rounded-2 bg-white flex flex-col justify-between border border-primary-40">
                  <img src="/svg/person.svg" class="w-[24px] h-[24px]" alt="">
                  <p class="mt-2 text-3h lg:text-4 text-nowrap">2-{{item.maxPeople}}人</p>
                </div>
                <span class="block absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-100"></span>
              </div>
              <div class="py-[13.5px] flex justify-between items-center">
                <p class="text-primary-100 text-4 lg:text-6 font-bold">NT$ {{item.price}}</p>
                <router-link :to="`/room/${item._id}`">
                  <span class="material-icons text-primary-100 text-6 block">arrow_forward</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const modules = [Pagination, Navigation];

import { onMounted } from "vue";
import { storeToRefs } from "pinia";

// room
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const getFrontRooms = roomStore.getFrontRooms;
const { roomData } = storeToRefs(roomStore);

onMounted(() => {
  getFrontRooms();
});
</script>