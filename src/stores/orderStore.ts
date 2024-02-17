import { ref, computed } from 'vue';
import { defineStore } from "pinia";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
const { VITE_URL } = import.meta.env;

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
  const defaultOrder = {
    "checkInDate": "",
    "checkOutDate": "",
    "peopleNum": 0,
    "roomId": "",
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
  const tempOrder = ref<TempOrder>({ ...defaultOrder })
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
      const url = `${VITE_URL}/api/v1/orders/`
      const res = await axios.post(url, orderForm)
      // console.log('createOrder 新增成功', res)
      isLoading.value = false
      cleanStorageData()
      router.push(`/booking-complete/${res.data.result._id}`)
      resetTempOrder()
      Toast.fire({
        title: '已建立訂單',
        icon: 'success'
      })
    } catch (err) {
      // console.log('createOrder 失敗', err)
      isLoading.value = false
      Alert.fire({
        title: '請填寫正確格式',
        icon: 'error'
      })
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
      // console.log('getFrontOrder 取得資料', order.value)
      const url = `${VITE_URL}/api/v1/orders/${route.params.id}`
      const res = await axios.get(url)
      order.value = res.data.result
    } catch (err) {
      // console.log('getFrontOrder 失敗', err)
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
      const url = `${VITE_URL}/api/v1/orders/`
      const res = await axios.get(url)
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
  const deleteFrontOrder = (id: string) => {
    const url = `${VITE_URL}/api/v1/orders/${id}`
    axios.delete(url)
      .then(() => {
        // console.log('deleteFrontOrder 成功刪除',res)
        getFrontOrders()
        Toast.fire({
          icon: 'success',
          title: '成功刪除訂單'
        })
      })
      .catch(() => {
        // console.log('deleteFrontOrder 失敗',err)
        Alert.fire({
          icon: 'error',
          title: '請重新再試一次'
        })
      })
  }



  /**
   * 後台-取得訂單列表
   */
  const getOrders = () => {
    const url = `${VITE_URL}/api/v1/admin/orders/`
    axios.get(url)
      .then(res => {
        console.log('getOrder 訂單列表', res)
        orderList.value = res.data.result
      })
      .catch(err => {
        console.log(err)
      })
  }

  /**
   * 後台-編輯訂單
   * 
   * @param id 訂單詳細資料
   */
  const editOrder = (id:Object) => {
    const url = `${VITE_URL}/api/v1/admin/orders/${route.params.id}`
    axios.put(url, id)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  /**
   * 後台-刪除單一訂單
   * 
   * @param id 訂單order._id
   */
  const deleteOrder = (id: string) => {
    const url = `${VITE_URL}/api/v1/admin/orders/${id}`
    axios.delete(url)
      .then(res => {
        console.log('刪除成功', res)
        getOrders()
      })
      .catch(err => {
        console.log(err)
      })
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

  return {
    bookingDate,
    peopleNum,
    userInfo,
    selectDistrict,
    addressDetail,
    tempOrder,
    isLoading,

    // frontend
    createOrder,
    orderList,
    getFrontOrder,
    order,
    getFrontOrders,
    totalPrice,
    deleteFrontOrder,
    resetTempOrder,

    // admin
    getOrders,
    editOrder,
    deleteOrder,

    // localStorage
    setStoragePeople,
    getStorageData,
    cleanStorageData,
  }
})
