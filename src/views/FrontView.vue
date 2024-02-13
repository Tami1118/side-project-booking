<script setup lang="ts">
// Basic
import { RouterView } from "vue-router";

// Components
import UserHeader from "@/components/layouts/UserHeader.vue";
import UserFooter from "@/components/layouts/UserFooter.vue";
</script>

<template>
  <div class="relative">
    <user-header></user-header>
    <router-view></router-view>
    <user-footer></user-footer>
  </div>
</template>