<script setup lang="ts">
// Basic
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { getLocalDateFormat } from "@/mixins/format"
import { toThousands } from "@/mixins/format";

// Components
import RoomDetailImageSwiper from "@/components/frontend/RoomDetailImageSwiper.vue";
import RoomDetailBanner from "@/components/frontend/RoomDetailBanner.vue";
import RoomInfoTitle from "@/components/frontend/RoomInfoTitle.vue";
import RoomInfoMain from "@/components/frontend/RoomInfoMain.vue";
import RoomInfoRegulation from "@/components/frontend/RoomInfoRegulation.vue";
import BookingDatePick from "@/components/widgets/BookingDatePick.vue";
import BookingPeople from "@/components/frontend/BookingPeople.vue";

// Room
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const { roomDetail } = storeToRefs(roomStore);
const getFrontRoom = roomStore.getFrontRoom;

// CheckDate
const reserveDateRange = ref({
  start: new Date(),
  end: new Date()
});
const catchData = (data) => {
  reserveDateRange.value = data;
};

// Open/Close Modal
import { useModalStore } from "@/stores/modalStore.js";
const modalStore = useModalStore();
const openModal = modalStore.openModal;

// Action
onMounted(() => {
  getFrontRoom()
})
</script>

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
        <div class="hidden lg:block lg:basis-5/12 z-1">
          <div class="sticky top-[120px] rounded-5 bg-white p-10">
            <div class="flex flex-col gap-10">
              <h2 class="text-6 text-black font-bold pb-4 border-b border-neutral-40">預定房型</h2>
              <div>
                <p class="text-10 font-bold text-black mb-2">{{ roomDetail.name }}</p>
                <p class="text-netural-80 font-500">{{ roomDetail.description }}</p>
              </div>
              <div class="flex gap-3" @click="openModal()">
                <div class="grow border border-neutral-100 rounded-2 p-4 font-500">
                  <p class="text-3">入住</p>
                  <p class="text-black">{{ getLocalDateFormat(reserveDateRange.start) }}</p>
                </div>
                <div class="grow border border-neutral-100 rounded-2 p-4 font-500">
                  <p class="text-3">退房</p>
                  <p class="text-black">{{ getLocalDateFormat(reserveDateRange.end) }}</p>
                </div>
              </div>

              <div>
                <BookingDatePick @getReserveDate="catchData" />
                <BookingPeople />
              </div>
              <p class="text-primary-100 text-6 font-bold">NT$ {{ toThousands(roomDetail.price) }}</p>
              <!-- <router-link :to="`/booking/${route.params.id}`" @click="setPeopleNum" class="btn btn-primary">立即預訂</router-link> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

