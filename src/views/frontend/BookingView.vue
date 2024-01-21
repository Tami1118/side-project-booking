<template>
  <div class="bg-primary-10">
    <div class="py-10 lg:py-30">
      <div class="container mx-auto px-4 sm:px-0">
        <div class="lg:flex lg:content-between gap-18">
          <div class="basis-full lg:basis-7/12">
            <div class="flex flex-col">

              <button class="btn btn-primary" @click="address">取得地址</button>
              
              <a href="" class="mb-[42px]">確認訂房資訊</a> 


              <div>
                <h2 class="text-5 lg:text-7 font-bold mb-8 lg:mb-10">訂房資訊</h2>
                
                <div class="flex flex-col gap-6 lg:pb-[47px] lg:mb-[47px] border-b">
                  <div class="flex items-center">
                    <div class="grow">
                      <h3 class="title-deco ps-4 text-4 text-neutral-100 font-bold mb-2">選擇房型</h3>
                      <p>尊爵雙人房</p>
                    </div>
                    <button class="font-blod underline">編輯</button>
                  </div>

                  <div class="flex items-center">
                    <div class="grow">
                      <h3 class="title-deco ps-4 text-4 text-neutral-100 font-bold mb-2">訂房日期</h3>
                      <p class="mb-2">入住：12 月 4 日星期二</p>
                      <p>退房：12 月 6 日星期三</p>
                    </div>
                    <button class="font-blod underline">編輯</button>
                  </div>
                  
                  <div class="flex items-center">
                    <div class="grow">
                      <h3 class="title-deco ps-4 text-4 text-neutral-100 font-bold mb-2">房客人數</h3>
                      <p class="">2人</p>
                    </div>
                    <button class="font-blod underline">編輯</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="basis-full lg:basis-5/12">
            <div class="sticky top-0">
              <div class="bg-white p-10 rounded-[10px]">
                <div class="flex flex-col gap-10">
                  <p class="text-6 font-bold pb-4 border-b border-neutral-40">預定房型</p>
                  <div>
                    <p class="text-10 font-bold text-neutral-80 mb-2">尊爵雙人房</p>
                    <p class="text-netural-80 font-500">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
                  </div>
                  <div>this is content</div>
                  <div class="flex">
                    <p>人數</p>
                    <div class="ms-auto">
                      <button class="rounded-full p-4">
                        <span class="material-symbols-outlined text-6">remove</span>
                      </button>
                      <input type="number" value="2" class="w-[48px] mx-4 text-center text-5">
                      <button class="rounded-full p-4">
                        <span class="material-symbols-outlined text-6">add</span>
                      </button>
                    </div>
                  </div>
                  <p class="text-primary-100 text-6">NT$ 10,000</p>
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
import { useOrderStore } from "@/stores/orderStore";

const orderStore = useOrderStore();
const address = orderStore.address;
</script>