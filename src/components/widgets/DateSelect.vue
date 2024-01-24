<template>
  <div class="flex flex-col space-y-1">
    <label for="birthdate" class="text-white">生日</label>
    <div class="flex space-x-2">
      <select v-model="birthdate.year" class="form-select block w-full mt-1" @change="updateDays">
        <option v-for="year in years" :key="year" :value="year">{{ year }} 年</option>
      </select>
      <select v-model="birthdate.month" class="form-select block w-full mt-1" @change="updateDays">
        <option v-for="month in Array.from({ length: 12 }, (_, index) => index + 1)" :key="month" :value="month">{{ month }} 月</option>
      </select>
      <select v-model="birthdate.day" class="form-select block w-full mt-1">
        <option v-for="day in daysInMonth" :key="day" :value="day">{{ day }} 日</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const birthdate = ref({
  year: 1990,
  month: 8,
  day: 15
});

const currentYear = new Date().getFullYear();
const years = ref([...Array(currentYear - 1899).keys()].map(i => i + 1900).reverse());

const daysInMonth = computed(() => {
  const month = birthdate.value.month;
  const year = birthdate.value.year;
  
  if (month === 2) { // February
    // Check for leap year
    const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    return isLeapYear ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(month)) { // April, June, September, November
    return 30;
  } else {
    return 31;
  }
});

const updateDays = () => {
  const maxDay = daysInMonth.value;
  if (birthdate.value.day > maxDay) {
    birthdate.value.day = maxDay;
  }
};

watch(() => birthdate.value.year, updateDays);
watch(() => birthdate.value.month, updateDays);
</script>

<style>
</style>