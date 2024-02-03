import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { Toast, Alert } from '@/mixins/swal';

const VITE_URL = import.meta.env.VITE_URL as string;

interface LoginData {
  email: string;
  password: string;
}
interface UserInfo {
  [key: string]: any;
}
interface SignupData {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  address: Address;
}
interface Address {
  zipcode: number;
  detail: string;
  city: string;
  county: string;
}
interface Birthdate {
  year: number;
  month: number;
  day: number;
}
interface EditUserData {
  userId: string;
  name: string;
  phone: string;
  birthday: string;
  address: {
    zipcode: number;
    detail: string;
  };
  oldPassword: string;
  newPassword: string;
}

export const useUserStore = defineStore('userStore', () => {
  const router = useRouter()

  // login
  const loginData = ref<LoginData>({ email: '', password: '' });
  const userInfo = ref<UserInfo>({});
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
    userStatus.value = false
    router.push('/')
  }
  // signup
  const signupStep = ref<number>(1);
  const signupData = ref<SignupData>({
    name: '',
    email: '',
    password: '',
    phone: '',
    birthday: '',
    address: {
      zipcode: 0,
      detail: '',
      city: '',
      county: '',
    },
  });
  const passwordConfirm = ref<string>('');
  const birthdate = ref<Birthdate>({
    year: new Date().getFullYear(),
    month: 1,
    day: 1,
  });
  const selectedCity = ref<string>('');
  const selectedDistrict = ref<string>('');
  const selectedZip = ref<number>(0);
  const detailedAddress = ref<string>('');
  const signup = () => {
    signupData.value.address.zipcode = selectedZip.value
    signupData.value.address.city = selectedCity.value
    signupData.value.address.county = selectedDistrict.value
    signupData.value.address.detail = detailedAddress.value
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
            "city": "",
            "county": "",
          }
        }
        router.push('/')
      })
      .catch(err => {
        console.log(err)
        alert(err.response.data.message)
      })
  }
  // check
  const isChecked = ref<boolean>(false);
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
  const editUserData = ref<EditUserData>({
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
  });
  const newPassword2 = ref<string>('');
  const showEditPassword = ref<boolean>(false);
  const showEditUserInfo = ref<boolean>(false);
  const userStatus = ref<boolean>(false);
  const getUser = () => {
    const url = `${VITE_URL}/api/v1/user`
    axios.get(url)
      .then(res => {
        console.log('getUser 成功', res)
        userInfo.value = res.data.result
        userStatus.value = res.data.status
      })
      .catch(err => {
        console.log('getUser 失敗', err)
        
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
          title: '修改資料成功',
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
    const editUserDataNoPass = {
      userId: "",
      name: "",
      phone: "",
      birthday: "",
      address: {
        zipcode: 0,
        detail: "",
      }
    }
    editUserDataNoPass.userId = editUserData.value.userId
    editUserDataNoPass.name = editUserData.value.name
    editUserDataNoPass.phone = editUserData.value.phone
    editUserDataNoPass.birthday = `${birthdate.value.year}/${birthdate.value.month}/${birthdate.value.day}`
    editUserDataNoPass.address.zipcode = selectedZip.value
    editUserDataNoPass.address.detail = `${selectedCity.value}${selectedDistrict.value}${detailedAddress.value}`
    console.log(editUserDataNoPass)
    const url = `${VITE_URL}/api/v1/user`
    axios.put(url, editUserDataNoPass)
      .then(res => {
        console.log('修改資料 成功',res)
        userInfo.value = res.data.result
        showEditUserInfo.value = false
        Toast.fire({
          icon: 'success',
          title: '修改資料成功'
        })

      })
      .catch(err => {
        console.log('修改資料失敗',err)
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
    userStatus,
    getUser,
    editUserPass,
    editUserInfo,
  }
})