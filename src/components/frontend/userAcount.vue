<template>
  <div class="flex flex-col gap-6">
    <div>
      <p class="font-500 mb-2 text-neutral-80">電子信箱</p>
      <p class="font-bold">abc@gmail.com</p>
    </div>

    <div class="flex" :class="{'hidden': isForm}">
      <div class="grow">
        <p class="font-500 mb-2 text-neutral-80">密碼</p>
        <input type="password" class="block font-bold" value="12345678">
      </div>
      <button class="text-primary-100 underline" :class="{'hidden': isForm}" @click="isForm = !isForm">重設</button>
    </div>

    <div :class="{'hidden': !isForm}">
      <label for="oldPassword" class="mb-2 text-neutral-80 font-bold">舊密碼</label>
      <input type="password" id="oldPassword" class="form-input" placeholder="請輸入舊密碼">
    </div>

    <div :class="{'hidden': !isForm}">
      <label for="newPassword" class="mb-2 text-neutral-80 font-bold">新密碼</label>
      <input type="password" id="newPassword" class="form-input" placeholder="請輸入新密碼">
    </div>

    <div :class="{'hidden': !isForm}">
      <label for="checkNewPassword" class="mb-2 text-neutral-80 font-bold">確認新密碼</label>
      <input type="password" id="checkNewPassword" class="form-input" placeholder="請再輸入一次新密碼">
    </div>
  </div>

  <div :class="{'hidden': !isForm}">
    <button class="btn bg-neutral-40 text-neutral-60 w-full lg:w-fit">儲存設定</button>
  </div>
</template>

<script setup>
// const props = defineProps(['isForm']);
import { ref } from "vue";
const isForm = ref(false);
</script>