<template>
  <div v-if="isModalOpen" @click.stop="closeModal" class="fixed top-0 left-0 w-full h-full bg-neutral-100/50 backdrop-blur-sm">
    <div class="container mx-auto h-full flex justify-center items-center">
      <div class="w-full max-w-[740px]" @click.stop>
        <div class="bg-white border border-neutral-40 rounded-5 overflow-hidden z-10">

          <div class="md:hidden bg-neutral-10 border-b border-neutral-40 py-4 px-8">
            <button class="mb-4"><span class="material-icons">close</span></button>
            <div>
              <span class="text-5 font-bold" v-if="true">選擇入住日期</span>
              <span class="text-5 font-bold" v-else>選擇退房日期</span>
            </div>
          </div>

          <div class="p-6 md:p-8 flex flex-col gap-10">
            <div class="hidden md:flex md:items-center">
              <div class="w-5/12">
                <p class="text-6 font-bold">{{ $formats.getNight(bookingDateRange.end-bookingDateRange.start) }} 晚</p>
                <p class="text-neutral-80">{{ $formats.getLocalDateFormat(bookingDateRange.start) }} - {{ $formats.getLocalDateFormat(bookingDateRange.end) }}</p>
              </div>
              <div class="w-7/12 flex gap-2">
                <div class="grow border border-neutral-100 rounded-2 p-4">
                  <p class="text-3 text-neutral-80">入住</p>
                  <p>{{ $formats.getLocalDateFormat(bookingDateRange.start) }}</p>
                </div>
                <div class="grow border border-neutral-100 rounded-2 p-4">
                  <p class="text-3 text-neutral-80">退房</p>
                  <p>{{ $formats.getLocalDateFormat(bookingDateRange.end) }}</p>
                </div>
              </div>
            </div>

            <VDatePicker v-model.range="bookingDateRange"
                         mode="date"
                         :color="selectedColor"
                         :columns="columns"
                         :rows="rows"
                         :title-position="titlePosition"
                         :masks="{ title: 'YYYY 年 MMM' }"
                         :min-date="new Date()"
                         expanded="expanded"
                         borderless />

            <div class="hidden md:flex justify-between md:justify-end gap-4">
              <button class="btn" @click="resetDate">清除日期</button>
<<<<<<< HEAD
              <button class="btn btn-primary" @click="setItemDate(), isModalOpen = false">確定日期</button>
=======
              <button class="btn btn-primary" @click="setBookingDate(), isModalOpen = false">確定日期</button>
>>>>>>> upstream
            </div>
          </div>

          <div class="md:hidden p-3">
            <div class="flex justify-between md:justify-end gap-4">
              <button class="btn" @click="resetDate">清除日期</button>
              <button class="btn btn-primary" @click="closeModal">確定日期</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useScreens } from "vue-screen-utils";

// 開啟/關閉 modal
import { useModalStore } from "@/stores/modalStore.js";
const modalStore = useModalStore();
const { isModalOpen } = storeToRefs(modalStore);
const closeModal = modalStore.closeModal;

// 選擇日期
import { useOrderStore } from "@/stores/orderStore.js";
const orderStore = useOrderStore();
const { bookingDateRange } = storeToRefs(orderStore);
const resetDate = orderStore.resetDate;
const setBookingDate = orderStore.setBookingDate;

// datepicker style
const { mapCurrent } = useScreens({
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
});
const selectedColor = ref("gray");
const columns = mapCurrent({ md: 2, lg: 2 }, 1);
const rows = mapCurrent({ md: 1, lg: 1 }, 2);
const titlePosition = mapCurrent({ md: "center", lg: "center" }, "left");

// ===== 測試用 =====
watch(bookingDateRange, (n) => {
  console.log(n);
});
</script>