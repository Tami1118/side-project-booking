import { ref } from 'vue';
import { defineStore } from "pinia"
import axios from 'axios';

const { VITE_URL } = import.meta.env;
import { Toast, Alert } from "@/mixins/swal";

interface Food {
  _id: string;
  title: string;
  description: string;
  diningTime: string;
  image: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

interface TempFood {
  title: string;
  description: string;
  diningTime: string;
  image: string;
}

export const useFoodStore = defineStore('foodStore', () => {
  const defaultFood = {
    title: '',
    description: '',
    image: '',
    diningTime: '',
  }

  // 美饌列表
  const tempFood = ref<TempFood>(JSON.parse(JSON.stringify(defaultFood)))
  const resetTempFood = () => {
    tempFood.value = JSON.parse(JSON.stringify(defaultFood))
  }

  /**
   * 後台-(get)取得 佳餚列表
   */
  const foodList = ref<null | Food[]>(null)
  const getFoods = async () => {
    try {
      console.log('getFood')
      const url = `/admin/culinary/`
      const res = await axios.get(url)
      foodList.value = res.data.result
      console.log('getFoods 已取得', res)
    } catch (err) {
      console.log('getFoods 取得失敗',err)
    }
  }

  /**
   * 後台-(post)新增 佳餚資料
   */
  const createFood = () => {
    const url = `/admin/culinary/`
    axios.post(url, tempFood.value)
      .then((res) => {
        console.log(res)
        Toast.fire({
          icon: 'success',
          title: `已新增 ${res.data.result.title}`,
        })
        getFoods()
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
  const updateFoodType = ref<string>('')
  const editFoodId = ref<string>('')
  const editFood = () => {
    const url = `/admin/culinary/${editFoodId.value}`
    axios.put(url, tempFood.value)
      .then((res) => {
        console.log('editFood 已更新',res)
        Toast.fire({
          icon: 'success',
          title: `${res.data.result.title} 已更新`,
        })
        getFoods()
      })
      .catch((err) => {
        console.log('editFood 更新失敗',err)
        Alert.fire({
          icon: 'error',
          title: `更新失敗，請稍後再試一次`,
        })
      })
  }

  /**
   * 後台-(delete)刪除 佳餚資料
   */
  const deleteFood = () => {
    const url = `/admin/culinary/${editFoodId.value}`
    axios.delete(url)
      .then((res) => {
        console.log('deleteFood 已刪除',res)
        Toast.fire({
          icon: 'success',
          title: `已刪除 ${res.data.result.title}`,
        })
        getFoods()
      })
      .catch((err) => {
        console.log('deleteFood 刪除失敗',err)
        Alert.fire({
          icon: 'error',
          title: `刪除失敗，請稍後再試一次`,
        })
      })
  }


  /**
   * 前台-(get)取得 所有美饌列表
   */
  const getFrontFoods = () => {
    const url = `/home/culinary/`
    axios.get(url)
      .then(res => {
        console.log('getFrontFoods 已取得美食', res)
        foodList.value = res.data.result
      })
      .catch(err => {
        console.log('getFrontFoods 失敗' ,err)
      })
  }

  /**
   * 前台-(get)取得 單一美饌資訊
   */
  const getFrontFood = async () => {
    // console.log('getFrontFood 單一')
    try {
      const url = `/culinary/`
      const res = await axios.get(url)
      tempFood.value = res.data.result
      console.log('getFrontFood 已取得單一美食', res)
    }catch(err){
      console.log(err)
    }
  }


  // Modal
  const showFoodModal = ref<boolean>(false)
  const openFoodModal = () => {
    showFoodModal.value = true;
  }
  const closeFoodModal = () => {
    showFoodModal.value = false
    resetTempFood()
  }
  const toggleModal = () => {
    showFoodModal.value = !showFoodModal.value
  }
  const showDelModal = ref<boolean>(false)
  const openFoodDelModal = () => {
    showDelModal.value = true
  }
  const closeFoodDelModal = () => {
    showDelModal.value = false
    resetTempFood()
  }


  return {
    tempFood,
    resetTempFood,

    // 後台
    foodList,
    getFoods,
    createFood,
    updateFoodType,
    editFoodId,
    editFood,
    deleteFood,

    // 前台
    getFrontFoods,
    getFrontFood,

    // Modal
    showFoodModal,
    openFoodModal,
    closeFoodModal,
    toggleModal,
    showDelModal,
    openFoodDelModal,
    closeFoodDelModal,
  }
})