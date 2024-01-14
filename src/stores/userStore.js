import { defineStore } from "pinia"
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const { VITE_URL } = import.meta.env
import { Toast, Alert } from '@/mixins/swal'

export const useUserStore = defineStore('userStore', () => {
  const router = useRouter()

  // login
  const loginData = ref({
    "email": "",
    "password": "",
  })
  const userInfo = ref({})
  const login = () => {
    console.log(loginData.value)
    const url = `${VITE_URL}/api/v1/user/login`
    axios.post(url, loginData.value)
      .then(res => {
        console.log(res)
        const { token } = res.data
        document.cookie = `typescript=${token}`;
        axios.defaults.headers.common['Authorization'] = token;
        userInfo.value = res.data.result
        loginData.value = {
          "email": "",
          "password": "",
        }
        console.log(userInfo.value)
        Toast.fire({
          icon: 'success',
          title: '登入成功'
        })
        router.push('/')

      })
      .catch(err => {
        console.log(err)
        // alert(err.response.data.message)
        Alert.fire({
          icon: 'error',
          title: '登入失敗'
        })
      })
  }

  // signup
  const signupStep = ref(1)
  const signupData = ref({
    "name": "",
    "email": "",
    "password": "",
    "phone": "",
    "birthday": "1900/01/01",
    "address": {
      "zipcode": 802,
      "detail": "456",
    }
  })
  const passwordConfirm = ref("")
  const signup = () => {
    console.log(signupData.value)
    const url = `${VITE_URL}/api/v1/user/signup`
    axios.post(url, signupData.value)
      .then(res => {
        console.log(res)
        signupData.value = {
          "name": "",
          "email": "",
          "password": "",
          "phone": "",
          "birthday": "",
          "address": {
            "zipcode": 0,
            "detail": "",
          }
        }
        alert('註冊成功')
        router.push('/login')
      })
      .catch(err => {
        console.log(err)
        alert(err.response.data.message)
      })
  }
  return {
    // login
    loginData,
    login,
    // signup
    signupData,
    signupStep,
    passwordConfirm,
    signup,

  }
})