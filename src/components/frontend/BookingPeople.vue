<script setup lang="ts">
import { ref } from "vue"
import { storeToRefs } from "pinia";
const peopleNum = ref<number>(2)

import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore()
const { roomDetail } = storeToRefs(roomStore)


// const setPeopleNum = () => {
//   localStorage.setItem('peopleNum.value', peopleNum.value.value.toString())
// }
// const getPeopleNum = () => {
//   const storagePeopleNum = localStorage.getItem('peopleNum.value');
//   if (storagePeopleNum) {
//     peopleNum.value = storagePeopleNum;
//   }
// }
</script>

<template>
  <div class="flex items-center">
    <p>人數</p>
    <div class="ms-auto">
      <div>
        <button class="group rounded-full w-[56px] aspect-square p-4 border border-neutral-40 hover:bg-primary-100 active:bg-primary disabled:bg-neutral-10" @click="peopleNum--" :disabled="peopleNum === 1">
          <font-awesome-icon icon="fa-solid fa-minus" class="group-hover:text-white group-active:text-white group-disabled:text-black" />
        </button>
        <input type="number" v-model="peopleNum" class="w-[48px] mx-4 text-center text-5 bg-white" disabled>
        <button class="group rounded-full w-[56px] aspect-square p-4 border border-neutral-40 hover:bg-primary-100 active:bg-primary disabled:bg-neutral-10" @click="peopleNum++" :disabled="peopleNum === roomDetail?.maxPeople">
          <font-awesome-icon icon="fa-solid fa-plus" class="group-hover:text-white group-active:text-white group-disabled:text-black" />
        </button>
      </div>
      <p v-if="peopleNum === roomDetail?.maxPeople" class="text-alert-120 text-center">房間最多{{ roomDetail?.maxPeople }} 人</p>
    </div>
  </div>
</template>