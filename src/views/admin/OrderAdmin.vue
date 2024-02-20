<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import format from "@/mixins/format";
import OrderModal from "@/components/admin/OrderModal.vue";
import OrderDelete from "@/components/admin/OrderDelete.vue";

// 訂單資訊
import { useOrderStore } from "@/stores/orderStore";
const orderStore = useOrderStore();
const { orderList, tempOrder, editOrderId, showOrderModal, showDelModal } = storeToRefs(orderStore);
const getOrders = orderStore.getOrders;

// 先驗證使用者身份，再取得資訊
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const { isChecked } = storeToRefs(userStore);
const checkUser = userStore.checkUser;
const isLogin = () => {
  if (isChecked.value) getOrders()
}
const getAuth = async () => {
  await checkUser();
  isLogin()
}
onMounted(() => {
  getAuth();
});
</script>

<template>
  <div class="p-10 flex flex-col gap-6">
    <div class="flex items-end">
      <h1 class="text-7">訂單管理</h1>
      <p v-if="orderList" class="font-bold ms-2">(共 <span class="text-primary-100">{{ orderList.length }}</span> 筆資料)</p>
    </div>

    <table v-if="orderList" class="w-full admin-table">
      <thead>
        <tr class="border-y border-primary-60">
          <th class="text-start">新增時間</th>
          <th class="text-start">客戶姓名</th>
          <th class="text-start">Email</th>
          <th class="text-start">預約房型</th>
          <th class="text-start">入住時間</th>
          <th class="text-start">退房時間</th>
          <th class="text-start">狀態</th>
          <th class="text-start"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orderList" :key="item._id" class="border-b border-primary-60 hover:bg-primary-40">
          <td>{{ format.getLocalDateFormat(new Date(item.createdAt)) }}</td>
          <td>{{ item.userInfo.name }}</td>
          <td>{{ item.userInfo.email }}</td>
          <td>{{ item.roomId.name }}</td>
          <td>{{ format.getLocalDateFormat(new Date(item.checkInDate)) }}</td>
          <td>{{ format.getLocalDateFormat(new Date(item.checkOutDate)) }}</td>
          <td>{{ item.status === 0 ? '':'取消' }}</td>
          <td>
            <div class="flex flex-wrap justify-center gap-2">
              <button @click="
                      showOrderModal = true,
                      tempOrder = JSON.parse(JSON.stringify(item)),
                      editOrderId = item._id"
                      class="btn btn-primary text-4h">
                      <font-awesome-icon icon="fa-solid fa-list-ul" class="me-2" />
                      詳細內容
              </button>
              <button @click="
                      showDelModal = true,
                      tempOrder = JSON.parse(JSON.stringify(item)),
                      editOrderId = item._id"
                      class="btn btn-secondary"
                      :disabled="item.status === 0">
                      <font-awesome-icon icon="fa-solid fa-trash-can" class="me-2" />
                      刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <OrderModal v-if="showOrderModal" />
  <OrderDelete v-if="showDelModal" />
</template>