const { VITE_URL } = import.meta.env
import { ref } from 'vue'
import { defineStore } from "pinia"
import { useRouter } from 'vue-router'
import axios from 'axios'
import { Toast, Alert } from '@/mixins/swal'

export const useUserStore = defineStore('userStore', () => {
  const router = useRouter()

  // login
  const loginData = ref({
    email: "",
    password: "",
  })
  const userInfo = ref({})
  const login = () => {
    // console.log(loginData.value)
    const url = `${VITE_URL}/api/v1/user/login`
    axios.post(url, loginData.value)
      .then(res => {
        console.log('login 成功',res)
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
        console.log('login 失敗',err)
        // console.log(err.response.data.message)
        Alert.fire({
          icon: 'error',
          title: '登入失敗'
        })
      })
  }
  // logout
  const logout = () => {
    document.cookie = `typescript=""`
    router.push('/')
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
  const birthdate = ref({
    year: new Date().getFullYear(),
    month: 1,
    day: 1
  });
  const selectedCity = ref(null)
  const selectedDistrict = ref(null)
  const selectedZip = ref(null)
  const detailedAddress = ref("")
  const signup = () => {

    signupData.value.address.zipcode = selectedZip.value
    signupData.value.address.detail = `${selectedCity.value}${selectedDistrict.value}${detailedAddress.value}`
    signupData.value.birthday = `${birthdate.value.year}/${birthdate.value.month}/${birthdate.value.day}`
    console.log(signupData.value.address, signupData.value.birthday)
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
        router.push('/')
      })
      .catch(err => {
        console.log(err)
        alert(err.response.data.message)
      })
  }
  // check
  const isChecked = ref(false)
  const checkUser = async () => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)typescript\s*=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common["Authorization"] = token;
    const url = `${VITE_URL}/api/v1/user/check`
    axios.get(url)
      .then(res => {
        console.log('checkUser 驗證成功', res)
        isChecked.value = true
      })
      .catch(err => {
        console.log('checkUser 驗證失敗', err)
      })
  }
  // edit
  const editUserData = ref({
    userId: "",
    name: "",
    phone: "",
    birthday: "",
    address: {
      zipcode: 0,
      detail: ""
    },
    oldPassword: "",
    newPassword: ""
  })
  const newPassword2 = ref("");
  const showEditPassword = ref(false);
  const showEditUserInfo = ref(false);
  const getUser = () => {
    const url = `${VITE_URL}/api/v1/user`
    axios.get(url)
      .then(res => {
        console.log('getUser 成功', res)
        userInfo.value = res.data.result
      })
      .catch(err => {
        console.log('getUser 失敗', err)
        userInfo.value.state = false
      })
  }
  const editUserPass = () => {
    if (editUserData.value.newPassword !== newPassword2.value) {
      alert("密碼不一致");
      return;
    }
    const url = `${VITE_URL}/api/v1/user`
    axios.put(url, editUserData.value)
      .then(res => {
        console.log('修改資料 成功',res)
        userInfo.value = res.data.result
        showEditPassword.value = false
        Toast.fire({
          icon: 'success',
          title: '修改資料成功'
        })

      })
      .catch(err => {
        console.log('login 失敗',err)
        Alert.fire({
          icon: 'error',
          title: '修改資料失敗'
        })
      })
  }
  const editUserInfo = () => {
    const url = `${VITE_URL}/api/v1/user`
    axios.put(url, editUserData.value)
      .then(res => {
        console.log('修改資料 成功',res)
        userInfo.value = res.data.result
        showEditPassword.value = false
        Toast.fire({
          icon: 'success',
          title: '修改資料成功'
        })

      })
      .catch(err => {
        console.log('login 失敗',err)
        Alert.fire({
          icon: 'error',
          title: '修改資料失敗'
        })
      })
  }

  return {
    // login
    loginData,
    userInfo,
    login,
    logout,

    // signup
    signupData,
    signupStep,
    passwordConfirm,
    birthdate,
    selectedCity,
    detailedAddress,
    selectedDistrict,
    selectedZip,
    signup,

    // check
    isChecked,
    checkUser,

    // edit
    editUserData,
    newPassword2,
    showEditPassword,
    showEditUserInfo,
    getUser,
    editUserPass,
    editUserInfo,
  }
})