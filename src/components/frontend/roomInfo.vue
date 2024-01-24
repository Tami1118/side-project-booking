<template>
  <div class="flex flex-col gap-6 lg:gap-20">
    <div class="">
      <h2 class="title-deco ps-4 lg:text-6 text-neutral-100 font-bold mb-4 lg:mb-6">房型基本資訊</h2>
      <div class="flex flex-wrap gap-3">
        <div class="p-4 h-[97px] aspect-square rounded-2 bg-white flex flex-col justify-between">
          <img src="/svg/zoom.svg" class="w-[24px] h-[24px]" alt="">
          <p class="mt-2">{{roomDetail.areaInfo}}坪</p>
        </div>
        <div class="p-4 h-[97px] aspect-square rounded-2 bg-white flex flex-col justify-between">
          <img src="/svg/bed.svg" class="w-[24px] py-[5px]" alt="">
          <p class="mt-2">{{roomDetail.bedInfo}}</p>
        </div>
        <div class="p-4 h-[97px] aspect-square rounded-2 bg-white flex flex-col justify-between">
          <img src="/svg/person.svg" class="w-[24px] h-[24px]" alt="">
          <p class="mt-2">2-{{roomDetail.maxPeople}}人</p>
        </div>
      </div>
    </div>

    <div class="">
      <h2 class="title-deco ps-4 lg:text-6 text-neutral-100 font-bold mb-4 lg:mb-6">房間格局</h2>
      <ul class="bg-white p-6 rounded-2 flex flex-wrap gap-6">
        <li class="flex items-center gap-2 text-neutral-80 font-bold"><span class="material-icons text-primary-100">done</span>市景</li>
        <li class="flex items-center gap-2 text-neutral-80 font-bold"><span class="material-icons text-primary-100">done</span>獨立衛浴</li>
        <li class="flex items-center gap-2 text-neutral-80 font-bold"><span class="material-icons text-primary-100">done</span>客廳</li>
        <li class="flex items-center gap-2 text-neutral-80 font-bold"><span class="material-icons text-primary-100">done</span>書房</li>
        <li class="flex items-center gap-2 text-neutral-80 font-bold"><span class="material-icons text-primary-100">done</span>樓層電梯</li>
      </ul>
    </div>

    <div class="">
      <h2 class="title-deco ps-4 lg:text-6 text-neutral-100 font-bold mb-4 lg:mb-6">房間設備</h2>
      <ul class="bg-white p-6 rounded-2 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-10 gap-y-2">
        <li class="flex items-center gap-2 text-neutral-80 font-bold" v-for="(item, key) in roomDetail.facilityInfo" :key="key"><span class="material-icons text-primary-100">done</span>{{item.title}}</li>
      </ul>
    </div>

    <div class="">
      <h2 class="title-deco ps-4 lg:text-6 text-neutral-100 font-bold mb-4 lg:mb-6">備品提供</h2>
      <ul class="bg-white p-6 rounded-2 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-10 gap-y-2">
        <li class="flex items-center gap-2 text-neutral-80 font-bold" v-for="(item, key) in roomDetail.amenityInfo" :key="key"><span class="material-icons text-primary-100">done</span>{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["roomDetail"],
};
</script>