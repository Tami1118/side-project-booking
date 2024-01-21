<template>
  <div>
    我是訂單列表頁
    <button class="btn btn-primary" @click="getOrderList">測試</button>
  </div>
</template>

<script setup>

// room
import { onMounted } from 'vue';
// import { storeToRefs } from'pinia' 
import { useOrderStore } from '@/stores/orderStore'

const orderStore = useOrderStore()
// const { roomData } = storeToRefs(roomStore)
const getOrderList = orderStore.getOrderList

onMounted(() => {
  getOrderList()
})

</script>