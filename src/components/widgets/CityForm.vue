<template>
  <div class="grid grid-cols-2 gap-2">
    <select v-model="selectCity" @change="updateDistricts" class="form-input">
      <option value="" selected>請選擇縣市</option>
      <option v-for="city in cities" :key="city" :value="city">{{city}}</option>
    </select>

    <select v-model="tempOrder.userInfo.address.zipcode" class="form-input">
      <option value="" selected>請選擇行政區</option>
      <option v-for="district in districts" :key="district.zipcode" :value="district.zip">{{district.name}}</option>
    </select>

    <input type="text" v-model="tempOrder.userInfo.address.detail" placeholder="請輸入詳細地址" class="form-input col-span-2">
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import axios from "axios";

// order
import { useOrderStore } from "@/stores/orderStore";
const orderStore = useOrderStore();
const { tempOrder } = storeToRefs(orderStore);

const selectCity = ref("");
const taiwanCities = ref([]);
const getTaiwanCity = () => {
  const url = "https://gist.githubusercontent.com/abc873693/2804e64324eaaf26515281710e1792df/raw/a1e1fc17d04b47c564bbd9dba0d59a6a325ec7c1/taiwan_districts.json";
  axios.get(url)
    .then((res) => {
      console.log("取得縣市列表", res);
      taiwanCities.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// 縣市列表
const cities = computed(() => {
  return taiwanCities.value.map((item) => item.name);
});

// 行政區列表
const districts = computed(() => {
  const city = taiwanCities.value.find((item) => item.name === selectCity.value);
  return city ? city.districts : [];
});

// 縣市變動時，行政區隨縣市列表變動
watch(selectCity, () => {
  if (tempOrder.userInfo) {
    if (tempOrder.userInfo.address) {
      tempOrder.userInfo.address.zipcode = districts.value.length > 0 ? districts.value.name : "";
    }
  }
});

onMounted(() => {
  getTaiwanCity();
});
</script>