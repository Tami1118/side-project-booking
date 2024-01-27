<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <label for="user-name" class="font-bold">姓名</label>
      <input 
        type="text"  
        id="user-name" 
        class="p-4 rounded-2" 
        placeholder="請輸入姓名"
        v-model="userInfo.name"
      >
    </div>
    <div class="flex flex-col gap-2">
      <label for="user-phone" class="font-bold">手機號碼</label>
      <input 
        type="phone"  
        id="user-phone" 
        class="p-4 rounded-2" 
        placeholder="請輸入手機號碼"
        v-model="userInfo.phone"
      >
    </div>
    <DateSelect/>
    <CitySelect/>
  </div>
</template>

<script setup>
import DateSelect from '@/components/widgets/DateSelect.vue'
import CitySelect from '@/components/widgets/CitySelect.vue'
import { storeToRefs } from'pinia' 
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const { userInfo, editUserData  } = storeToRefs(userStore)

</script>