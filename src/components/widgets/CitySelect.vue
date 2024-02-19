<script setup lang="ts">
import { computed, watch, onMounted } from "vue"
import { storeToRefs } from 'pinia'

// 判斷頁面位置
import { useRoute } from "vue-router";
const route = useRoute()

// 取使用者資訊
import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore()
const { selectedCity, selectedDistrict, detailedAddress, selectedZip, userInfo } = storeToRefs(userStore)

// 縣市行政區資料篩選
import taiwanCities from '@/data/taiwanCities'
const cities = computed(() => taiwanCities.map((city) => city.name));
const districts = computed(() => {
  const city = taiwanCities.find((c) => c.name === selectedCity.value);
  return city ? city.districts : [];
});

const updateCity = () => {
  selectedDistrict.value = districts.value.length > 0 ? districts.value[0].name ?? '' : '';
};
const updateZip = () => {
  // console.log(selectedZip.value, selectedCity.value, selectedDistrict.value)
  const city = taiwanCities.find(c => c.name === selectedCity.value);
  if (city) {
    const district = city.districts.find(d => d.name === selectedDistrict.value);
    if (district) {
      selectedZip.value = Number(district.zip);
    } else {
      // 沒有 find 縣市，selectedZip 設置默認值
      selectedZip.value = NaN;
    }
  } else {
    selectedZip.value = NaN;
  }
  // console.log(selectedZip.value);
};

watch(selectedDistrict, updateZip);

const getUserAddress = () => {
  if (route.fullPath === '/user') {
    // console.log(userInfo.value)
    selectedZip.value = userInfo.value.address.zipcode;
    // console.log(selectedZip.value)
    for (const area of taiwanCities) {
      const district = area.districts.find(d => d.zip === selectedZip.value.toString());
      if (district) {
        // console.log(district)
        selectedCity.value = area.name;
        selectedDistrict.value = district.name;
        break;
      }
    }
    detailedAddress.value = userInfo.value.address.detail.replace(selectedCity.value, "");
    detailedAddress.value = detailedAddress.value.replace(selectedDistrict.value, "");
  } else {
    // console.log(taiwanCities[0])
    selectedCity.value = taiwanCities[0].name;
    selectedDistrict.value = taiwanCities[0].districts[0].name;
  }
}

onMounted(() => {
  getUserAddress()
});
</script>

<template>
  <div class="flex flex-col space-y-1">
    <label for="district" class="form-label" :class="route.name === 'booking' ? 'text-neutral' : 'text-white'">地區</label>
    <div class="">
      <div class="grid grid-cols-2 gap-2">
        <div class="relative">
          <select v-model="selectedCity" class="form-select" @change="updateCity">
            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
          </select>
          <div class="absolute flex justify-center items-center top-0 bottom-0 right-0 m-auto p-4 pointer-events-none">
            <span class="material-icons">keyboard_arrow_down</span>
          </div>
        </div>

        <div class="relative">
          <select v-model="selectedDistrict" class="form-select">
            <option v-for="district in districts" :key="district.zip" :value="district.name">{{ district.name }}</option>
          </select>
          <div class="absolute flex justify-center items-center top-0 bottom-0 right-0 m-auto p-4 pointer-events-none">
            <span class="material-icons">keyboard_arrow_down</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>