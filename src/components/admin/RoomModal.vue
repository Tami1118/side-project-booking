<template>
  <p class="">{{ updateRoomType }}</p>
  <VForm  v-slot="{ errors }"
    @submit="updateRoomType === 'create' ? createRoom() : editRoom(), showRoomModal = false">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="room-name" class="font-bold ">
          名稱
        </label>
        <VField
          name="名稱"
          id="room-name"
          type="text"
          rules="required"
          class="form-input"
          :class="{ 'is-invalid': errors['名稱'] }"
          placeholder="請輸入名稱"
          v-model="roomDataTemp.name"
        />
        <ErrorMessage class="text-alert-100" name="名稱"/>
      </div>
      <div class="flex flex-col gap-2">
        <label for="room-name" class="font-bold ">
          描述
        </label>
        <VField
          name="描述"
          id="room-name"
          type="text"
          rules="required"
          class="form-input"
          :class="{ 'is-invalid': errors['描述'] }"
          placeholder="請輸入描述"
          v-model="roomDataTemp.description"
        />
        <ErrorMessage class="text-alert-100" name="描述"/>
      </div>
      <div class="flex flex-col gap-2">
        <label for="room-name" class="font-bold">
          坪數
        </label>
        <VField
          name="坪數"
          id="room-name"
          type="number"
          rules="required|min_value:3|max_value:100"
          class="form-input"
          :class="{ 'is-invalid': errors['坪數'] }"
          placeholder="請輸入坪數"
          v-model="roomDataTemp.areaInfo"
        />
        <ErrorMessage class=" text-alert-100" name="坪數"/>
      </div>
      <div class="flex flex-col gap-2">
        <label for="room-bed" class="font-bold">
          床數
        </label>
        <div class="relative">
          <VField 
            name="床數" 
            as="select" 
            class="p-4 rounded-2 form-select w-full" 
            id="room-bed"
            :class="{ 'is-invalid': errors['床數'] }"
            v-model="roomDataTemp.bedInfo"
          >
            <option value="" selected>請選擇床數</option>
            <option value="一張大床">一張大床</option>
            <option value="兩張大床">兩張大床</option>
            <option value="三張大床">三張大床</option>
            <option value="四張大床">四張大床</option>
            <option value="五張大床">五張大床</option>
            <option value="六張大床">六張大床</option>
          </VField>
          <div class="absolute top-0 bottom-0 right-0 m-auto p-4">
            <span class="material-icons">keyboard_arrow_down</span>
          </div>
        </div>
        <ErrorMessage class="invalid-feedback" name="床數"/>
      </div>
      <div class="flex flex-col gap-2">
        <label for="room-people" class="font-bold">
          最大人數
        </label>
        <VField
          name="最大人數"
          id="room-people"
          type="number"
          rules="required|min_value:1|max_value:100"
          class="form-input"
          :class="{ 'is-invalid': errors['最大人數'] }"
          placeholder="請輸入最大人數"
          v-model="roomDataTemp.maxPeople"
        />
        <ErrorMessage class=" text-alert-100" name="最大人數"/>
      </div>
      <div class="flex flex-col gap-2">
        <label for="room-price" class="font-bold">
          價格
        </label>
        <VField
          name="價格"
          id="room-price"
          type="number"
          rules="required|min_value:100|max_value:1000000"
          class="form-input"
          :class="{ 'is-invalid': errors['價格'] }"
          placeholder="請輸入價格"
          v-model="roomDataTemp.price"
        />
        <ErrorMessage class=" text-alert-100" name="價格"/>
      </div>
      <div class="flex flex-col gap-2">
        <div class="font-bold">房內設備</div>
        <div class="flex">
          <div v-for="item in roomDataTemp.facilityInfo" :key="item" class="me-3">
            <input 
              class="form-check-input" 
              type="checkbox" 
              value="" 
              :id="item.title" 
              :name="item.title" 
              v-model="item.isProvide"> 
            <label :for="item.title">{{ item.title }}</label>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="font-bold">備品提供</div>
        <div class="flex">
          <div v-for="item in roomDataTemp.amenityInfo" :key="item" class="me-3">
            <input 
              class="form-check-input" 
              type="checkbox" 
              value="" 
              :id="item.title" 
              :name="item.title" 
              v-model="item.isProvide"> 
            <label :for="item.title">{{ item.title }}</label>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="font-bold">格局</div>
        <div class="flex">
          <div v-for="item in roomDataTemp.patternInfo" :key="item" class="me-3">
            <input 
              class="form-check-input" 
              type="checkbox" 
              value="" 
              :id="item.title" 
              :name="item.title" 
              v-model="item.isProvide"> 
            <label :for="item.title">{{ item.title }}</label>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label for="room-img" class="font-bold ">
          圖片
        </label>
        <VField
          name="圖片"
          id="room-img"
          type="text"
          rules="required"
          class="form-input"
          :class="{ 'is-invalid': errors['圖片'] }"
          placeholder="請輸入圖片連結"
          v-model="roomDataTemp.imageUrl"
        />
        <ErrorMessage class="text-alert-100" name="圖片"/>
      </div>
      <div class="flex flex-col gap-2">
        <label class="font-bold ">
          其他圖片
        </label>
        <VField
          name="其他圖片1"
          type="text"
          class="form-input"
          placeholder="請輸入其他圖片連結"
          v-model="roomDataTemp.imageUrlList[0]"
        />
        <VField
          name="其他圖片2"
          type="text"
          class="form-input"
          placeholder="請輸入其他圖片連結"
          v-model="roomDataTemp.imageUrlList[1]"
        />
        <VField
          name="其他圖片3"
          type="text"
          class="form-input"
          placeholder="請輸入其他圖片連結"
          v-model="roomDataTemp.imageUrlList[2]"
        />
        <VField
          name="其他圖片4"
          type="text"
          class="form-input"
          placeholder="請輸入其他圖片連結"
          v-model="roomDataTemp.imageUrlList[3]"
        />
        <VField
          name="其他圖片5"
          type="text"
          class="form-input"
          placeholder="請輸入其他圖片連結"
          v-model="roomDataTemp.imageUrlList[4]"
        />
      </div>
    </div>

    <div class="flex">
      <button 
        type="button" 
        class="btn-secondary font-bold btn text-center mt-10 me-3 ms-auto"
        @click="showRoomModal = false"
      >
        取消
      </button>
      <button 
        type="submit" 
        class="btn-primary font-bold btn text-center mt-10"
      >
        確認
      </button>
    </div>
  </VForm>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from'pinia' 
import { useUserStore } from '@/stores/userStore';
import { useRoomStore } from '@/stores/roomStore'

const userStore = useUserStore()
const checkUser = userStore.checkUser

const roomStore = useRoomStore()
const { roomDataTemp, showRoomModal, updateRoomType } = storeToRefs(roomStore)
const createRoom = roomStore.createRoom
const editRoom = roomStore.editRoom

</script>

<style>

</style>