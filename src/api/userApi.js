import axiosInstance from '@/mixins/axios';

// User
export const axiosLoginUser = (loginData) => axiosInstance.post('/user/login', loginData);
export const axiosSignupUser = (signupData) => axiosInstance.post('/user/signup', signupData);
export const axiosForgotPassword = (data) => axiosInstance.post('/user/forgot',data);
export const axiosCheckUser = () => axiosInstance.get('/user/check');
export const axiosGetUser = () => axiosInstance.get('/user');
export const axiosEditUser = (userData) => axiosInstance.put('/user', userData);

// Verify
export const axiosVerifyEmail = (email) => axiosInstance.post('/verify/email', {email});
export const axiosGenerateEmailCode = (email) => axiosInstance.post('/verify/generateEmailCode', {email});