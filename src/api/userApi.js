// (裡面有axios的流程圖)https://mini-ghost.dev/posts/axios-source-code-1/
import axios from 'axios';
import { Alert } from '@/mixins/swal';

// ------- 從 mixin 先拿過來 方便閱讀
// ------- 未來如果要拆成 userApi.js 跟 adminApi.js 再拉出去也可以
export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json', // 告訴後端我們傳送的資料是 json 格式, 但axios會將物件自動轉換成json才送出所以沒差
  },
});

console.log(axiosInstance.interceptors) // 可以觀察裡面的東西

// interceptors(攔截器) 目的是在發送請求前將 token 加入 headers 
axiosInstance.interceptors.request.use((config) => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)typescript\s*=\s*([^;]*).*$)|^.*$/, '$1');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 在響應傳遞到 then() 或 catch() 之前攔截，原本想將錯誤訊息統一處理，但是通用性不足，先註解掉，之後應該會拿掉
axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  // Alert.fire({
  //   icon: 'error',
  //   title: '操作失败',
  //   text: error.response?.data.message,
  // });
  return Promise.reject(error);
});
// --------------------------------------------------------------------




// Api 整理在這裡
// User
export const axiosLoginUser = (loginData) => axiosInstance.post('/user/login', loginData);
export const axiosSignupUser = (signupData) => axiosInstance.post('/user/signup', signupData);
export const axiosForgotPassword = (data) => axiosInstance.post('/user/forgot', data);
export const axiosCheckUser = () => axiosInstance.get('/user/check');
export const axiosGetUser = () => axiosInstance.get('/user');
export const axiosEditUser = (userData) => axiosInstance.put('/user', userData);

// Verify
export const axiosVerifyEmail = (email) => axiosInstance.post('/verify/email', { email });
export const axiosGenerateEmailCode = (email) => axiosInstance.post('/verify/generateEmailCode', { email });

// News(已修正 待整理)

// Culinary

// Rooms(已修正 待整理)
export const axiosGetRooms = () => axiosInstance.get('/room')

// Orders(已修正 待整理)

// Admin/News(已修正 待整理)

// Admin/Culinary

// Admin/Rooms(已修正 待整理)

// Admin/Orders(已修正 待整理)