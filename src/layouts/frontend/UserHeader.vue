<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
};
</script>

<template>
  <div class="bg-black text-white">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="flex justify-between items-center py-6">
        <router-link to="/" class="flex flex-col w-[196px]">
          <img src="/svg/logo-white.svg" alt="享樂酒店 Logo">
          <img src="/svg/logo-white-en.svg" alt="享樂酒店 Logo">
        </router-link>

        <!-- <button type="button">
          <span class="material-icons text-6">menu</span>
        </button> -->

        <nav class="">
          <ul class="flex gap-4">
            <li><router-link class="hover:text-primary-100 p-4" to="/rooms">客房旅宿</router-link> </li>
            <li><router-link class="hover:text-primary-100 p-4" to="/login">會員登入</router-link> </li>
            <li><router-link class="hover:text-primary-100 p-4" to="/booking">立即訂房</router-link> </li>
            <li><router-link class="hover:text-primary-100 p-4" to="/guideline">Guideline</router-link> </li>
            <li><router-link class="hover:text-primary-100 p-4" to="/login">Login</router-link> </li>
            <li><router-link class="hover:text-primary-100 p-4" to="/admin">後台管理</router-link> </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <!-- <div class="fixed bg-black text-white top-0 left-0 w-full h-full">
    <div class="absolute right-0 top-0 m-7">
      <button class="material-icons text-white text-12">close</button>
    </div>
    <nav class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <ul class="flex flex-col">
        <li><router-link class="hover:text-primary-100 p-4" to="/rooms">客房旅宿</router-link> </li>
        <li><router-link class="hover:text-primary-100 p-4" to="/login">會員登入</router-link> </li>
        <li><router-link class="hover:text-primary-100 p-4" to="/booking">立即訂房</router-link> </li>
      </ul>
    </nav>
  </div> -->
</template>
