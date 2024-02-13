<script setup lang="ts">
const props = defineProps(["title"])
</script>
<template>
  <h3 class="title-deco ps-4 lg:text-6 text-neutral-100 font-bold mb-4 lg:mb-6">{{ props.title }}</h3>
</template>