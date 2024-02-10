<template>
  <!-- 第一行 container 可複製於各頁面 -->
  <div class="container mx-auto px-4 lg:px-0 py-10">
    <div class="flex flex-col gap-8">
      <div aria-label="Color System">
        <h2 class="text-6 font-bold pb-2 mb-4 border-b">Color System</h2>
        <div class="flex flex-col gap-4">
          主要色
          <div class="grid grid-flow-row-dense grid-cols-3 md:grid-cols-6 gap-4">
            <div class="bg-primary h-[120px] rounded-2"></div>
            <div class="bg-primary-80 h-[120px] rounded-2"></div>
            <div class="bg-primary-60 h-[120px] rounded-2"></div>
            <div class="bg-primary-40 h-[120px] rounded-2"></div>
            <div class="bg-primary-tint h-[120px] rounded-2"></div>
          </div>
          語意輔助色
          <div class="grid grid-flow-row-dense grid-cols-3 md:grid-cols-6 gap-4">
            <div class="bg-success-120 h-[120px] rounded-2"></div>
            <div class="bg-success-100 h-[120px] rounded-2"></div>
            <div class="bg-success-20 h-[120px] rounded-2"></div>
            <div class="bg-success-10 h-[120px] rounded-2"></div>
          </div>
          <div class="grid grid-flow-row-dense grid-cols-3 md:grid-cols-6 gap-4">
            <div class="bg-alert-120 h-[120px] rounded-2"></div>
            <div class="bg-alert-100 h-[120px] rounded-2"></div>
            <div class="bg-alert-20 h-[120px] rounded-2"></div>
            <div class="bg-alert-10 h-[120px] rounded-2"></div>
          </div>
          中性色
          <div class="grid grid-flow-row-dense grid-cols-3 md:grid-cols-6 gap-4">
            <div class="bg-neutral h-[120px] rounded-2"></div>
            <div class="bg-black h-[120px] rounded-2"></div>
            <div class="bg-neutral-80 h-[120px] rounded-2"></div>
            <div class="bg-neutral-60 h-[120px] rounded-2"></div>
            <div class="bg-neutral-40 h-[120px] rounded-2"></div>
            <div class="bg-neutral-10 h-[120px] rounded-2"></div>
            <div class="bg-white border h-[120px] rounded-2"></div>
          </div>
        </div>
      </div>

      <div aria-label="Icon">
        <h2 class="text-6 font-bold pb-2 mb-4 border-b">Icon</h2>
        <div class="flex flex-wrap gap-3 items-center">
          <font-awesome-icon icon="fa-solid fa-car" class="text-7" />
          <font-awesome-icon icon="fa-solid fa-check" class="text-7" />
          <font-awesome-icon icon="fa-regular fa-circle-user" class="text-7" />
          <font-awesome-icon icon="fa-solid fa-chevron-up" class="text-7" />
          <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-7" />
          <font-awesome-icon icon="fa-solid fa-chevron-down" class="text-7" />
          <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-7" />
          <font-awesome-icon icon="fa-solid fa-xmark" class="text-7" />
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-7" />
          <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-7" />
          <font-awesome-icon icon="fa-solid fa-bars" class="text-7" />
          <font-awesome-icon icon="fa-solid fa-expand" class="text-7" />
          <font-awesome-icon icon="fa-solid fa-bed" class="text-7" />
          <font-awesome-icon icon="fa-solid fa-user" class="text-7" />
        </div>
      </div>
    </div>

    <div aria-labe="Logo">
      <h2 class="text-6 font-bold pb-2 mb-4 border-b">Logo</h2>
      <div class="flex gap-4">

        <!-- copy start -->
        <div class="w-[196px]">
          <img src="/svg/logo-primary.svg" alt="享樂飯店 Logo">
        </div>
        <!-- copy end -->

        <!-- copy start -->
        <div class="w-[196px] bg-black">
          <img src="/svg/logo-white.svg" alt="享樂飯店 Logo">
        </div>
        <!-- copy end -->

      </div>
    </div>

    <div aria-label="Hero Button">
      <h2 class="text-6 font-bold pb-2 mb-4 border-b">Hero Button</h2>
      <div class="bg-neutral-40 p-6">

        <!-- copy start -->
        <div class="flex flex-col gap-4">
          <button type="button" class="group rounded-2 bg-white p-10 flex items-center justify-end text-6 font-bold hover:bg-primary-100 hover:text-white duration-500">
            立即訂房
            <span class="block ms-4 w-[159px] group-hover:w-[120px] h-[1px] bg-neutral group-hover:bg-white duration-500"></span></button>
        </div>
        <!-- copy end -->

      </div>
    </div>

    <div aria-label="Button">
      <h2 class="text-6 font-bold pb-2 mb-4 border-b">Button</h2>
      <div class="flex flex-col gap-4">
        Primary
        <div class="flex justify-start items-center gap-3 flex-wrap">
          <button type="button" class="btn btn-primary">Button <span class="material-icons ms-1">face</span></button>
          <button type="button" class="btn btn-primary" disabled>Button <span class="material-icons ms-1">face</span></button>
          <button type="button" class="btn btn-primary">Button</button>
          <button type="button" class="btn btn-primary" disabled>Button</button>
        </div>

        Secondary
        <div class="flex justify-start items-center gap-3 flex-wrap">
          <button type="button" class="btn btn-secondary">Button <span class="material-icons ms-1">face</span></button>
          <button type="button" class="btn btn-secondary" disabled>Button <span class="material-icons ms-1">face</span></button>
          <button type="button" class="btn btn-secondary">Button</button>
          <button type="button" class="btn btn-secondary" disabled>Button</button>
        </div>

        Ghost
        <div class="flex flex-wrap gap-3">
          <button type="button" class="btn btn-ghost">Button <span class="material-icons ms-1">face</span></button>
          <button type="button" class="btn btn-ghost" disabled>Button <span class="material-icons ms-1">face</span></button>
          <button type="button" class="btn btn-ghost">Button</button>
          <button type="button" class="btn btn-ghost" disabled>Button</button>
        </div>

        Test
        <div class="flex flex-wrap gap-3">
          <button type="button" class="btn-text">Button</button>
          <button type="button" class="btn-text" disabled>Button</button>
        </div>
      </div>
    </div>

    <div aria-label="Input Feild">
      <h2 class="text-6 font-bold pb-2 mb-4 border-b">Input Feild</h2>

      <div class="flex flex-col gap-4 bg-neutral-10 p-6">
        <div>
          <div class="flex justify-between">
            <label for="" class="text-white">Text</label>
            <span class="block text-primary-100">必填</span>
          </div>
          <input type="text" id="" class="form-input" placeholder="Text">
          <small class="text-alert-100">錯誤訊息提示</small>
        </div>

        <input type="text" class="form-input" placeholder="Text" value="This is content">
        <!-- 錯誤提示 input outline 待研究 -->
      </div>
    </div>

    <div aria-label="Dropdown">
      <h2 class="text-6 font-bold pb-2 mb-4 border-b">Dropdown</h2>
      <div class="flex flex-col gap-4 bg-neutral-10 p-6">
        <div class="relative">
          <select name="" id="" class="p-4 rounded-2 form-select w-full">
            <option value="" selected>Label</option>
            <option value="">選項 1</option>
          </select>
          <div class="absolute top-0 bottom-0 right-0 m-auto p-4">
            <span class="material-icons">keyboard_arrow_down</span>
          </div>
        </div>
      </div>
    </div>

    <div aria-label="Feature">
      <h2 class="text-6 font-bold pb-2 mb-4 border-b">Feature</h2>
      <div class="flex gap-3">
        <div class="p-4 w-[97px] h-[97px] border border-primary-40 rounded-2 bg-white flex flex-col items-start justify-center gap-2">
          <font-awesome-icon icon="fa-solid fa-expand" class="text-primary-100 text-5" />
          <p class="font-bold text-3h lg:text-4 text-nowrap">28 坪</p>
        </div>
        <div class="p-4 w-[97px] h-[97px] border border-primary-40 rounded-2 bg-white flex flex-col items-start justify-center gap-2">
          <font-awesome-icon icon="fa-solid fa-bed" class="text-primary-100 text-5" />
          <p class="font-bold text-3h lg:text-4 text-nowrap">一張大床</p>
        </div>
        <div class="p-4 w-[97px] h-[97px] border border-primary-40 rounded-2 bg-white flex flex-col items-start justify-center gap-2">
          <font-awesome-icon icon="fa-solid fa-user" class="text-primary-100 text-5" />
          <p class="font-bold text-3h lg:text-4 text-nowrap">2-4 人</p>
        </div>
      </div>
    </div>
  </div>
</template>
