<template>
  <div class="flex items-center">
    <p>人數</p>
    <div class="ms-auto">
      <button class="rounded-full p-4 border border-neutral-40" @click="decrease">
        <span class="material-symbols-outlined text-6">remove</span>
      </button>
      <input type="number" v-model="selectPeopleNum" class="w-[48px] mx-4 text-center text-5">
      <button class="rounded-full p-4 border border-neutral-40" @click="increase">
        <span class="material-symbols-outlined text-6">add</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// BookingDate and PeopleNum
import { useOrderStore } from "@/stores/orderStore.js";
const orderStore = useOrderStore();
const { bookingDateRange, selectPeopleNum } = storeToRefs(orderStore);
const increase = orderStore.increase;
const decrease = orderStore.decrease;
const setPeopleNum = orderStore.setPeopleNum;
</script>