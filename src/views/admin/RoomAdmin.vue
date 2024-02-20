<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import format from "@/mixins/format";
import RoomModal from "@/components/admin/RoomModal.vue";
import RoomDelete from "@/components/admin/RoomDelete.vue";

// 房型資訊
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const { roomList, tempRoom, updateRoomType, editRoomId, showRoomModal, showDelModal } = storeToRefs(roomStore);
const getRooms = roomStore.getRooms;

// 先驗證使用者身份，再取得資訊
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const { isChecked } = storeToRefs(userStore);
const checkUser = userStore.checkUser;
const isLogin = () => {
  if (isChecked.value) getRooms()
}
const getAuth = async () => {
  await checkUser();
  isLogin()
}
onMounted(() => {
  getAuth();
});
</script>

<template>
  <div class="p-10 flex flex-col gap-6">
    <div class="flex items-end">
      <h1 class="text-7">房型管理</h1>
      <p v-if="roomList" class="font-bold ms-2">(共 <span class="text-primary-100">{{ roomList.length }}</span> 筆資料)</p>
    </div>

    <button class="btn btn-primary ms-auto" @click="showRoomModal = true, updateRoomType = 'create'">
      <font-awesome-icon icon="fa-solid fa-plus" class="me-2" />
      新增房型
    </button>

    <div v-if="!roomList" class="text-primary-100 text-7 font-bold w-full h-[70vh] flex justify-center items-center">
      <font-awesome-icon icon="fa-solid fa-bed" class="me-2" /> 目前還沒有任何房型，快去新增吧！
    </div>
    <table v-else class="w-full admin-table">
      <thead>
        <tr class="border-y border-primary-60">
          <th></th>
          <th class="text-start">房型名稱</th>
          <th>床數</th>
          <th>坪數</th>
          <th>容納人數</th>
          <th class="text-end">價格</th>
          <th class="text-center">管理</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in roomList" :key="item._id" class="border-b border-primary-60 hover:bg-primary-40">
          <td>
            <img v-if="item.imageUrl" class="w-full h-[120px] object-cover rounded-2" :src="item.imageUrl" :alt="item.name">
          </td>
          <td class="font-bold">{{ item.name }}</td>
          <td class="text-center">{{ item.bedInfo }}</td>
          <td class="text-center">{{ item.areaInfo }} 坪</td>
          <td class="text-center">{{ item.maxPeople }} 人</td>
          <td class="text-end">NT$ {{ format.toThousands(item.price) }}</td>
          <td>
            <div class="flex flex-wrap justify-center gap-2">
              <button @click="
                      showRoomModal = true,
                      tempRoom = JSON.parse(JSON.stringify(item)),
                      updateRoomType = 'edit',
                      editRoomId = item._id"
                      class="btn btn-primary text-4h">
                      <font-awesome-icon icon="fa-solid fa-pencil" class="me-2" />
                      編輯
              </button>
              <button @click="
                      showDelModal = true,
                      tempRoom = JSON.parse(JSON.stringify(item)),
                      editRoomId = item._id"
                      class="btn text-primary-100 text-4h hover:text-primary border border-primary-100 hover:border-primary bg-transparent hover:bg-primary-60">
                      <font-awesome-icon icon="fa-solid fa-trash-can" class="me-2" />
                      刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <RoomModal v-if="showRoomModal" />
  <RoomDelete v-if="showDelModal" />
</template>