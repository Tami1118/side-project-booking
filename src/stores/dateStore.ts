import { ref, computed } from "vue";
import { defineStore } from "pinia";

// TypeScript
interface DateRangeInterface {
  start: Date;
  end: Date;
}

export const useDateStore = defineStore('dateStore', () => {
  // api格式 2024/02/15
  // 渲染格式 2 月 15 日，星期二
  // response 回報模式 2024-02-15T00:00:00.000Z

  // 格式：Thu Feb 15 2024 13:01:53 GMT+0800 (台北標準時間)
  const reserveDate = ref<DateRangeInterface>({
    start: new Date(),
    end: new Date()
  })

  // 儲存日期至localStorage
  const setDateStorage = () => {
    localStorage.setItem('reserveDate', JSON.parse(JSON.stringify(reserveDate.value)))
  }

  // 從localStorage取得日期
  const getDateStorage = () => {
    // localStorage
  }
  
  // 清除日期
  const resetDate = () => {
    reserveDate.value = {
      start: new Date(),
      end: new Date()
    }
  }

  // 計算夜晚數
  const nightNum = computed(() => {
    const startDate: Date = new Date(reserveDate.value.start)
    const endDate: Date = new Date(reserveDate.value.end)

    // 設定午夜，確保跨足整天
    startDate.setHours(0, 0, 0, 0)
    endDate.setHours(0, 0, 0, 0)

    // 計算夜晚數，包含開始及結束
    const rangeDate = endDate.getTime() - startDate.getTime()
    return Math.ceil(rangeDate / (1000 * 60 * 60 * 24))
  })


  return {
    reserveDate,
    resetDate,
    setDateStorage,
    getDateStorage,
    nightNum,
  }
})