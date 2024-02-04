<script setup lang="ts">
const props = defineProps(["imageList"])
</script>

<template>
  <div class="flex gap-2 bg-white rounded-[16px] overflow-hidden">
    <div class="basis-6/12">
      <img :src="props.imageList[0]">
    </div>
    <div class="basis-6/12">
      <div class="grid grid-cols-2 gap-2 h-full">
        <div><img class="h-full w-full object-cover" :src="props.imageList[1]" alt=""></div>
        <div><img class="h-full w-full object-cover" :src="props.imageList[2]" alt=""></div>
        <div><img class="h-full w-full object-cover" :src="props.imageList[3]" alt=""></div>
        <div><img class="h-full w-full object-cover" :src="props.imageList[4]" alt=""></div>
      </div>
    </div>
  </div>
</template>
