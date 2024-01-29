<script setup>
import { RouterView } from "vue-router";
<<<<<<< HEAD

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
=======
>>>>>>> upstream
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>
