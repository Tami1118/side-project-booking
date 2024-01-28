import { defineStore } from "pinia"
import { ref } from 'vue'
const { VITE_URL } = import.meta.env
import axios from 'axios'
// import { Toast, Alert } from '@/mixins/swal'
import { useRoute } from 'vue-router'


export const useOrderStore = defineStore('order', () => {
  const route = useRoute()


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

  const deleteOrder = (id : string) => {
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

  const tempOrder = ref(
    {
      "roomId": "",
      "checkInDate": "",
      "checkOutDate": "",
      "peopleNum": 0,
      "userInfo": {
        "name": "",
        "phone": "",
        "email": "",
        "address": {
          "zipcode": "",
          "detail": ""
        },
      }
    }
  )
  const createOrder = () => {
    // console.log(tempOrder.value)
    tempOrder.value.roomId = route.params.id

    const url = `${VITE_URL}/api/v1/orders/`
    axios.post(url, tempOrder.value)
      .then(res => {
        console.log('createOrder 新增成功',res)
        resetTempOrder()
      })
      .catch(err => {
        console.log('createOrder 失敗',err)
      })
  }
  const resetTempOrder = () => {
    tempOrder.value = {
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




  // 日期格式
  // "checkInDate": "",
  // "checkOutDate": "",
  // "peopleNum": 0,
  
  const bookingDate = ref({
    start: new Date(),
    end: new Date()
  });

  const setBookingDate = () => {
    localStorage.setItem('bookingDate', JSON.parse(JSON.stringify(bookingDate.value)))
  }

  const getBookingDate = () => {

  }


  // 日期
  // Flow
  // 1. 點擊 roomDetail.vue 中日期 input，開啟日期元件
  // 2. 點擊 bookingDatePick.vue 起迄日期，點擊確定日期，存取於 localStorage.setItem()，並關閉
  // 3. roomDetail.vue input 確認後才能夠變動
  // 4. 選取人數並送出後進入到下一頁

  const resetDate = () => {
    bookingDate.value = {
      start: new Date(),
      end: new Date()
    }
  }
  const setItemDate = () => {
    localStorage.setItem('bookingDate', JSON.stringify(bookingDate.value));
  }
  const getItemDate = () => {
    const storedBookingDate = localStorage.getItem('bookingDate');
    const stroedBookingNum = localStorage.getItem('peopleNum');
    if (storedBookingDate) {
      bookingDate.value = JSON.parse(storedBookingDate);
    }
    if (stroedBookingNum) {
      peopleNum.value = Number('peopleNum')
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
    resetTempOrder,
    deleteFrontOrder,

    bookingDate,
    resetDate,
    setItemDate,
    getItemDate,

    peopleNum,
    increase,
    decrease
  }
})
