<template>
  <div>
    <user-header></user-header>
    <router-view></router-view>
    <user-footer></user-footer>
  </div>
</template>

<script>
import UserHeader from "@/layouts/frontend/UserHeader";
import UserFooter from "@/layouts/frontend/UserFooter";
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
    UserHeader,
    UserFooter
  },
};
</script>