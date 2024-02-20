<template>
  <div class="grid grid-cols-1 md:grid-cols-2 bg-neutral-100 h-screen">
    <div class="col hidden md:block">
      <img class="h-screen w-full object-cover object-center overflow-hidden" src="../assets/images/desktop/register.png" />
    </div>
    <div class="col relative overflow-hidden">
      <div class="relative pt-10 lg:pt-20">
        <img src="/svg/bgwave.svg" class="w-full" alt="">
        <RouterLink to="/" class="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
          <img src="/svg/logo-white.svg" class="h-[60px] lg:h-[80px]" alt="享樂酒店logo">
        </RouterLink>
      </div>
      <div class="absolute top-0 left-0 w-full h-full flex flex-col gap-5 justify-center items-center">
        <p class="text-white text-6 font-bold">Oops! 找不到頁面</p>
        <RouterLink to="/" class="btn btn-primary">回首頁</RouterLink>
      </div>
    </div>
  </div>
</template>