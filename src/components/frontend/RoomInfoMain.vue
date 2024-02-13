<script setup lang="ts">
// Basic
import { ref, watch, onMounted } from "vue"
const props = defineProps(["info", "layout"])

// Components
import RoomInfoTitle from "@/components/frontend/RoomInfoTitle.vue";
import RoomInfoBasic from "@/components/frontend/RoomInfoBasic.vue";
import RoomInfoProvide from "@/components/frontend/RoomInfoProvide.vue";
import RoomInfoRegulation from "@/components/frontend/RoomInfoRegulation.vue";

// Route
import { useRoute } from "vue-router"
const route = useRoute()
const routeName = ref<any>('');
// 僅限room-detail顯示
const getRouteName = () => {
  routeName.value = route.name !== null && route.name !== undefined ? route.name : '';
}

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
    <RoomInfoBasic :info="props.info" />
  </div>
  <div>
    <RoomInfoTitle title="房間格局" />
    <RoomInfoProvide :info="props.layout" />
  </div>
  <div>
    <RoomInfoTitle title="房內設備" />
    <RoomInfoProvide :info="props.info.facilityInfo" />
  </div>
  <div>
    <RoomInfoTitle title="備品提供" />
    <RoomInfoProvide :info="props.info.amenityInfo" />
  </div>
  <div :class="routeName !== 'room-detail'? 'hidden':''">
    <RoomInfoTitle title="訂房須知" />
    <RoomInfoRegulation />
  </div>
</template>
