const { VITE_URL } = import.meta.env
import { ref } from 'vue'
import { defineStore } from "pinia"
import { useRouter } from 'vue-router'
import axios from 'axios'

// 預計合併至 userStore
export const useUserStore = defineStore('userStore', () => {
  const router = useRouter()

  // 驗證使用者身份
  const checkUser = () => {
    const url = `${VITE_URL}/api/v1/user/check`
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)typescript\s*=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common["Authorization"] = token;
    axios.get(url)
      .then(res => {
        console.log('checkUser 驗證成功', res)
      })
      .catch(err => {
        console.log('checkUser 驗證失敗', err)
      })
  }

  // 取得使用者資料
  const getUser = () => {
    const url = `${VITE_URL}/api/v1/user`
    axios.get(url)
      .then(res => {
        console.log('成功取得資料', res)
        getUserInfo(res.data.result)
      })
      .catch(err => {
        console.log('取得資料 失敗', err)
        userInfo.value.state = false
      })
  }
  const userInfo = ref({})
  const getUserInfo = (item) => {
    userInfo.value = item
  }

  //* 使用者登出
  const logout = () => {
    document.cookie = `typescript=""`
    router.push('/')
  }

  return {
    checkUser,
    getUser,
    userInfo,
    getUserInfo,
    logout,
  }
})