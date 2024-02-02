<script setup lang="ts">
const props = defineProps(["info"])
</script>

<template>
  <ul class="bg-white p-6 rounded-2 border border-primary-40 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-10 gap-y-2">
    <template v-for="item in props.info" :key="item">
      <li class="flex items-center gap-2" v-if="item.isProvide">
        <font-awesome-icon icon="fa-solid fa-check" class="text-primary-100" />
        <p class="font-bold">{{ item.title }}</p>
      </li>
    </template>
  </ul>
</template>