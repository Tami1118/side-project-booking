<template>
  <div class="fixed top-0 left-0 w-full h-full bg-neutral-100/50 z-10">
    <div class="flex justify-center items-center h-full px-0 sm:px-4">
      <div class="bg-white w-[1024px] h-[600px] overflow-scroll">
        <div class="sticky top-0 z-10 px-5 py-4 border-b border-primary flex justify-between bg-primary-40 text-primary">
          <h1 class="text-5">
            {{updateRoomType === "create" ? '新增':'編輯'}}房型
          </h1>
          <span class="material-icons cursor-pointer" @click="showRoomModal = false, resetRoomDataTemp()">close</span>
        </div>
        <div class="p-5">
          <VForm v-slot="{errors}"
                 class="flex flex-col gap-4"
                 @submit="updateRoomType === 'create' ? createRoom() : editRoom(),
                          showRoomModal = false">
            <div class="flex flex-col lg:flex-row gap-6">
              <div class="basis-full lg:basis-7/12 flex flex-col gap-4 lg:order-1">
                <div>
                  <label for="room-name" class="font-bold">房型名稱</label>
                  <VField type="text"
                          id="room-name"
                          name="房型名稱"
                          :class="{ 'is-invalid': errors['房型名稱'] }"
                          rules="required"
                          v-model="roomDataTemp.name"
                          placeholder="請輸入房型名稱"
                          class="form-input" />
                  <ErrorMessage name="房型名稱" class="text-alert-100 text-3h" />
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label for="room-area" class="font-bold">坪數</label>
                    <VField type="number"
                            id="room-area"
                            name="坪數"
                            :class="{ 'is-invalid': errors['坪數'] }"
                            rules="required|min_value:3|max_value:100"
                            v-model="roomDataTemp.areaInfo"
                            placeholder="請輸入坪數"
                            class="form-input"
                             />
                    <ErrorMessage name="坪數" class="text-alert-100 text-3h" />
                  </div>
                  <div>
                    <label for="room-bed" class="font-bold">床數</label>
                    <div class="relative">
                      <VField as="select"
                              id="room-bed"
                              name="床數"
                              :class="{ 'is-invalid': errors['床數'] }"
                              v-model="roomDataTemp.bedInfo"
                              class="p-4 rounded-2 form-select w-full"
                              >
                        <option value="" selected>請選擇床數</option>
                        <option v-for="item in bedType" :key="item" :value="item">{{item}}</option>
                      </VField>
                      <div class="absolute top-0 bottom-0 right-0 m-auto p-4">
                        <span class="material-icons">keyboard_arrow_down</span>
                      </div>
                    </div>
                    <ErrorMessage name="床數" class="text-alert-100 text-3h" />
                  </div>
                  <div>
                    <label for="room-people" class="font-bold">最大人數</label>
                    <VField
                            type="number"
                            id="room-people"
                            name="最大人數"
                            :class="{ 'is-invalid': errors['最大人數'] }"
                            rules="required|min_value:1|max_value:20"
                            v-model="roomDataTemp.maxPeople"
                            placeholder="請輸入最大人數"
                            class="form-input"
                             />
                    <ErrorMessage name="最大人數" class="text-alert-100 text-3h" />
                  </div>
                  <div>
                    <label for="room-price" class="font-bold">價格</label>
                    <VField type="number"
                            id="room-price"
                            name="價格"
                            :class="{ 'is-invalid': errors['價格'] }"
                            rules="required|min_value:100|max_value:1000000"
                            v-model="roomDataTemp.price"
                            placeholder="請輸入價格"
                            class="form-input"
                             />
                    <ErrorMessage name="價格" class="text-alert-100" />
                  </div>
                </div>
                <div>
                  <label for="room-name" class="font-bold">描述</label>
                  <VField as="textarea"
                          id="room-name"
                          name="描述"
                          :class="{ 'is-invalid': errors['描述'] }"
                          rules="required"
                          v-model="roomDataTemp.description"
                          placeholder="請輸入描述"
                          class="form-input"
                           />
                  <ErrorMessage class="text-alert-100 " name="描述" />
                </div>

                <div>
                  <p class="font-bold mb-2">房內設備</p>
                  <div class="grid grid-cols-3 border border-neutral-40 p-4 rounded-2">
                    <div v-for="item in roomDataTemp.facilityInfo" :key="item.title" class="flex items-center">
                      <input type="checkbox"
                             class="w-[16px]"
                             :value="item.title"
                             :id="item.title"
                             :name="item.title"
                             v-model="item.isProvide">
                      <label :for="item.title">{{ item.title }}</label>
                    </div>
                  </div>
                </div>

                <div>
                  <p class="font-bold mb-2">備品提供</p>
                  <div class="grid grid-cols-3 border border-neutral-40 p-4 rounded-2">
                    <div v-for="item in roomDataTemp.amenityInfo" :key="item.title" class="flex items-center">
                      <input type="checkbox"
                             class="w-[16px]"
                             :value="item.title"
                             :id="item.title"
                             :name="item.title"
                             v-model="item.isProvide">
                      <label :for="item.title">{{ item.title }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="basis-full lg:basis-5/12">
                <div class="flex flex-col gap-6">
                  <div class="pb-6 border-b border-neutral-40">
                    <label for="room-img" class="font-bold">房型主圖</label>
                    <VField 
                            type="text"
                            id="room-img"
                            name="房型圖片"
                            :class="{ 'is-invalid': errors['房型圖片'] }"
                            rules="required"
                            v-model="roomDataTemp.imageUrl"
                            placeholder="請輸入房型圖片連結"
                            class="form-input"
                    />
                    <ErrorMessage name="房型圖片" class="text-alert-100 text-3h" />
                    <img :src="roomDataTemp.imageUrl" class="mt-2 rounded-2 h-[200px] w-full object-cover" alt="">
                  </div>
                  <div>
                    <label for="room-imgs" class="font-bold">多圖設置</label>
                    <div class="flex flex-col gap-2">
                      <div>
                        <input type="text"
                               class="form-input mb-2"
                               placeholder="請輸入其他圖片連結"
                               v-model="roomDataTemp.imageUrlList[0]" />
                        <img :src="roomDataTemp.imageUrlList[0]" class="rounded-2 h-[200px] w-full object-cover" alt="">
                      </div>
                      <!-- 
                        待辦：
                        新增、刪除按鈕
                       -->
                      <div>
                        <input type="text"
                               class="form-input mb-2"
                               placeholder="請輸入其他圖片連結"
                               v-model="roomDataTemp.imageUrlList[1]" />
                        <img :src="roomDataTemp.imageUrlList[1]" class="rounded-2 h-[200px] w-full object-cover" alt="">
                      </div>
                      <div>
                        <input type="text"
                               class="form-input mb-2"
                               placeholder="請輸入其他圖片連結"
                               v-model="roomDataTemp.imageUrlList[2]" />
                        <img :src="roomDataTemp.imageUrlList[2]" class="rounded-2 h-[200px] w-full object-cover" alt="">
                      </div>
                      <div>
                        <input type="text"
                               class="form-input mb-2"
                               placeholder="請輸入其他圖片連結"
                               v-model="roomDataTemp.imageUrlList[3]" />
                        <img :src="roomDataTemp.imageUrlList[3]" class="rounded-2 h-[200px] w-full object-cover" alt="">
                      </div>
                      <div>
                        <input type="text"
                               class="form-input mb-2"
                               placeholder="請輸入其他圖片連結"
                              v-model="roomDataTemp.imageUrlList[4]" />
                        <img :src="roomDataTemp.imageUrlList[4]" class="rounded-2 h-[200px] w-full object-cover" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex gap-2 justify-end">
              <button type="button" class="btn btn-secondary" @click="showRoomModal = false, resetRoomDataTemp()">取消</button>
              <button type="submit" class="btn btn-primary">確認</button>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

// room
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const { showRoomModal, updateRoomType, roomDataTemp, bedType } = storeToRefs(roomStore);
const createRoom = roomStore.createRoom;
const editRoom = roomStore.editRoom;
const resetRoomDataTemp = roomStore.resetRoomDataTemp;
</script>