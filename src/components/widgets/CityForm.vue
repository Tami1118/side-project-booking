<script setup lang="ts">
import { ref, watch, computed, onMounted, defineEmits } from "vue";
import axios from "axios";
import type { CityData } from "@/interfaces/city"

const emits = defineEmits();

const selectCity = ref<string>("")
const selectDistrict = ref<string>("")
const addressDetail = ref<string>("")

// 台灣縣市API
const taiwanCities = ref<CityData | null>(null);
const getTaiwanCity = async () => {
  try {
    const url = "/api/abc873693/2804e64324eaaf26515281710e1792df/raw/a1e1fc17d04b47c564bbd9dba0d59a6a325ec7c1/taiwan_districts.json";
    const res = await axios.get(url)
    taiwanCities.value = res.data
    console.log("取得縣市列表", taiwanCities.value)
  } catch (err) {
    console.log(err)
  }
}

// 縣市列表
const cities = computed<string[] | null>(() => {
  if (taiwanCities.value) {
    return taiwanCities.value.map((item) => item.name);
  } else {
    return []
  }
});

// // 行政區列表
const districts = computed<string[] | null>(() => {
  if (taiwanCities.value) {
    const city = taiwanCities.value.find((item) => item.name === selectCity.value);
    return city ? city.districts : [];
  } else {
    return []
  }
});

// 縣市變動時，行政區隨縣市列表變動，預設為 ""
watch(selectCity, () => { selectDistrict.value = "" })

// 子層傳輸至父層
watch(selectCity, () => { emits('update:city', selectCity.value) })
watch(selectDistrict, () => { emits('update:district', selectDistrict.value) })
watch(addressDetail, () => { emits('update:addressDetail', addressDetail.value) })

onMounted(() => {
  getTaiwanCity();
});
</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <select v-model="selectCity" class="form-input" v-if="cities">
      <option value="" selected>請選擇縣市</option>
      <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
    </select>

    <select v-model="selectDistrict" class="form-input">
      <option value="" selected>請選擇行政區</option>
      <option v-for="district in districts" :key="district.zipcode" :value="district.zip">{{ district.name }}</option>
    </select>

    <input type="text" v-model="addressDetail" placeholder="請輸入詳細地址" class="form-input col-span-2">
  </div>
</template>
