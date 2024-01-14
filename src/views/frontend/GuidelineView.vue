<template>
  <!-- 第一行 container 可複製於各頁面 -->
  <div class="container mx-auto px-4 sm:px-0 py-10">
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
        <div class="flex flex-col gap-4">
          Svg
          <div class="flex gap-4">
            <!-- car-front -->
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16">
              <path d="M15.92 1.01C15.72 0.42 15.16 0 14.5 0H3.5C2.84 0 2.29 0.42 2.08 1.01L0 7V15C0 15.55 0.45 16 1 16H2C2.55 16 3 15.55 3 15V14H15V15C15 15.55 15.45 16 16 16H17C17.55 16 18 15.55 18 15V7L15.92 1.01ZM3.5 11C2.67 11 2 10.33 2 9.5C2 8.67 2.67 8 3.5 8C4.33 8 5 8.67 5 9.5C5 10.33 4.33 11 3.5 11ZM14.5 11C13.67 11 13 10.33 13 9.5C13 8.67 13.67 8 14.5 8C15.33 8 16 8.67 16 9.5C16 10.33 15.33 11 14.5 11ZM2 6L3.5 1.5H14.5L16 6H2Z" />
            </svg>
            <!-- car-side -->
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M16 6L19 10H21C22.11 10 23 10.89 23 12V15H21C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18C17.2044 18 16.4413 17.6839 15.8787 17.1213C15.3161 16.5587 15 15.7956 15 15H9C9 15.7956 8.68393 16.5587 8.12132 17.1213C7.55871 17.6839 6.79565 18 6 18C5.20435 18 4.44129 17.6839 3.87868 17.1213C3.31607 16.5587 3 15.7956 3 15H1V12C1 10.89 1.89 10 3 10L6 6H16ZM10.5 7.5H6.75L4.86 10H10.5V7.5ZM12 7.5V10H17.14L15.25 7.5H12ZM6 13.5C5.60218 13.5 5.22064 13.658 4.93934 13.9393C4.65804 14.2206 4.5 14.6022 4.5 15C4.5 15.3978 4.65804 15.7794 4.93934 16.0607C5.22064 16.342 5.60218 16.5 6 16.5C6.39782 16.5 6.77936 16.342 7.06066 16.0607C7.34196 15.7794 7.5 15.3978 7.5 15C7.5 14.6022 7.34196 14.2206 7.06066 13.9393C6.77936 13.658 6.39782 13.5 6 13.5ZM18 13.5C17.6022 13.5 17.2206 13.658 16.9393 13.9393C16.658 14.2206 16.5 14.6022 16.5 15C16.5 15.3978 16.658 15.7794 16.9393 16.0607C17.2206 16.342 17.6022 16.5 18 16.5C18.3978 16.5 18.7794 16.342 19.0607 16.0607C19.342 15.7794 19.5 15.3978 19.5 15C19.5 14.6022 19.342 14.2206 19.0607 13.9393C18.7794 13.658 18.3978 13.5 18 13.5Z" />
            </svg>
            <!-- train -->
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g clip-path="url(#clip0_31_1909)">
                <path d="M12 2C8 2 4 2.5 4 6V15.5C4 17.43 5.57 19 7.5 19L6 20.5V21H8.23L10.23 19H14L16 21H18V20.5L16.5 19C18.43 19 20 17.43 20 15.5V6C20 2.5 16.42 2 12 2ZM7.5 17C6.67 17 6 16.33 6 15.5C6 14.67 6.67 14 7.5 14C8.33 14 9 14.67 9 15.5C9 16.33 8.33 17 7.5 17ZM11 10H6V6H11V10ZM13 10V6H18V10H13ZM16.5 17C15.67 17 15 16.33 15 15.5C15 14.67 15.67 14 16.5 14C17.33 14 18 14.67 18 15.5C18 16.33 17.33 17 16.5 17Z" />
              </g>
              <defs>
                <clipPath id="clip0_31_1909">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <!-- media-line -->
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0C18.6165 0 24 4.368 24 9.738C24 11.8875 23.1675 13.8225 21.4275 15.729C18.9105 18.627 13.281 22.1565 12 22.6965C10.755 23.2215 10.899 22.401 10.956 22.077L10.9605 22.05L11.1315 21.0225C11.172 20.7165 11.214 20.241 11.0925 19.938C10.9575 19.6035 10.4265 19.4295 10.0365 19.3455C4.269 18.585 0 14.5515 0 9.738C0 4.368 5.385 0 12 0ZM7.533 11.529H5.2455V7.377C5.2455 7.3152 5.22105 7.25591 5.17749 7.21207C5.13393 7.16822 5.0748 7.1434 5.013 7.143H4.17C4.13927 7.143 4.10884 7.14905 4.08045 7.16081C4.05206 7.17257 4.02627 7.18981 4.00454 7.21154C3.98281 7.23327 3.96557 7.25906 3.95381 7.28745C3.94205 7.31584 3.936 7.34627 3.936 7.377V12.606C3.936 12.6675 3.9615 12.726 4.002 12.7665V12.768L4.005 12.771L4.008 12.774C4.0515 12.8158 4.10965 12.839 4.17 12.8385H7.533C7.662 12.8385 7.7655 12.7335 7.7655 12.6045V11.7645C7.7657 11.7338 7.75984 11.7033 7.74826 11.6748C7.73669 11.6464 7.71961 11.6205 7.69802 11.5986C7.67644 11.5767 7.65075 11.5593 7.62243 11.5474C7.59412 11.5354 7.56373 11.5292 7.533 11.529ZM8.7195 7.143C8.65744 7.143 8.59792 7.16765 8.55404 7.21154C8.51015 7.25542 8.4855 7.31494 8.4855 7.377V12.606C8.4855 12.735 8.5905 12.8385 8.7195 12.8385H9.5625C9.6915 12.8385 9.795 12.7335 9.795 12.606V7.377C9.795 7.3152 9.77055 7.25591 9.72699 7.21207C9.68343 7.16822 9.6243 7.1434 9.5625 7.143H8.7195ZM14.514 7.143C14.4519 7.143 14.3924 7.16765 14.3485 7.21154C14.3047 7.25542 14.28 7.31494 14.28 7.377V10.482L11.8845 7.248C11.8784 7.24013 11.8719 7.23261 11.865 7.2255C11.8603 7.22025 11.8553 7.21374 11.85 7.209L11.8455 7.2045C11.8404 7.19958 11.8348 7.19507 11.829 7.191L11.82 7.185L11.8155 7.182C11.8132 7.18025 11.8106 7.17874 11.808 7.1775L11.796 7.17H11.793L11.7885 7.167L11.7735 7.161L11.7675 7.158C11.7626 7.15622 11.7576 7.15472 11.7525 7.1535H11.7495L11.745 7.152L11.7315 7.149H11.7225L11.718 7.1475H11.712L11.709 7.146H10.848C10.7862 7.146 10.7269 7.17045 10.6831 7.21401C10.6392 7.25757 10.6144 7.3167 10.614 7.3785V12.6075C10.614 12.7365 10.719 12.84 10.848 12.84H11.688C11.8185 12.84 11.9235 12.735 11.9235 12.6075V9.5025L14.3235 12.7425C14.3395 12.7648 14.3593 12.7841 14.382 12.7995L14.3835 12.801L14.3985 12.81L14.4045 12.813C14.4084 12.8153 14.4124 12.8173 14.4165 12.819L14.427 12.8235L14.4345 12.8265C14.4395 12.8282 14.4445 12.8297 14.4495 12.831H14.454C14.4735 12.8366 14.4937 12.8396 14.514 12.84H15.354C15.4845 12.84 15.5895 12.735 15.5895 12.6075V7.377C15.5895 7.31494 15.5648 7.25542 15.521 7.21154C15.4771 7.16765 15.4176 7.143 15.3555 7.143H14.514ZM20.2365 8.2185V7.3785C20.2367 7.34777 20.2308 7.3173 20.2193 7.28884C20.2077 7.26037 20.1906 7.23446 20.169 7.2126C20.1474 7.19073 20.1217 7.17333 20.0934 7.16139C20.0651 7.14944 20.0347 7.1432 20.004 7.143H16.641C16.5805 7.14307 16.5223 7.16675 16.479 7.209H16.4775L16.476 7.212L16.473 7.2165C16.4311 7.25948 16.4075 7.31699 16.407 7.377V12.606C16.407 12.6675 16.4325 12.726 16.473 12.7665L16.476 12.771L16.479 12.774C16.5226 12.8157 16.5807 12.8388 16.641 12.8385H20.004C20.133 12.8385 20.2365 12.7335 20.2365 12.6045V11.7645C20.2367 11.7338 20.2308 11.7033 20.2193 11.6748C20.2077 11.6464 20.1906 11.6205 20.169 11.5986C20.1474 11.5767 20.1217 11.5593 20.0934 11.5474C20.0651 11.5354 20.0347 11.5292 20.004 11.529H17.715V10.6455H20.0025C20.1315 10.6455 20.235 10.5405 20.235 10.4115V9.5715C20.2352 9.54077 20.2293 9.5103 20.2178 9.48184C20.2062 9.45337 20.1891 9.42746 20.1675 9.4056C20.1459 9.38373 20.1202 9.36633 20.0919 9.35439C20.0636 9.34244 20.0332 9.3362 20.0025 9.336H17.715V8.4525H20.0025C20.1315 8.4525 20.235 8.3475 20.235 8.2185H20.2365Z" />
            </svg>

            <!-- zoom -->
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M2 6.75C2 6.02065 2.28973 5.32118 2.80546 4.80546C3.32118 4.28973 4.02065 4 4.75 4H19.25C19.9793 4 20.6788 4.28973 21.1945 4.80546C21.7103 5.32118 22 6.02065 22 6.75V17.25C22 17.6111 21.9289 17.9687 21.7907 18.3024C21.6525 18.636 21.4499 18.9392 21.1945 19.1945C20.9392 19.4499 20.636 19.6525 20.3024 19.7907C19.9687 19.9289 19.6111 20 19.25 20H4.75C4.38886 20 4.03127 19.9289 3.69762 19.7907C3.36398 19.6525 3.06082 19.4499 2.80546 19.1945C2.5501 18.9392 2.34753 18.636 2.20933 18.3024C2.07113 17.9687 2 17.6111 2 17.25V6.75ZM16.78 7.22C16.6395 7.07931 16.4488 7.00017 16.25 7H13.75C13.5511 7 13.3603 7.07902 13.2197 7.21967C13.079 7.36032 13 7.55109 13 7.75C13 7.94891 13.079 8.13968 13.2197 8.28033C13.3603 8.42098 13.5511 8.5 13.75 8.5H14.44L12.72 10.219C12.6463 10.2877 12.5872 10.3705 12.5462 10.4625C12.5052 10.5545 12.4832 10.6538 12.4814 10.7545C12.4796 10.8552 12.4982 10.9552 12.5359 11.0486C12.5736 11.142 12.6297 11.2268 12.701 11.298C12.7722 11.3693 12.857 11.4254 12.9504 11.4631C13.0438 11.5008 13.1438 11.5194 13.2445 11.5176C13.3452 11.5158 13.4445 11.4938 13.5365 11.4528C13.6285 11.4118 13.7113 11.3527 13.78 11.279L15.5 9.56V10.25C15.5 10.4489 15.579 10.6397 15.7197 10.7803C15.8603 10.921 16.0511 11 16.25 11C16.4489 11 16.6397 10.921 16.7803 10.7803C16.921 10.6397 17 10.4489 17 10.25V7.75C16.9998 7.55115 16.9207 7.36052 16.78 7.22ZM7.75 17H10.251C10.4499 17 10.6407 16.921 10.7813 16.7803C10.922 16.6397 11.001 16.4489 11.001 16.25C11.001 16.0511 10.922 15.8603 10.7813 15.7197C10.6407 15.579 10.4499 15.5 10.251 15.5H9.561L11.281 13.78C11.4176 13.6385 11.4931 13.449 11.4913 13.2523C11.4895 13.0557 11.4105 12.8676 11.2714 12.7286C11.1322 12.5896 10.9441 12.5109 10.7475 12.5092C10.5508 12.5076 10.3614 12.5833 10.22 12.72L8.5 14.438V13.748C8.5 13.5491 8.42098 13.3583 8.28033 13.2177C8.13968 13.077 7.94891 12.998 7.75 12.998C7.55109 12.998 7.36032 13.077 7.21967 13.2177C7.07902 13.3583 7 13.5491 7 13.748V16.248C7 16.4469 7.07902 16.6377 7.21967 16.7783C7.36032 16.919 7.55109 16.998 7.75 16.998V17Z" />
            </svg>
          </div>

          Material-icons
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
            <span class="material-icons">account_circle</span>
          </div>
        </div>
      </div>

      <div aria-labe="Logo">
        <h2 class="text-6 font-bold pb-2 mb-4 border-b">Logo</h2>
        <div class="flex gap-4">

          <!-- copy start -->
          <div class="w-[196px]">
            <img src="/svg/logo-primary.svg" alt="享樂飯店 Logo">
            <img src="/svg/logo-primary-en.svg" alt="享樂飯店 Logo">
          </div>
          <!-- copy end -->

          <!-- copy start -->
          <div class="w-[196px] bg-black">
            <img src="/svg/logo-white.svg" alt="享樂飯店 Logo">
            <img src="/svg/logo-white-en.svg" alt="享樂飯店 Logo">
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
          <div class="flex justify-start items-center gap-3">
            <button type="button" class="btn-primary">Button <span class="material-icons ms-1">face</span></button>
            <button type="button" class="btn-primary" disabled>Button <span class="material-icons ms-1">face</span></button>
            <button type="button" class="btn-primary">Button</button>
            <button type="button" class="btn-primary" disabled>Button</button>
          </div>

          Secondary
          <div class="flex justify-start items-center gap-3">
            <button type="button" class="btn-secondary">Button <span class="material-icons ms-1">face</span></button>
            <button type="button" class="btn-secondary" disabled>Button <span class="material-icons ms-1">face</span></button>
            <button type="button" class="btn-secondary">Button</button>
            <button type="button" class="btn-secondary" disabled>Button</button>
          </div>

          Ghost
          <div class="flex flex-wrap gap-3">
            <button type="button" class="btn-ghost">Button <span class="material-icons ms-1">face</span></button>
            <button type="button" class="btn-ghost" disabled>Button <span class="material-icons ms-1">face</span></button>
            <button type="button" class="btn-ghost">Button</button>
            <button type="button" class="btn-ghost" disabled>Button</button>
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
          <div class="border p-4 h-[97px] aspect-square rounded-2 bg-white flex flex-col justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M2 6.75C2 6.02065 2.28973 5.32118 2.80546 4.80546C3.32118 4.28973 4.02065 4 4.75 4H19.25C19.9793 4 20.6788 4.28973 21.1945 4.80546C21.7103 5.32118 22 6.02065 22 6.75V17.25C22 17.6111 21.9289 17.9687 21.7907 18.3024C21.6525 18.636 21.4499 18.9392 21.1945 19.1945C20.9392 19.4499 20.636 19.6525 20.3024 19.7907C19.9687 19.9289 19.6111 20 19.25 20H4.75C4.38886 20 4.03127 19.9289 3.69762 19.7907C3.36398 19.6525 3.06082 19.4499 2.80546 19.1945C2.5501 18.9392 2.34753 18.636 2.20933 18.3024C2.07113 17.9687 2 17.6111 2 17.25V6.75ZM16.78 7.22C16.6395 7.07931 16.4488 7.00017 16.25 7H13.75C13.5511 7 13.3603 7.07902 13.2197 7.21967C13.079 7.36032 13 7.55109 13 7.75C13 7.94891 13.079 8.13968 13.2197 8.28033C13.3603 8.42098 13.5511 8.5 13.75 8.5H14.44L12.72 10.219C12.6463 10.2877 12.5872 10.3705 12.5462 10.4625C12.5052 10.5545 12.4832 10.6538 12.4814 10.7545C12.4796 10.8552 12.4982 10.9552 12.5359 11.0486C12.5736 11.142 12.6297 11.2268 12.701 11.298C12.7722 11.3693 12.857 11.4254 12.9504 11.4631C13.0438 11.5008 13.1438 11.5194 13.2445 11.5176C13.3452 11.5158 13.4445 11.4938 13.5365 11.4528C13.6285 11.4118 13.7113 11.3527 13.78 11.279L15.5 9.56V10.25C15.5 10.4489 15.579 10.6397 15.7197 10.7803C15.8603 10.921 16.0511 11 16.25 11C16.4489 11 16.6397 10.921 16.7803 10.7803C16.921 10.6397 17 10.4489 17 10.25V7.75C16.9998 7.55115 16.9207 7.36052 16.78 7.22ZM7.75 17H10.251C10.4499 17 10.6407 16.921 10.7813 16.7803C10.922 16.6397 11.001 16.4489 11.001 16.25C11.001 16.0511 10.922 15.8603 10.7813 15.7197C10.6407 15.579 10.4499 15.5 10.251 15.5H9.561L11.281 13.78C11.4176 13.6385 11.4931 13.449 11.4913 13.2523C11.4895 13.0557 11.4105 12.8676 11.2714 12.7286C11.1322 12.5896 10.9441 12.5109 10.7475 12.5092C10.5508 12.5076 10.3614 12.5833 10.22 12.72L8.5 14.438V13.748C8.5 13.5491 8.42098 13.3583 8.28033 13.2177C8.13968 13.077 7.94891 12.998 7.75 12.998C7.55109 12.998 7.36032 13.077 7.21967 13.2177C7.07902 13.3583 7 13.5491 7 13.748V16.248C7 16.4469 7.07902 16.6377 7.21967 16.7783C7.36032 16.919 7.55109 16.998 7.75 16.998V17Z" fill="#BF9D7D" />
            </svg>
            <p class="mt-2">28坪</p>
          </div>
          <div class="border p-4 h-[97px] aspect-square rounded-2 bg-white flex flex-col justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
              <path d="M18 5.5V2.5C18 1.4 17.1 0.5 16 0.5H4C2.9 0.5 2 1.4 2 2.5V5.5C0.9 5.5 0 6.4 0 7.5V12.5H1.33L2 14.5H3L3.67 12.5H16.34L17 14.5H18L18.67 12.5H20V7.5C20 6.4 19.1 5.5 18 5.5ZM9 5.5H4V2.5H9V5.5ZM16 5.5H11V2.5H16V5.5Z" fill="#BF9D7D" />
            </svg>
            <p class="mt-2">1張大床</p>
          </div>
          <div class="border p-4 h-[97px] aspect-square rounded-2 bg-white flex flex-col justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
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

<style lang="scss">
.svg-icon {
  fill: #BF9D7D;
}

.material-icons{
  color: #BF9D7D;
}
.test{
  color: red;
}
</style>

