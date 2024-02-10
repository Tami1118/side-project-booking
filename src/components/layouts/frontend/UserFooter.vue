<template>
  <div class="bg-neutral">
    <div class="container mx-auto px-4 lg:px-0">

      <div class="py-20 text-white">
        <div class="flex flex-col lg:flex-row lg:justify-between mb-20">
          <div>
            <!-- Logo -->
            <router-link to="/" class="flex flex-col max-w-[196px] mb-10">
              <img src="/svg/logo-white.svg" alt="享樂酒店 Logo">
            </router-link>

            <!-- Media -->
            <div class="flex justify-start gap-4 mb-10">
              <a href="#" class="group">
                <div class="rounded-full border group-hover:border-primary-100 p-2">
                  <font-awesome-icon icon="fa-brands fa-line" class="text-white group-hover:text-primary-100 text-6" />
                </div>
              </a>
              <a href="#" class="group">
                <div class="rounded-full border group-hover:border-primary-100 p-2">
                  <font-awesome-icon icon="fa-brands fa-instagram" class="text-white group-hover:text-primary-100 text-6" />
                </div>
              </a>
            </div>
          </div>

          <!-- Contact -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-20 lg:gap-y-10">
            <div>
              <span class="block mb-2">TEL</span>
              <a class="hover:text-primary-100 text-3h lg:text-4" href="tel:+886-7-1234567">+886-7-1234567</a>
            </div>
            <div>
              <span class="block mb-2">FAX</span>
              <a class="hover:text-primary-100 text-3h lg:text-4" href="tel:+886-7-1234567">+886-7-1234567</a>
            </div>
            <div>
              <span class="block mb-2">MAIL</span>
              <a class="hover:text-primary-100 text-3h lg:text-4" href="mailto:elh@hexschool.com">elh@hexschool.com</a>
            </div>
            <div>
              <span class="block mb-2">WEB</span>
              <a class="hover:text-primary-100 text-3h lg:text-4" href="/">www.elhhexschool.com.tw</a>
            </div>
          </div>
        </div>

        <!-- copyRight -->
        <div class="flex flex-col lg:flex-row lg:justify-between text-3h lg:text-4">
          <span>806023 台灣高雄市新興區六角路123號</span>
          <span>© 享樂酒店 2023 All Rights Reserved</span>
        </div>
      </div>
    </div>
  </div>
</template>