<template>
  <div class="container mx-auto px-4 xl:px-0 py-10 lg:py-20">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-6">房型管理</h1>
      <button class="p-3 bg-primary text-white" @click="showRoomModal = true, updateRoomType = 'create'">
        新增房型
      </button>
    </div>
    <table class="w-full">
      <thead>
        <tr class="border-y border-neutral-40">
          <th colspan="2">房型名稱</th>
          <th>床數</th>
          <th>坪數</th>
          <th>價格</th>
          <th>管理</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in roomData" :key="item.id" class="border-b border-neutral-40">
          <td class="p-2">
            <img class="w-[80px] h-[80px] object-cover" :src="item.imageUrl" :alt="item.name">
          </td>
          <td class="p-2">{{ item.name }}</td>
          <td class="p-2">{{ item.bedInfo }}</td>
          <td class="p-2">{{ item.areaInfo }} 坪</td>
          <td class="p-2 text-end">{{ item.price }}</td>
          <td class="p-2">
            <button class="p-3 me-3 bg-primary text-white" @click="
              showRoomModal = true, 
              roomDataTemp = JSON.parse(JSON.stringify(item)),
              updateRoomType = 'edit',
              editRoomId = item._id">
              編輯
            </button>
            <button class="p-3 me-3 bg-primary text-white" @click="deleteRoom(item._id)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6" class="text-end border-y border-neutral-40">
            共 {{ roomData.length }} 筆資料
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  <RoomModal v-if="showRoomModal" />
</template>

<script setup>
import RoomModal from "@/components/admin/RoomModal.vue";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/userStore";
import { useRoomStore } from "@/stores/roomStore";

const userStore = useUserStore();
const checkUser = userStore.checkUser;

const roomStore = useRoomStore();
const { showRoomModal, roomData, roomDataTemp, updateRoomType, editRoomId } =
  storeToRefs(roomStore);
const getRooms = roomStore.getRooms;
const createRoom = roomStore.createRoom;
const editRoom = roomStore.editRoom;
const deleteRoom = roomStore.deleteRoom;

onMounted(() => {
  checkUser();
  getRooms();
});
</script>