<script setup lang="ts">
import { storeToRefs } from "pinia";

// 刪除房型
import { useFoodStore } from "@/stores/foodStore";
const foodStore = useFoodStore();
const { tempFood } = storeToRefs(foodStore);
const closeFoodDelModal = foodStore.closeFoodDelModal;
const deleteFood = foodStore.deleteFood;
</script>

<template>
  <div @click.stop="closeFoodDelModal()" class="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm flex justify-center items-end lg:items-center">
    <div @click.stop class="bg-white rounded-t-[16px] lg:rounded-[16px] w-full lg:w-[36vw]">
      <div class="w-full h-[30vh] lg:h-[24vh] flex justify-center items-center px-6">
        <p class="text-5 font-bold text-justify">
          刪除後無法復原，確定要刪除 <span class="text-primary-100">{{ tempFood.title }}</span> 嗎？
        </p>
      </div>
      <div class="p-3 flex gap-4 border-t border-primary-60">
        <button class="btn btn-secondary w-full" @click="closeFoodDelModal()">關閉視窗</button>
        <button class="btn btn-primary w-full" @click="deleteFood(), closeFoodDelModal()">刪除</button>
      </div>
    </div>
  </div>
</template>