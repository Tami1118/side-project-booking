<script setup lang="ts">
// Basic
import { onMounted } from "vue";
import { RouterView } from "vue-router";

// Components
import UserHeader from "@/components/layouts/frontend/UserHeader.vue";
import UserFooter from "@/components/layouts/frontend/UserFooter.vue";

onMounted(() => {
  document.title = `享樂酒店`;
})
</script>

<template>
  <div class="relative">
    <user-header></user-header>
    <router-view></router-view>
    <user-footer></user-footer>
  </div>
</template>