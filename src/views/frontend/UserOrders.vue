<script setup lang="ts">
import { ref, onMounted, computed, watch, toRefs } from "vue"
import { storeToRefs } from "pinia"

// Components
import OrderRoomDetail from '@/components/frontend/OrderRoomDetail.vue';
import OrderRoomHistory from '@/components/frontend/OrderRoomHistory.vue';

// Order
import { useOrderStore } from "@/stores/orderStore"
const orderStore = useOrderStore()
const { orderList } = toRefs(orderStore)
const getFrontOrders = orderStore.getFrontOrders;

// 篩選歷史訂單
// 條件：
// 1. 狀態為 0(未刪除)
// 2. 排序 今日以後(即將到來)時間由近至遠；今日以前(已結束)的時間由遠至近
const filterList = computed(() => {
  // 篩選未被刪除訂單
  const isStatus = orderList.value.filter(order => order.status === 0);
  
  // 分別篩選出今日以後和今日以前的訂單
  const today = new Date(); // 取得今日日期
  const futureOrders = isStatus.filter(order => new Date(order.checkInDate) > today);
  const pastOrders = isStatus.filter(order => new Date(order.checkInDate) <= today);

  // 將今日以後的訂單由近至遠排序；今日以前的訂單由遠至近排序
  const sortedFutureOrders = futureOrders.sort((a, b) => new Date(a.checkInDate).getTime() - new Date(b.checkInDate).getTime());
  const sortedPastOrders = pastOrders.sort((a, b) => new Date(b.checkInDate).getTime() - new Date(a.checkInDate).getTime());

  // 將排序後的訂單合併為一個陣列
  const sortedOrders = [...sortedFutureOrders, ...sortedPastOrders];
  return sortedOrders;
});

// 點擊右邊任一訂單
const orderDetail = ref();
const selectOrder = (order: any) => {
  orderDetail.value = order;
};

// 查看更多
const visibleOrders = ref(filterList.value.slice(0, 3)); // 預設觀看前三筆
const showMoreOrders = () => {
  const currentVisible = visibleOrders.value.length;
  const nextIndex = currentVisible + 3;
  visibleOrders.value = filterList.value.slice(0, nextIndex);
};

// User
import { useUserStore } from "@/stores/userStore"
const userStore = useUserStore()
const { isChecked } = storeToRefs(userStore);

watch(isChecked, (n) => {
  if (n) getFrontOrders()
});

onMounted(async () => {
  await getFrontOrders();
  // 預設顯示最近一筆訂單
  if (filterList.value.length > 0) {
    orderDetail.value = filterList.value[0];
  }
})
</script>

<template>
  <div class="bg-neutral">
    <div class="h-[206px] lg:h-[384px] relative">
      <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
      <div class="absolute top-0 left-0 w-full h-full my-auto">
        <div class="container mx-auto h-full flex flex-col justify-center lg:flex-row lg:justify-start lg:items-center gap-4 lg:gap-6 px-4 sm:px-0 duration-300">
          <div class="w-[72px] h-[72px] lg:w-[144px] lg:h-[144px] rounded-full"></div>
          <h1 class="text-white text-8 lg:text-12">Hello，</h1>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4 sm:px-0 py-10 lg:py-20">
      <div class="mb-10">
        <router-link to="/user" class="py-4 px-6 text-white">個人資料</router-link>
        <router-link to="/user-order" class="py-4 px-6 text-white">我的訂單</router-link>
      </div>

      <div class="flex flex-col lg:flex-row gap-10">
        
        <!-- left: 訂單詳細資訊 -->
        <div class="basis-full lg:basis-7/12 bg-white rounded-[20px] p-4 lg:p-10 flex flex-col gap-6 lg:gap-10 h-fit duration-300">
          <div v-if="!orderDetail" class="flex flex-col justify-center items-center pb-12">
            <h2 class="mb-6 lg:mb-10 text-4 lg:text-6 me-auto">行程詳細內容</h2>
            <p class="text-primary-100 lg:text-6 font-bold mb-6">尚未有任何訂單</p>
            <router-link to="/room" class="btn btn-primary">訂房去</router-link>
          </div>
          <div v-else>
            <OrderRoomDetail :order="orderDetail" />
          </div>
        </div>

        <!-- right: 歷史訂單記錄 -->
        <div class="basis-full lg:basis-5/12 bg-white rounded-[20px] flex flex-col h-fit duration-300">
          <h2 class="text-4 lg:text-5 px-4 lg:px-10 pt-4 lg:pt-10 pb-6 lg:pb-10">歷史訂單</h2>
          <div v-if="!orderList" class="flex flex-col justify-center items-center py-12">
            <p class="text-primary-100 lg:text-6 font-bold">尚未有歷史記錄</p>
          </div>
          <div v-else>
            <OrderRoomHistory :order-list="visibleOrders" @detail-selected="selectOrder" />
            <div class="p-4 lg:p-10">
              <button v-if="visibleOrders.length < filterList.length" class="btn btn-secondary w-full" @click="showMoreOrders()">查看更多</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
