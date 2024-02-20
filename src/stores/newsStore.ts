import { ref } from 'vue';
import { defineStore } from "pinia"
import axios from 'axios';

const { VITE_URL } = import.meta.env;
import { Toast, Alert } from "@/mixins/swal";

interface News {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

interface TempNews {
  title: string;
  description: string;
  image: string;
}

export const useNewsStore = defineStore('newsStore', () => {
  const defaultNews = {
    title: '',
    description: '',
    image: '',
  }

  // 消息列表
  const tempNews = ref<TempNews>(JSON.parse(JSON.stringify(defaultNews)))
  const resetTempNews = () => {
    tempNews.value = JSON.parse(JSON.stringify(defaultNews))
  }

  /**
   * 後台-(get)取得 佳餚列表
   */
  const newsList = ref<null | News[]>(null)
  const getNews = async () => {
    try {
      console.log('getNews')
      const url = `${VITE_URL}/api/v1/admin/news/`
      const res = await axios.get(url)
      newsList.value = res.data.result
      console.log('getNews 已取得', res)
    } catch (err) {
      console.log('getNews 取得失敗',err)
    }
  }

  /**
   * 後台-(post)新增 佳餚資料
   */
  const createNews = () => {
    const url = `${VITE_URL}/api/v1/admin/news/`
    axios.post(url, tempNews.value)
      .then((res) => {
        console.log(res)
        Toast.fire({
          icon: 'success',
          title: `已新增 ${res.data.result.title}`,
        })
        getNews()
      })
      .catch((err) => {
        console.log(err)
        Alert.fire({
          icon: 'error',
          title: `新增失敗，請稍後再試一次`,
        })
      })
  }

  /**
   * 後台-(put)編輯 佳餚資料
   */
  const updateNewsType = ref<string>('')
  const editNewsId = ref<string>('')
  const editNews = () => {
    const url = `${VITE_URL}/api/v1/admin/news/${editNewsId.value}`
    axios.put(url, tempNews.value)
      .then((res) => {
        console.log('editNews 已更新',res)
        Toast.fire({
          icon: 'success',
          title: `${res.data.result.title} 已更新`,
        })
        getNews()
      })
      .catch((err) => {
        console.log('editNews 更新失敗',err)
        Alert.fire({
          icon: 'error',
          title: `更新失敗，請稍後再試一次`,
        })
      })
  }

  /**
   * 後台-(delete)刪除 佳餚資料
   */
  const deleteNews = () => {
    const url = `${VITE_URL}/api/v1/admin/news/${editNewsId.value}`
    axios.delete(url)
      .then((res) => {
        console.log('deleteNews 已刪除',res)
        Toast.fire({
          icon: 'success',
          title: `已刪除 ${res.data.result.title}`,
        })
        getNews()
      })
      .catch((err) => {
        console.log('deleteNews 刪除失敗',err)
        Alert.fire({
          icon: 'error',
          title: `刪除失敗，請稍後再試一次`,
        })
      })
  }


  /**
   * 前台-(get)取得 所有消息列表
   */
  const getFrontNews = () => {
    const url = `${VITE_URL}/api/v1/home/news/`
    axios.get(url)
      .then(res => {
        console.log('getFrontNews 已取得消息', res)
        newsList.value = res.data.result
      })
      .catch(err => {
        console.log('getFrontNews 失敗' ,err)
      })
  }

  /**
   * 前台-(get)取得 單一消息資訊
   */
  const getFrontOneNews = async () => {
    // console.log('getFrontOneNews 單一')
    try {
      const url = `${VITE_URL}/api/v1/news/`
      const res = await axios.get(url)
      tempNews.value = res.data.result
      console.log('getFrontOneNews 已取得單一消息', res)
    }catch(err){
      console.log(err)
    }
  }


  // Modal
  const showNewsModal = ref<boolean>(false)
  const openNewsModal = () => {
    showNewsModal.value = true;
  }
  const closeNewsModal = () => {
    showNewsModal.value = false
    resetTempNews()
  }
  const toogleModal = () => {
    showNewsModal.value = !showNewsModal.value
  }
  const showDelModal = ref<boolean>(false)
  const openNewsDelModal = () => {
    showDelModal.value = true
  }
  const closeNewsDelModal = () => {
    showDelModal.value = false
    resetTempNews()
  }


  return {
    tempNews,
    resetTempNews,

    // 後台
    newsList,
    getNews,
    createNews,
    updateNewsType,
    editNewsId,
    editNews,
    deleteNews,

    // 前台
    getFrontNews,
    getFrontOneNews,

    // Modal
    showNewsModal,
    openNewsModal,
    closeNewsModal,
    toogleModal,
    showDelModal,
    openNewsDelModal,
    closeNewsDelModal,
  }
})