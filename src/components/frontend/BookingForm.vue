<script setup lang="ts">
import { storeToRefs } from "pinia";
import AddressFrom from "@/components/widgets/AddressForm.vue"

// Order
import { useOrderStore } from "@/stores/orderStore"
const orderStore = useOrderStore()
const { userInfo } = storeToRefs(orderStore)
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <label for="userName">姓名</label>
      <input type="text" class="form-input" v-model="userInfo.name">
    </div>
    <div>
      <label for="userPhone">聯絡電話</label>
      <input type="tel" class="form-input" v-model="userInfo.phone">
    </div>
    <div>
      <label for="userEmail">電子信箱</label>
      <input type="email" class="form-input" v-model="userInfo.email">
    </div>
    <div>
      <AddressFrom />
    </div>
  </div>
</template>