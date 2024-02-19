<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import { RouterView } from "vue-router";
import { useRouter } from "vue-router";
const router = useRouter()

import AdminHeader from "@/components/layouts/AdminHeader.vue";

import { useUserStore } from "@/stores/userStore";
import { Toast } from "@/mixins/swal";
const userStore = useUserStore()
const checkUser = userStore.checkUser;
const { isChecked } = storeToRefs(userStore)

const isLogin = () => {
  if (isChecked.value) {
    Toast.fire({
      title: '登入成功',
      icon: 'success'
    })
  } else {
    router.push('/login')
  }
}

const checkLogin = async () => {
  await checkUser()
  isLogin()
}

onMounted(async () => {
  await checkLogin();
});
</script>

<template>
  <div class="flex flex-col lg:flex-row bg-primary-10">
    <div class="lg:w-1/5 bg-neutral">
      <AdminHeader />
    </div>
    <div class="lg:w-4/5">
      <RouterView />
    </div>
  </div>
</template>
