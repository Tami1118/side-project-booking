<template>
  <div class="container mx-auto px-4 xl:px-0 py-10 lg:py-20">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-6">訂單管理</h1>
    </div>
    <table class="w-full">
      <thead>
        <tr class="border-y border-neutral-40">
          <th class="p-2">訂單日期</th>
          <th class="p-2">姓名</th>
          <th class="p-2">房型</th>
          <th class="p-2">入住</th>
          <th class="p-2">退房</th>
          <th class="p-2">管理</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orderList" :key="item._id" class="border-b border-neutral-40">
          <td class="p-2">{{ dataFormat(item.createdAt) }}</td>
          <td class="p-2">{{ item.userInfo.name }}</td>
          <td class="p-2">{{ item.roomId.name }}</td>
          <td class="p-2">{{ dataFormat(item.checkInDate) }}</td>
          <td class="p-2">{{ dataFormat(item.checkOutDate) }}</td>
          <td class="p-2">
            <div class="flex gap-2">
              <button class="p-3 btn-primary" @click="tempOrder = JSON.parse(JSON.stringify(item))">編輯</button>
              <!-- 沒有單一訂單，要如何打開？ -->
              <button class="p-3 btn-secondary" @click="deleteOrder(item._id)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6" class="text-end border-y border-neutral-40">
            共 {{ orderList.length }} 筆資料
          </td>
        </tr>
      </tfoot>
    </table>
  </div>

  <div class="container mx-auto px-4 xl:px-0">
    <div class="flex flex-col gap-6">
      <button @click="deleteOrder('')">刪除訂單</button>
      {{tempOrder}}
      <!-- <div>
        <label for="">訂房人姓名</label>
        <input type="text" class="form-input" v-model="tempOrder.userInfo.name">
      </div>
      <div>
        <label for="">電子信箱</label>
        <input type="email" class="form-input" v-model="tempOrder.userInfo.email">
      </div>
      <div>
        <label for="">聯絡電話</label>
        <input type="text" class="form-input" v-model="tempOrder.userInfo.phone">
      </div>
      <div>
        <label for="">地址</label>
        <input type="text" class="form-input" v-model="tempOrder.userInfo.address.detail">
      </div>
      <div>
        <label for="">入住時間</label>
        <input type="date" class="form-input" v-model="tempOrder.checkInDate">
      </div>
      <div>
        <label for="">退房時間</label>
        <input type="date" class="form-input" v-model="tempOrder.checkInDate">
      </div> -->

      <!-- 
        待辦：
        1. (前後台)入住、退房日期轉換
        2. (前後台)入住、退房日期不得低於今日日期
        3. (前後台)計算住宿天數
        4. (前後台)地址轉換
        5. (前台)取得入住、退房日期，跨頁紀錄
      -->
      <!-- 
        訂房人資訊：
        姓名
        電子信箱
        聯絡電話
        地址

        訂房資訊：
        訂單時間
        訂單編號
        訂房名稱
        入住時間(變動)
        退房時間(變動)
        住宿天數
        住宿人數(變動)

       -->
    </div>
  </div>

  <!-- <RoomModal v-if="showRoomModal" /> -->
</template>

<script setup>
import { watch } from "vue";
import { storeToRefs } from "pinia";

// order
import { useOrderStore } from "@/stores/orderStore.js";
const orderStore = useOrderStore();
const getOrders = orderStore.getOrders;
const deleteOrder = orderStore.deleteOrder;
const { orderList, tempOrder } = storeToRefs(orderStore);

// user
import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore()
const { isChecked } = storeToRefs(userStore);

watch(isChecked, (n) => {
  if (n) getOrders();
})

const dataFormat = (data) => {
  return data.split("T")[0];
};
</script>