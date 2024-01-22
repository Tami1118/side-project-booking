<template>
  <div>
    <div class="">header</div>
  </div>


  <div class="container mx-auto px-4">
    <p class="text-5 mb-4">房型選擇</p>
    <h2 class="text-12 text-primary-100 font-bold mb-20">各種房型，任您挑選</h2>
    <div 
      class="flex flex-wrap mb-12"
      v-for="item in roomData"
      :key="item"
    >
      <!-- 左 -->
      <div class="w-full md:w-7/12">
        <div>
          <swiper 
            class="home-banner" 
            :pagination="{ clickable: true }" 
            :navigation="true"
            :modules="modules" 
          >
        <swiper-slide v-for="imgList in item.imageUrlList" :key="imgList">
          <img 
            class="object-cover w-full rounded-4" 
            :src="imgList" 
            alt="room img"
          >
        </swiper-slide>
      </swiper>
        </div>
      </div>
      <!-- 右 -->
      <div class="w-full md:w-5/12 p-10 bg-white">
        <h3 class="text-10 font-bold text-neutral-80 mb-2">{{ item.name }}</h3>
        <p class="text-netural-80 font-500 mb-10">{{ item.description }}</p>


        <div class="flex gap-3 mb-10">
          <div class="border p-4 h-[97px] aspect-square rounded-2 bg-white flex flex-col justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M2 6.75C2 6.02065 2.28973 5.32118 2.80546 4.80546C3.32118 4.28973 4.02065 4 4.75 4H19.25C19.9793 4 20.6788 4.28973 21.1945 4.80546C21.7103 5.32118 22 6.02065 22 6.75V17.25C22 17.6111 21.9289 17.9687 21.7907 18.3024C21.6525 18.636 21.4499 18.9392 21.1945 19.1945C20.9392 19.4499 20.636 19.6525 20.3024 19.7907C19.9687 19.9289 19.6111 20 19.25 20H4.75C4.38886 20 4.03127 19.9289 3.69762 19.7907C3.36398 19.6525 3.06082 19.4499 2.80546 19.1945C2.5501 18.9392 2.34753 18.636 2.20933 18.3024C2.07113 17.9687 2 17.6111 2 17.25V6.75ZM16.78 7.22C16.6395 7.07931 16.4488 7.00017 16.25 7H13.75C13.5511 7 13.3603 7.07902 13.2197 7.21967C13.079 7.36032 13 7.55109 13 7.75C13 7.94891 13.079 8.13968 13.2197 8.28033C13.3603 8.42098 13.5511 8.5 13.75 8.5H14.44L12.72 10.219C12.6463 10.2877 12.5872 10.3705 12.5462 10.4625C12.5052 10.5545 12.4832 10.6538 12.4814 10.7545C12.4796 10.8552 12.4982 10.9552 12.5359 11.0486C12.5736 11.142 12.6297 11.2268 12.701 11.298C12.7722 11.3693 12.857 11.4254 12.9504 11.4631C13.0438 11.5008 13.1438 11.5194 13.2445 11.5176C13.3452 11.5158 13.4445 11.4938 13.5365 11.4528C13.6285 11.4118 13.7113 11.3527 13.78 11.279L15.5 9.56V10.25C15.5 10.4489 15.579 10.6397 15.7197 10.7803C15.8603 10.921 16.0511 11 16.25 11C16.4489 11 16.6397 10.921 16.7803 10.7803C16.921 10.6397 17 10.4489 17 10.25V7.75C16.9998 7.55115 16.9207 7.36052 16.78 7.22ZM7.75 17H10.251C10.4499 17 10.6407 16.921 10.7813 16.7803C10.922 16.6397 11.001 16.4489 11.001 16.25C11.001 16.0511 10.922 15.8603 10.7813 15.7197C10.6407 15.579 10.4499 15.5 10.251 15.5H9.561L11.281 13.78C11.4176 13.6385 11.4931 13.449 11.4913 13.2523C11.4895 13.0557 11.4105 12.8676 11.2714 12.7286C11.1322 12.5896 10.9441 12.5109 10.7475 12.5092C10.5508 12.5076 10.3614 12.5833 10.22 12.72L8.5 14.438V13.748C8.5 13.5491 8.42098 13.3583 8.28033 13.2177C8.13968 13.077 7.94891 12.998 7.75 12.998C7.55109 12.998 7.36032 13.077 7.21967 13.2177C7.07902 13.3583 7 13.5491 7 13.748V16.248C7 16.4469 7.07902 16.6377 7.21967 16.7783C7.36032 16.919 7.55109 16.998 7.75 16.998V17Z" fill="#BF9D7D" />
            </svg>
            <p class="mt-2">28坪</p>
          </div>
          <div class="border p-4 h-[97px] aspect-square rounded-2 bg-white flex flex-col justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 15" fill="none">
              <path d="M18 5.5V2.5C18 1.4 17.1 0.5 16 0.5H4C2.9 0.5 2 1.4 2 2.5V5.5C0.9 5.5 0 6.4 0 7.5V12.5H1.33L2 14.5H3L3.67 12.5H16.34L17 14.5H18L18.67 12.5H20V7.5C20 6.4 19.1 5.5 18 5.5ZM9 5.5H4V2.5H9V5.5ZM16 5.5H11V2.5H16V5.5Z" fill="#BF9D7D" />
            </svg>
            <p class="mt-2">1張大床</p>
          </div>
          <div class="border p-4 h-[97px] aspect-square rounded-2 bg-white flex flex-col justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none">
              <g clip-path="url(#clip0_4512_4105)">
                <path d="M12 12.5C14.21 12.5 16 10.71 16 8.5C16 6.29 14.21 4.5 12 4.5C9.79 4.5 8 6.29 8 8.5C8 10.71 9.79 12.5 12 12.5ZM12 14.5C9.33 14.5 4 15.84 4 18.5V20.5H20V18.5C20 15.84 14.67 14.5 12 14.5Z" fill="#BF9D7D" />
              </g>
              <defs>
                <clipPath id="clip0_4512_4105">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
            <p class="mt-2">2-4人</p>
          </div>
        </div>

        <div class="mb-10 rooms-card-line"></div>

        <div class="flex items-center justify-between">
          <div class="text-primary-100 text-6">
            NT$ {{ item.price }}
          </div>
          <div 
            class="text-primary-100 cursor-pointer" 
            @click="$router.push('/booking')"
          >
            <span class="material-icons">arrow_forward</span>
          </div>
        </div>
      </div>

      

    </div>
  </div>
</template>

<script setup>
// swiper
import { Swiper, SwiperSlide } from "swiper/vue"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
const modules = [ Pagination, Navigation, Autoplay ]

// room
import { onMounted } from 'vue';
import { storeToRefs } from'pinia' 
import { useRoomStore } from '@/stores/roomStore'

const roomStore = useRoomStore()
const { roomData } = storeToRefs(roomStore)
const getFrontRooms = roomStore.getFrontRooms

onMounted(() => {
  getFrontRooms()
})

</script>
  

<style scoped>
.rooms-card-line {
  width: 443px;
  height: 2px;
  background: linear-gradient(90deg, #BE9C7C 0%, #FFF 100%);
}
</style>