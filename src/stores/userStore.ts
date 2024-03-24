import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { Toast, Alert, Swal } from '@/mixins/swal';
import { axiosLoginUser, axiosSignupUser, axiosCheckUser, axiosGetUser, axiosEditUser, axiosGenerateEmailCode, axiosForgotPassword, axiosVerifyEmail } from '@/api/userApi';

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
  const loginLoading = ref<boolean>(false);
  const userInfo = ref<UserInfo>({});
  const rememberMe =  ref<boolean>(false);
  const login = async () => {
    loginLoading.value = true;
    try {
      const res = await axiosLoginUser(loginData.value);
      document.cookie = `typescript=${res.data.token}`;
      userInfo.value = res.data.result;
      loginData.value = { email: '', password: '' };
      console.log(userInfo.value)
      Toast.fire({
        icon: 'success',
        title: '登入成功'
      });
      router.push('/');
    } catch (error) {
      console.log('登入失敗', error);
      Alert.fire({
        icon: 'error',
        title: '登入失敗，請檢查您的帳號密碼'
      });
    } finally {
      loginLoading.value = false;
    }
  };

  // logout
  const logout = () => {
    document.cookie = `typescript=`;
    isChecked.value = false;
    Toast.fire({
      icon: 'success',
      title: '已登出'
    })
    router.push('/')
  }

  // signup
  const signupStep = ref<number>(1);
  const signupLoading = ref<boolean>(false);
  const passwordConfirm = ref<string>('');
  const signupName = ref<string>('');
  const signupEmail = ref<string>('');
  const signupPassword = ref<string>('');
  const signupPhone = ref<string>('');
  const birthdate = ref<Birthdate>({
    year: new Date().getFullYear(),
    month: 1,
    day: 1,
  });
  const birthday = computed(() => `${birthdate.value.year}/${birthdate.value.month}/${birthdate.value.day}`);
  const selectedCity = ref<string>('');
  const selectedDistrict = ref<string>('');
  const selectedZip = ref<number>(0);
  const detailedAddress = ref<string>('');
  const address = computed((): Address => ({
    zipcode: selectedZip.value,
    detail: detailedAddress.value,
    city: selectedCity.value,
    county: selectedDistrict.value,
  }) as Address);

  const signupData = computed((): SignupData => ({
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
    phone: signupPhone.value,
    birthday: birthday.value,
    address: address.value,
  }) as SignupData);
  const signup = async () => {
    signupLoading.value = true;
    try {
      await axiosSignupUser(signupData.value);
      Toast.fire({
        icon: 'success',
        title: '註冊成功，請登入'
      });
      resetSignupForm();
      router.push('/login');
    } catch (error) {
      console.log('註冊失敗', error);
      Alert.fire({
        icon: 'error',
        title: '註冊失敗，請檢查您的資料'
      });
    } finally { 
      signupLoading.value = false;
    }
  };
  const resetSignupForm = () => {
    signupStep.value = 1;
    passwordConfirm.value = '';
    detailedAddress.value = '';
    selectedCity.value = '';
    selectedDistrict.value = '';
    selectedZip.value = 0;
    birthdate.value = {
      year: new Date().getFullYear(),
      month: 1,
      day: 1,
    };
  };
  
  // check
  const isChecked = ref<boolean>(false);
  const checkUser = async () => {
    try {
      const res = await axiosCheckUser();
      isChecked.value = res.data.status;
      console.log('checkUser 驗證成功', isChecked.value);
    } catch (error) {
      isChecked.value = false;
      console.log('checkUser 驗證失敗', isChecked.value);
    }
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
  const getUser = async () => {
    const res = await axiosGetUser();
    userInfo.value = res.data.result;
  }
  const editUserPass = async () => {
    if (editUserData.value.newPassword !== newPassword2.value) {
      alert("密碼不一致");
      return;
    }
    try {
      const res = await axiosEditUser(editUserData.value);
      console.log('修改資料 成功', res);
      userInfo.value = res.data.result; 
      showEditPassword.value = false;
      Toast.fire({
        icon: 'success',
        title: '修改資料成功',
      });
      editUserData.value = {
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
      };
      newPassword2.value = "";
    } catch (err) {
      console.log('修改密码失败', err);
      Alert.fire({
        icon: 'error',
        title: '修改資料失敗'
      });
    }
  };
  const editUserInfo = async () => {
    const userData = {
      userId: editUserData.value.userId,
      name: editUserData.value.name,
      phone: editUserData.value.phone,
      birthday: `${birthdate.value.year}/${birthdate.value.month}/${birthdate.value.day}`,
      address: {
        zipcode: selectedZip.value,
        detail: `${selectedCity.value}${selectedDistrict.value}${detailedAddress.value}`,
      },
    };
  
    try {
      const res = await axiosEditUser(userData);
      console.log('修改資料成功', res);
      userInfo.value = res.data.result;
      showEditUserInfo.value = false;
      Toast.fire({
        icon: 'success',
        title: '修改資料成功',
      });
    } catch (err) {
      console.log('修改資料失敗', err);
      Alert.fire({
        icon: 'error',
        title: '修改資料失敗',
      });
    }
  };

  // forgot
  const verifyEmail = async () => {
      Swal.fire({
        title: "請輸入您的Email",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
      },
      confirmButtonText: "送出",
      showLoaderOnConfirm: true,
      preConfirm: async (email: string) => {
        console.log(email)
        const res = await axiosVerifyEmail(email)
       if(res.data.result.isEmailExists) {
        generateEmailCode(email)
       } else {
        Swal.fire({
          title: "Email不存在",
          text: "請確認Email",
          icon: "error"
        })
       }
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  }
  const generateEmailCode = async (email: string) => {
    try {
      const res = await axiosGenerateEmailCode(email);
      console.log('已將驗證信發送到您的信箱', res)
      Swal.fire({
        title: "已將驗證信發送到您的信箱",
        text: "請設定新密碼",
        icon: "success",
        preConfirm: () => {
          Swal.fire({
            title: "請輸入新密碼及驗證碼",
            html: `
            <label for="swal-input1">請輸入驗證碼</label>
            <input id="swal-input1" class="swal2-input">
            <label for="swal-input2">請輸入新密碼</label>
            <input id="swal-input2" class="swal2-input" type="password">
          `,
            inputAttributes: {
              autocapitalize: "off"
            },
            confirmButtonText: "送出",
            showLoaderOnConfirm: true,
            preConfirm: () => {
              const code = document.getElementById("swal-input1") as HTMLInputElement
              const newPassword = document.getElementById("swal-input2") as HTMLInputElement
              console.log(newPassword.value, code.value)

            },
            allowOutsideClick: () => !Swal.isLoading()
          })
        }
      })
    } catch (error) {
      console.log('generateEmailCode 失敗', error)
      Swal.fire({
        title: "發送驗證碼失敗",
        // text: "",
        icon: "error"
      })
    }
  }



  const forgotPassword = async () => {
    try {
      await forgotPassword();
      Toast.fire({
        icon: 'success',
        title: '重置密碼郵件已發送，請檢查您的郵箱。'
      });
    } catch (error) {
      //
    }
  }

  return {
    // login
    loginLoading,
    loginData,
    userInfo,
    rememberMe,
    login,
    logout,

    // signup
    signupLoading,
    signupName,
    signupEmail,
    signupPassword,
    passwordConfirm,
    signupPhone,
    signupData,
    signupStep,
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

    // forgot
    verifyEmail,
    forgotPassword,
  }
})