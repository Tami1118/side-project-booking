<script setup>
import { storeToRefs } from "pinia";

// 新增/編輯房型
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const { showRoomModal, updateRoomType, tempRoom, bedType } = storeToRefs(roomStore);
const createRoom = roomStore.createRoom;
const editRoom = roomStore.editRoom;
const closeRoomModal = roomStore.closeRoomModal;
</script>

<template>
  <div @click.stop="closeRoomModal()"
       class="fixed top-0 left-0 w-full h-full bg-neutral-100/50 backdrop-blur-sm flex justify-end">
    <div @click.stop
         data-aos="fade-left"
         data-aos-delay="50"
         data-aos-duration="300"
         class="bg-white w-full lg:w-3/5 duration-300 h-full overflow-scroll">
      <div class="sticky top-0 px-5 py-4 z-10 border-b border-primary flex justify-between bg-primary-40 text-primary">
        <h1 class="text-5">{{ updateRoomType === "create" ? '新增':'編輯' }}房型</h1>
        <span class="material-icons cursor-pointer" @click="closeRoomModal()">close</span>
      </div>
      <div class="p-8">
        <VForm v-slot="{errors}"
                class="flex flex-col gap-4"
                @submit="updateRoomType === 'create' ? createRoom() : editRoom(),
                         showRoomModal = false">
          <div class="flex flex-col lg:flex-row gap-4 lg:gap-10">
            <div class="w-full lg:w-7/12 flex flex-col gap-4 lg:order-1">
              <div>
                <label for="room-name" class="font-bold">房型名稱</label>
                <VField type="text"
                        id="room-name"
                        name="房型名稱"
                        :class="{ 'is-invalid': errors['房型名稱'] }"
                        rules="required"
                        v-model="tempRoom.name"
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
                          v-model="tempRoom.areaInfo"
                          placeholder="請輸入坪數"
                          class="form-input" />
                  <ErrorMessage name="坪數" class="text-alert-100 text-3h" />
                </div>
                <div>
                  <label for="room-bed" class="font-bold">床數</label>
                  <div class="relative">
                    <VField as="select"
                            id="room-bed"
                            name="床數"
                            :class="{ 'is-invalid': errors['床數'] }"
                            v-model="tempRoom.bedInfo"
                            class="p-4 rounded-2 form-select w-full" >
                      <option value="" selected>請選擇床數</option>
                      <option v-for="item in bedType" :key="item" :value="item">{{item}}</option>
                    </VField>
                    <div class="absolute top-0 bottom-0 right-0 m-auto p-4 pointer-events-none">
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
                          v-model="tempRoom.maxPeople"
                          placeholder="請輸入最大人數"
                          class="form-input" />
                  <ErrorMessage name="最大人數" class="text-alert-100 text-3h" />
                </div>
                <div>
                  <label for="room-price" class="font-bold">價格</label>
                  <VField type="number"
                          id="room-price"
                          name="價格"
                          :class="{ 'is-invalid': errors['價格'] }"
                          rules="required|min_value:100|max_value:1000000"
                          v-model="tempRoom.price"
                          placeholder="請輸入價格"
                          class="form-input" />
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
                        v-model="tempRoom.description"
                        placeholder="請輸入描述"
                        class="form-input" />
                <ErrorMessage class="text-alert-100 " name="描述" />
              </div>
              <div>
                <p class="font-bold mb-2">房內設備</p>
                <div class="grid grid-cols-3 border border-neutral-40 p-4 rounded-2">
                  <div v-for="item in tempRoom.facilityInfo" :key="item.title" class="flex items-center">
                    <label :for="item.title" class="flex items-center">
                    <input type="checkbox"
                            class=""
                            :value="item.title"
                            :id="item.title"
                            :name="item.title"
                            v-model="item.isProvide">
                            <span><font-awesome-icon icon="fa-solid fa-check" :class="item.isProvide ? 'text-white text-3' : 'hidden'" /></span>
                            {{ item.title }}
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p class="font-bold mb-2">備品提供</p>
                <div class="grid grid-cols-3 border border-neutral-40 p-4 rounded-2">
                  <div v-for="item in tempRoom.amenityInfo" :key="item.title" class="flex items-center">
                    <label :for="item.title" class="flex items-center">
                    <input type="checkbox"
                            class=""
                            :value="item.title"
                            :id="item.title"
                            :name="item.title"
                            v-model="item.isProvide">
                            <span><font-awesome-icon icon="fa-solid fa-check" :class="item.isProvide ? 'text-white text-3' : 'hidden'" /></span>
                            {{ item.title }}
                    </label>
                  </div>
                </div>
              </div>
              <div class="flex gap-2 justify-end">
                <button type="button" class="btn btn-secondary" @click="showRoomModal = false, resetTempRoom()">取消</button>
                <button type="submit" class="btn btn-primary">確認{{updateRoomType === "create" ? '新增':'更新'}}</button>
              </div>
            </div>
            <div class="w-full lg:w-5/12">
              <div class="flex flex-col gap-6">
                <div class="pb-6 border-b border-neutral-40">
                  <label for="room-img" class="font-bold">房型主圖</label>
                  <VField 
                          type="text"
                          id="room-img"
                          name="房型圖片"
                          :class="{ 'is-invalid': errors['房型圖片'] }"
                          rules="required"
                          v-model="tempRoom.imageUrl"
                          placeholder="請輸入房型圖片連結"
                          class="form-input" />
                  <ErrorMessage name="房型圖片" class="text-alert-100 text-3h" />
                  <img v-if="tempRoom.imageUrl" :src="tempRoom.imageUrl" class="mt-2 rounded-2 h-[200px] w-full object-cover" alt="">
                </div>
                <div>
                  <label for="room-imgs" class="font-bold">多圖設置</label>
                  <div class="flex flex-col gap-2">
                    
                    <template v-if="tempRoom.imageUrlList.length">
                      <div v-for="(item, key) in tempRoom.imageUrlList" :key="`${tempRoom.name} + ${key}`">
                        <div class="flex border border-neutral-40 rounded-4">
                          <input type="text" class="p-4 grow rounded-l-4" v-model="tempRoom.imageUrlList[key]" placeholder="請輸入房型圖片連結">
                          <button class="p-4 rounded-r-4 hover:bg-primary-40 hover:text-primary" @click="tempRoom.imageUrlList.splice(key, 1)">
                            <font-awesome-icon icon="fa-solid fa-xmark" />
                          </button>
                        </div>
                        <img v-if="tempRoom.imageUrlList[key]" class="mt-2 rounded-2 h-[200px] w-full object-cover" :src="tempRoom.imageUrlList[key]" :alt="`${tempRoom.name} + ${key}`">
                      </div>
                      <div v-if="tempRoom.imageUrlList[tempRoom.imageUrlList.length - 1]">
                        <button @click="tempRoom.imageUrlList.push('')" class="btn btn-primary w-full">新增圖片</button>
                      </div>
                    </template>
                    <template v-else>
                      <button class="btn btn-primary" @click="tempRoom.imageUrlList.push('')">新增圖片</button>
                    </template>

                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </VForm>
      </div>
    </div>
  </div>
</template>