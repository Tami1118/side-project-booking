<template>
  <div>
    <admin-header></admin-header>
    <router-view></router-view>
  </div>
</template>

<script setup>
// view
import AdminHeader from "@/layouts/admin/AdminHeader.vue";
import { RouterView } from "vue-router";
import { onMounted } from "vue";

// user
import { useUserStore } from "@/stores/userStore"
const userStore = useUserStore()
const checkUser = userStore.checkUser

onMounted(async() => {
  await checkUser()
})

</script>