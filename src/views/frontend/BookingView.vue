<template>
  <div class="bg-primary-10">
    <div class="py-10 lg:py-30">
      <div class="container mx-auto px-4 sm:px-0">
        <div class="lg:flex lg:justify-between gap-18">

          <div class="basis-full lg:basis-7/12 mb-10 lg:mb-0">
            <a href="#" class="text-6 lg:text-8 mb-[42px] flex items-center">
              <span class="material-icons text-6 lg:text-8 me-2">keyboard_arrow_left</span>確認訂房資訊
            </a>

            <form action="" @submit.prevent="createOrder">
              <div>
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    姓名
                    <input type="text" class="form-input" v-model="tempOrder.userInfo.name">
                  </div>
                  <div>
                    電話
                    <input type="tel" class="form-input" v-model="tempOrder.userInfo.phone">
                  </div>
                  <div class="col-span-2">
                    電子信箱
                    <input type="email" class="form-input" v-model="tempOrder.userInfo.email">
                  </div>
                </div>
                <div>
                  <city-form></city-form>
                  <!-- <div>
                    縣市
                    <select name="" id="" class="form-input">
                      <option value="" selected>請選擇</option>
                      <option value="新北市">新北市</option>
                      <option value="台北市">台北市</option>
                    </select>
                  </div>
                  <div>
                    行政區
                    <select name="" id="" class="form-input" v-model="tempOrder.userInfo.address.zipcode">
                      <option value="" selected>請選擇</option>
                      <option value="220">板橋</option>
                      <option value="100">中正</option>
                    </select>
                  </div>
                  <div class="col-span-2">
                    詳細地址
                    <input type="text" class="form-input" v-model="tempOrder.userInfo.address.detail">
                  </div> -->

                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    入住日期
                    <input type="date" class="form-input" v-model="tempOrder.checkInDate">
                  </div>
                  <div>
                    退房日期
                    <input type="date" class="form-input" v-model="tempOrder.checkOutDate">
                  </div>
                </div>
                <div>
                  人數
                  <input type="num" class="form-input" v-model="tempOrder.peopleNum">
                </div>
              </div>
              <button type="submit" class="btn btn-primary mt-2">確認訂單</button>
            </form>

            <!-- 訂房資訊 -->
            <!-- <div>
              <h2 class="text-5 lg:text-7 mb-8 lg:mb-10">訂房資訊</h2>
              <div class="flex flex-col gap-6 pb-10 mb-10 lg:pb-[47px] lg:mb-[47px] border-b border-neutral-60">
                <div class="flex items-center">
                  <div>
                    <h3 class="title-deco ps-4 text-4 mb-2">選擇房型</h3>
                    <p>{{roomDetail.name}}</p>
                  </div>
                  <button class="underline ms-auto">編輯</button>
                </div>
                <div class="flex items-center">
                  <div>
                    <h3 class="title-deco ps-4 text-4 mb-2">訂房日期</h3>
                    <p class="mb-2">入住：{{bookingDate.start}}</p>
                    <p>退房：{{bookingDate.end}}</p>
                  </div>
                  <button class="underline ms-auto">編輯</button>
                </div>
                <div class="flex items-center">
                  <div>
                    <h3 class="title-deco ps-4 text-4 mb-2">房客人數</h3>
                    <p>{{peopleNum}}人</p>
                  </div>
                  <button class="underline ms-auto">編輯</button>
                </div>
              </div>
            </div> -->

            <!-- 訂房人資訊 -->
            <!-- <div class="pb-10 mb-10 lg:pb-[47px] lg:mb-[47px] border-b border-neutral-60">
              <div class="flex mb-8 lg:mb-10">
                <h2 class="text-5 lg:text-7">訂房人資訊</h2>
                <button class="btn-text ms-auto underline">套用會員資料</button>
              </div>
              <user-form></user-form>
            </div> -->

            <!-- 房間資訊 -->
            <div>
              <div class="mb-8 lg:mb-10">
                <h2 class="text-5 lg:text-7">房間資訊</h2>
              </div>
              <room-info :room-detail="roomDetail"></room-info>
            </div>

          </div>

          <div class="basis-full lg:basis-5/12">
            <div class="sticky top-0">
              <div class="bg-white p-6 lg:p-10 rounded-[20px]">
                <div class="flex flex-col gap-6 lg:gap-10">
                  <img :src="roomDetail.imageUrl" class="rounded-2" alt="">

                  <div class="flex flex-col gap-6">
                    <h2 class="text-7">價格詳情</h2>
                    <div class="flex flex-col gap-4">
                      <div class="flex">
                        <p>NT$ 10,000 <span class="material-icons text-4">close</span> 2 晚</p>
                        <p class="ms-auto">NT$ 20,000</p>
                      </div>
                      <div class="flex pb-4 border-b border-neutral-40">
                        <p>住宿折扣</p>
                        <p class="ms-auto text-primary-100">- NT$ 1,000</p>
                      </div>
                      <div class="flex">
                        <p class="font-bold">總價</p>
                        <p class="font-bold ms-auto"> NT$ 19,000</p>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn btn-primary text-bold">確認訂房</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <bookingLoading /> -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router"
const route = useRoute()

import roomInfo from "@/components/frontend/RoomInfo.vue";
import CityForm from "@/components/widgets/CityForm.vue"
// import userForm from "@/components/frontend/UserForm.vue";
// import bookingLoading from "@/components/frontend/BookingLoading.vue";


const getOrderInfo = () => {
  tempOrder.value.roomId = route.params.id
  console.log(tempOrder.value);
};

// room
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const { roomDetail } = storeToRefs(roomStore);
const getFrontRoom = roomStore.getFrontRoom;

// order
import { useOrderStore } from "@/stores/orderStore";
const orderStore = useOrderStore();
const { tempOrder, bookingDate, peopleNum } = storeToRefs(orderStore);
// const getItemDate = orderStore.getItemDate;
const createOrder = orderStore.createOrder;

onMounted(() => {
  getFrontRoom();
  // getItemDate();
  console.log(route.params.id)
});
</script>
