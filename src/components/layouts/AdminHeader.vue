<script setup lang="ts">
import { ref, watch } from "vue"

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
  <div class="px-8 py-10 sticky top-0 h-screen">
    <div class="flex flex-col gap-10 h-full">
      <RouterLink to="/">
        <img src="/svg/logo-white.svg" class="w-[196px]" alt="">
      </RouterLink>
      <ul class="flex flex-col gap-5">
        <li><RouterLink to="/admin/rooms" class="flex items-center text-5 hover:text-primary-80" :class="pathName === '/admin/rooms'? 'text-primary-100':'text-white'"><font-awesome-icon icon="fa-solid fa-bed" class="w-6" /> <p class="ms-4">房型管理</p> </RouterLink></li>
        <li><RouterLink to="/admin/orders" class="flex items-center text-5 hover:text-primary-80" :class="pathName === '/admin/orders'? 'text-primary-100':'text-white'"><font-awesome-icon icon="fa-solid fa-note-sticky" class="w-6" /> <p class="ms-4">訂單管理</p> </RouterLink></li>
        <li><RouterLink to="/admin/news" class="flex items-center text-5 hover:text-primary-80" :class="pathName === '/admin/news'? 'text-primary-100':'text-white'"><font-awesome-icon icon="fa-solid fa-bullhorn" class="w-6" /> <p class="ms-4">消息管理</p> </RouterLink></li>
        <li><RouterLink to="/admin/culinary" class="flex items-center text-5 hover:text-primary-80" :class="pathName === '/admin/culinary'? 'text-primary-100':'text-white'"><font-awesome-icon icon="fa-solid fa-utensils" class="w-6" /> <p class="ms-4">美饌管理</p> </RouterLink></li>
      </ul>
      <button @click="logout()" class="mt-auto text-white text-5 hover:text-primary-100 text-start"><font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" class="me-6 rotate-180" />登出</button>
    </div>
  </div>
</template>