import { ref, computed } from 'vue';
import { defineStore } from "pinia";
// import axios from 'axios'; // 之後可以拿掉
import { axiosInstance } from '@/api/userApi';
import { useRoute, useRouter } from "vue-router";

import format from "@/mixins/format";
import { Toast, Alert } from "@/mixins/swal";
import type { Order, TempOrder, CheckDate } from "@/interfaces/order";

interface User {
  name: string,
  phone: string,
  email: string,
}


export const useOrderStore = defineStore('order', () => {
  const route = useRoute()
  const router = useRouter()
  const editOrderId = ref('')
  const defaultOrder = {
    "checkInDate": "",
    "checkOutDate": "",
    "peopleNum": 0,
    "roomId": {
      "name": "",
      "description": "",
      "imageUrl": "",
      "imageUrlList": [],
      "areaInfo": "",
      "bedInfo": "",
      "maxPeople": 0,
      "price": 0,
      "facilityInfo": [
        {
          "title": "平面電視",
          "isProvide": true,
        },
        {
          "title": "吹風機",
          "isProvide": true,
        },
        {
          "title": "冰箱",
          "isProvide": true,
        },
        {
          "title": "熱水壺",
          "isProvide": true,
        },
        {
          "title": "檯燈",
          "isProvide": true,
        },
        {
          "title": "衣櫃",
          "isProvide": true,
        },
        {
          "title": "除濕機",
          "isProvide": true,
        },
        {
          "title": "浴缸",
          "isProvide": true,
        },
        {
          "title": "書桌",
          "isProvide": true,
        },
        {
          "title": "音響",
          "isProvide": true,
        },
      ],
      "amenityInfo": [
        {
          "title": "衛生紙",
          "isProvide": true,
        },
        {
          "title": "拖鞋",
          "isProvide": true,
        },
        {
          "title": "沐浴用品",
          "isProvide": true,
        },
        {
          "title": "清潔用品",
          "isProvide": true,
        },
        {
          "title": "刮鬍刀",
          "isProvide": true,
        },
        {
          "title": "吊衣架",
          "isProvide": true,
        },
        {
          "title": "浴巾",
          "isProvide": true,
        },
        {
          "title": "刷牙用品",
          "isProvide": true,
        },
        {
          "title": "罐裝水",
          "isProvide": true,
        },
        {
          "title": "梳子",
          "isProvide": true,
        },
      ],
    },
    "userInfo": {
      "name": "",
      "phone": "",
      "email": "",
      "address": {
        "zipcode": 0,
        "detail": ""
      },
    }
  }

  // 前台-tempOrder格式
  const tempOrder = ref({ ...defaultOrder })
  const bookingDate = ref<CheckDate>({ start: '', end: '' })
  const peopleNum = ref<number>(2)
  const userInfo = ref<User>({ name: '', phone: '', email: '' })
  const selectDistrict = ref<string>("")
  const addressDetail = ref<string>("")
  const isLoading = ref<boolean>(false)

  /**
   * 前台-新增訂單
   * 
   * @param orderForm 訂單資料
   */
  const createOrder = async () => {
    const orderForm = {
      checkInDate: format.getLocalDateFormat(new Date(bookingDate.value.start)),
      checkOutDate: format.getLocalDateFormat(new Date(bookingDate.value.end)),
      peopleNum: peopleNum.value,
      roomId: route.params.id,
      userInfo: {
        name: userInfo.value.name,
        phone: userInfo.value.phone,
        email: userInfo.value.email,
        address: {
          zipcode: parseInt(selectDistrict.value),
          detail: addressDetail.value
        }
      }
    }
    try {
      isLoading.value = true
      // const url = `/orders/`
      // const res = await axios.post(url, orderForm)
      const res = await axiosInstance.post('/orders/', orderForm) // 新的
      console.log('createOrder 新增成功', res)
      // isLoading.value = false // 改放在finally可以只寫一次
      cleanStorageData()
      router.push(`/booking-complete/${res.data.result._id}`)
      resetTempOrder()
      Toast.fire({
        title: '已建立訂單',
        icon: 'success'
      })
    } catch (err) {
      console.log('createOrder 失敗', err)
      // isLoading.value = false
      Alert.fire({
        title: '請填寫正確格式',
        icon: 'error'
      })
    } finally {
      isLoading.value = false
    }
  }

  /**
   * 清空格式
   */
  const resetTempOrder = () => {
    bookingDate.value = {
      start: '',
      end: ''
    };
    peopleNum.value = 2;
    userInfo.value = { name: '', phone: '', email: '' };
    selectDistrict.value = "";
    addressDetail.value = "";
  }

  /**
   * 前台-取得單一訂單
   */
  const order = ref<null | Order>(null)
  const getFrontOrder = async () => {
    try {
      console.log('getFrontOrder 取得資料', order.value)
      // const url = `/orders/${route.params.id}`
      // const res = await axios.get(url)
      const res = await axiosInstance.get(`/orders/${route.params.id}`)
      order.value = res.data.result
    } catch (err) {
      console.log('getFrontOrder 失敗', err)
    }
  }

  /**
   * 計算總額
   */
  const totalPrice = computed<number>(() => {
    if (order.value) {
      return format.getNightNum(order.value.checkInDate, order.value.checkOutDate) * order.value.roomId.price
    } else {
      return 0
    }
  })

  /**
   * 前台-取得所有訂單列表
   */
  const orderList = ref<Order[]>([])
  const getFrontOrders = async () => {
    try {
      // const url = `/orders/`
      // const res = await axios.get(url)
      const res = await axiosInstance.get('/orders/')
      orderList.value = res.data.result
      // console.log('getFrontOrders 取得所有訂單', orderList.value)
    } catch (err) {
      // console.log('getFrontOrders 失敗', err)
    }
  }

  /**
   * 前台-取消訂單
   * 
   * @param id 訂單order._id
   */
  const deleteFrontOrder = async(id: string) => {
    try {
      await axiosInstance.delete(`/orders/${id}`)
      getFrontOrders()
      Toast.fire({
        icon: 'success',
        title: '成功刪除訂單'
      })      
    } catch (err) { 
      console.log('deleteFrontOrder 失敗',err)
      Alert.fire({
        icon: 'error',
        title: '請重新再試一次'
      })
    }
    // const url = `/orders/${id}`
    // axios.delete(url)
    //   .then(() => {
    //     // console.log('deleteFrontOrder 成功刪除',res)
    //     getFrontOrders()
    //     Toast.fire({
    //       icon: 'success',
    //       title: '成功刪除訂單'
    //     })
    //   })
    //   .catch(() => {
    //     // console.log('deleteFrontOrder 失敗',err)
    //     Alert.fire({
    //       icon: 'error',
    //       title: '請重新再試一次'
    //     })
    //   })
  }



  /**
   * 後台-取得訂單列表
   */
  const getOrders = async() => {
    try { 
      const res = await axiosInstance.get('/admin/orders/')
      orderList.value = res.data.result
    } catch (err) { 
      console.log('getOrders 失敗',err)
    }
    // const url = `/admin/orders/`
    // axios.get(url)
    //   .then(res => {
    //     console.log('getOrder 訂單列表', res)
    //     orderList.value = res.data.result
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }

  /**
   * 後台-編輯訂單
   * 
   * @param id 訂單詳細資料
   */
  const editOrder = async() => {
    try {
      await axiosInstance.put(`/admin/orders/${editOrderId.value}`, tempOrder.value)
      Toast.fire({
        icon: 'success',
        title: '更新訂單成功',
      })
      getOrders()
    } catch (err) { 
      console.log('editOrder 失敗',err)
      Alert.fire({
        icon: 'error',
        title: '更新失敗，請稍後再試一次',
      })
    }
    // const url = `/admin/orders/${editOrderId.value}`
    // axios.put(url, tempOrder.value)
    //   .then(res => {
    //     console.log('editOrder 更新成功',res)
    //     Toast.fire({
    //       icon: 'success',
    //       title: '更新訂單成功',
    //     })
    //     getOrders()
    //   })
    //   .catch(err => {
    //     console.log('editOrder 失敗',err)
    //     Alert.fire({
    //       icon: 'error',
    //       title: '更新失敗，請稍後再試一次',
    //     })
    //   })
  }

  /**
   * 後台-刪除單一訂單
   * 
   * @param id 訂單order._id
   */
  const deleteOrder = async() => {
    try {
      await axiosInstance.delete(`/admin/orders/${editOrderId.value}`)
      Toast.fire({
        icon: 'success',
        title: '成功刪除訂單',
      })
      getOrders()
    } catch (err) { 
      console.log('deleteOrder 失敗',err)
      Alert.fire({
        icon: 'error',
        title: '刪除失敗，請稍後再試一次',
      })
    }
    // const url = `/admin/orders/${editOrderId.value}`
    // axios.delete(url)
    //   .then(res => {
    //     console.log('deleteOrder 刪除成功', res)
    //     Toast.fire({
    //       icon: 'success',
    //       title: '成功刪除訂單',
    //     })
    //     getOrders()
    //   })
    //   .catch(err => {
    //     console.log('deleteOrder 失敗',err)
    //     Alert.fire({
    //       icon: 'error',
    //       title: '刪除失敗，請稍後再試一次',
    //     })
    //   })
  }

  /**
   * 本地端儲存日期
   */
  const setStoragePeople = () => {
    localStorage.setItem('storagePeople', peopleNum.value.toString())
  }

  /**
   * 取得本地端reserveDate
   */
  const getStorageData = () => {
    const getDate: any = localStorage.getItem('storageDate')
    const date = JSON.parse(getDate)
    const people = localStorage.getItem('storagePeople')
    // console.log(date, people)
    if (date && people) {
      bookingDate.value = date
      peopleNum.value = Number(people)
    }
    // console.log(bookingDate.value, peopleNum.value)
  }

  /**
   * 刪除本地端所有資料
   */
  const cleanStorageData = () => {
    localStorage.clear()
  }

  // 開啟/關閉 modal
  const showOrderModal = ref<boolean>(false)
  const openOrderModal = () => {
    showOrderModal.value = true;
  }
  const closeOrderModal = () => {
    showOrderModal.value = false
    resetTempOrder()
  }
  const toggleModal = () => {
    showOrderModal.value = !showOrderModal.value
  }

  const showDelModal = ref<boolean>(false)
  const openOrderDelModal = () => {
    showDelModal.value = true
  }
  const closeOrderDelModal = () => {
    showDelModal.value = false
    resetTempOrder()
  }

  return {
    tempOrder,
    resetTempOrder,

    editOrderId,
    bookingDate,
    peopleNum,
    userInfo,
    selectDistrict,
    addressDetail,
    isLoading,

    // frontend
    orderList,
    getFrontOrder,
    createOrder,
    order,
    getFrontOrders,
    totalPrice,
    deleteFrontOrder,

    // admin
    getOrders,
    editOrder,
    deleteOrder,

    // localStorage
    setStoragePeople,
    getStorageData,
    cleanStorageData,

    // modal
    showOrderModal,
    openOrderModal,
    closeOrderModal,
    toggleModal,
    showDelModal,
    openOrderDelModal,
    closeOrderDelModal,
  }
})
