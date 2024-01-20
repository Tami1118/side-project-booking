<template>
  <RoomModal v-if="showRoomModal"/>
  
  
  <button 
    class="p-3 ms-auto bg-primary text-white"
    @click="showRoomModal = true, updateRoomType = 'create'"
  >
    新增房型 
  </button>
  <div class="mt-6">共 {{ roomData.length }} 筆資料</div>
  <div class="overflow-x-auto relative mt-3">
    <table class="w-full text-sm text-left">
    <thead>
      <tr>
        <th scope="col" class="py-1 px-2">圖片</th>
        <th scope="col" class="py-1 px-2">名稱/描述</th>
        <th scope="col" class="py-1 px-2">規格</th>
        <th scope="col" class="py-1 px-2">價錢</th>
        <!-- <th scope="col" class="py-1 px-2">其他</th> -->
        <th scope="col" class="py-1 px-2">編輯</th>
        <th scope="col" class="py-1 px-2">刪除</th>
      </tr>
    </thead>
    <tbody>
      <tr 
        v-for="item in roomData" :key="item.id"
        class=""
      >
        <td class="py-2 px-2">
          <img :src="item.imageUrl" alt="room img" style="width: 80px;">
        </td>
        <td class="py-2 px-2">
          <div class="">{{ item.name }}</div>
          <div class="">{{ item.description }}</div>
        </td>
        <td class="py-2 px-2">
          <div class="">{{ item.areaInfo }} 坪</div>
          <div class="">{{ item.bedInfo }}</div>
        </td>
        <td class="py-2 px-2">
          {{ item.price }}
        </td>
        <!-- <td class="py-2 px-2">
          <div class="">{{item.facilityInfo }}</div>
          <div class="">{{ item.amenityInfo }}</div>
        </td> -->
        <td class="py-2 px-2">
          <button 
            class="p-3 me-3 bg-primary text-white"
            @click="
              showRoomModal = true, 
              roomDataTemp = JSON.parse(JSON.stringify(item)),
              updateRoomType = 'edit',
              editRoomId = item._id"
          >
            編輯
          </button>
        </td>
        <td class="py-2 px-2">
          <button 
            class="p-3 me-3 bg-primary text-white"
            @click="deleteRoom(item._id)"
          >
            刪除
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>


</template>

<script setup>
import RoomModal from '../../components/admin/RoomModal.vue'
import { onMounted } from 'vue';
import { storeToRefs } from'pinia' 
import { useUserStore } from '@/stores/userStore'
import { useRoomStore } from '@/stores/roomStore'

const userStore = useUserStore()
const checkUser = userStore.checkUser

const roomStore = useRoomStore()
const { showRoomModal, roomData, roomDataTemp, updateRoomType, editRoomId } = storeToRefs(roomStore)
const getRooms = roomStore.getRooms
const createRoom = roomStore.createRoom
const editRoom = roomStore.editRoom
const deleteRoom = roomStore.deleteRoom


onMounted(() => {
  checkUser()
  getRooms()
})
</script>