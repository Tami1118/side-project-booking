<script setup lang="ts">
// Basic
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";

const isMenu = ref<boolean>(false);

// User
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const { userStatus, userInfo } = storeToRefs(userStore);
const checkUser = userStore.checkUser;
const getUser = userStore.getUser;
const logout = userStore.logout;

// Route
import { useRoute } from "vue-router";
const route = useRoute();
const pathName = ref('');
const getPath = () => {
  pathName.value = route.path
}
// 第一參數()=>獲捕當前值的變，確保取得最新的值
watch(() => route.path, () => {
  getPath();
});

// scroll
import { useScrollBackground } from "@/mixins/scroll"
const { isScroll } = useScrollBackground();

// Action
onMounted(() => {
  checkUser()
  getUser()
  getPath()
})
</script>

<template>
  <header class="top-0 left-0 w-full z-10 duration-800" :class="{ 'fixed': pathName === '/' || pathName === '/room', 'sticky bg-neutral': pathName !== '/' && pathName !== '/room', 'bg-neutral': isScroll }">
    <div class="max-w-[1860px] mx-auto px-3 py-4">
      <div class="flex items-center justify-between text-white">
        <router-link to="/" class="max-w-[109px] lg:max-w-[196px] duration-200">
          <img src="/svg/logo-white.svg" alt="享樂飯店 Logo">
        </router-link>
        <button @click="isMenu = !isMenu" class="lg:hidden">
          <font-awesome-icon icon="fa-solid fa-bars" class="text-6" />
        </button>
        <div class="lg:block" :class="!isMenu ? 'hidden' : ''">
          <div class="max-lg:fixed top-0 right-0 max-lg:w-full max-lg:h-full bg-neutral lg:bg-transparent z-20 flex justify-center items-center px-5 lg:p-0">
            <div @click="isMenu = !isMenu" class="absolute top-0 right-0 p-5 group lg:hidden">
              <button class="group-hover:text-primary-100"><font-awesome-icon icon="fa-solid fa-xmark" class="text-12" /></button>
            </div>

            <ul class="flex flex-col lg:items-center lg:flex-row w-full lg:w-fit gap-4">
              <li class="group"><router-link to="/room" @click="isMenu = false" class="block text-center p-4 group-hover:text-primary-100">房客旅宿</router-link></li>
              <li v-if="!userStatus" class="group"><router-link to="/login" @click="isMenu = false" class="block text-center p-4 group-hover:text-primary-100">會員登入</router-link></li>
              <li v-else class="group hidden lg:block relative">
                <button @click="isMenu = false" class="block text-center p-4 group-hover:text-primary-100">
                  <font-awesome-icon icon="fa-regular fa-circle-user" class="me-2" /> {{ userInfo.name }}
                </button>
                <ul class="hidden md:group-hover:flex flex-col absolute top-100 right-0 w-[260px] bg-white py-3 rounded-5 overflow-hidden">
                  <li><router-link to="/user-order" class="block py-4 px-8 text-nowrap hover:bg-primary-10 text-neutral-80 hover:text-primary-100">我的訂單</router-link></li>
                  <li><button class="w-full py-4 px-8 text-nowrap text-start hover:bg-primary-10 text-neutral-80 hover:text-primary-100" @click="logout()">登出</button></li>
                </ul>
              </li>
              <li v-if="userStatus" class="group lg:hidden"><router-link to="/user" @click="isMenu = false" class="block text-center p-4 group-hover:text-primary-100">我的帳戶</router-link></li>
              <li v-if="userStatus" class="group lg:hidden"><button @click="isMenu = false, logout()" class="block w-full text-center p-4 group-hover:text-primary-100">帳戶登出</button></li>
              <li><router-link to="/room" @click="isMenu = false" class="block text-center py-4 px-8 btn-primary rounded-2">立即訂房</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
