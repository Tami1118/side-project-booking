import { defineStore } from "pinia"
import { ref } from 'vue'
const { VITE_URL } = import.meta.env
import axios from 'axios'
// import { Toast, Alert } from '@/mixins/swal'

import { useRoute } from 'vue-router'
const route = useRoute()

const orderList = ref([])
const order = ref({})
const orderTemp = ref(
  {
    "roomId": "65251f6095429cd58654bf12",
    "checkInDate": "2023/06/18",
    "checkOutDate": "2023/06/19",
    "peopleNum": 2,
    "userInfo": {
      "address": {
        "zipcode": 802,
        "detail": "文山路23號"
      },
      "name": "Joanne Chen",
      "phone": "0912345678",
      "email": "example@gmail.com"
    }
  }
)


// front
const getFrontOrders = () => {
  const url = `${VITE_URL}/api/v1/orders/`
  axios.get(url)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

const createOrder = () => {
  const url = `${VITE_URL}/api/v1/orders/`
  axios.post(url)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

const getFrontOrder = () => {
  const url = `${VITE_URL}/api/v1/order/${route.params.id}`
  axios.get(url)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

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


// admin
const getOrder = () => {
  const url = `${VITE_URL}/api/v1/admin/orders/`
  axios.get(url)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

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

const deleteOrder = () => {
  const url = `${VITE_URL}/api/v1/admin/orders/${route.params.id}`
  axios.delete(url)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const useOrderStore = defineStore('order', () => {
  return {
    orderList,
    order,
    orderForm,
    orderTemp,

    getFrontOrders,
    createOrder,
    getFrontOrder,
    deleteFrontOrder,
    getOrder,
    editOrder,
    deleteOrder
  }
})
