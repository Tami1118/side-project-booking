const { VITE_URL } = import.meta.env
import { ref } from 'vue'
import { defineStore } from "pinia"
import axios from 'axios'

export const useUserStore = defineStore('userStore', () => {
  const checkUser = () => {
    const url = `${VITE_URL}/api/v1/user/check`
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)typescript\s*=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common["Authorization"] = token;
    axios.get(url)
      .then(res => {
        console.log('驗證成功', res)
      })
      .catch(err => {
        console.log('驗證失敗', err)
      })
  }

  const userInfo = ref({})
  const getUser = () => {
    const url = `${VITE_URL}/api/v1/user`
    axios.get(url)
      .then(res => {
        console.log('成功取得資料', res)
        getUserInfo(res.data.result)
        
        // setTimeout(() => {
        //   userInfo.value = res.data.result
        // },2000)
        // userInfo.value = res.data.result
      })
      .catch(err => {
        console.log('取得資料 失敗', err)
      })
  }

  // const userInfo = ref({})
  const getUserInfo = (item) => {
    userInfo.value = item
    console.log('使用者資料', userInfo)
  }

  const test = ref(1)

  return {
    checkUser,
    getUser,
    userInfo,
    getUserInfo,
    test
  }
})