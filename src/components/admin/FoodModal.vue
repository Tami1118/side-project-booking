<script setup>
import { storeToRefs } from "pinia";

// 新增/編輯美饌
import { useFoodStore } from "@/stores/foodStore";
const foodStore = useFoodStore();
const { updateFoodType, tempFood } = storeToRefs(foodStore);
const createFood = foodStore.createFood;
const editFood = foodStore.editFood;
const closeFoodModal = foodStore.closeFoodModal;
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full bg-neutral-100/50 backdrop-blur-sm flex justify-center items-center">
    <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="300" class="bg-white w-full md:w-2/3 xl:w-1/3 h-full md:h-fit md:max-h-[80vh] xl:max-h-[70vh] md:rounded-4 overflow-scroll duration-500 ease-in">
      <div class="sticky top-0 px-5 py-4 z-10 border-b border-primary flex justify-between bg-primary-40 text-primary">
        <h1 class="text-5">{{ updateFoodType === "create" ? '新增' : '編輯' }}美饌</h1>
        <span class="material-icons cursor-pointer" @click="closeFoodModal()">close</span>
      </div>

      <VForm class="flex flex-col"
             v-slot="{errors}"
             @submit="updateFoodType === 'create' ? createFood() : editFood(), closeFoodModal()">
        <div class="p-4 flex flex-col gap-4">
          <div>
            <label for="food-title" class="font-bold">名稱</label>
            <VField type="text"
                    id="food-title"
                    name="名稱"
                    :class="{ 'is-invalid': errors['名稱'] }"
                    rules="required"
                    v-model="tempFood.title"
                    placeholder="請輸入名稱"
                    class="form-input" />
            <ErrorMessage name="名稱" class="text-alert-100 text-3h" />
          </div>
          <div>
            <label for="food-diningTime" class="font-bold">供應時間</label>
            <VField type="text"
                    id="food-diningTime"
                    name="供應時間"
                    :class="{ 'is-invalid': errors['供應時間'] }"
                    rules="required"
                    v-model="tempFood.diningTime"
                    placeholder="請輸入供應時間"
                    class="form-input" />
            <ErrorMessage name="供應時間" class="text-alert-100 text-3h" />
          </div>
          <div>
            <label for="food-description" class="font-bold">內容</label>
            <VField as="textarea"
                    id="food-description"
                    name="內容"
                    :class="{ 'is-invalid': errors['內容'] }"
                    rules="required"
                    v-model="tempFood.description"
                    placeholder="請輸入內容"
                    class="form-input" />
            <ErrorMessage name="內容" class="text-alert-100 text-3h" />
          </div>
          <div>
            <label for="food-image" class="font-bold">圖片</label>
            <VField type="text"
                    id="food-image"
                    name="圖片"
                    :class="{ 'is-invalid': errors['圖片'] }"
                    rules="required"
                    v-model="tempFood.image"
                    placeholder="請輸入圖片連結"
                    class="form-input" />
            <ErrorMessage name="圖片" class="text-alert-100 text-3h" />
            <img v-if="tempFood.image" :src="tempFood.image" class="mt-2 rounded-2 h-[200px] w-full object-cover" alt="">
          </div>
        </div>
        <div class="bg-white sticky bottom-0 z-10 border-t border-primary-60 p-4 flex gap-2 justify-end">
          <button type="button" class="btn btn-secondary" @click="closeFoodModal()">取消</button>
          <button type="submit" class="btn btn-primary">確認{{ updateFoodType === "create" ? '新增' : '更新' }}</button>
        </div>
      </VForm>
    </div>
  </div>
</template>