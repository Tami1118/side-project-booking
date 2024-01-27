<template>
  <div class="bg-primary-10">
    <!-- 調整 swiper navigation style -->
    <div class="lg:hidden">
      <swiper :pagination="true" :modules="modules" class="room-list-swiper h-[250px] md:h-[500px] duration-300">
        <swiper-slide class="h-full" v-for="(item, key) in roomDetail.imageUrlList" :key="key">
          <img :src="item" class="w-full h-full object-cover" alt="">
        </swiper-slide>
      </swiper>
    </div>

    <div class="container mx-auto px-4 sm:px-0">
      <div class="hidden lg:block py-20">
        <div class="flex gap-2 bg-white rounded-[16px] overflow-hidden">
          <div class="basis-6/12">
            <img :src="imageList[0]" alt="">
          </div>
          <div class="basis-6/12">
            <div class="grid grid-cols-2 gap-2 h-full">
              <div><img class="h-full w-full object-cover" :src="imageList[1]" alt=""></div>
              <div><img class="h-full w-full object-cover" :src="imageList[2]" alt=""></div>
              <div><img class="h-full w-full object-cover" :src="imageList[3]" alt=""></div>
              <div><img class="h-full w-full object-cover" :src="imageList[4]" alt=""></div>
            </div>
          </div>
        </div>
      </div>

      <div class="py-10 lg:py-30">
        <div class="lg:flex lg:content-between gap-18">
          <div class="basis-full lg:basis-7/12">
            <div class="flex flex-col gap-6 lg:gap-20">
              <div>
                <h1 class="text-8 lg:text-12 font-bold mb-4">{{roomDetail.name}}</h1>
                <p class="text-3h lg:text-4 font-500">{{roomDetail.description}}</p>
              </div>
              <room-info :room-detail="roomDetail"></room-info>
              <div class="">
                <h2 class="title-deco ps-4 lg:text-6 text-neutral-100 font-bold mb-4 lg:mb-6">訂房須知</h2>
                <ul class="list-decimal ps-0 ms-6">
                  <li class="text-neutral-80 text-3h font-bold leading-[1.5]">入住時間為下午3點，退房時間為上午12點。</li>
                  <li class="text-neutral-80 text-3h font-bold leading-[1.5]">如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。</li>
                  <li class="text-neutral-80 text-3h font-bold leading-[1.5]">請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。</li>
                  <li class="text-neutral-80 text-3h font-bold leading-[1.5]">若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。</li>
                  <li class="text-neutral-80 text-3h font-bold leading-[1.5]">請愛惜我們的房間與公共空間，並保持整潔。</li>
                  <li class="text-neutral-80 text-3h font-bold leading-[1.5]">如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li>
                  <li class="text-neutral-80 text-3h font-bold leading-[1.5]">我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。</li>
                  <li class="text-neutral-80 text-3h font-bold leading-[1.5]">請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。</li>
                  <li class="text-neutral-80 text-3h font-bold leading-[1.5]">我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。</li>
                  <li class="text-neutral-80 text-3h font-bold leading-[1.5]">為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="hidden lg:block lg:basis-5/12">
            <div class="sticky top-0">
              <div class="bg-white p-10 rounded-[10px]">
                <div class="flex flex-col gap-10">
                  <p class="text-6 font-bold pb-4 border-b border-neutral-40">預定房型</p>
                  <div>
                    <p class="text-10 font-bold text-neutral-80 mb-2">{{roomDetail.name}}</p>
                    <p class="text-netural-80 font-500">{{roomDetail.description}}</p>
                  </div>
                  <div>
                    <div class="flex gap-3" @click="openModal">
                      <div class="grow border border-neutral-100 rounded-2 p-4">
                        <p class="text-3 text-neutral-80">入住</p>
                        <p>{{ $formats.getLocalDateFormat(bookingDate.start) }}</p>
                      </div>
                      <div class="grow border border-neutral-100 rounded-2 p-4">
                        <p class="text-3 text-neutral-80">退房</p>
                        <p>{{ $formats.getLocalDateFormat(bookingDate.end) }}</p>
                      </div>
                    </div>

                    <booking-date-pick></booking-date-pick>

                  </div>
                  <div class="flex items-center">
                    <p>人數</p>
                    <div class="ms-auto">
                      <button class="rounded-full p-4 border border-neutral-40" @click="decrease">
                        <span class="material-symbols-outlined text-6">remove</span>
                      </button>
                      <input type="number" v-model="peopleNum" class="w-[48px] mx-4 text-center text-5">
                      <button class="rounded-full p-4 border border-neutral-40" @click="increase">
                        <span class="material-symbols-outlined text-6">add</span>
                      </button>
                    </div>
                  </div>
                  <p class="text-primary-100 text-6 font-bold">NT$ {{ roomDetail.price }}</p>
                  <router-link :to="`/booking/${route.params.id}`" class="btn btn-primary">立即預訂</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// basic
import { ref, onMounted, watchEffect } from "vue";
import { storeToRefs } from "pinia";

// swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
const modules = [Pagination];

// bookingDate
import BookingDatePick from "@/components/widgets/BookingDatePick.vue";
import { useModalStore } from "@/stores/modalStore.js";
const modalStore = useModalStore();
const openModal = modalStore.openModal;

// date and people
import { useOrderStore } from "@/stores/orderStore.js";
const orderStore = useOrderStore();
const { bookingDate, peopleNum } = storeToRefs(orderStore);
const increase = orderStore.increase;
const decrease = orderStore.decrease;

// room
import roomInfo from "@/components/frontend/roomInfo.vue";
import { useRoomStore } from "@/stores/roomStore";
const roomStore = useRoomStore();
const { roomDetail, imageList } = storeToRefs(roomStore);
const getFrontRoom = roomStore.getFrontRoom;

import { useRoute } from "vue-router";
const route = useRoute();



// ===== 測試用 =====
// 問題
// 1. 無法取得 roomDetail.imageUrlList[0]... 陣列
// 2. 嘗試使用 JSON.parse(JSON.stringfy()) 深層拷貝
// 3. 還是會發生資料順序取得問題
// 目前解決方式：store 新增一陣列變數 imageList，導入結果值
const roomData = ref({});
const deepCopy = (sourse) => JSON.parse(JSON.stringify(sourse));

const asyncFunctions = async () => {
  try {
    await getFrontRoom();
    roomData.value = await deepCopy(roomDetail.value);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  asyncFunctions();

  watchEffect(() => {
    console.log(roomData.value);
  });
});
</script>
