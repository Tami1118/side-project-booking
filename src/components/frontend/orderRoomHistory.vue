<script setup lang="ts">
import format from "@/mixins/format";

const { orderList } = defineProps(["orderList"]);

// 點擊訂單後顯示於左邊
const emit = defineEmits(['detail-selected']); // 值傳至父元件
const viewDetail = (item: any) => {
  emit('detail-selected', item);
}

// 點擊後自動待到訂單詳細資訊高度
const goTop = () => {
  let scrollDistance;
  if (window.innerWidth <= 1024) {
    scrollDistance = 0.45 * window.innerHeight;
  } else {
    scrollDistance = 0.55 * window.innerHeight;
  }
  window.scrollTo({
    top: scrollDistance,
    behavior: "smooth"
  });
}
</script>

<template>
  <ul class="flex flex-col">
    <li v-for="order in orderList" :key="`${order._id}${order.status}`">
      <div @click="viewDetail(order), goTop()" class="px-4 lg:px-10 pt-4 lg:pt-10 hover:bg-neutral-40 cursor-pointer" :class="new Date(order.checkInDate) <= new Date() ? 'text-neutral-60' : ''">
        <div class="flex gap-6 flex-col lg:flex-row pb-4 lg:pb-10 border-b border-neutral-40">
          <img class="h-[80px] w-[120px] object-cover object-center rounded-2" :src="order.roomId.imageUrl" alt="">
          <div class="flex flex-col gap-4 text-3h lg:text-4 grow">
            <p>預定參考編號：{{ order._id }}</p>
            <h3 class="text-4 lg:text-6 font-bold">{{ order.roomId.name }}</h3>
            <div>
              <p class="mb-2">住宿天數：{{ format.getNightNum(order.checkInDate, order.checkOutDate) }}晚</p>
              <p>住宿人數：{{ order.peopleNum }}位</p>
            </div>
            <div>
              <p class="title-deco ps-4 mb-2">入住：{{ format.getTradDateSecondary(order.checkInDate) }}</p>
              <p class="title-deco ps-4">退房：{{ format.getTradDateSecondary(order.checkOutDate) }}</p>
            </div>
            <p class="font-bold">NT$ {{ format.toThousands(order.roomId.price * format.getNightNum(order.checkInDate, order.checkOutDate)) }}</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>