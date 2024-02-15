<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { storeToRefs } from "pinia";

// Order-地址
import { useOrderStore } from "@/stores/orderStore"
const orderStore = useOrderStore()
const { selectDistrict, addressDetail } = storeToRefs(orderStore)
import taiwanCities from '@/data/taiwanCities'

// 縣市列表
const cities = computed(() => taiwanCities.map((item) => item.name))

// 行政區列表
const districts = computed(() => {
  const city = taiwanCities.find((item) => item.name === selectCity.value);
  return city ? city.districts : []
})

// 縣市變動時，行政區隨縣市列表變動，預設為 ""
const selectCity = ref<string>("")
const selectZip = ref()
const districtName = ref()

const updateCity = () => {
  selectDistrict.value = districts.value.length > 0 ? '' : '';
};
const updateZip = () => {
  const city = taiwanCities.find(c => c.name === selectCity.value);
  if (city) {
    const district = city.districts.find(d => d.name === selectDistrict.value);
    if (district) {
      selectZip.value = Number(district.zip);
    } else {
      selectZip.value = NaN;
    }
  } else {
    selectZip.value = NaN;
  }
};

watch(selectDistrict, updateZip);


// 取得使用者地址
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const getAddress = () => {
  selectCity.value = userInfo.value.address.zipcode;
  for (const area of taiwanCities) {
    const district = area.districts.find(d => d.zip === selectCity.value.toString());
    if (district) {
      selectCity.value = area.name;
      selectDistrict.value = district.zip;
      districtName.value = district.name;
      break;
    }
  }
  addressDetail.value = userInfo.value.address.detail.replace(selectCity.value, "");
  addressDetail.value = addressDetail.value.replace(districtName.value, "");
}

defineExpose({ getAddress });
</script>

<template>
  <label for="userAddress">地址</label>
  <div class="grid grid-cols-2 gap-2" v-if="taiwanCities">
    <div class="relative">
      <select name="縣市" id="" v-model="selectCity" class="form-input" @change="updateCity()">
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
    <div class="col-span-2">
      <input type="text" v-model="addressDetail" placeholder="請輸入詳細地址" class="p-4 rounded-2 w-full">
    </div>
  </div>
</template>