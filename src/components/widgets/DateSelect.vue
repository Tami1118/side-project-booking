<template>
  <div>
    <label for="birthdate" class="form-label text-white">生日</label>
    <div class="flex gap-2">
      <select v-model="birthdate.year" class="form-input" @change="updateDays">
        <option v-for="year in Array.from({ length: new Date().getFullYear() - 1899 }, (_, index) => index + 1900).reverse()" :key="year" :value="year">{{ year }} 年</option>
      </select>
      <select v-model="birthdate.month" class="form-input" @change="updateDays">
        <option v-for="month in Array.from({ length: 12 }, (_, index) => index + 1)" :key="month" :value="month">{{ month }} 月</option>
      </select>
      <select v-model="birthdate.day" class="form-input">
        <option v-for="day in daysInMonth" :key="day" :value="day">{{ day }} 日</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { storeToRefs } from'pinia' 
// import { useUserStore } from '@/stores/userStore'
import { useUserStore } from '../../stores/userStore'

const userStore = useUserStore()
const { birthdate } = storeToRefs(userStore)




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