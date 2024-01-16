<template>
  <div class="relative">
    <user-header></user-header>
    <router-view></router-view>
    <user-footer></user-footer>
  </div>
</template>

<script setup>
import UserHeader from "@/layouts/frontend/UserHeader.vue";
import UserFooter from "@/layouts/frontend/UserFooter.vue";
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { useUserStore } from "@/stores/test";

const userStore = useUserStore()
const checkUser = userStore.checkUser;
const getUser = userStore.getUser;

onMounted(async () => {
  await checkUser();
  await getUser();
});
</script>
