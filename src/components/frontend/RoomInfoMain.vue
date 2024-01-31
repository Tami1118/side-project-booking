<template>
  <div class="flex flex-col gap-6 lg:gap-20">
    <div>
      <RoomInfoTitle title="房型基本資訊" />
      <RoomInfoBasic :info="roomDetail" />
    </div>
    <div>
      <RoomInfoTitle title="房間格局" />
      <RoomInfoProvide :info="roomLayout" />
    </div>
    <div>
      <RoomInfoTitle title="房內設備" />
      <RoomInfoProvide :info="roomDetail.facilityInfo" />
    </div>
    <div>
      <RoomInfoTitle title="備品提供" />
      <RoomInfoProvide :info="roomDetail.amenityInfo" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Basic
import { storeToRefs } from "pinia";

// Components
import RoomInfoTitle from "@/components/frontend/RoomInfoTitle.vue";
import RoomInfoBasic from "@/components/frontend/RoomInfoBasic.vue";
import RoomInfoProvide from "@/components/frontend/RoomInfoProvide.vue";

// Room
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const { roomDetail, roomLayout } = storeToRefs(roomStore);
</script>