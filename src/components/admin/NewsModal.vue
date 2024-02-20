<script setup>
import { storeToRefs } from "pinia";

// 新增/編輯美饌
import { useNewsStore } from "@/stores/newsStore";
const newsStore = useNewsStore();
const { updateNewsType, tempNews } = storeToRefs(newsStore);
const createNews = newsStore.createNews;
const editNews = newsStore.editNews;
const closeNewsModal = newsStore.closeNewsModal;
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full bg-neutral-100/50 backdrop-blur-sm flex justify-center items-center">
    <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="300" class="bg-white w-full md:w-2/3 xl:w-1/3 h-full md:h-fit md:max-h-[80vh] xl:max-h-[70vh] md:rounded-4 overflow-scroll duration-500 ease-in">
      <div class="sticky top-0 px-5 py-4 z-10 border-b border-primary flex justify-between bg-primary-40 text-primary">
        <h1 class="text-5">{{ updateNewsType === "create" ? '新增' : '編輯' }}消息</h1>
        <span class="material-icons cursor-pointer" @click="closeNewsModal()">close</span>
      </div>

      <VForm class="flex flex-col"
             v-slot="{errors}"
             @submit="updateNewsType === 'create' ? createNews() : editNews(), closeNewsModal()">
        <div class="p-4 flex flex-col gap-4">
          <div>
            <label for="news-title" class="font-bold">名稱</label>
            <VField type="text"
                    id="news-title"
                    name="名稱"
                    :class="{ 'is-invalid': errors['名稱'] }"
                    rules="required"
                    v-model="tempNews.title"
                    placeholder="請輸入名稱"
                    class="form-input" />
            <ErrorMessage name="名稱" class="text-alert-100 text-3h" />
          </div>
          <div>
            <label for="news-description" class="font-bold">內容</label>
            <VField as="textarea"
                    id="news-description"
                    name="內容"
                    :class="{ 'is-invalid': errors['內容'] }"
                    rules="required"
                    v-model="tempNews.description"
                    placeholder="請輸入內容"
                    class="form-input" />
            <ErrorMessage name="內容" class="text-alert-100 text-3h" />
          </div>
          <div>
            <label for="news-image" class="font-bold">圖片</label>
            <VField type="text"
                    id="news-image"
                    name="圖片"
                    :class="{ 'is-invalid': errors['圖片'] }"
                    rules="required"
                    v-model="tempNews.image"
                    placeholder="請輸入圖片連結"
                    class="form-input" />
            <ErrorMessage name="圖片" class="text-alert-100 text-3h" />
            <img v-if="tempNews.image" :src="tempNews.image" class="mt-2 rounded-2 h-[200px] w-full object-cover" alt="">
          </div>
        </div>
        <div class="bg-white sticky bottom-0 z-10 border-t border-primary-60 p-4 flex gap-2 justify-end">
          <button type="button" class="btn btn-secondary" @click="closeNewsModal()">取消</button>
          <button type="submit" class="btn btn-primary">確認{{ updateNewsType === "create" ? '新增' : '更新' }}</button>
        </div>
      </VForm>
    </div>
  </div>
</template>