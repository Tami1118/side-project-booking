<script setup>
// import
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/test";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

// get store data
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);

// get route path
const route = useRoute();
const routePath = ref("");
const getPath = computed(() => {
  return (routePath.value = route.path); //*
});

// menu open or close
const isMenu = ref(false);
const toggleMenu = () => {
  isMenu.value = !isMenu.value;
};
</script>

<template>
  <div :class="getPath === '/' || getPath === '/login' || getPath === '/signup'? 'fixed top-0 left-0 bg-transparent':''" class="bg-black w-full z-20">
    <div class="container mx-auto px-3 py-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="max-w-[109px] md:max-w-[196px] duration-200">
          <img src="/svg/logo-white.svg" alt="享樂飯店 Logo">
          <img src="/svg/logo-white-en.svg" alt="享樂飯店 Logo">
        </router-link>

        <div v-if="isMenu">
          <div class="fixed top-0 left-0 w-full h-full bg-black text-white z-10">
            <button type="button" class="absolute top-0 right-0 p-2 m-5">
              <span class="material-icons text-12" @click="toggleMenu">close</span>
            </button>
            <ul class="w-full h-full px-5 flex flex-col gap-4 justify-center">
              <li><router-link to="/rooms" @click="toggleMenu" class="block text-center p-4 font-bold">客房旅宿</router-link></li>
              <li v-if="userInfo.state === false"><router-link to="/login" class="block text-center p-4 font-bold">會員登入</router-link></li>
              <li v-if="userInfo !== undefined" class="group">
                <router-link to="/login" class="flex justify-center items-center p-4 font-bold">
                  <span class="material-symbols-outlined me-2">account_circle</span>
                  {{userInfo.name}}
                </router-link>
              </li>
              <li><router-link to="/booking" @click="toggleMenu" class="block w-full text-center p-4 font-bold bg-primary-100 duration-300 rounded-2">立即訂房</router-link></li>
            </ul>
          </div>
        </div>

        <div class="hidden md:block text-white">
          <ul class="flex items-center gap-4">
            <li><router-link to="/rooms" class="block text-center p-4 font-bold hover:text-primary-100">客房旅宿</router-link></li>
            <li v-if="userInfo.state === false"><router-link to="/login" class="block text-center p-4 font-bold hover:text-primary-100">會員登入</router-link></li>
            <li v-else class="group">
              <router-link to="/login" class="text-center p-4 font-bold hover:text-primary-100 flex items-center">
                <span class="material-symbols-outlined me-2">account_circle</span>
                {{userInfo.name}}
              </router-link>
            </li>
            <li><router-link to="/booking" class="font-bold py-4 px-8 bg-primary-100 hover:bg-primary rounded-2 duration-300">立即訂房</router-link></li>
          </ul>
        </div>

        <button type="button" class="md:hidden" @click="toggleMenu">
          <span class="material-icons text-white text-6">menu</span>
        </button>
      </div>
    </div>
  </div>
</template>
