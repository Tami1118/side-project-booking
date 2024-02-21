<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import FoodModal from "@/components/admin/FoodModal.vue";
import FoodDelete from "@/components/admin/FoodDelete.vue";

// 新增、編輯美食
import { useFoodStore } from "@/stores/foodStore";
const foodStore = useFoodStore()
const { foodList, tempFood, editFoodId, updateFoodType, showFoodModal, showDelModal } = storeToRefs(foodStore)
const getFoods = foodStore.getFoods

// 先驗證使用者身份，再取得資訊
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const { isChecked } = storeToRefs(userStore);
const checkUser = userStore.checkUser;
const isLogin = () => {
  if (isChecked.value) getFoods()
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
      <h1 class="text-7">美饌管理</h1>
      <p v-if="foodList" class="font-bold ms-2">(共 <span class="text-primary-100">{{ foodList.length }}</span> 筆資料)</p>
    </div>
    <button class="btn btn-primary ms-auto" @click="showFoodModal = true, updateFoodType = 'create'">
      <font-awesome-icon icon="fa-solid fa-plus" class="me-2" />
      新增美饌
    </button>
    
    <div v-if="!foodList" class="text-primary-100 text-7 font-bold w-full h-[70vh] flex justify-center items-center">
      <font-awesome-icon icon="fa-solid fa-utensils" class="me-2" />
      目前還沒有任何美食，快去新增吧！
    </div>
    <table v-else class="w-full admin-table">
      <thead>
        <tr class="border-y border-primary-60">
          <th class="text-start" width="15%"></th>
          <th class="text-center" width="10%">名稱</th>
          <th class="text-center" width="30%">內容</th>
          <th class="text-center" width="20%">供應時間</th>
          <th class="text-center" width="25%">管理</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in foodList" :key="item._id" class="border-b border-primary-60 hover:bg-primary-40">
          <th>
            <img v-if="item.image" class="w-full h-[120px] object-cover rounded-2" :src="item.image" :alt="item.title">
          </th>
          <th class="text-center">{{ item.title }}</th>
          <th class="text-justify">{{ item.description }}</th>
          <th class="text-center">{{ item.diningTime }}</th>
          <th>
            <div class="flex flex-wrap justify-center gap-2">
              <button @click="
                      showFoodModal = true,
                      tempFood = JSON.parse(JSON.stringify(item)),
                      updateFoodType = 'edit',
                      editFoodId = item._id"
                      class="btn btn-primary text-4h">
                      <font-awesome-icon icon="fa-solid fa-pencil" class="me-2" />
                      編輯
              </button>
              <button @click="
                      showDelModal = true,
                      tempFood = JSON.parse(JSON.stringify(item)),
                      editFoodId = item._id"
                      class="btn text-primary-100 text-4h hover:text-primary border border-primary-100 hover:border-primary bg-transparent hover:bg-primary-60">
                      <font-awesome-icon icon="fa-solid fa-trash-can" class="me-2" />
                      刪除
              </button>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>

  <FoodModal v-if="showFoodModal" />
  <FoodDelete v-if="showDelModal" />
</template>