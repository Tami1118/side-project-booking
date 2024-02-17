<script setup lang="ts">
import format from "@/mixins/format";
import RoomInfoProvide from "@/components/frontend/room/RoomInfoProvide.vue"

const { order, price } = defineProps(["order", "price"])
</script>

<template>
  <div class="bg-white rounded-5 p-4 lg:p-10">
    <div class="flex flex-col gap-6 lg:gap-10" v-if="order">
      <div>
        <p class="text-neutral-60 mb-2 text-3h lg:text-4">預定參考編號：{{ order._id }}</p>
        <h3 class="text-4 lg:text-6">即將來的行程</h3>
      </div>
      <img class="h-[200px] w-full rounded-5 object-cover" :src="order.roomId.imageUrl" :alt="order.roomId.name">
      <div class="flex flex-col gap-6 text-3h lg:text-4 text-neutral-80 font-bold pb-6 border-b border-neutral-40">
        <div class="flex gap-4 lg:text-5">
          <p class="pe-4 border-r border-neutral-60">{{ order.roomId.name }}，{{ format.getNightNum(order.checkInDate, order.checkOutDate) }}晚</p>
          <p>住宿人數：{{ order.peopleNum }} 位</p>
        </div>
        <div>
          <div class="title-deco ps-4 mb-2">入住：{{ format.getTradDateSecondary(order.checkInDate) }}，15:00 可入住</div>
          <div class="title-deco ps-4">退房：{{ format.getTradDateSecondary(order.checkOutDate) }}，12:00 前退房</div>
        </div>
        <div>NT$ {{ format.toThousands(price) }}</div>
      </div>
      <div>
        <h3 class="title-deco text-3h lg:text-4 ps-4 mb-6">房內設備</h3>
        <RoomInfoProvide :info="order.roomId.amenityInfo" />
      </div>
      <div>
        <h3 class="title-deco text-3h lg:text-4 ps-4 mb-6">備品提供</h3>
        <RoomInfoProvide :info="order.roomId.facilityInfo" />
      </div>
    </div>
  </div>
</template>