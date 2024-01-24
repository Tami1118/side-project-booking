<template>
  <div class="bg-primary-10">
    <!-- 調整 swiper navigation style -->
    <div class="lg:hidden">
      <swiper :pagination="true"
              class="h-[250px] md:h-[500px] duration-300"
              :modules="modules">
        <swiper-slide class="h-full" v-for="(item, key) in roomDetail.imageUrlList" :key="key">
          <img :src="item" class="w-full h-full object-cover" alt="">
        </swiper-slide>
      </swiper>
    </div>

    <div class="container mx-auto px-4 sm:px-0">
      <div class="hidden lg:block py-20">
        <div class="flex gap-2 bg-white rounded-[16px] overflow-hidden">
          <!-- 連結待處理 -->
          <div class="basis-6/12">
            <img src="../../assets/images/desktop/room2-1.png" alt="">
          </div>
          <div class="basis-6/12">
            <div class="grid grid-cols-2 gap-2 h-full">
              <div>
                <img class="h-full w-full object-cover" src="../../assets/images/desktop/room2-2.png" alt="">
              </div>
              <div>
                <img class="h-full w-full object-cover" src="../../assets/images/desktop/room2-3.png" alt="">
              </div>
              <div>
                <img class="h-full w-full object-cover" src="../../assets/images/desktop/room2-4.png" alt="">
              </div>
              <div>
                <img class="h-full w-full object-cover" src="../../assets/images/desktop/room2-5.png" alt="">
              </div>
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
                  <div class="flex gap-3">
                    <input type="date" class="form-input">
                    <input type="date" class="form-input">
                  </div>
                  <div class="flex items-center">
                    <p>人數</p>
                    <div class="ms-auto">
                      <button class="rounded-full p-4 border border-neutral-40">
                        <span class="material-symbols-outlined text-6">remove</span>
                      </button>
                      <input type="number" value="2" class="w-[48px] mx-4 text-center text-5">
                      <button class="rounded-full p-4 border border-neutral-40">
                        <span class="material-symbols-outlined text-6">add</span>
                      </button>
                    </div>
                  </div>
                  <p class="text-primary-100 text-6 font-bold">NT$ {{roomDetail.price}}</p>
                  <button type="button" class="btn btn-primary">立即預訂</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.title-deco {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    display: block;
    width: 4px;
    height: 24px;
    background: #bf9d7d;
    border-radius: 10px;
  }
}
</style>

<script setup>
// swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

// room
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRoomStore } from "@/stores/roomStore";
import roomInfo from "@/components/frontend/roomInfo.vue";

const roomStore = useRoomStore();
const { roomDetail } = storeToRefs(roomStore);
const getFrontRoom = roomStore.getFrontRoom;

onMounted(() => {
  getFrontRoom();
});

const modules = [Pagination];
</script>
