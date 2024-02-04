<script setup lang="ts">
// Basic
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

// Components
import RoomDetailImageSwiper from "@/components/frontend/RoomDetailImageSwiper.vue";
import RoomDetailBanner from "@/components/frontend/RoomDetailBanner.vue";
import RoomInfoTitle from "@/components/frontend/RoomInfoTitle.vue";
import RoomInfoMain from "@/components/frontend/RoomInfoMain.vue";
import RoomInfoRegulation from "@/components/frontend/RoomInfoRegulation.vue";
import BookingDatePick from "@/components/widgets/BookingDatePick.vue";
// import BookingPeople from "@/components/frontend/BookingPeople.vue";

// Room
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const { roomDetail, roomLayout } = storeToRefs(roomStore);
const getFrontRoom = roomStore.getFrontRoom;

// CheckDate
import { useDateStore } from "@/stores/dateStore"
const dateStore = useDateStore()
const { reserveDateRange, sameDate } = storeToRefs(dateStore)
const setStorageDate = dateStore.setStorageDate;

// Order
import { useOrderStore } from "@/stores/orderStore"
const orderStore = useOrderStore()
const { peopleNum } = storeToRefs(orderStore)
const setStoragePeople = orderStore.setStoragePeople

// Open/Close Modal
import { useModalStore } from "@/stores/modalStore.js";
const modalStore = useModalStore();
const openModal = modalStore.openModal;

// Route
import { useRoute, useRouter } from "vue-router"
const route = useRoute()
const router = useRouter()

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

        <div class="basis-full lg:basis-7/12">
          <div class="flex flex-col gap-6 lg:gap-20">
            <div>
              <h1 class="text-8 lg:text-12 text-black font-bold mb-4">{{ roomDetail.name }}</h1>
              <p class="text-3h lg:text-4 font-500">{{ roomDetail.description }}</p>
            </div>
            <RoomInfoMain :info="roomDetail" :layout="roomLayout" />
            <div>
              <RoomInfoTitle title="訂房須知" />
              <RoomInfoRegulation />
            </div>
          </div>
        </div>

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
                  <p class="text-black">{{ reserveDateRange.startDate }}</p>
                </div>
                <div class="grow border border-neutral-100 rounded-2 p-4 font-500">
                  <p class="text-3">退房</p>
                  <p class="text-black">{{ reserveDateRange.endDate }}</p>
                </div>
              </div>

              <div>
                <BookingDatePick />
                <div class="flex items-center">
                  <p>人數</p>
                  <div class="ms-auto">
                    <div>
                      <button class="group rounded-full w-[56px] aspect-square p-4 border border-neutral-40 hover:bg-primary-100 active:bg-primary disabled:bg-neutral-10" @click="peopleNum--" :disabled="peopleNum === 1">
                        <font-awesome-icon icon="fa-solid fa-minus" class="group-hover:text-white group-active:text-white group-disabled:text-black" />
                      </button>
                      <input type="number" v-model="peopleNum" class="w-[48px] mx-4 text-center text-5 bg-white" disabled>
                      <button class="group rounded-full w-[56px] aspect-square p-4 border border-neutral-40 hover:bg-primary-100 active:bg-primary disabled:bg-neutral-10" @click="peopleNum++" :disabled="peopleNum === roomDetail?.maxPeople">
                        <font-awesome-icon icon="fa-solid fa-plus" class="group-hover:text-white group-active:text-white group-disabled:text-black" />
                      </button>
                    </div>
                    <p v-if="peopleNum === roomDetail?.maxPeople" class="text-alert-120 text-center">房間最多{{ roomDetail?.maxPeople }} 人</p>
                  </div>
                </div>
              </div>
              <!-- <p class="text-primary-100 text-6 font-bold">NT$ {{ $format.toThousands(roomDetail.price * nightNum) }}</p> -->
              <button @click="setStoragePeople(), setStorageDate(), router.push(`/booking/${route.params.id}`)" class="btn btn-primary disabled:bg-neutral-40" :disabled="sameDate">立即預訂</button>
              <!-- <button @click="setPeopleNum">人數</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

