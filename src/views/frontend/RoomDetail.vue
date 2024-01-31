<template>
  <section class="bg-primary-10" v-if="roomDetail">
    <!-- Banner -->
    <div aria-label="room-detail-banner">
      <div class="lg:hidden">
        <RoomDetailImageSwiper :image-list="roomDetail.imageUrlList" />
      </div>
      <div class="max-w-[1860px] mx-auto hidden lg:block px-2 py-20">
        <div v-if="roomDetail.imageUrlList">
          <RoomDetailBanner :image-list="roomDetail.imageUrlList" />
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-0 py-10 lg:py-30">
      <div class="lg:flex lg:content-between gap-18">

        <!-- 客房詳細資訊 -->
        <div class="basis-full lg:basis-7/12">
          <div class="flex flex-col gap-6 lg:gap-20">
            <div>
              <h1 class="text-8 lg:text-12 text-black font-bold mb-4">{{ roomDetail.name }}</h1>
              <p class="text-3h lg:text-4 font-500">{{ roomDetail.description }}</p>
            </div>
            <RoomInfoMain />
            <div>
              <RoomInfoTitle title="訂房須知" />
              <RoomInfoRegulation />
            </div>
          </div>
        </div>

        <!-- 預定房型 -->
        <div class="hidden lg:block lg:basis-5/12">
          <div class="sticky top-[120px] rounded-5 bg-white p-10">
            <div class="flex flex-col gap-10">
              <h2 class="text-6 text-black font-bold pb-4 border-b border-neutral-40">預定房型</h2>
              <div>
                <p class="text-10 font-bold text-black mb-2">{{ roomDetail.name }}</p>
                <p class="text-netural-80 font-500">{{ roomDetail.description }}</p>
              </div>
              <!-- <BookingDatePick /> -->
              <!-- <BookingPeople /> -->
              <p class="text-primary-100 text-6 font-bold">NT$ {{ $formats.toThousands(roomDetail.price) }}</p>
              <!-- <router-link :to="`/booking/${route.params.id}`" @click="setPeopleNum" class="btn btn-primary">立即預訂</router-link> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Basic
import { onMounted, getCurrentInstance } from "vue";
import { storeToRefs } from "pinia";

// Components
import RoomDetailImageSwiper from "@/components/frontend/RoomDetailImageSwiper.vue";
import RoomDetailBanner from "@/components/frontend/RoomDetailBanner.vue";
import RoomInfoTitle from "@/components/frontend/RoomInfoTitle.vue";
import RoomInfoMain from "@/components/frontend/RoomInfoMain.vue";
import RoomInfoRegulation from "@/components/frontend/RoomInfoRegulation.vue";
// import BookingDatePick from "@/components/widgets/BookingDatePick.vue";
// import BookingPeople from "@/components/frontend/BookingPeople.vue";

// Room
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const { roomDetail } = storeToRefs(roomStore);
const getFrontRoom = roomStore.getFrontRoom;

// Route
// import { useRoute } from "vue-router";
// const route = useRoute();

// Formats
const instance = getCurrentInstance();
type Formats = Record<string, Function>;
const $formats: Formats = instance?.appContext.config.globalProperties.$formats || {};

// Action
onMounted(() => {
  getFrontRoom()
})
</script>
