import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getLocalDateFormat } from "@/mixins/format";

// TypeScript
interface BookingDateType {
  start: Date;
  end: Date;
}

export const useDateStore = defineStore('dateStore', () => {
  // api格式 2024/01/01
  // 渲染格式 01 月 01 日，星期一
  // response 回報模式 2024-01-01T00:00:00.000Z

  // 預設格式：Mon Jun 15 2024 00:00:00 GMT+0800 (台北標準時間)
  const defaultDate = {
    start: new Date(),
    end: new Date()
  }

  // 預約時間
  const reserveDate = ref<BookingDateType>({ ...defaultDate })
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  reserveDate.value.end = tomorrow

  // 清除時間
  const resetDate = () => {
    reserveDate.value = { ...defaultDate }
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    reserveDate.value.end = tomorrow
  }

  // 日期格式轉換 2024/01/01
  const reserveDateRange = computed<{startDate: string, endDate: string}>(() => {
    const startDate = getLocalDateFormat(reserveDate.value.start)
    const endDate = getLocalDateFormat(reserveDate.value.end)
    return {
      startDate,
      endDate      
    }
  })

  // 判斷是否為同一天
  const sameDate = computed<boolean>(() => {
    return reserveDateRange.value.startDate === reserveDateRange.value.endDate
  })

  // 計算夜晚數
  const nightNum = computed<number>(() => {
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
    reserveDateRange,
    sameDate,
    nightNum,
  }
})