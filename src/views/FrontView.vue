<template>
  <div class="relative">
    <user-header></user-header>
    <router-view></router-view>
    <user-footer></user-footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

// Components
import UserHeader from "@/layouts/frontend/UserHeader.vue";
import UserFooter from "@/layouts/frontend/UserFooter.vue";
</script>
