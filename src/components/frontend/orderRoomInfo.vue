<script setup lang="ts">
import { getTradDateFormat, getNightNum } from '@/mixins/format';
import RoomInfoProvide from '@/components/frontend/RoomInfoProvide.vue';
const props = defineProps(["order"])
</script>

<template>
  <div class="bg-white rounded-5 p-4 lg:p-10">
    <div class="flex flex-col gap-6 lg:gap-10" v-if="props.order">
      <div>
        <p class="text-neutral-60 mb-2 text-3h lg:text-4">預定參考編號：{{ props.order._id }}</p>
        <h3 class="text-4 lg:text-6">即將來的行程</h3>
      </div>
      <img class="h-[200px] w-full rounded-5 object-cover" src="https://images.unsplash.com/photo-1705917677386-d6e882e29e6e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
      <div class="flex flex-col gap-6 text-3h lg:text-4 text-neutral-80 font-bold pb-6 border-b border-neutral-40">
        <div class="flex gap-4 lg:text-5">
          <p class="pe-4 border-r border-neutral-60">{{ props.order.roomId.name }}，{{ getNightNum(props.order?.checkInDate, props.order?.checkOutDate) }}晚</p>
          <p>住宿人數：{{ props.order.peopleNum }} 位</p>
        </div>
        <div>
          <div class="title-deco ps-4 mb-2">入住：{{ getTradDateFormat(props.order.checkInDate) }}，15:00 可入住</div>
          <div class="title-deco ps-4">退房：{{ getTradDateFormat(props.order.checkOutDate) }}，12:00 前退房</div>
        </div>
        <div>NT$ {{ props.order.roomId.price }}</div>
      </div>
      <div>
        <h3 class="title-deco text-3h lg:text-4 ps-4 mb-6">房內設備</h3>
        <RoomInfoProvide :info="props.order.roomId.amenityInfo" />
      </div>
      <div>
        <h3 class="title-deco text-3h lg:text-4 ps-4 mb-6">備品提供</h3>
        <RoomInfoProvide :info="props.order.roomId?.facilityInfo" />
      </div>
    </div>
  </div>
</template>