<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      pagination: {
        clickable: true,
      },
      modules: [Pagination, Autoplay],
    };
  },
};
</script>

<template>
  <div class="relative">
    <swiper class="home-banner h-screen" :pagination="pagination" :modules="modules" :autoplay="{delay: 2000,disableOnInteraction: false}">
      <swiper-slide class="h-full relative">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50">
          <div class="container mx-auto text-white h-full flex justify-center items-center">
            this is content
          </div>
        </div>
        <img class="h-full object-cover w-full" src="../../assets/images/desktop/banner.png" alt="">
      </swiper-slide>
      <swiper-slide class="h-full">
        <img class="h-full object-cover w-full" src="../../assets/images/desktop/room2-1.png" alt="">
      </swiper-slide>
      <swiper-slide class="h-full">
        <img class="h-full object-cover w-full" src="../../assets/images/desktop/room3-1.png" alt="">
      </swiper-slide>
      <!-- <swiper-slide class="h-full">
        <img class="h-full object-cover w-full" src="../../assets/images/desktop/room4-1.png" alt="">
      </swiper-slide>
      <swiper-slide class="h-full">
        <img class="h-full object-cover w-full" src="../../assets/images/desktop/room5-1.png" alt="">
      </swiper-slide> -->
    </swiper>

    <!-- hot-news -->
    <!-- about -->
    <!-- food -->
    <div class="bg-primary-10 overflow-hidden">
      <div class="container mx-auto px-3 md:px-0 pt-20 md:pt-30 pb-10 md:pb-20">
        <div class="flex items-center gap-10 mb-10 md:mb-20">
          <h2 class="text-primary-100 text-8 md:text-12 font-bold">佳餚<br>美饌</h2>
          <span class="h-[2px] w-[194px] bg-gradient-to-r from-primary-100 to-transparent"></span>
        </div>

        <div class="grid grid-cols-4">
          <div class="col">
            <div class="rounded-2">
              <img class="w-full" src="../../assets/images/desktop/food1.png" alt="">
              <!-- 01/11 -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- trafiction -->
    <div class="bg-neutral-100 text-white overflow-hidden">
      <div class="container mx-auto px-3 md:px-0 pt-20 md:pt-30 pb-10 md:pb-20">
        <div class="flex items-center gap-10 mb-10 md:mb-20">
          <h2 class="text-primary-100 text-8 md:text-12 font-bold">交通<br>方式</h2>
          <span class="h-[2px] w-[194px] bg-gradient-to-r from-primary-100 to-transparent"></span>
        </div>

        <div class="mb-6">
          <p class="mb-4">台灣高雄市新興區六角路123號</p>
          <!-- <iframe class="w-full rounded-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.677287707709!2d120.31091723388828!3d22.62852305703793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0491c81682db%3A0xca409b5dd8fb42e5!2zODAw6auY6ZuE5biC5paw6IiI5Y2A5rCR55Sf5LiA6LevNTbomZ8!5e0!3m2!1szh-TW!2stw!4v1704951893089!5m2!1szh-TW!2stw" width="600" height="489" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="col">
            <div class="flex flex-col gap-2">
              <div class="w-[48px] md:w-[80px] aspect-square">
                <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <g clip-path="url(#clip0_35_4920)">
                    <path d="M37.84 12.0195C37.44 10.8395 36.32 9.99951 35 9.99951H13C11.68 9.99951 10.58 10.8395 10.16 12.0195L6 23.9995V39.9995C6 41.0995 6.9 41.9995 8 41.9995H10C11.1 41.9995 12 41.0995 12 39.9995V37.9995H36V39.9995C36 41.0995 36.9 41.9995 38 41.9995H40C41.1 41.9995 42 41.0995 42 39.9995V23.9995L37.84 12.0195ZM13 31.9995C11.34 31.9995 10 30.6595 10 28.9995C10 27.3395 11.34 25.9995 13 25.9995C14.66 25.9995 16 27.3395 16 28.9995C16 30.6595 14.66 31.9995 13 31.9995ZM35 31.9995C33.34 31.9995 32 30.6595 32 28.9995C32 27.3395 33.34 25.9995 35 25.9995C36.66 25.9995 38 27.3395 38 28.9995C38 30.6595 36.66 31.9995 35 31.9995ZM10 21.9995L13 12.9995H35L38 21.9995H10Z" fill="#BE9C7C" />
                  </g>
                  <defs>
                    <clipPath id="clip0_35_4920">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 class="md:text-6 font-bold">自行開車</h3>
              <p class="text-[14px] md:text-4 text-justify">如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。</p>
            </div>
          </div>

          <div class="col">
            <div class="flex flex-col gap-2">
              <div class="w-[48px] md:w-[80px] aspect-square">
                <svg class="w-full h-full" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_35_4925)">
                    <path d="M24 4C16 4 8 5 8 12V31C8 34.86 11.14 38 15 38L12 41V42H16.46L20.46 38H28L32 42H36V41L33 38C36.86 38 40 34.86 40 31V12C40 5 32.84 4 24 4ZM15 34C13.34 34 12 32.66 12 31C12 29.34 13.34 28 15 28C16.66 28 18 29.34 18 31C18 32.66 16.66 34 15 34ZM22 20H12V12H22V20ZM26 20V12H36V20H26ZM33 34C31.34 34 30 32.66 30 31C30 29.34 31.34 28 33 28C34.66 28 36 29.34 36 31C36 32.66 34.66 34 33 34Z" fill="#BE9C7C" />
                  </g>
                  <defs>
                    <clipPath id="clip0_35_4925">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 class="md:text-6 font-bold">高鐵/火車</h3>
              <p class="text-[14px] md:text-4 text-justify">如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。</p>
            </div>
          </div>

          <div class="col">
            <div class="flex flex-col gap-2">
              <div class="w-[48px] md:w-[80px] aspect-square">
                <svg class="w-full h-full" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 12L38 20H42C44.22 20 46 21.78 46 24V30H42C42 31.5913 41.3679 33.1174 40.2426 34.2426C39.1174 35.3679 37.5913 36 36 36C34.4087 36 32.8826 35.3679 31.7574 34.2426C30.6321 33.1174 30 31.5913 30 30H18C18 31.5913 17.3679 33.1174 16.2426 34.2426C15.1174 35.3679 13.5913 36 12 36C10.4087 36 8.88258 35.3679 7.75736 34.2426C6.63214 33.1174 6 31.5913 6 30H2V24C2 21.78 3.78 20 6 20L12 12H32ZM21 15H13.5L9.72 20H21V15ZM24 15V20H34.28L30.5 15H24ZM12 27C11.2043 27 10.4413 27.3161 9.87868 27.8787C9.31607 28.4413 9 29.2043 9 30C9 30.7956 9.31607 31.5587 9.87868 32.1213C10.4413 32.6839 11.2043 33 12 33C12.7956 33 13.5587 32.6839 14.1213 32.1213C14.6839 31.5587 15 30.7956 15 30C15 29.2043 14.6839 28.4413 14.1213 27.8787C13.5587 27.3161 12.7956 27 12 27ZM36 27C35.2043 27 34.4413 27.3161 33.8787 27.8787C33.3161 28.4413 33 29.2043 33 30C33 30.7956 33.3161 31.5587 33.8787 32.1213C34.4413 32.6839 35.2043 33 36 33C36.7956 33 37.5587 32.6839 38.1213 32.1213C38.6839 31.5587 39 30.7956 39 30C39 29.2043 38.6839 28.4413 38.1213 27.8787C37.5587 27.3161 36.7956 27 36 27Z" fill="#BE9C7C" />
                </svg>
              </div>
              <h3 class="md:text-6 font-bold">禮賓車服務</h3>
              <p class="text-[14px] md:text-4 text-justify">承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567</p>
            </div>
          </div>
        </div>
      </div>

      <svg width="1920" height="188" viewBox="0 0 1920 188" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_295_8497)">
          <path d="M1920 182.834C1850.65 188.495 1664.98 193.23 1477.02 166.879C1242.06 133.94 1040.15 94.8258 706.079 112.324C372.006 129.823 248.411 151.439 -0.0019368 131.882" stroke="#BF9D7D" />
          <path d="M1920 170.834C1850.65 176.495 1664.98 181.23 1477.02 154.879C1242.06 121.94 1040.15 82.8258 706.079 100.324C372.006 117.823 248.411 139.439 -0.0019368 119.882" stroke="#BF9D7D" />
          <path d="M1920 158.834C1850.65 164.495 1664.98 169.23 1477.02 142.879C1242.06 109.94 1040.15 70.8258 706.079 88.3245C372.006 105.823 248.411 127.439 -0.0019368 107.882" stroke="#BF9D7D" />
          <path d="M1920 146.834C1850.65 152.495 1664.98 157.23 1477.02 130.879C1242.06 97.9405 1040.15 58.8258 706.079 76.3245C372.006 93.8232 248.411 115.439 -0.0019368 95.8818" stroke="#BF9D7D" />
          <path d="M1920 134.834C1850.65 140.495 1664.98 145.23 1477.02 118.879C1242.06 85.9405 1040.15 46.8258 706.079 64.3245C372.006 81.8232 248.411 103.439 -0.0019368 83.8818" stroke="#BF9D7D" />
          <path d="M1920 122.834C1850.65 128.495 1664.98 133.23 1477.02 106.879C1242.06 73.9405 1040.15 34.8258 706.079 52.3245C372.006 69.8232 248.411 91.4391 -0.0019368 71.8818" stroke="#BF9D7D" />
          <path d="M1920 110.834C1850.65 116.495 1664.98 121.23 1477.02 94.8791C1242.06 61.9405 1040.15 22.8258 706.079 40.3245C372.006 57.8232 248.411 79.4391 -0.0019368 59.8818" stroke="#BF9D7D" />
          <path d="M1920 98.8338C1850.65 104.495 1664.98 109.23 1477.02 82.8791C1242.06 49.9405 1040.15 10.8258 706.079 28.3245C372.006 45.8232 248.411 67.4391 -0.0019368 47.8818" stroke="#BF9D7D" />
          <path d="M1920 86.8338C1850.65 92.4951 1664.98 97.2301 1477.02 70.8791C1242.06 37.9405 1040.15 -1.17417 706.079 16.3245C372.006 33.8232 248.411 55.4391 -0.0019368 35.8818" stroke="#BF9D7D" />
          <path d="M1920 74.8338C1850.65 80.4951 1664.98 85.2301 1477.02 58.8791C1242.06 25.9405 1040.15 -13.1742 706.079 4.32449C372.006 21.8232 248.411 43.4391 -0.0019368 23.8818" stroke="#BF9D7D" />
        </g>
        <defs>
          <clipPath id="clip0_295_8497">
            <rect width="1920" height="188" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>


<style lang="scss">
.svg-icon {
  fill: #bf9d7d;
  color: transparent;
}
</style>