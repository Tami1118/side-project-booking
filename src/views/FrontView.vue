<template>
  <div class="relative">
    <user-header></user-header>
    <router-view></router-view>
    <user-footer></user-footer>
  </div>
</template>

<script setup>
// view
import UserHeader from "@/layouts/frontend/UserHeader.vue";
import UserFooter from "@/layouts/frontend/UserFooter.vue";
import { RouterView } from "vue-router";

// basic
import { onMounted } from "vue";

// user
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore()
const checkUser = userStore.checkUser;
const getUser = userStore.getUser;

onMounted(async () => {
  await checkUser();
  await getUser();
});
</script>
