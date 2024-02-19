<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import RoomDetailImageSwiper from "@/components/frontend/room/RoomDetailImageSwiper.vue";
import RoomDetailBanner from "@/components/frontend/room/RoomDetailBanner.vue";
import RoomInfoMain from "@/components/frontend/room/RoomInfoMain.vue";
import ReserveRoom from "@/components/frontend/room/ReserveRoom.vue";

// 房型資訊
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const { roomDetail, roomLayout } = storeToRefs(roomStore);
const getFrontRoom = roomStore.getFrontRoom;

onMounted(() => {
  getFrontRoom();
})
</script>

<template>
  <main class="bg-primary-10" v-if="roomDetail">
    <!-- Banner -->
    <div aria-label="room-detail-banner">
      <div class="lg:hidden">
        <RoomDetailImageSwiper :image-list="roomDetail.imageUrlList" />
      </div>
      <div class="max-w-[1860px] mx-auto hidden lg:block px-2 py-20">
        <div v-if="roomDetail.imageUrlList">
          <RoomDetailBanner :image="roomDetail.imageUrl" :image-list="roomDetail.imageUrlList" />
        </div>
      </div>
    </div>

    <section class="container mx-auto px-4 sm:px-0 py-10 lg:py-30">
      <div class="lg:flex lg:content-between gap-18">
        
        <!-- 房型資訊 -->
        <div class="basis-full lg:basis-7/12">
          <div class="flex flex-col gap-6 lg:gap-20">
            <div>
              <h1 class="text-8 lg:text-12 text-black font-bold mb-4">{{ roomDetail.name }}</h1>
              <p class="text-3h lg:text-4 font-500">{{ roomDetail.description }}</p>
            </div>
            <RoomInfoMain :info="roomDetail" :layout="roomLayout" />
          </div>
        </div>

        <!-- 房型預定 -->
        <!-- <div class="hidden lg:block lg:basis-5/12 z-1"> -->
        <div class="hidden lg:block lg:basis-5/12 z-1">
          <div class="sticky top-[120px] rounded-5 bg-white p-10">
            <ReserveRoom :info="roomDetail" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

