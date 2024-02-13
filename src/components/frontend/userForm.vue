<template>


<VForm  v-slot="{ errors }"
        @submit="editUserInfo()"      >
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <label for="user-name" class="font-bold">姓名</label>
      <VField 
        name="姓名"
        type="text" 
        id="user-name" 
        rules="required|min:2"
        class="p-4 rounded-2 form-input" 
        :class="{ 'border border-red-600': errors['姓名'] }"
        placeholder="請輸入姓名" 
        v-model="editUserData.name"
      />
      <ErrorMessage class="text-red-600" name="姓名"/>
    </div>

    <div class="flex flex-col gap-2">
      <label for="user-phone" class="font-bold">手機號碼</label>
      <VField 
        name="手機號碼"
        type="phone" 
        id="user-phone" 
        rules="required|numeric|min:10|mobile"
        class="p-4 rounded-2 form-input" 
        :class="{ 'border border-red-600': errors['手機號碼'] }"
        placeholder="請輸入手機號碼" 
        v-model="editUserData.phone"
      />
      <ErrorMessage class="text-red-600" name="手機號碼"/>
    </div>

    <DateSelect/>
    <CitySelect/>
    
    <VField 
      name="詳細地址"
      type="text" 
      rules="required"
      v-model="detailedAddress" 
      class="form-input mt-1 block w-full" 
      :class="{ 'border border-red-600': errors['詳細地址'] }"
      placeholder="請輸入詳細地址"
    />
    <ErrorMessage class="text-red-600" name="詳細地址"/>

  </div>

  <div v-if="showEditUserInfo">
    <button type="submit" class="btn bg-neutral-40 text-neutral-60 w-full lg:w-fit mt-3">
      儲存設定
    </button>
          </div>
</VForm>


</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import DateSelect from '@/components/widgets/DateSelect.vue'
import CitySelect from '@/components/widgets/CitySelect.vue'
import { storeToRefs } from'pinia' 
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const { userInfo, editUserData, detailedAddress, showEditUserInfo } = storeToRefs(userStore)
const editUserInfo = userStore.editUserInfo

onMounted (() => {
  console.log('userInfo',userInfo.value)
  editUserData.value.userId = userInfo.value._id
  editUserData.value.name = userInfo.value.name
  editUserData.value.phone = userInfo.value.phone
  editUserData.value.birthday = userInfo.value.birthday
  editUserData.value.address = userInfo.value.address
  console.log(editUserData.value) 
})
</script>