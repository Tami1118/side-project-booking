<script setup lang="ts">
// Basic
import { ref } from "vue";
import { storeToRefs } from "pinia";

// BookingDate
import { useDateStore } from "@/stores/dateStore"
const dateStore = useDateStore()
const { reserveDate, reserveDateRange, nightNum, sameDate } = storeToRefs(dateStore)
const resetDate = dateStore.resetDate;
const setStorageDate = dateStore.setStorageDate;

// Open/Close Modal
import { useModalStore } from "@/stores/modalStore.js";
const modalStore = useModalStore();
const { isModalOpen } = storeToRefs(modalStore);
const closeModal = modalStore.closeModal;

// DatePicker Style
import { useScreens } from "vue-screen-utils";
const { mapCurrent } = useScreens({ xs: "0px", sm: "640px", md: "768px", lg: "1024px" });
const selectedColor = ref("gray");
const columns = mapCurrent({ md: 2, lg: 2 }, 1);
const rows = mapCurrent({ md: 1, lg: 1 }, 2);
const titlePosition = mapCurrent({ md: "center", lg: "center" }, "left");
</script>

<template>
  <div v-if="isModalOpen" class="fixed top-0 left-0 w-full h-full bg-neutral-100/50 backdrop-blur-sm z-50">
    <div class="container mx-auto h-full flex justify-center items-center">
      <div class="w-full max-w-[740px]">
        <div class="bg-white border border-neutral-40 rounded-5 overflow-hidden z-10">
          <div class="p-6 md:p-8 flex flex-col gap-10">
            <div class="hidden md:flex md:items-center">
              <div class="w-5/12">
                <p class="text-6 font-bold">{{ nightNum }} 晚</p>
                <p class="text-neutral-80">{{ reserveDateRange.endDate }} - {{ reserveDateRange.startDate }}</p>
              </div>
              <div class="w-7/12 flex gap-2">
                <div class="grow border border-neutral-100 rounded-2 p-4 font-500">
                  <p class="text-3">入住</p>
                  <p class="text-neutral-100">{{ reserveDateRange.startDate }}</p>
                </div>
                <div class="grow border border-neutral-100 rounded-2 p-4 font-500">
                  <p class="text-3">退房</p>
                  <p class="text-neutral-100">{{ reserveDateRange.endDate }}</p>
                </div>
              </div>
            </div>

            <VDatePicker v-model.range="reserveDate" mode="date" :color="selectedColor" :columns="columns" :rows="rows" :title-position="titlePosition" :masks="{ title: 'YYYY 年 MMM' }" :min-date="new Date()" expanded="expanded" borderless />
            <div class="hidden md:flex justify-between md:justify-end gap-4">
              <button class="btn hover:bg-neutral-40" @click="resetDate()">清除日期</button>
              <button class="btn btn-primary" @click="closeModal(),setStorageDate()" :disabled="sameDate">確定日期</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
