<template>
  <div class="container mx-auto px-4 sm:px-0 py-10">
    <div class="flex flex-col gap-8">
      <div aria-label="color system">
        <h2 class="text-6 font-bold pb-2 mb-4 border-b">Color System</h2>
        <div class="flex flex-col gap-4">
          <div class="grid grid-flow-row-dense grid-cols-3 md:grid-cols-6 gap-4">
            <div class="h-[120px] rounded-2 bg-primary"></div>
            <div class="h-[120px] rounded-2 bg-primary-80"></div>
            <div class="h-[120px] rounded-2 bg-primary-60"></div>
            <div class="h-[120px] rounded-2 bg-primary-40"></div>
            <div class="h-[120px] rounded-2 bg-primary-tint"></div>
          </div>
          <div class="grid grid-flow-row-dense grid-cols-3 md:grid-cols-6 gap-4">
            <div class="h-[120px] rounded-2 bg-success-120"></div>
            <div class="h-[120px] rounded-2 bg-success-100"></div>
            <div class="h-[120px] rounded-2 bg-success-20"></div>
            <div class="h-[120px] rounded-2 bg-success-10"></div>
          </div>
          <div class="grid grid-flow-row-dense grid-cols-3 md:grid-cols-6 gap-4">
            <div class="h-[120px] rounded-2 bg-alert-120"></div>
            <div class="h-[120px] rounded-2 bg-alert-100"></div>
            <div class="h-[120px] rounded-2 bg-alert-20"></div>
            <div class="h-[120px] rounded-2 bg-alert-10"></div>
          </div>
          <div class="grid grid-flow-row-dense grid-cols-3 md:grid-cols-6 gap-4">
            <div class="h-[120px] rounded-2 bg-neutral"></div>
            <div class="h-[120px] rounded-2 bg-black"></div>
            <div class="h-[120px] rounded-2 bg-neutral-80"></div>
            <div class="h-[120px] rounded-2 bg-neutral-60"></div>
            <div class="h-[120px] rounded-2 bg-neutral-40"></div>
            <div class="h-[120px] rounded-2 bg-neutral-10"></div>
            <div class="h-[120px] rounded-2 bg-white border"></div>
          </div>
        </div>
      </div>

      <div aria-label="icon">
        <h2 class="text-6 font-bold pb-2 mb-4 border-b">Icon</h2>
        <div class="flex flex-col gap-4">
          <div class="flex gap-4">
            <img src="/svg/car-front.svg" alt="">
            <img src="/svg/car-side.svg" alt="">
            <img src="/svg/train.svg" alt="">
            <img src="/svg/zoom.svg" alt="">
            <img src="/svg/media-line.svg" alt="">
            <img src="/svg/person.svg" alt="">
          </div>
          <div class="flex flex-wrap gap-3">
            <span class="material-icons">done</span>
            <span class="material-icons">person</span>
            <span class="material-icons">keyboard_arrow_right</span>
            <span class="material-icons">keyboard_arrow_down</span>
            <span class="material-icons">keyboard_arrow_up</span>
            <span class="material-icons">keyboard_arrow_left</span>
            <span class="material-icons">close</span>
            <span class="material-icons">arrow_back</span>
            <span class="material-icons">arrow_forward</span>
            <span class="material-icons">menu</span>
            <span class="material-icons">bed</span>
          </div>
        </div>
      </div>

      <div aria-labe="logo">
        <h2 class="text-6 font-bold pb-2 mb-4 border-b">Logo</h2>
        <div class="flex justify-start gap-3">
          <div class="flex flex-col w-[196px]">
            <img src="/svg/logo-primary.svg" alt="享樂飯店 Logo">
            <img src="/svg/logo-primary-en.svg" alt="享樂飯店 Logo">
          </div>
          <div class="flex flex-col w-[196px] bg-black">
            <img src="/svg/logo-white.svg" alt="享樂飯店 Logo">
            <img src="/svg/logo-white-en.svg" alt="享樂飯店 Logo">
          </div>
        </div>
      </div>

      <div aria-label="button">
        <h2 class="text-6 font-bold pb-2 mb-4 border-b">Button</h2>
        <div class="flex flex-col gap-4">
          <div class="flex justify-start items-center gap-3">
            <p>Primary</p>
            <button class="py-4 px-8 rounded-2 bg-primary-100 hover:bg-primary disabled:bg-transparent text-white disabled:text-neutral-60">Button</button>
            <button class="py-4 px-8 rounded-2 bg-primary-100 hover:bg-primary disabled:bg-transparent text-white disabled:text-neutral-60" disabled>Button</button>
          </div>
          <div class="flex justify-start items-center gap-3">
            <p>Secondary</p>
            <button class="py-4 px-8 rounded-2 bg-white border border-primary-100 hover:border-primary disabled:bg-transparent text-white disabled:text-neutral-60">Button</button>
            <button class="py-4 px-8 rounded-2 bg-white border border-primary-100 hover:border-primary disabled:bg-transparent text-white disabled:text-neutral-60" disabled>Button</button>
          </div>
        </div>
      </div>

      <div aria-label="">
        <h2 class="text-6 font-bold pb-2 mb-4 border-b"></h2>
      </div>

      <div aria-label="">
        <h2 class="text-6 font-bold pb-2 mb-4 border-b"></h2>
      </div>

      <div aria-label="">
        <h2 class="text-6 font-bold pb-2 mb-4 border-b"></h2>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      is_disabled: true,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const url = `${VITE_URL}/api/v1/rooms/`;
      this.$http.get(url).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
