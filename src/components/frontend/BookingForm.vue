<script setup lang="ts">
import {ref} from "vue"
import type { User } from "@/interfaces/user"
import AddressFrom from "@/components/widgets/AddressForm.vue"

const userInfo = ref<User>({})

</script>

<template>
  <div class="pb-10 mb-10 lg:pb-[47px] lg:mb-[47px] border-b border-neutral-60">
    <div class="flex mb-8 lg:mb-10">
      <h2 class="text-5 lg:text-7">訂房人資訊</h2>
      <button class="btn-text ms-auto underline">套用會員資料</button>
    </div>
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
        <AddressForm : : :/>
      </div>
    </div>
  </div>
</template>