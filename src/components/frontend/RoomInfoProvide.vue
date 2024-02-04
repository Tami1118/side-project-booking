<script setup lang="ts">
const props = defineProps(["info"])

import { useRoute } from "vue-router";
const route = useRoute()
const routeName = route.name
</script>

<template>
  <ul class="bg-white p-6 rounded-2 border border-primary-40 gap-x-10 gap-y-2"
      :class="routeName === 'booking-complete'? 'flex flex-wrap':'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'">
    <template v-for="item in props.info" :key="item">
      <li class="flex items-center gap-2" v-if="item.isProvide">
        <font-awesome-icon icon="fa-solid fa-check" class="text-primary-100" />
        <p class="font-bold w-[68px]"
            :class="routeName === 'booking-complete' ? 'w-[68px]':'w-fit'">
            {{ item.title }}
        </p>
      </li>
    </template>
  </ul>
</template>