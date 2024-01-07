<template>
  <div>
    <admin-header></admin-header>
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import AdminHeader from "@/layouts/admin/AdminHeader"

export default {
  components: {
    RouterView,
    AdminHeader
  },
};
</script>