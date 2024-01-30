<script setup lang="ts">
// Basic
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

// user
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);

// get route path
// const route = useRoute();
// const routePath = ref("");
// const getPath = computed(() => {
//   return routePath.value = route.path; //*
// });

// menu open or close
const isMenu = ref(false);
const toggleMenu = () => {
  isMenu.value = !isMenu.value;
};
</script>

<template>
  <!-- 
    header
    1. header style
        - 其他頁面 fixed top-0 left-0 bg-neutral
        - /, rooms 為 fixed top-0 left-0 bg-transparent，過 banner 後為 bg-neutral-100
        - signup, login 純 logo，且佔空間
    2. member status
        - 未登入前點擊進入 login
        - 登入後下拉式選單
   -->

  <header>
    <div class="bg-neutral-100">
      <div class="container mx-auto px-3 py-4">
        <div class="flex items-center text-white">
          <router-link to="/" class="max-w-[109px] md:max-w-[196px] duration-200">
            <img src="/svg/logo-white.svg" alt="享樂飯店 Logo">
          </router-link>
          
          <!-- <button>開啟</button> -->

          <!-- <div class="fixed top-0 left-0 w-full h-full bg-neutral-100 z-20">
            <ul class="flex flex-col md:flex-row gap-4 justify-center lg:justify-end items-center h-full">
              <li class="group"><router-link to="/room" class="group-hover:text-primary-100 p-4">房客旅宿</router-link></li>
              <li class="group"><router-link to="/login" class="group-hover:text-primary-100 p-4">會員登入</router-link></li>
              <li class="relative group">
                <router-link to="/person" class="p-4"><font-awesome-icon icon="fa-regular fa-circle-user" class="text-5 me-2" />已登入會員</router-link>
                <ul class="hidden group-hover:flex flex-col absolute top-100 right-0 w-[260px] bg-white py-3 rounded-5 overflow-hidden">
                  <li><router-link to="/person" class="block py-4 px-8 text-nowrap hover:bg-primary-10 text-neutral-80 hover:text-primary-100">我的訂單</router-link></li>
                  <li><button class="w-full py-4 px-8 text-nowrap text-start hover:bg-primary-10 text-neutral-80 hover:text-primary-100">帳戶登出</button></li>
                </ul>
              </li>
              <li><router-link to="/login" class="py-4 px-8 btn-primary rounded-2">立即訂房</router-link></li>
            </ul>
          </div> -->

        </div>
      </div>
    </div>
  </header>

  <!-- <div :class="getPath === '/' || getPath === '/login' || getPath === '/signup' ? 'fixed top-0 left-0 bg-transparent' : ''" class="bg-black w-full z-20">
    <div class="container mx-auto px-3 py-4">
      <div class="flex justify-between items-center">

        <div v-if="isMenu">
          <div class="fixed top-0 left-0 w-full h-full bg-black text-white z-10">
            <button type="button" class="absolute top-0 right-0 p-2 m-5">
              <span class="material-icons text-12" @click="toggleMenu">close</span>
            </button>
            <ul class="w-full h-full px-5 flex flex-col gap-4 justify-center">
              <li><router-link to="/room" @click="toggleMenu" class="block text-center p-4 font-bold">客房旅宿</router-link></li>
              <li v-if="userInfo.state === false"><router-link to="/login" class="block text-center p-4 font-bold">會員登入</router-link></li>
              <li v-if="userInfo !== undefined" class="group">
                <router-link to="/login" class="flex justify-center items-center p-4 font-bold">
                  <span class="material-symbols-outlined me-2">account_circle</span>
                  {{ userInfo.name }}
                </router-link>
              </li>
              <li><router-link to="/room" @click="toggleMenu" class="block w-full text-center p-4 font-bold bg-primary-100 duration-300 rounded-2">立即訂房</router-link></li>
            </ul>
          </div>
        </div>

        <div class="hidden md:block text-white">
          <ul class="flex items-center gap-4">
            <li><router-link to="/room" class="block text-center p-4 font-bold hover:text-primary-100">客房旅宿</router-link></li>
            <li v-if="userInfo.state === false"><router-link to="/login" class="block text-center p-4 font-bold hover:text-primary-100">會員登入</router-link></li>
            <li v-else class="group">
              <router-link to="/login" class="text-center p-4 font-bold hover:text-primary-100 flex items-center">
                <span class="material-symbols-outlined me-2">account_circle</span>
                {{ userInfo.name }}
              </router-link>
            </li>
            <li><router-link to="/room" class="font-bold py-4 px-8 bg-primary-100 hover:bg-primary rounded-2 duration-300">立即訂房</router-link></li>
          </ul>
        </div>

        <button type="button" class="md:hidden" @click="toggleMenu">
          <span class="material-icons text-white text-6">menu</span>
        </button>
      </div>
    </div>
  </div> -->
</template>
