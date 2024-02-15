<script setup lang="ts">
import { ref, watch, onMounted } from "vue"

import RoomInfoTitle from "@/components/frontend/RoomInfoTitle.vue";
import RoomInfoBasic from "@/components/frontend/RoomInfoBasic.vue";
import RoomInfoProvide from "@/components/frontend/RoomInfoProvide.vue";
import RoomInfoRegulation from "@/components/frontend/RoomInfoRegulation.vue";

const { info, layout } = defineProps(["info", "layout"]);

// Route
import { useRoute } from "vue-router"
const route = useRoute()
const routeName = ref<any>('');
// 僅限room-detail顯示
const getRouteName = () => {
  routeName.value = route.name !== null && route.name !== undefined ? route.name : '';
}
// 取得當下最新route.name，不需等到變化時才取得值
watch(() => route.name, () => {
  getRouteName();
});

onMounted(() => {
  getRouteName()
})
</script>

<template>
  <div>
    <RoomInfoTitle title="房型基本資訊" />
    <RoomInfoBasic :info="info" />
  </div>
  <div>
    <RoomInfoTitle title="房間格局" />
    <RoomInfoProvide :info="layout" />
  </div>
  <div>
    <RoomInfoTitle title="房內設備" />
    <RoomInfoProvide :info="info.facilityInfo" />
  </div>
  <div>
    <RoomInfoTitle title="備品提供" />
    <RoomInfoProvide :info="info.amenityInfo" />
  </div>
  <div :class="routeName !== 'room-detail'? 'hidden':''">
    <RoomInfoTitle title="訂房須知" />
    <RoomInfoRegulation />
  </div>
</template>
