<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import format from "@/mixins/format";
import RoomsBanner from "@/components/frontend/room/RoomsBanner.vue";
import RoomImageSwiper from "@/components/frontend/room/RoomImageSwiper.vue";
import RoomInfoBasic from "@/components/frontend/room/RoomInfoBasic.vue";

// 房型列表
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const { roomList } = storeToRefs(roomStore);
const getFrontRooms = roomStore.getFrontRooms;

onMounted(() => {
  getFrontRooms();
});
</script>

<template>
  <div class="bg-primary-10">
    <RoomsBanner />
    <section class="container mx-auto px-4 py-10 lg:py-[168px]">
      <div class="flex flex-col">
        <h2 class="mb-10 lg:mb-20 text-8 lg:text-12 text-primary-100 order-1">各種房型，任您挑選</h2>
        <p class="mb-2 lg:mb-4 text-3h lg:text-5 font-bold">房型選擇</p>
      </div>
      <div class="flex flex-col gap-12" v-if="roomList">
        <div v-for="item in roomList" :key="item._id" data-aos="fade-up" data-aos-once="true" class="flex flex-wrap lg:flex-row rounded-[24px] overflow-hidden bg-white duration-300">
          <div class="w-full lg:w-7/12">
            <div class="h-[200px] lg:h-[464px]">
              <RoomImageSwiper :images="item.imageUrlList" />
            </div>
          </div>
          <div class="w-full lg:w-5/12 p-4 lg:p-10 flex flex-col gap-6 lg:gap-10">
            <div>
              <h3 class="mb-2 text-7 lg:text-10 text-black">{{ item.name }}</h3>
              <p class="font-500 text-3h lg:text-4 text-justify">{{ item.description }}</p>
            </div>
            <RoomInfoBasic :info="item" />
            <span class="block w-full h-[2px] bg-gradient-to-r from-primary-100"></span>
            <div class="py-[13.5px] flex justify-between items-center">
              <p class="text-primary-100 text-4 lg:text-6 font-bold">NT$ {{ format.toThousands(item.price) }}</p>
              <RouterLink :to="`/room/${item._id}`">
                <span class="material-icons text-primary-100 text-6 block">arrow_forward</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
