import { defineStore } from "pinia"
import { ref } from 'vue'
const { VITE_URL } = import.meta.env
import axios from 'axios'
// import { Toast, Alert } from '@/mixins/swal'
// import { useRoute } from 'vue-router'


export const useOrderStore = defineStore('order', () => {
  // const route = useRoute()


  // admin
  const orderList = ref([])
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

  const tempOrder = ref(
    {
      "roomId": "",
      "checkInDate": "",
      "checkOutDate": "",
      "peopleNum": 0,
      "userInfo": {
        "address": {
          "zipcode": 0,
          "detail": ""
        },
        "name": "",
        "phone": "",
        "email": ""
      }
    }
  )
  const editOrder = () => {
    // const url = `${VITE_URL}/api/v1/admin/orders/${route.params.id}`
    const url = `${VITE_URL}/api/v1/admin/orders/65ac8c5080ae3e636b421c46`
    axios.put(url)
      .then(res => {
        console.log(res)

      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteOrder = (id) => {
    // const url = `${VITE_URL}/api/v1/admin/orders/${route.params.id}`
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

  // front
  const getFrontOrders = () => {
    const url = `${VITE_URL}/api/v1/orders/`
    axios.get(url)
      .then(res => {
        console.log(res)
        console.log(res.data.result)
        orderList.value = res.data.result
        // console.log('取得所有訂單',orderList.value)
      })
      .catch(err => {
        console.log('getFrontOrders 失敗', err)
      })
  }

  const order = ref({})
  const getFrontOrder = () => {
    // const url = `${VITE_URL}/api/v1/order/${route.params.id}`
    const url = `${VITE_URL}/api/v1/orders/65ac8c5080ae3e636b421c46`
    axios.get(url)
      .then(res => {
        console.log('getFrontOrder 取得單一資料', res)
        order.value = res.data.reslut
      })
      .catch(err => {
        console.log('getFrontOrder 失敗', err)
      })
  }

  const createOrder = () => {
    const url = `${VITE_URL}/api/v1/orders/`
    axios.post(url, tempOrder.value)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteFrontOrder = () => {
    // const url = `${VITE_URL}/api/v1/order/${route.params.id}`
    const url = `${VITE_URL}/api/v1/orders/65ac8c5080ae3e636b421c46`
    axios.delete(url)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }



  // 日期
  const bookingDate = ref({
    start: new Date(),
    end: new Date()
  });
  const resetDate = () => {
    bookingDate.value = {
      start: new Date(),
      end: new Date()
    }
  }

  // 人數
  const peopleNum = ref(0)
  const increase = () => {
    peopleNum.value++
  }
  const decrease = () => {
    peopleNum.value--
  }


  return {
    // admin
    orderList,
    getOrders,
    tempOrder,
    editOrder,
    deleteOrder,

    // front
    getFrontOrders,
    order,
    getFrontOrder,
    createOrder,
    deleteFrontOrder,

    bookingDate,
    resetDate,

    peopleNum,
    increase,
    decrease
  }
})
