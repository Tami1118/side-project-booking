<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);

import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="h-[206px] lg:h-[384px] relative">
    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user account banner">
    <div class="absolute top-0 left-0 w-full h-full my-auto">
      <div class="container mx-auto h-full flex flex-col justify-center lg:flex-row lg:justify-start lg:items-center gap-4 lg:gap-6 px-4 sm:px-0 duration-300">
        <div class="w-[72px] h-[72px] lg:w-[144px] lg:h-[144px] rounded-full duration-300">
          <img src="/svg/userImage.svg" alt="user image">
        </div>
        <h1 class="text-white text-8 lg:text-12">Hello，{{ userInfo.name }}</h1>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-4 lg:px-0 my-10 lg:my-20 flex">
    <router-link to="/user" class="user-btn-action px-6 pt-4 pb-1" :class="route.name === 'user' ? 'text-primary-100 active' : 'text-white'">個人資料</router-link>
    <router-link to="/user-order" class="user-btn-action px-6 pt-4 pb-1" :class="route.name === 'user-order' ? 'text-primary-100 active' : 'text-white'">我的訂單</router-link>
  </div>
</template>

<style lang="scss">
.user-btn-action{
  position: relative;

  &:after{
    content: '';
    position: absloute;
    display: flex;
    height: 4px;
    width: 32px;
    background-color: #BF9D7D;
    border-radius: 2px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 8px;
    opacity: 0;
  }

  &.active:after {
    opacity: 1;
  }
}
</style>