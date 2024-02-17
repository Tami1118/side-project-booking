<script setup lang="ts">
const { info } = defineProps(["info"])
</script>

<template>
  <div class="flex gap-3">
    <div class="p-4 w-[97px] h-[97px] border border-primary-40 rounded-2 bg-white flex flex-col items-start justify-center gap-2">
      <font-awesome-icon icon="fa-solid fa-expand" class="text-primary-100 text-5" />
      <p class="font-bold text-3h lg:text-4 text-nowrap">{{ info.areaInfo }}坪</p>
    </div>
    <div class="p-4 w-[97px] h-[97px] border border-primary-40 rounded-2 bg-white flex flex-col items-start justify-center gap-2">
      <font-awesome-icon icon="fa-solid fa-bed" class="text-primary-100 text-5" />
      <p class="font-bold text-3h lg:text-4 text-nowrap">{{ info.bedInfo }}</p>
    </div>
    <div class="p-4 w-[97px] h-[97px] border border-primary-40 rounded-2 bg-white flex flex-col items-start justify-center gap-2">
      <font-awesome-icon icon="fa-solid fa-user" class="text-primary-100 text-5" />
      <p class="font-bold text-3h lg:text-4 text-nowrap">2-{{ info.maxPeople }} 人</p>
    </div>
  </div>
</template>