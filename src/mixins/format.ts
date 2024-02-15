// currency
// 千分位
const toThousands = (price: number | string) => {
  return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

// date
// 標準格式 2024/01/01
const getLocalDateFormat = (date: Date) => {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}/${month}/${day}`
}

// 1月1日，星期一
const getTradDateFormat = (data: Date) => {
  const newDate = new Date(data);
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const dayOfWeek = newDate.toLocaleDateString('zh-TW', { weekday: 'long' });
  return `${month} 月 ${day} 日，${dayOfWeek}`;
}

const getTradDateSecondary = (data: Date | string) => {
  const newDate = new Date(data);
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const dayOfWeek = newDate.toLocaleDateString('zh-TW', { weekday: 'long' });
  return `${month} 月 ${day} 日${dayOfWeek}`;
}

const getNightNum = (start: Date | string, end: Date | string) => {
  const startDate: Date = new Date(start)
  const endDate: Date = new Date(end)

  // 設定午夜，確保跨足整天
  startDate.setHours(0, 0, 0, 0)
  endDate.setHours(0, 0, 0, 0)

  // 計算夜晚數，包含開始及結束
  const rangeDate = endDate.getTime() - startDate.getTime()
  return Math.ceil(rangeDate / (1000 * 60 * 60 * 24))
}

export default {
  toThousands,
  getLocalDateFormat,
  getTradDateSecondary,
  getTradDateFormat,
  getNightNum
}