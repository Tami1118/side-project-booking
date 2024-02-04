import { ref, computed } from 'vue'
import { defineStore } from "pinia"
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const { VITE_URL } = import.meta.env
import type { Order } from "@/interfaces/order"
import type { User } from "@/interfaces/user"
import { Toast, Alert } from '@/mixins/swal'

import { useModalStore } from "@/stores/modalStore"
import { useDateStore } from "@/stores/dateStore"

export const useOrderStore = defineStore('order', () => {
  const route = useRoute()
  const router = useRouter()
  const modalStore = useModalStore()
  const dateStore = useDateStore()

  const showOrderModal = ref<boolean>(false)

  const defaultOrder = {
    "roomId": "",
    "checkInDate": "",
    "checkOutDate": "",
    "peopleNum": 0,
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
  // 前台-訂單格式
  const tempOrder = ref<Order>({ ...defaultOrder })
  const resetTempOrder = () => {
    tempOrder.value = { ...defaultOrder }
  }
  const userInfo = ref<User>({})
  const selectDistrict = ref<string>("")
  const addressDetail = ref<string>("")

  // 前台- 新增訂單
  const createOrder = () => {
    const orderForm = {
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
    tempOrder.value = orderForm
    console.log(tempOrder.value)

    // const url = `${VITE_URL}/api/v1/orders/`
    // axios.post(url, tempOrder.value)
    //   .then(res => {
    //     console.log('createOrder 新增成功', res)
    //     resetTempOrder()
    //     Toast.fire({
    //       title: '已建立訂單',
    //       icon: 'success'
    //     })
    //     resetTempOrder()
    //     router.push(`/booking-complete/${res.data.result._id}`)
    //   })
    //   .catch(err => {
    //     console.log('createOrder 失敗', err)
    //     Alert.fire({
    //       title: '資料有誤，請稍後再試一次',
    //       icon: 'error'
    //     })
    //   })
  }

  // 前台- 取得單一訂單
  const order = ref({})
  const getFrontOrder = () => {
    console.log(route.params.id)
    const url = `${VITE_URL}/api/v1/orders/${route.params.id}`
    axios.get(url)
      .then(res => {
        console.log('getFrontOrder 取得單一資料', res)
        order.value = res.data.result
      })
      .catch(err => {
        console.log('getFrontOrder 失敗', err)
      })
  }

  // 前台- 取得所有訂單列表
  const orderList = ref([])
  const getFrontOrders = () => {
    const url = `${VITE_URL}/api/v1/orders/`
    axios.get(url)
      .then(res => {
        console.log(res)
        console.log(res.data.result)
        orderList.value = res.data.result
        console.log('取得所有訂單', orderList.value)
      })
      .catch(err => {
        console.log('getFrontOrders 失敗', err)
      })
  }

  // 前台- 取消訂單
  const deleteFrontOrder = () => {
    const url = `${VITE_URL}/api/v1/order/${route.params.id}`
    axios.delete(url)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }



  // 後台- 取得訂單列表
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

  // 後台- 編輯訂單
  const editOrder = () => {
    const url = `${VITE_URL}/api/v1/admin/orders/${route.params.id}`
    axios.put(url)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // 後台- 刪除單一訂單
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

  return {
    showOrderModal,
    
    tempOrder,
    userInfo,
    selectDistrict,
    addressDetail,

    // 前台
    createOrder,
    orderList,
    getFrontOrder,
    order,
    getFrontOrders,
    deleteFrontOrder,

    // 後台
    getOrders,
    editOrder,
    deleteOrder,
  }
})
