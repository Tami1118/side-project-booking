<script setup lang="ts">
const { image, imageList } = defineProps(["image","imageList"])
</script>

<template>
  <div class="flex gap-2 bg-white rounded-[16px] overflow-hidden">
    <div class="basis-6/12">
      <img :src="imageList[0]" alt="Room Image">
    </div>
    <div class="basis-6/12">
      <div class="grid grid-cols-2 gap-2 h-full">
        <div><img class="h-full w-full object-cover" :src="imageList[1]" alt="Room Image"></div>
        <div><img class="h-full w-full object-cover" :src="imageList[2]" alt="Room Image"></div>
        <div><img class="h-full w-full object-cover" :src="imageList[3]" alt="Room Image"></div>
        <div><img class="h-full w-full object-cover" :src="imageList[4]" alt="Room Image"></div>
      </div>
    </div>
  </div>
</template>
