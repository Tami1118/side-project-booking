<script setup lang="ts">
import { storeToRefs } from'pinia' 
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const { userInfo, editUserData, newPassword2, showEditPassword } = storeToRefs(userStore)
const editUserPass = userStore.editUserPass

const handleData = () => {
  editUserData.value.userId = userInfo.value._id
  editUserData.value.name = userInfo.value.name
  editUserData.value.phone = userInfo.value.phone
  editUserData.value.birthday = userInfo.value.birthday
  editUserData.value.address = userInfo.value.address
  // console.log(editUserData.value) 
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <div>
      <p class="font-500 mb-2 text-neutral-80">電子信箱</p>
      <p class="font-bold">{{ userInfo.email }}</p>
    </div>

    <div class="flex" :class="{'hidden': showEditPassword }">
      <div class="grow">
        <p class="font-500 mb-2 text-neutral-80">密碼</p>
        <input type="password" class="block font-bold" value="12345678">
      </div>
      <button 
        class="text-primary-100 underline" 
        :class="{'hidden': showEditPassword}" 
        @click="showEditPassword = true , handleData()" >
        重設
      </button>
    </div>

    <div :class="{'hidden': !showEditPassword}">
      <label for="oldPassword" class="mb-2 text-neutral-80 font-bold">舊密碼</label>
      <input 
        type="password" 
        id="oldPassword" 
        class="form-input" 
        placeholder="請輸入舊密碼"
        v-model="editUserData.oldPassword" >
    </div>

    <div :class="{'hidden': !showEditPassword}">
      <label for="newPassword" class="mb-2 text-neutral-80 font-bold">新密碼</label>
      <input 
        type="password" 
        id="newPassword" 
        class="form-input" 
        placeholder="請輸入新密碼"
        v-model="editUserData.newPassword" >
    </div>

    <div :class="{'hidden': !showEditPassword}">
      <label for="checkNewPassword" class="mb-2 text-neutral-80 font-bold">確認新密碼</label>
      <input 
        type="password" 
        id="checkNewPassword" 
        class="form-input" 
        placeholder="請再輸入一次新密碼"
        v-model="newPassword2" >
    </div>
  </div>

  <div :class="{'hidden': !showEditPassword}">
    <button 
      class="btn bg-neutral-40 text-neutral-60 w-full lg:w-fit"
      @click="editUserPass()" >
      儲存設定
    </button>
  </div>
</template>
