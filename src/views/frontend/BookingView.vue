<script setup>
import { onMounted, watch, computed } from "vue";
import { storeToRefs } from "pinia";

import { Alert } from "@/mixins/swal";
import RoomInfoMain from "@/components/frontend/RoomInfoMain.vue";
import BookingForm from "@/components/frontend/BookingForm.vue";
import BookingLoading from "@/components/frontend/BookingLoading.vue";

// Route
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

// 房型資訊
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const { roomDetail, roomLayout } = storeToRefs(roomStore);
const getFrontRoom = roomStore.getFrontRoom;

// 預約表單操作
import { useOrderStore } from "@/stores/orderStore";
const orderStore = useOrderStore();
const { peopleNum, bookingDate, isLoading, userInfo, selectDistrict, addressDetail } = storeToRefs(orderStore);
const getStorageData = orderStore.getStorageData;
const createOrder = orderStore.createOrder;
// const isFormAll = ref(false)

// 判斷欄位都有值
const isFormAll = computed(() => {
  return userInfo.value.name && userInfo.value.phone && userInfo.value.email && selectDistrict.value && addressDetail.value;
});

// 預約前驗證會員是否已登入
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const { isChecked } = storeToRefs(userStore);
const checkUser = userStore.checkUser;
const isLogin = () => {
  if (isChecked.value) {
    getFrontRoom()
  } else {
    router.push(`/login`)
    Alert.fire({
      title: '訂房前請先登入會員'
    })
  }
}
// 確保 isChecked 的值已經被更新後再執行操作
const loginCheck = async () => {
  await checkUser();
  isLogin();
}
// 監聽 isChecked 值變化
watch(isChecked, () => {
  isLogin();
})

onMounted(() => {
  loginCheck()
  getStorageData();
});
</script>

<template>
  <main class="bg-primary-10" v-if="roomDetail">
    <div class="container mx-auto px-4 xl:px-0 py-10 lg:py-30">
      <div class="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-18">

        <div class="basis-full lg:basis-7/12 flex flex-col gap-10">

          <!-- 確認訂房資訊 -->
          <router-link :to="`/room/${route.params.id}`" class="text-6 lg:text-8 flex items-center">
            <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-6 lg:text-8 me-2" />確認訂房資訊
          </router-link>

          <!-- 預約資訊 -->
          <div>
            <h2 class="text-5 lg:text-7 text-black mb-8 lg:mb-10">訂房資訊</h2>
            <div class="flex flex-col gap-6 pb-10 lg:pb-[47px] border-b border-neutral-60">
              <div>
                <h3 class="title-deco ps-4 text-4 mb-2">選擇房型</h3>
                <p>{{ roomDetail.name }}</p>
              </div>
              <div class="flex items-center">
                <div>
                  <h3 class="title-deco ps-4 text-4 mb-2">訂房日期</h3>
                  <p class="mb-2">入住：{{ $format.getTradDateFormat(bookingDate.start) }}</p>
                  <p>退房：{{ $format.getTradDateFormat(bookingDate.end) }}</p>
                </div>
                <router-link :to="`/room/${route.params.id}`" class="underline ms-auto hover:text-primary-100">編輯</router-link>
              </div>
              <div class="flex items-center">
                <div>
                  <h3 class="title-deco ps-4 text-4 mb-2">房客人數</h3>
                  <p>{{ peopleNum }}人</p>
                </div>
                <router-link :to="`/room/${route.params.id}`" class="underline ms-auto hover:text-primary-100">編輯</router-link>
              </div>
            </div>
          </div>

          <!-- 訂房人資訊 -->
          <div class="pb-10 lg:pb-[47px] border-b border-neutral-60">
            <BookingForm />
          </div>

          <!-- 房間資訊 -->
          <div>
            <h2 class="text-5 lg:text-7 text-black mb-8 lg:mb-10">房間資訊</h2>
            <div class="flex flex-col gap-6">
              <RoomInfoMain :info="roomDetail" :layout="roomLayout" />
            </div>
          </div>
        </div>

        <div class="basis-full lg:basis-5/12">
          <div class="sticky top-[120px]">
            <div class="bg-white p-6 lg:p-10 rounded-[20px]">
              <div class="flex flex-col gap-6 lg:gap-10">
                <img :src="roomDetail.imageUrl" class="rounded-2 w-full h-[180px] lg:h-[272px] object-cover" :alt="roomDetail.name">

                <div class="flex flex-col gap-6">
                  <h2 class="text-5 lg:text-7">價格詳情</h2>
                  <div class="flex flex-col gap-4">
                    <div class="flex">
                      <p>NT$ {{ $format.toThousands(roomDetail.price) }} <font-awesome-icon icon="fa-solid fa-xmark" /> {{ $format.getNightNum(bookingDate.start, bookingDate.end) }} 晚</p>
                      <p class="ms-auto">NT$ {{ $format.toThousands(roomDetail.price * $format.getNightNum(bookingDate.start, bookingDate.end)) }}</p>
                    </div>
                    <div class="flex pb-4 border-b border-neutral-40">
                      <p>住宿折扣</p>
                      <p class="ms-auto text-primary-100">NT$ {{ roomDetail.discount ? "roomDetail.discount" : 0 }}</p>
                    </div>
                    <div class="flex font-bold">
                      <p>總價</p>
                      <p class="ms-auto"> NT$ {{ $format.toThousands(roomDetail.price) }}</p>
                    </div>
                  </div>
                </div>

                <button type="button" class="p-4 text-bold rounded-2" :class="isFormAll? 'bg-primary-100 text-white':'bg-neutral-40 text-neutral-60'" @click="createOrder()">確認訂房</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- 訂單處理動畫 -->
  <BookingLoading v-if="isLoading" />
</template>



