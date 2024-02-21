<script setup lang="ts">
import { storeToRefs } from "pinia";

import format from "@/mixins/format";
import RoomInfoProvide from "@/components/frontend/room/RoomInfoProvide.vue";

const { order } = defineProps(["order"]);

// 取消訂單modal
import { useModalStore } from "@/stores/modalStore";
const modalStore = useModalStore();
const { isModalOpen } = storeToRefs(modalStore);
const openModal = modalStore.openModal;
const closeModal = modalStore.closeModal;

// 取消訂單
import { useOrderStore } from "@/stores/orderStore";
const orderStore = useOrderStore();
const deleteFrontOrder = orderStore.deleteFrontOrder;

// router
import { useRouter } from "vue-router";
const router = useRouter();

// 標題：
//   今日之後-即將到來的行程
//   今日之前-已結束的行程
// 取消按鈕：
//   今日之後-可點選取消按鈕
//   今日之前-不可點選取消按鈕
</script>

<template>
  <div class="flex flex-col gap-6 lg:gap-10" v-if="order">
    <div>
      <p class="text-neutral-60 mb-2 text-3h lg:text-4">預定參考編號：{{ order._id }}</p>
      <h2 v-if="order.status === 0" class="text-4 lg:text-6">{{ new Date(order.checkInDate) > new Date() ? '即將來的行程' : '已結束行程' }}</h2>
      <h2 v-else class="text-4 lg:text-6">已取消的行程</h2>
    </div>
    <img class="h-[200px] w-full rounded-5 object-cover" :src="order.roomId.imageUrl" :alt="order.roomId.name">
    <div class="flex flex-col gap-6 text-3h lg:text-4 text-neutral-80 font-bold pb-6 border-b border-neutral-40">
      <div class="flex gap-4 lg:text-5">
        <p class="pe-4 border-r border-neutral-60">{{ order.roomId.name }}，{{ format.getNightNum(order.checkInDate, order.checkOutDate) }} 晚</p>
        <p>住宿人數：{{ order.peopleNum }} 位</p>
      </div>
      <div>
        <div class="title-deco ps-4 mb-2">入住：{{ format.getTradDateSecondary(order.checkInDate) }}，15:00 可入住</div>
        <div class="title-deco ps-4">退房：{{ format.getTradDateSecondary(order.checkOutDate) }}，12:00 前退房</div>
      </div>
      <div>NT$ {{ format.toThousands(order.roomId.price) }}</div>
    </div>
    <div>
      <h3 class="title-deco text-3h lg:text-4 ps-4 mb-6 text-neutral">房內設備</h3>
      <RoomInfoProvide :info="order.roomId.amenityInfo" />
    </div>
    <div>
      <h3 class="title-deco text-3h lg:text-4 ps-4 mb-6 text-neutral">備品提供</h3>
      <RoomInfoProvide :info="order.roomId.facilityInfo" />
    </div>
    <div class="flex gap-3">
      <button class="grow btn btn-secondary" v-if="new Date(order.checkInDate) > new Date() && order.status === 0" @click="openModal()">取消訂單</button>
      <button class="grow btn btn-primary" @click="router.push(`/room/${order.roomId._id}`)">查看詳情</button>
    </div>
  </div>

  <div v-if="isModalOpen" class="fixed top-0 left-0 bg-black/40 backdrop-blur-sm w-full h-full z-10 flex justify-center items-center">
    <div class="bg-white rounded-2 relative">
      <font-awesome-icon @click="closeModal()" icon="fa-solid fa-xmark" class="absolute top-0 right-0 text-4 m-[18px] cursor-pointer" />
      <p class="px-[164px] py-[100px] text-5 font-bold">
        確定要取消此房型的預約嗎？
      </p>
      <div class="p-3 flex gap-4 border-t border-neutral-40">
        <button class="btn btn-secondary w-full" @click="closeModal()">關閉視窗</button>
        <button class="btn btn-primary w-full" @click="deleteFrontOrder(order._id), closeModal()">確定取消</button>
      </div>
    </div>
  </div>
</template>