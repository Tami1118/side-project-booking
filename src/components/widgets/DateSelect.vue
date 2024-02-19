<script setup lang="ts">
import { computed, watch, onMounted } from 'vue';
import { storeToRefs } from'pinia' 

// 判斷頁面位置
import { useRoute } from "vue-router";
const route = useRoute()

// 取使用者資訊
import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore()
const { birthdate, userInfo } = storeToRefs(userStore)

onMounted (() => {
  // console.log('birthdate',birthdate.value)
  // console.log('userInfo',userInfo.value)
  const birthdayStr = userInfo.value?.birthday ?? '';
  let match = birthdayStr.match(/^(\d{4})-(\d{2})-(\d{2})/);

  if (match) {
    birthdate.value.year = parseInt(match[1]);
    birthdate.value.month = parseInt(match[2]);
    birthdate.value.day = parseInt(match[3]);

    console.log(birthdate.value);
  }
})

// 月份對應之天數
// 注意：每400年或100年，且為4的倍數，2月有29天
const daysInMonth = computed(() => {
  const year = birthdate.value.year;
  const month = birthdate.value.month;
  
  if (month === 2) {
    const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    return isLeapYear ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(month)) {
    return 30;
  } else {
    return 31;
  }
});

// 天數隨年、月變動
const updateDays = () => {
  const maxDay = daysInMonth.value;
  if (birthdate.value.day > maxDay) {
    birthdate.value.day = maxDay;
  }
};

watch(() => birthdate.value.year, updateDays);
watch(() => birthdate.value.month, updateDays);
</script>

<template>
  <div>
    <label for="birthdate" class="form-label" :class="route.name === 'booking' ? 'text-neutral' : 'text-white'">生日</label>
    <div class="grid grid-cols-3 gap-2">
      <div class="relative">
        <select v-model="birthdate.year" class="form-input" @change="updateDays">
          <option v-for="year in Array.from({ length: new Date().getFullYear() - 1899 }, (_, index) => index + 1900).reverse()" :key="year" :value="year">{{ year }} 年</option>
        </select>
        <div class="absolute flex justify-center items-center top-0 bottom-0 right-0 m-auto p-4 pointer-events-none">
          <span class="material-icons">keyboard_arrow_down</span>
        </div>
      </div>
      <div class="relative">
        <select v-model="birthdate.month" class="form-input" @change="updateDays">
          <option v-for="month in Array.from({ length: 12 }, (_, index) => index + 1)" :key="month" :value="month">{{ month }} 月</option>
        </select>
        <div class="absolute flex justify-center items-center top-0 bottom-0 right-0 m-auto p-4 pointer-events-none">
          <span class="material-icons">keyboard_arrow_down</span>
        </div>
      </div>
      <div class="relative">
        <select v-model="birthdate.day" class="form-input">
          <option v-for="day in daysInMonth" :key="day" :value="day">{{ day }} 日</option>
        </select>
        <div class="absolute flex justify-center items-center top-0 bottom-0 right-0 m-auto p-4 pointer-events-none">
          <span class="material-icons">keyboard_arrow_down</span>
        </div>
      </div>
    </div>
  </div>
</template>

