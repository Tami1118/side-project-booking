import { defineStore } from "pinia"
import { ref } from 'vue'
import axios from 'axios'
const { VITE_URL } = import.meta.env
import { Toast, Alert } from '@/mixins/swal'
import { useRoute } from 'vue-router'

export const useRoomStore = defineStore('roomStore', () => {
  const route = useRoute()
  // const currentRouteId = ref(null)

  const showRoomModal = ref(false)
  const updateRoomType = ref("create")
  const editRoomId = ref("")
  const roomData = ref([])
  const roomDataTemp = ref({
    "name": "",
    "description": "",
    "imageUrl": "",
    "imageUrlList": ["", "", "", "", ""],
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
    "patternInfo": [
      {
        "title": "市景",
        "isProvide": true,
      },
      {
        "title": "獨立衛浴",
        "isProvide": true,
      },
      {
        "title": "客廳",
        "isProvide": true,
      },
      {
        "title": "書房",
        "isProvide": true,
      },
      {
        "title": "樓梯電梯",
        "isProvide": true,
      },
    ]
  })
  const roomDetail = ref({})


  const getRooms = () => {
    const url = `${VITE_URL}/api/v1/admin/rooms/`
    axios.get(url)
      .then((res) => {
        console.log('成功取得房型資料', res)
        roomData.value = res.data.result
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const createRoom = () => {
    console.log('createRoom')
    const url = `${VITE_URL}/api/v1/admin/rooms/`
    axios.post(url, roomDataTemp.value)
      .then((res) => {
        console.log('成功建立房型資料', res)
        resetRoomDataTemp()
        getRooms()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const editRoom = () => {
    console.log('editRoom', editRoomId.value)
    const url = `${VITE_URL}/api/v1/admin/rooms/${editRoomId.value}`
    axios.put(url, roomDataTemp.value)
      .then((res) => {
        console.log('成功編輯房型資料', res)
        resetRoomDataTemp()
        getRooms()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const deleteRoom = (id) => {
    console.log(id)
    const url = `${VITE_URL}/api/v1/admin/rooms/${id}`
    axios.delete(url)
      .then((res) => {
        console.log(res)
        getRooms()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const resetRoomDataTemp = () => {
    roomDataTemp.value = {
      "name": "",
      "description": "",
      "imageUrl": "",
      "imageUrlList": ["", "", "", "", ""],
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
      "patternInfo": [
        {
          "title": "市景",
          "isProvide": true,
        },
        {
          "title": "獨立衛浴",
          "isProvide": true,
        },
        {
          "title": "客廳",
          "isProvide": true,
        },
        {
          "title": "書房",
          "isProvide": true,
        },
        {
          "title": "樓梯電梯",
          "isProvide": true,
        },
      ]
    }
  }
  const getFrontRooms = () => {
    const url = `${VITE_URL}/api/v1/rooms/`
    axios.get(url)
      .then((res) => {
        console.log('成功取得房型資料', res)
        roomData.value = res.data.result
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const getFrontRoom = () => {
    const url = `${VITE_URL}/api/v1/rooms/${route.params.id}`
    axios.get(url)
      .then((res) => {
        console.log('成功取得單一資料', res)
        roomDetail.value = res.data.result
        // roomData.value = res.data.result
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return {
    showRoomModal,
    roomData,
    roomDataTemp,
    updateRoomType,
    editRoomId,

    getRooms,
    createRoom,
    editRoom,
    deleteRoom,
    getFrontRooms,
    getFrontRoom
  }

})