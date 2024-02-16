<script setup lang="ts">
import { ref } from "vue";
import { news } from "@/stores/homeStore";
import type { News } from "@/stores/homeStore";
const newsData = ref<News[]>(news);
</script>

<template>
  <section class="bg-primary-10">
    <div class="container mx-auto px-3 xl:px-0 py-20 lg:py-30">
      <div class="flex flex-col lg:flex-row gap-10">
        <div class="w-full lg:w-2/12" data-aos="fade-right">
          <h2 class="text-primary-100 text-8 lg:text-12 font-bold mb-6 lg:mb-10">最新<br>消息</h2>
          <span class="block h-[2px] w-[140px] bg-gradient-to-r from-primary-100"></span>
        </div>
        <div class="w-full lg:w-10/12">
          <ul class="flex flex-col gap-10" data-aos="fade-left">
            <li class="flex flex-col lg:flex-row gap-6 lg:items-center" v-for="item in newsData" :key="item.id">
              <img :src="item.imageUrl" class="rounded-2 h-[291px] lg:w-[474px] object-cover w-full" :alt="item.title">
              <div>
                <h3 class="text-7 lg:text-8 font-bold text-neutral-100 mb-2 lg:mb-6">{{ item.title }}</h3>
                <p class="text-3h lg:text-4 text-500 text-justify">{{ item.descript }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>