import axios from 'axios';
import { Alert } from '@/mixins/swal';

const VITE_URL = import.meta.env.VITE_URL;

const axiosInstance = axios.create({
  baseURL: `${VITE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)typescript\s*=\s*([^;]*).*$)|^.*$/, '$1');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  Alert.fire({
    icon: 'error',
    title: '操作失败',
    text: error.response?.data.message,
  });
  return Promise.reject(error);
});

export default axiosInstance;
