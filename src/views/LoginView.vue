<template>
  <div class="grid grid-cols-1 md:grid-cols-2 bg-neutral-100 h-screen">
    <div class="col hidden md:block">
      <img class="h-screen w-full object-cover object-center overflow-hidden" src="../assets/images/desktop/register.png" />
    </div>
    <div class="col">
      <div class="h-full flex justify-center items-center px-5 md:px-0">
        <div class="basis-full md:basis-1/2 flex flex-col gap-10">
          <div class="text-bold">
            <div class="text-primary-100 text-3h md:text-4 mb-2">享樂酒店，誠摯歡迎</div>
            <h1 class="text-white text-8  md:text-12">立即開始旅程</h1>
          </div>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="useremail" class="font-bold text-white">電子信箱</label>
              <input type="email" id="useremail" class="p-4 rounded-2" placeholder="請輸入電子信箱">
            </div>
            <div class="flex flex-col gap-2">
              <label for="userpass" class="font-bold text-white">密碼</label>
              <input type="email" id="userpass" class="p-4 rounded-2" placeholder="請輸入密碼">
            </div>
            <div class="flex justify-between">
              <div>
                <input type="checkbox" id="remember" class="p-4 rounded-2 me-2">
                <label for="remember" class="font-bold text-3h md:text-4 text-white">記住帳號</label>
              </div>
              <a href="#" class="block btn-text text-3h md:text-4 underline decoration-1">忘記密碼</a>
            </div>
          </div>
          <a href="#" class="btn-primary btn text-center">會員註冊</a>
          <div class="text-white">還沒有會員嗎？<a href="#" class="btn-text underline decoration-1 ms-2">前往註冊</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

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