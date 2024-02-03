<script setup>
// Basis
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { getTradDateFormat } from "@/mixins/format";

// Components
import RoomInfoMain from "@/components/frontend/RoomInfoMain.vue";
import BookingForm from "@/components/frontend/BookingForm.vue";

// Room
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const { roomDetail, roomLayout } = storeToRefs(roomStore);
const getFrontRoom = roomStore.getFrontRoom;

// Booking
import { useDateStore } from "@/stores/dateStore";
const dateStore = useDateStore()
const { reserveDateRange } = storeToRefs(dateStore)

// Order
import { useOrderStore } from "@/stores/orderStore";
const orderStore = useOrderStore();
const createOrder = orderStore.createOrder;


// Route
import { useRoute } from "vue-router"
const route = useRoute()

// Action
onMounted(() => {
  getFrontRoom();
});
</script>

<template>
  <div class="bg-primary-10" v-if="roomDetail">
    <div class="container mx-auto px-4 sm:px-0 py-10 lg:py-30">
      <div class="lg:flex lg:justify-between gap-18">

        <div class="basis-full lg:basis-7/12 mb-10 lg:mb-0">
          <router-link :to="`/room/${route.params.id}`" class="text-6 lg:text-8 mb-[42px] flex items-center">
            <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-6 lg:text-8 me-2" />確認訂房資訊
          </router-link>

          <div>
            <h2 class="text-5 lg:text-7 mb-8 lg:mb-10">訂房資訊</h2>
            <div class="flex flex-col gap-6 pb-10 mb-10 lg:pb-[47px] lg:mb-[47px] border-b border-neutral-60">
              <div class="flex items-center">
                <div>
                  <h3 class="title-deco ps-4 text-4 mb-2">選擇房型</h3>
                  <p>{{ roomDetail.name }}</p>
                </div>
              </div>
              <div class="flex items-center">
                <div>
                  <h3 class="title-deco ps-4 text-4 mb-2">訂房日期</h3>
                  <p class="mb-2">入住：{{ $format.getTradDateFormat(reserveDateRange.startDate) }}</p>
                  <p>退房：{{ $format.getTradDateFormat(reserveDateRange.endDate) }}</p>
                </div>
                <router-link :to="`/room/${route.params.id}`" class="underline ms-auto hover:text-primary-100">編輯</router-link>
              </div>
              <div class="flex items-center">
                <div>
                  <h3 class="title-deco ps-4 text-4 mb-2">房客人數</h3>
                  <p>{{ }}人</p>
                </div>
                <router-link :to="`/room/${route.params.id}`" class="underline ms-auto hover:text-primary-100">編輯</router-link>
              </div>
            </div>
          </div>

          <!-- 訂房人資訊 -->
          <div class="pb-10 mb-10 lg:pb-[47px] lg:mb-[47px] border-b border-neutral-60">
            <div class="flex mb-8 lg:mb-10">
              <h2 class="text-5 lg:text-7">訂房人資訊</h2>
              <button class="btn-text ms-auto underline">套用會員資料</button>
            </div>
            <BookingForm />
          </div>

          <!-- 房間資訊 -->
          <div>
            <div class="mb-8 lg:mb-10">
              <h2 class="text-5 lg:text-7 text-black">房間資訊</h2>
            </div>
            <div class="flex flex-col gap-6">
              <RoomInfoMain :info="roomDetail" :layout="roomLayout" />
            </div>
          </div>
        </div>

        <div class="basis-full lg:basis-5/12">
          <div class="sticky top-[120px]">
            <div class="bg-white p-6 lg:p-10 rounded-[20px]">
              <div class="flex flex-col gap-6 lg:gap-10">
                <img :src="roomDetail.imageUrl" class="rounded-2" alt="">

                <div class="flex flex-col gap-6">
                  <h2 class="text-7">價格詳情</h2>
                  <div class="flex flex-col gap-4">
                    <div class="flex">
                      <p>NT$ {{ roomDetail.price }} <span class="material-icons text-4">close</span> {{ }} 晚</p>
                      <p class="ms-auto">NT$ {{ roomDetail.price }}</p>
                    </div>
                    <div class="flex pb-4 border-b border-neutral-40">
                      <p>住宿折扣</p>
                      <p class="ms-auto text-primary-100">NT$ {{ roomDetail.discount ? "roomDetail.discount" : 0 }}</p>
                    </div>
                    <div class="flex">
                      <p class="font-bold">總價</p>
                      <p class="font-bold ms-auto"> NT$ {{ roomDetail.price }}</p>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-primary text-bold" @click="createOrder()">確認訂房</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <bookingLoading /> -->
</template>



