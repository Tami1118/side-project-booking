<template>
  <div class="w-full max-w-[740px]">
    <div class="border border-neutral-40 rounded-5 overflow-hidden">
      
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
            <p class="text-6 font-bold">{{ $formats.getNight(bookingDate.end-bookingDate.start) }} 晚</p>
            <p class="text-neutral-80">{{ $formats.getLocalDateFormat(bookingDate.start) }} - {{ $formats.getLocalDateFormat(bookingDate.end) }}</p>
          </div>
          <div class="w-7/12 flex gap-2">
            <div class="grow border border-neutral-100 rounded-2 p-4">
              <p class="text-3 text-neutral-80">入住</p>
              <p>{{ $formats.getLocalDateFormat(bookingDate.start) }}</p>
            </div>
            <div class="grow border border-neutral-100 rounded-2 p-4">
              <p class="text-3 text-neutral-80">退房</p>
              <p>{{ $formats.getLocalDateFormat(bookingDate.end) }}</p>
            </div>
          </div>
        </div>

        <VDatePicker v-model.range="bookingDate"
                     mode="date"
                     :color="selectedColor"
                     :columns="columns"
                     :rows="rows"
                     :title-position="titlePosition"
                     :masks="{ title: 'YYYY 年 MMM' }"
                     :min-date="new Date()"
                     expanded="expanded"
                     borderless
                      />

        <div class="hidden md:flex justify-between md:justify-end gap-4">
          <button class="btn" @click="resetDate">清除日期</button>
          <button class="btn btn-primary" @click="checkDate">確定日期</button>
        </div>
      </div>

      <div class="md:hidden p-3">
        <div class="flex justify-between md:justify-end gap-4">
          <button class="btn" @click="resetDate">清除日期</button>
          <button class="btn btn-primary" @click="checkDate">確定日期</button>
        </div>
      </div>
      {{getResulte.start}} <br>
      {{getResulte.end}}
      <button @click="retrieveBookingDate">取得日期</button>
    </div>
  </div>
</template>

<script setup>
import { useScreens } from 'vue-screen-utils';
import { onMounted, ref, watch } from 'vue';

const bookingDate = ref({
  start: new Date(),
  end: new Date(),
})

const resetDate = () => {
  bookingDate.value = {
    start: new Date(),
    end: new Date()
  }
}

watch(bookingDate, (n) => {
  console.log(n)
})


// 存取本地端，跨頁使用
const checkDate = () => {
  localStorage.setItem('bookingDate', JSON.stringify(bookingDate.value));
  
};

const getResulte = ref({})
const retrieveBookingDate = () => {
  const storedBookingDate = localStorage.getItem('bookingDate');
  if (storedBookingDate) {
    getResulte.value = JSON.parse(storedBookingDate);
  }
};


onMounted(() => {
  retrieveBookingDate()
})


// style
const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' });
const selectedColor = ref('gray');
const columns = mapCurrent({ md: 2, lg: 2 }, 1);
const rows = mapCurrent({md: 1, lg: 1}, 2);
const titlePosition = mapCurrent({ md: 'center', lg: 'center' }, 'left');
</script>