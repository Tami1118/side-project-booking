<script setup lang="ts">
import { storeToRefs } from "pinia"

// 訂單編輯
import { useOrderStore } from "@/stores/orderStore";
const orderStore = useOrderStore();
const { showOrderModal, tempOrder } = storeToRefs(orderStore);
const editOrder = orderStore.editOrder
const closeOrderModal = orderStore.closeOrderModal
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full bg-neutral-100/50 backdrop-blur-sm flex justify-end" @click.stop="closeOrderModal()">
    <div @click.stop data-aos="fade-left" data-aos-delay="50" data-aos-duration="300" class="bg-white w-full lg:w-1/2 duration-300 h-full overflow-scroll">
      <div class="sticky top-0 px-5 py-4 z-10 border-b border-primary flex justify-between bg-primary-40 text-primary">
        <h1 class="text-5">訂單詳細內容</h1>
        <span class="material-icons cursor-pointer" @click="closeOrderModal()">close</span>
      </div>
      <div class="p-8" v-if="tempOrder">
        <VForm v-slot="{errors}"
                class="flex flex-col gap-4"
                @submit="editOrder(), showOrderModal = false">
          <div class="flex flex-col lg:flex-row gap-4 lg:gap-10">
            <div class="w-full lg:w-7/12 flex flex-col gap-4 lg:order-1">
              <div>
                <label for="room-name" class="font-bold">房型名稱</label>
                <VField type="text"
                        id="room-name"
                        name="房型名稱"
                        :class="{ 'is-invalid': errors['房型名稱'] }"
                        rules="required"
                        v-model="tempOrder.checkInDate"
                        placeholder="請輸入房型名稱"
                        class="form-input" />
                <ErrorMessage name="房型名稱" class="text-alert-100 text-3h" />
              </div> 
              <div class="flex gap-2 justify-end">
                <button type="button" class="btn btn-secondary" @click="closeOrderModal()">取消</button>
                <button type="submit" class="btn btn-primary">確認更新</button>
              </div>
            </div>
            <div class="w-full lg:w-5/12">
              <div class="flex flex-col gap-6">
                
              </div>
            </div>
          </div>
        </VForm>
        
        <!-- 需要思考一下可以變動哪些欄位 -->
        <!-- <input type="text" class="form-input" v-model="tempOrder.roomId.name">
        <input type="text" class="form-input" v-model="tempOrder.userInfo.name"> -->
        <!-- 入住資訊：入住日期、退房日期 -->
        <!-- 聯絡資料：使用者資料、聯絡電話、電子信箱 -->
        <!-- 房型基本資料：房型連結、房型圖片 -->
      </div>
    </div>
  </div>
</template>