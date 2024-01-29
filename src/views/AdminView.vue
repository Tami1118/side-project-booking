<template>
  <div>
    <admin-header></admin-header>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";

// Components
import AdminHeader from "@/layouts/admin/AdminHeader.vue";

// User
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore()
const checkUser = userStore.checkUser;
const getUser = userStore.getUser;

// onMounted(async () => {
//   await checkUser();
//   await getUser();
// });
onMounted(() => {
  checkUser();
  getUser();
});

</script>