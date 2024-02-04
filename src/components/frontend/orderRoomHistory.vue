<script>
export default {
  props: ["orderList"]
}
</script>

<template>
  <div class="bg-white rounded-5 p-4 lg:p-10">
    <h2 class="mb-6 lg:mb-10 text-4 lg:text-5">歷史訂單</h2>
    <ul class="flex flex-col gap-6 lg:gap-10">
      <li class="border-b border-neutral-40 pb-6" v-for="item in orderList" :key="item._id">
        <div class="flex flex-col lg:flex-row gap-6">
          <img class="h-[80px] w-[120px] object-cover object-center rounded-2" :src="item.roomId.imageUrl" alt="">

          <div class="flex flex-col gap-4 text-3h lg:text-4 text-neutral-80">
            <p>預定參考編號：{{ item._id }}</p>
            <h3 class="text-4 lg:text-6 font-bold">{{ item.roomId.name }}</h3>
            <div>
              <p class="mb-2">住宿天數：{{ $format.getNightNum(item.checkInDate, item.checkOutDate) }}晚</p>
              <p>住宿人數：{{ item.peopleNum }}位</p>
            </div>
            <div>
              <p class="title-deco ps-4 mb-2">入住：{{ $format.getTradDateSecondary(item.checkInDate) }}</p>
              <p class="title-deco ps-4">退房：{{ $format.getTradDateSecondary(item.checkOutDate) }}</p>
            </div>
            <!-- 待辦：新增 computed total -->
            <p class="font-bold">{{ item.roomId.price * $format.getNightNum(item.checkInDate, item.checkOutDate) }}</p>
          </div>
        </div>
      </li>
    </ul>

    <button class="btn btn-secondary mt-10 w-full">查看更多</button>
  </div>
</template>