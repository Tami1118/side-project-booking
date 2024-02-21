<script setup lang="ts">
import { ref, watch } from "vue"

const isMenu = ref<boolean>(false);

import { useRoute } from "vue-router"
const route = useRoute()
const pathName = ref('')
const getPath = () => {
  pathName.value = route.path
}

watch(() => route.path , ()=> {
  getPath()
}, {immediate: true})

import { useUserStore } from "@/stores/userStore"
const userStore = useUserStore()
const logout = userStore.logout
</script>

<template>
  <div class="p-4 lg:px-8 lg:py-10 sticky top-0 lg:h-screen">
    <div class="flex lg:flex-col justify-between gap-10 h-full">
      <RouterLink to="/">
        <img src="/svg/logo-white.svg" class="w-[104px] lg:w-[196px]" alt="">
      </RouterLink>
      <button @click="isMenu = true" class="lg:hidden">
        <font-awesome-icon icon="fa-solid fa-bars" class="text-6 text-white" />
      </button>


      <div v-if="isMenu" class="lg:hidden fixed top-0 left-0 w-full h-full bg-neutral flex items-center justify-center px-6">
        <div @click="isMenu = false" class="absolute top-0 right-0 p-5 group lg:hidden">
          <button class="text-white group-hover:text-primary-100"><font-awesome-icon icon="fa-solid fa-xmark" class="text-12" /></button>
        </div>
        <ul class="flex flex-col gap-5 ">
          <li><RouterLink @click="isMenu = false" to="/admin/rooms" class="flex items-center text-5 hover:text-primary-80" :class="pathName === '/admin/rooms'? 'text-primary-100':'text-white'"><font-awesome-icon icon="fa-solid fa-bed" class="w-6" /> <p class="ms-4">房型管理</p> </RouterLink></li>
          <li><RouterLink @click="isMenu = false" to="/admin/orders" class="flex items-center text-5 hover:text-primary-80" :class="pathName === '/admin/orders'? 'text-primary-100':'text-white'"><font-awesome-icon icon="fa-solid fa-note-sticky" class="w-6" /> <p class="ms-4">訂單管理</p> </RouterLink></li>
          <li><RouterLink @click="isMenu = false" to="/admin/news" class="flex items-center text-5 hover:text-primary-80" :class="pathName === '/admin/news'? 'text-primary-100':'text-white'"><font-awesome-icon icon="fa-solid fa-bullhorn" class="w-6" /> <p class="ms-4">消息管理</p> </RouterLink></li>
          <li><RouterLink @click="isMenu = false" to="/admin/culinary" class="flex items-center text-5 hover:text-primary-80" :class="pathName === '/admin/culinary'? 'text-primary-100':'text-white'"><font-awesome-icon icon="fa-solid fa-utensils" class="w-6" /> <p class="ms-4">美饌管理</p> </RouterLink></li>
          <button @click="logout(), isMenu = false" class="flex mt-auto text-white text-5 hover:text-primary-100 text-start"><font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" class="me-6 rotate-180" />登出</button>
        </ul>
      </div>


      <ul class="hidden lg:flex flex-col gap-5">
        <li><RouterLink to="/admin/rooms" class="flex items-center text-5 hover:text-primary-80" :class="pathName === '/admin/rooms'? 'text-primary-100':'text-white'"><font-awesome-icon icon="fa-solid fa-bed" class="w-6" /> <p class="ms-4">房型管理</p> </RouterLink></li>
        <li><RouterLink to="/admin/orders" class="flex items-center text-5 hover:text-primary-80" :class="pathName === '/admin/orders'? 'text-primary-100':'text-white'"><font-awesome-icon icon="fa-solid fa-note-sticky" class="w-6" /> <p class="ms-4">訂單管理</p> </RouterLink></li>
        <li><RouterLink to="/admin/news" class="flex items-center text-5 hover:text-primary-80" :class="pathName === '/admin/news'? 'text-primary-100':'text-white'"><font-awesome-icon icon="fa-solid fa-bullhorn" class="w-6" /> <p class="ms-4">消息管理</p> </RouterLink></li>
        <li><RouterLink to="/admin/culinary" class="flex items-center text-5 hover:text-primary-80" :class="pathName === '/admin/culinary'? 'text-primary-100':'text-white'"><font-awesome-icon icon="fa-solid fa-utensils" class="w-6" /> <p class="ms-4">美饌管理</p> </RouterLink></li>
      </ul>
      <button @click="logout()" class="hidden lg:flex mt-auto text-white text-5 hover:text-primary-100 text-start"><font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" class="me-6 rotate-180" />登出</button>
    </div>
  </div>
</template>