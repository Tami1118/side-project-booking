
<script setup>
import { ref, onMounted, computed } from "vue"
import { storeToRefs } from "pinia"

// Components
import OrderRoomDetail from '@/components/frontend/OrderRoomDetail.vue';
import OrderRoomHistory from '@/components/frontend/OrderRoomHistory.vue';

// Order
import { useOrderStore } from "@/stores/orderStore"
const orderStore = useOrderStore()
const { orderList } = storeToRefs(orderStore)
const getFrontOrders = orderStore.getFrontOrders;



// (左邊) 即將到來訂單(第一筆)
// 1. 預設：顯示即將到來訂單最近一筆訂單
// 2. 點擊右邊歷史訂單顯示於此
// 3. 尚未過期顯示取消訂單，已過期則 disabled
// const featureOrderList = computed(() => {
//   const today = new Date().setHours(15, 0, 0, 0)
//   const isStatus = orderList.value.filter(order => order.status === 0)
//   const filterList = isStatus.filter(order => new Date(order.checkInDate).getTime() > today)
//   const sortList = filterList.sort((a, b) => new Date(a.checkInDate) - new Date(b.checkInDate))
//   return sortList
// })

// (右邊) 歷史訂單
// 1. 訂單排序
// - 未取消（由近至遠）
//   - 未過期
//   - 已過期
// - 已取消 => 不顯示
// 2. 點擊後顯示於左邊
const historyOrderList = computed(() => {
  const today = new Date().setHours(15, 0, 0, 0)
  const isStatus = orderList.value.filter(order => order.status === 0)
  const filterList = isStatus.filter(order => new Date(order.checkInDate).getTime() < today)
  const sortList = filterList.sort((a, b) => new Date(a.checkInDate) - new Date(b.checkInDate))
  return sortList
})


const featureOrder = ref([])
const getfeatureOrderList = () => {
  const today = new Date().setHours(15, 0, 0, 0)
  const isStatus = orderList.value.filter(order => order.status === 0)
  const filterList = isStatus.filter(order => new Date(order.checkInDate).getTime() > today)
  const sortList = filterList.sort((a, b) => new Date(a.checkInDate) - new Date(b.checkInDate))
  featureOrder.value = sortList
  console.log('測試取得訂單',featureOrder.value)
  // return featureOrder.value
}

// const testOrder = ref({})
// const getTestOrderList = () => {
//   const today = new Date().setHours(15, 0, 0, 0)
//   const isStatus = orderList.value.filter(order => order.status === 0)
//   const filterList = isStatus.filter(order => new Date(order.checkInDate).getTime() > today)
//   const sortList = filterList.sort((a, b) => new Date(a.checkInDate) - new Date(b.checkInDate))
//   testOrder.value = sortList[0]
//   console.log('測試取得訂單2',testOrder.value)
//   // return featureOrder.value
// }


// User
// import { useUserStore } from "@/stores/userStore"
// const userStore = useUserStore()
// const { isChecked } = storeToRefs(userStore);

// watch(orderList, (n) => {
//   if (n) getfeatureOrderList()
//   getTestOrderList()
// });

onMounted(async () => {
  await getFrontOrders();
  getfeatureOrderList()
})

// watch(isChecked, async (n) => {
//   if (n) {
//     await getFrontOrders()
//     getfeatureOrderList()
//   }
// });

</script>

<template>
  <div>
  </div>
  <div class="bg-neutral-100">
    <div class="h-[206px] lg:h-[384px] relative">
      <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
      <div class="absolute top-0 left-0 w-full h-full my-auto">
        <div class="container mx-auto h-full flex flex-col justify-center lg:flex-row lg:justify-start lg:items-center gap-4 lg:gap-6 px-4 sm:px-0 duration-300">
          <div class="w-[72px] h-[72px] lg:w-[144px] lg:h-[144px] rounded-full"></div>
          <h1 class="text-white text-8 lg:text-12">Hello，Jessica</h1>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4 sm:px-0 py-10 lg:py-20">
      <div class="mb-10">
        <router-link to="/user" class="py-4 px-6 text-white">個人資料</router-link>
        <router-link to="/user-order" class="py-4 px-6 text-white">我的訂單</router-link>
      </div>


      <div class="flex flex-col lg:flex-row gap-10">
        <div class="basis-full lg:basis-7/12 bg-white rounded-[20px] p-4 lg:p-10 flex flex-col gap-6 lg:gap-10 h-fit duration-300">
          <!-- {{ featureOrder }} -->
          <div v-if="!orderList" class="flex flex-col justify-center items-center py-12">
            <h2 class="mb-6 lg:mb-10 text-4 lg:text-6 me-auto">即將來的行程</h2>
            <p class="text-primary-100 lg:text-6 font-bold mb-6">尚未有即將到來的訂單</p>
            <router-link to="/room" class="btn btn-primary">訂房去</router-link>
          </div>
          <div v-else>
            <OrderRoomDetail :order="featureOrder[0]" />
          </div>
        </div>

        <div class="basis-full lg:basis-5/12 bg-white rounded-[20px] p-4 lg:p-10 flex flex-col gap-6 lg:gap-10 h-fit duration-300">
          <h2 class="text-4 lg:text-5">歷史訂單</h2>
          <div v-if="!orderList" class="flex flex-col justify-center items-center py-12">
            <p class="text-primary-100 lg:text-6 font-bold">尚未有歷史記錄</p>
          </div>
          <div v-else>
            <OrderRoomHistory :order-list="featureOrder" />
            <OrderRoomHistory class="text-neutral-60 mt-6 lg:mt-10" :order-list="historyOrderList" />
            <button class="btn btn-secondary mt-10 w-full">查看更多</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
