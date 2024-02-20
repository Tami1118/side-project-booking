<script setup lang="ts">
import { storeToRefs } from "pinia";

// 刪除房型
import { useOrderStore } from "@/stores/orderStore";
const orderStore = useOrderStore();
const { editOrderId } = storeToRefs(orderStore);
const closeOrderDelModal = orderStore.closeOrderDelModal;
const deleteOrder = orderStore.deleteOrder;
</script>

<template>
  <div @click.stop="closeOrderDelModal()" class="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm flex justify-center items-end lg:items-center">
    <div @click.stop class="bg-white rounded-t-[16px] lg:rounded-[16px] w-full lg:w-[36vw]">
      <div class="w-full h-[30vh] lg:h-[24vh] flex justify-center items-center px-6">
        <p class="text-5 font-bold text-center">
          刪除後無法復原，確定要刪除訂單編號 <span class="text-primary-100">{{ editOrderId }}</span> 嗎？
        </p>
      </div>
      <div class="p-3 flex gap-4 border-t border-primary-60">
        <button class="btn btn-secondary w-full" @click="closeOrderDelModal()">關閉視窗</button>
        <button class="btn btn-primary w-full" @click="deleteOrder(), closeOrderDelModal()">刪除</button>
      </div>
    </div>
  </div>
</template>