<script setup lang="ts">
import {ref} from "vue";
import { storeToRefs } from "pinia";
import axios from "axios";
const { VITE_URL } = import.meta.env;

import AddressForm from "@/components/widgets/AddressForm.vue";

// Order-使用者資訊
import { useOrderStore } from "@/stores/orderStore";
const orderStore = useOrderStore();
const { userInfo } = storeToRefs(orderStore);

// 電話號碼格式
const isPhone = (value: string) => {
  const phoneNum = /^(09)[0-9]{8}$/
  return phoneNum.test(value) ? true : '請輸入正確電話號碼格式，例如 0987654321'
}

// 取得元件按鈕
const userAddressRef = ref();
const getUser = () => {
  const url = `${VITE_URL}/api/v1/user`
  axios.get(url)
    .then(res => {
      userInfo.value = res.data.result
      userAddressRef.value.getAddress()
      console.log('getUser 成功', userInfo.value)
    })
    .catch(err => {
      console.log('getUser 失敗',err)
    })
}
</script>

<template>
  <div class="flex mb-8 lg:mb-10">
    <h2 class="text-5 lg:text-7 text-black">訂房人資訊</h2>
    <button class="btn-text ms-auto underline" @click="getUser()">套用會員資料</button>
  </div>
  <VForm v-slot="{ errors }" class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <label for="userName">姓名</label>
      <VField type="text"
              name="姓名"
              :class="{ 'border border-red-600': errors['姓名'] }"
              rules="required"
              v-model="userInfo.name"
              placeholder="請輸入姓名"
              class="p-4 rounded-2" />
      <ErrorMessage class="text-red-600" name="姓名" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="userPhone">手機號碼</label>
      <VField type="tel"
              name="手機號碼"
              :class="{ 'border border-red-600': errors['手機號碼'] }"
              :rules="isPhone"
              v-model="userInfo.phone"
              placeholder="請輸入手機號碼"
              class="p-4 rounded-2" />
      <ErrorMessage class="text-red-600" name="手機號碼" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="userEmail">電子信箱</label>
      <VField type="email"
              name="Email"
              :class="{ 'border border-red-600': errors['Email'] }"
              rules="required|email"
              v-model="userInfo.email"
              placeholder="請輸入有效電子信箱"
              class="p-4 rounded-2" />
      <ErrorMessage class="text-red-600" name="Email" />
    </div>
    <AddressForm ref="userAddressRef" />
  </VForm>
</template>