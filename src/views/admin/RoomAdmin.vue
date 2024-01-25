<template>
  <div class="container mx-auto px-4 xl:px-0 py-10 lg:py-20">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-6">房型管理</h1>
      <button class="p-3 btn-primary text-white" @click="showRoomModal = true, updateRoomType = 'create'">
        新增房型
      </button>
      <!-- 問題：點擊過編輯後，關閉modal再點擊新增，temp會跑出上一個編輯的內容 -->
    </div>
    <table class="w-full">
      <thead>
        <tr class="border-y border-neutral-40">
          <th class="p-2" colspan="2">房型名稱</th>
          <th class="p-2">床數</th>
          <th class="p-2">坪數</th>
          <th class="p-2 text-end">價格</th>
          <th class="p-2 text-start">管理</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in roomData" :key="item.id" class="border-b border-neutral-40">
          <td class="p-2">
            <img class="w-[80px] h-[80px] object-cover rounded-2" :src="item.imageUrl" :alt="item.name">
          </td>
          <td class="p-2">{{ item.name }}</td>
          <td class="p-2 text-center">{{ item.bedInfo }}</td>
          <td class="p-2 text-center">{{ item.areaInfo }} 坪</td>
          <td class="p-2 text-end">{{ item.price }}</td>
          <td class="p-2">
            <div class="flex flex-wrap gap-2">
              <button class="p-3 btn-primary" @click="
                      showRoomModal = true, 
                      roomDataTemp = JSON.parse(JSON.stringify(item)),
                      updateRoomType = 'edit',
                      editRoomId = item._id">
                編輯
              </button>
              <button class="p-3 btn-secondary" @click="deleteRoom(item._id)">
                刪除
              </button>
            </div>
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
// import { watch, onMounted, watchEffect } from "vue";
import { watch } from "vue";
import { storeToRefs } from "pinia";

// room
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const { roomData, roomDataTemp, updateRoomType, editRoomId, showRoomModal } = storeToRefs(roomStore);
const getRooms = roomStore.getRooms;
const deleteRoom = roomStore.deleteRoom;

// user
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const { isChecked } = storeToRefs(userStore)

watch(isChecked, (n) => {
  if(n) getRooms()
})

// onMounted(async () => {
  // await getRooms()
  // console.log(route.path)
// })

// 問題：如果直接跳到 roomAdim時，會因為 checkuser 較慢無法取得 roomData
// 解決：用watch監聽 checked，當 checked 為 true 時，再去取得 roomData

// // route
// import { useRoute } from "vue-router"
// const route  = useRoute()
// watchEffect(() => {
//   if (route.path === '/admin/rooms') {
//     getRooms()
//     window.scrollTo(0, 0);
//   }
// });

// 延伸
// 問題：若不加 onMounted 會需要再重新更新頁面才會出現，但加了 onMounted 變成先取得失敗然後再重新驗證一次
</script>