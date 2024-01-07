<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
};
</script>

<template>
  <div class="container mx-auto">
    <nav class="">
      <ul class="flex gap-3">
        <li><router-link class="hover:text-red-600" to="/">首頁</router-link> </li>
        <li><router-link class="hover:text-red-600" to="/rooms">客房旅宿</router-link> </li>
        <li><router-link class="hover:text-red-600" to="/login">會員登入</router-link> </li>
        <li><router-link class="hover:text-red-600" to="/booking">立即訂房</router-link> </li>
        <li><router-link class="hover:text-red-600" to="/test">測試頁面</router-link> </li>
      </ul>
    </nav>
  </div>
</template>
