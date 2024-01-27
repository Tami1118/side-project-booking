<template>
  <VForm @submit="onSubmit" v-slot="{errors}" class="flex flex-col gap-6">
    <div>
      <label for="name" class="block mb-2">姓名</label>
      <VField type="text"
              id="name"
              name="姓名"
              :class="{'border-red-600': errors['姓名']}"
              rules="required"
              v-model="userInfo.name"
              placeholder="請輸入姓名"
              class="form-input" />
      <ErrorMessage name="姓名" class="text-red-600 text-3h" />
    </div>
    <div>
      <label for="tel" class="block mb-2">手機號碼</label>
      <VField type="text"
              id="tel"
              name="手機號碼"
              :class="{'border-red-600': errors['手機號碼']}"
              rules="required"
              v-model="userInfo.tel"
              placeholder="請輸入手機號碼"
              class="form-input" />
      <ErrorMessage name="手機號碼" class="text-red-600 text-3h" />
    </div>
    <div>
      <label for="email" class="block mb-2">電子信箱</label>
      <VField type="email"
              id="email"
              name="電子信箱"
              :class="{'border-red-600': errors['電子信箱']}"
              rules="required|email"
              v-model="userInfo.email"
              placeholder="請輸入電子信箱"
              class="form-input" />
      <ErrorMessage name="電子信箱" class="text-red-600 text-3h" />
    </div>
    <div>
      <label for="birthday" class="block mb-2">生日</label>
      <div class="grid grid-cols-3 gap-x-2 gap-y-4">
        <div>
          <VField as="select"
                  id="birthday_year"
                  name="年"
                  :class="{'border-red-600': errors['年']}"
                  rules="required"
                  v-model="birthday.year"
                  class="form-input" >
                  <option value="" selected>年</option>
                  <option value="1990">1990</option>
          </VField>
          <ErrorMessage name="年" class="text-red-600 text-3h" />
        </div>
        <div>
          <VField as="select"
                  id="birthday_month"
                  name="月"
                  :class="{'border-red-600': errors['月']}"
                  rules="required"
                  v-model="birthday.month"
                  class="form-input" >
                  <option value="" selected>月</option>
                  <option value="1">1</option>
          </VField>
          <ErrorMessage name="月" class="text-red-600 text-3h" />
        </div>
        <div>
          <VField as="select"
                  id="birthday_day"
                  name="日"
                  :class="{'border-red-600': errors['日']}"
                  rules="required"
                  v-model="birthday.day"
                  class="form-input" >
                  <option value="" selected>日</option>
                  <option value="1">1</option>
          </VField>
          <ErrorMessage name="日" class="text-red-600 text-3h" />
        </div>
      </div>
    </div>
    <div>
      <label for="address" class="block mb-2">地址</label>
      <div class="grid grid-cols-2 gap-x-2 gap-y-4">
        <div>
          <VField as="select"
                  id="address_city"
                  name="縣市"
                  :class="{'border-red-600': errors['縣市']}"
                  rules="required"
                  v-model="address.city"
                  class="form-input" >
                  <option value="" selected>請選擇縣市</option>
                  <option value="新北市">新北市</option>
          </VField>
          <ErrorMessage name="縣市" class="text-red-600 text-3h" />
        </div>
        <div>
          <VField as="select"
                  id="address_county"
                  name="行政區"
                  :class="{'border-red-600': errors['行政區']}"
                  rules="required"
                  v-model="address.county"
                  class="form-input" >
                  <option value="" selected>請選擇行政區</option>
                  <option value="板橋區">板橋區</option>
          </VField>
          <ErrorMessage name="行政區" class="text-red-600 text-3h" />
        </div>
        <div class="col-span-2">
          <VField type="text"
                  id="address"
                  name="詳細地址"
                  :class="{'border-red-600': errors['詳細地址']}"
                  rules="required"
                  v-model="address.detail"
                  placeholder="請輸入詳細地址"
                  class="form-input" />
          <ErrorMessage name="詳細地址" class="text-red-600 text-3h" />
        </div>
      </div>
    </div>
    <!-- <button>Sign up</button> -->
  </VForm>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const userInfo = ref({})
const address = ref({})
const birthday = ref({})
const onSubmit = () => {
  console.log('test')
}
</script>