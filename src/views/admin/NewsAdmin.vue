<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import NewsModal from "@/components/admin/NewsModal.vue";
import NewsDelete from "@/components/admin/NewsDelete.vue";

// 新增、編輯消息
import { useNewsStore } from "@/stores/newsStore";
const newsStore = useNewsStore()
const { newsList, tempNews, editNewsId, updateNewsType, showNewsModal, showDelModal } = storeToRefs(newsStore)
const getNews = newsStore.getNews

// 先驗證使用者身份，再取得資訊
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const { isChecked } = storeToRefs(userStore);
const checkUser = userStore.checkUser;
const isLogin = () => {
  if (isChecked.value) getNews()
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
      <h1 class="text-7">消息管理</h1>
      <p v-if="newsList" class="font-bold ms-2">(共 <span class="text-primary-100">{{ newsList.length }}</span> 筆資料)</p>
    </div>
    <button class="btn btn-primary ms-auto" @click="showNewsModal = true, updateNewsType = 'create'">
      <font-awesome-icon icon="fa-solid fa-plus" class="me-2" />
      新增消息
    </button>
    
    <div v-if="!newsList" class="text-primary-100 text-7 font-bold w-full h-[70vh] flex justify-center items-center">
      <font-awesome-icon icon="fa-solid fa-bullhorn" class="me-2" />
      目前還沒有任何消息，快去新增吧！
    </div>
    <table v-else class="w-full admin-table">
      <thead>
        <tr class="border-y border-primary-60">
          <th class="text-start" width="15%"></th>
          <th class="text-center" width="20%">名稱</th>
          <th class="text-center" width="30%">內容</th>
          <th class="text-center" width="25%">管理</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in newsList" :key="item._id" class="border-b border-primary-60 hover:bg-primary-40">
          <th>
            <img v-if="item.image" class="w-full h-[120px] object-cover rounded-2" :src="item.image" :alt="item.title">
          </th>
          <th class="text-center">{{ item.title }}</th>
          <th class="text-justify">{{ item.description }}</th>
          <th>
            <div class="flex flex-wrap justify-center gap-2">
              <button @click="
                      showNewsModal = true,
                      tempNews = JSON.parse(JSON.stringify(item)),
                      updateNewsType = 'edit',
                      editNewsId = item._id"
                      class="btn btn-primary text-4h">
                      <font-awesome-icon icon="fa-solid fa-pencil" class="me-2" />
                      編輯
              </button>
              <button @click="
                      showDelModal = true,
                      tempNews = JSON.parse(JSON.stringify(item)),
                      editNewsId = item._id"
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

  <NewsModal v-if="showNewsModal" />
  <NewsDelete v-if="showDelModal" />
</template>