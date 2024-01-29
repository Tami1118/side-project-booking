<template>
  <div class="relative">
    <user-header></user-header>
    <router-view></router-view>
    <user-footer></user-footer>
  </div>
</template>

<script setup lang="ts">
// view
import UserHeader from "@/layouts/frontend/UserHeader.vue";
import UserFooter from "@/layouts/frontend/UserFooter.vue";
import { RouterView } from "vue-router";


</script>
