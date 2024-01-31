import { ref } from 'vue'
import { defineStore } from "pinia"
import axios from 'axios'
import { useRoute } from 'vue-router'

const { VITE_URL } = import.meta.env
import type { Room } from "@/interfaces/room"
import { Toast, Alert } from '@/mixins/swal'


export const useRoomStore = defineStore('roomStore', () => {
  const route = useRoute()
  const showRoomModal = ref(false)
  const updateRoomType = ref("create")
  const roomLayout = ref([
    {
      title: '市景',
      isProvide: true,
    },
    {
      title: '獨立衛浴',
      isProvide: true,
    },
    {
      title: '客廳',
      isProvide: true,
    },
    {
      title: '書房',
      isProvide: true,
    },
    {
      title: '樓層電梯',
      isProvide: true,
    },
  ])
  const bedType = ref(["一張大床", "兩張大床", "三張大床"])

  // admin
  const roomData = ref([])
  const getRooms = () => {
    const url = `${VITE_URL}/api/v1/admin/rooms/`
    axios.get(url)
      .then((res) => {
        console.log('getRooms 已取得房型列表', res)
        roomData.value = res.data.result
      })
      .catch((err) => {
        console.log('getRooms 失敗', err)
      })
  }

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
  })
  const createRoom = () => {
    // console.log('createRoom')
    const url = `${VITE_URL}/api/v1/admin/rooms/`
    axios.post(url, roomDataTemp.value)
      .then((res) => {
        console.log('createRoom 已新增房型', res)
        resetRoomDataTemp()
        getRooms()
      })
      .catch((err) => {
        console.log('createRoom 失敗', err)
      })
  }

  const editRoomId = ref("")
  const editRoom = () => {
    console.log('editRoom', editRoomId.value)
    const url = `${VITE_URL}/api/v1/admin/rooms/${editRoomId.value}`
    axios.put(url, roomDataTemp.value)
      .then((res) => {
        console.log('editRoomId 已更新房型', res)
        resetRoomDataTemp()
        getRooms()
      })
      .catch((err) => {
        console.log('editRoomId 失敗', err)
      })
  }

  const deleteRoom = (id:string) => {
    console.log(id)
    const url = `${VITE_URL}/api/v1/admin/rooms/${id}`
    axios.delete(url)
      .then((res) => {
        console.log('deleteRoom 已刪除房型', res)
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
    }
  }

  const getFrontRooms = () => {
    const url = `${VITE_URL}/api/v1/rooms/`
    axios.get(url)
      .then((res) => {
        console.log('getFrontRooms 取得列表資料', res)
        roomData.value = res.data.result
      })
      .catch((err) => {
        console.log('getFrontRooms 失敗', err)
      })
  }

  // front
  const roomDetail = ref<Room | null>(null);
  const getFrontRoom = () => {
    const url = `${VITE_URL}/api/v1/rooms/${route.params.id}`
    axios.get(url)
      .then((res) => {
        console.log('getFrontRoom 取得房型資料', res)
        roomDetail.value = res.data.result
      })
      .catch((err) => {
        console.log('getFrontRoom 失敗', err)
      })
  }


  return {
    showRoomModal,
    updateRoomType,
    roomLayout,
    bedType,

    // admin
    roomData,
    getRooms,
    roomDataTemp,
    createRoom,
    resetRoomDataTemp,
    editRoomId,
    editRoom,
    deleteRoom,

    // front
    roomDetail,
    getFrontRooms,
    getFrontRoom,
  }
})