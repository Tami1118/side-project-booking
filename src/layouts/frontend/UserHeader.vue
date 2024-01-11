<script>
export default {
  data() {
    return {
      isMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenu = !this.isMenu;
    },
  },
};
</script>

<template>
  <div class="fixed top-0 left-0 w-full z-10">
    <div class="content mx-auto px-3 py-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="max-w-[109px] md:max-w-[196px]">
          <img src="/svg/logo-white.svg" alt="享樂飯店 Logo">
          <img src="/svg/logo-white-en.svg" alt="享樂飯店 Logo">
        </router-link>

        <!-- 如何將 menu sm/md 合而為一 -->
        <div v-if="isMenu">
          <div class="fixed top-0 left-0 w-full h-full bg-black text-white z-10">
            <button type="button" class="absolute top-0 right-0 p-2 m-5">
              <span class="material-icons text-12" @click="toggleMenu">close</span>
            </button>
            <div class="container px-5 w-full h-full flex justify-center items-center">
              <ul class="flex flex-col w-full gap-4">
                <li><router-link to="/rooms"   @click="toggleMenu" class="block w-full text-center p-4 font-bold hover:text-primary-100">客房旅宿</router-link></li>
                <li><router-link to="/login"   @click="toggleMenu" class="block w-full text-center p-4 font-bold hover:text-primary-100">會員登入</router-link></li>
                <li><router-link to="/booking" @click="toggleMenu" class="block w-full text-center p-4 font-bold bg-primary-100 hover:bg-primary rounded-2 duration-300">立即訂房</router-link></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-white hidden md:block">
          <ul class="flex gap-4">
            <li><router-link to="/rooms" class="font-bold p-4 hover:text-primary-100">客房旅宿</router-link></li>
            <li><router-link to="/login" class="font-bold p-4 hover:text-primary-100">會員登入</router-link></li>
            <li><router-link to="/booking" class="font-bold py-4 px-8 bg-primary-100 hover:bg-primary rounded-2 duration-300">立即訂房</router-link></li>
          </ul>
        </div>

        <button type="button" class="md:hidden" @click="toggleMenu">
          <span class="material-icons text-white text-6">menu</span>
        </button>
      </div>
    </div>
  </div>
</template>
