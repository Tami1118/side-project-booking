<script setup lang="ts">
// Components
import RoomInfoTitle from "@/components/frontend/RoomInfoTitle.vue";
import RoomInfoBasic from "@/components/frontend/RoomInfoBasic.vue";
import RoomInfoProvide from "@/components/frontend/RoomInfoProvide.vue";

const props = defineProps(["info", "layout"])
</script>

<template>
  <div class="flex flex-col gap-6 lg:gap-20">
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
  </div>
</template>
