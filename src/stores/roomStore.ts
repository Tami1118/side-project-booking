import { ref } from 'vue'
import { defineStore } from "pinia"
import axios from 'axios'
import { useRoute } from 'vue-router'

const { VITE_URL } = import.meta.env
import type { Room } from "@/interfaces/room"
import { Toast, Alert } from '@/mixins/swal'


export const useRoomStore = defineStore('roomStore', () => {
  const route = useRoute()
  const updateRoomType = ref<string>("create")
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
  const defaultRoom =
  {
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
  }

  // 前台-房型列表
  const roomList = ref<null | Room[]>(null)
  const getFrontRooms = async () => {
    try {
      // console.log('getFrontRooms 取得資料', roomList.value)
      const url = `${VITE_URL}/api/v1/rooms/`
      const res = await axios.get(url)
      roomList.value = res.data.result
    } catch (err) {
      // console.log('getFrontRooms 失敗', err)
    }
  }

  // 前台-房型詳細資料
  const roomDetail = ref<null | Room>(null);
  const getFrontRoom = async () => {
    try {
      // console.log('getFrontRoom 取得資料', roomDetail.value)
      const url = `${VITE_URL}/api/v1/rooms/${route.params.id}`
      const res = await axios.get(url);
      roomDetail.value = res.data.result
    } catch (err) {
      // console.log('getFrontRoom 失敗', err)
    }
  }

  /**
   * 取得縣市資料
   */
  const getTaiwan = async () => {
    try {
      const url = "/api/abc873693/2804e64324eaaf26515281710e1792df/raw/a1e1fc17d04b47c564bbd9dba0d59a6a325ec7c1/taiwan_districts.json";
      const res = await axios.get(url)
      console.log('取得縣市資料', res)
    } catch (err) {
      console.log('getTailwan 失敗', err)
    }
  }

  /**
   * 後台-房型格式
   */
  const tempRoom = ref({ ...defaultRoom })
  // 後台-清除格式
  const resetTempRoom = () => {
    tempRoom.value = { ...defaultRoom }
    tempRoom.value.imageUrlList = []
  }

  // 後台-取得所有房型資料
  const getRooms = async () => {
    try {
      const url = `${VITE_URL}/api/v1/admin/rooms/`
      const res = await axios.get(url)
      roomList.value = res.data.result
      console.log('getRooms 成功取得資料', roomList.value)
    } catch (err) {
      console.log('getRooms 失敗', err)
    }
  }

  // 後台-新增房型資料
  const createRoom = () => {
    // console.log('createRoom')
    const url = `${VITE_URL}/api/v1/admin/rooms/`
    axios.post(url, tempRoom.value)
      .then((res) => {
        console.log('createRoom 已新增房型', res)
        Toast.fire({
          icon: 'success',
          title: '成功新增房型'
        })
        resetTempRoom()
        getRooms()
      })
      .catch((err) => {
        console.log('createRoom 失敗', err)
        Alert.fire({
          icon: 'errors',
          title: '房型新增失敗',
          text: '格式有誤，請稍後再試一次'
        })
      })
  }

  // 後台-編輯房型資料
  // const loadingIcon = ref(false)
  const editRoomId = ref("")
  const editRoom = () => {
    console.log('editRoom', editRoomId.value)
    // loadingIcon.value = true
    const url = `${VITE_URL}/api/v1/admin/rooms/${editRoomId.value}`
    axios.put(url, tempRoom.value)
      .then((res) => {
        console.log('editRoomId 已更新房型', res)
        resetTempRoom()
        Toast.fire({
          title: '更新成功',
          icon: 'success'
        })
        // loadingIcon.value = false
        getRooms()
      })
      .catch((err) => {
        Alert.fire({
          title: '更新失敗',
          text: '請稍後再試一次',
          icon: 'error'
        })
        console.log('editRoomId 失敗', err)
      })
  }

  // 後台-刪除房型資料
  const deleteRoom = () => {
    const url = `${VITE_URL}/api/v1/admin/rooms/${editRoomId.value}`
    axios.delete(url)
      .then((res) => {
        console.log('deleteRoom 已刪除房型', res)
        Toast.fire({
          title: '成功刪除房型',
          icon: 'success'
        })
        getRooms()
      })
      .catch((err) => {
        console.log(err)
        Alert.fire({
          title: '刪除失敗，請稍後再試一次',
          icon: 'error'
        })
      })
  }

  const showRoomModal = ref<boolean>(false)
  const showDelModal = ref<boolean>(false)

  const openRoomModal = () => {
    showRoomModal.value = true;
  }

  const closeRoomModal = () => {
    showRoomModal.value = false
    resetTempRoom()
  }

  const toogleModal = () => {
    showRoomModal.value = !showRoomModal.value
  }

  const openRoomDelModal = () => {
    showDelModal.value = true
  }

  const closeRoomDelModal = () => {
    showDelModal.value = false
    resetTempRoom()
  }

  return {
    updateRoomType,
    roomLayout,
    bedType,

    // 前台
    roomList,
    getFrontRooms,
    roomDetail,
    getFrontRoom,

    // 後台
    tempRoom,
    resetTempRoom,
    getRooms,
    createRoom,
    editRoomId,
    editRoom,
    deleteRoom,

    getTaiwan,

    showRoomModal,
    toogleModal,
    openRoomModal,
    closeRoomModal,
    showDelModal,
    openRoomDelModal,
    closeRoomDelModal,
  }
})