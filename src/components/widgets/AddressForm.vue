<script setup lang="ts">
// Basic
import { ref, watch, computed } from "vue";
import { storeToRefs } from "pinia";

import type { District } from "@/interfaces/country";

// Order-地址
import { useOrderStore } from "@/stores/orderStore"
const orderStore = useOrderStore()
const { selectDistrict } = storeToRefs(orderStore)
import taiwanCities from '@/data/taiwanCities'

// 縣市列表
const cities = computed(() => {
  if (taiwanCities) {
    return taiwanCities.map((item) => item.name);
  } else {
    return []
  }
});

// 行政區列表
const districts = computed<District[]>(() => {
  if (taiwanCities) {
    const city = taiwanCities.find((item) => item.name === selectCity.value);
    return city ? city.districts : [];
  } else {
    return []
  }
});

// 縣市變動時，行政區隨縣市列表變動，預設為 ""
const selectCity = ref<string>("")
watch(selectCity, (n) => { if(n) selectDistrict.value = "" })
</script>

<template>
  <label for="userAddress">地址</label>
  <div class="grid grid-cols-2 gap-2" v-if="taiwanCities">
    <div class="relative">
      <select name="縣市" id="" v-model="selectCity" class="form-input">
        <option value="" selected>請選擇縣市</option>
        <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
      </select>
      <div class="absolute top-0 bottom-0 right-0 m-auto p-4">
        <span class="material-icons">keyboard_arrow_down</span>
      </div>
    </div>
    <div>
      <div class="relative">
        <select name="行政區" id="" v-model="selectDistrict" class="form-input">
          <option value="" selected>請選擇行政區</option>
          <option v-for="district in districts" :key="district.zip" :value="district.zip">{{ district.name }}</option>
        </select>
        <div class="absolute top-0 bottom-0 right-0 m-auto p-4">
          <span class="material-icons">keyboard_arrow_down</span>
        </div>
      </div>
    </div>
  </div>
</template>