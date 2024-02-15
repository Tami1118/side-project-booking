<script setup lang="ts">
import { storeToRefs } from "pinia";

import format from "@/mixins/format";
import BookingDatePick from "@/components/widgets/BookingDatePick.vue";

const { info } = defineProps(["info"]);

// 預定日期
import { useDateStore } from "@/stores/dateStore";
const dateStore = useDateStore();
const { reserveDateRange, sameDate, nightNum } = storeToRefs(dateStore);
const setStorageDate = dateStore.setStorageDate;

// 人數選擇
import { useOrderStore } from "@/stores/orderStore";
const orderStore = useOrderStore();
const { peopleNum } = storeToRefs(orderStore);
const setStoragePeople = orderStore.setStoragePeople;

// 開啟日期modal
import { useModalStore } from "@/stores/modalStore";
const modalStore = useModalStore();
const openModal = modalStore.openModal;

// Route
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>

<template>
  <div class="flex flex-col gap-10">
    <!-- 房型資訊 -->
    <h2 class="text-6 text-black font-bold pb-4 border-b border-neutral-40">預定房型</h2>
    <div>
      <p class="text-10 font-bold text-black mb-2">{{ info.name }}</p>
      <p class="font-500">{{ info.description }}</p>
    </div>

    <!-- 預約日期選擇 -->
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
    <BookingDatePick />

    <!-- 人數選擇 -->
    <div class="flex items-center">
      <p class="font-bold">人數</p>
      <div class="ms-auto">
        <div>
          <button class="group rounded-full w-[56px] aspect-square p-4 border border-neutral-40 hover:bg-primary-100 active:bg-primary disabled:bg-neutral-10" @click="peopleNum--" :disabled="peopleNum === 1">
            <font-awesome-icon icon="fa-solid fa-minus" class="group-hover:text-white group-active:text-white group-disabled:text-black" />
          </button>
          <input type="number" v-model="peopleNum" class="w-[48px] mx-4 text-center text-5 bg-white" disabled>
          <button class="group rounded-full w-[56px] aspect-square p-4 border border-neutral-40 hover:bg-primary-100 active:bg-primary disabled:bg-neutral-10" @click="peopleNum++" :disabled="peopleNum === info?.maxPeople">
            <font-awesome-icon icon="fa-solid fa-plus" class="group-hover:text-white group-active:text-white group-disabled:text-black" />
          </button>
        </div>
        <p v-if="peopleNum === info?.maxPeople" class="text-alert-120 text-center">房間最多 {{ info?.maxPeople }} 人</p>
      </div>
    </div>

    <!-- 金額小計 -->
    <div class="text-6 text-primary-100 font-bold">NT$ {{ format.toThousands(nightNum * info?.price) }}</div>

    <button @click="setStoragePeople(), setStorageDate(), router.push(`/booking/${route.params.id}`)" class="btn btn-primary disabled:bg-neutral-40" :disabled="sameDate">立即預訂</button>
  </div>
</template>