// money
// 千分位
const toThousands = (price: number) => {
  return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

// date
// 住宿天數(晚)
const getNight = (range: number) => {
  return range / (1000 * 60 * 60 * 24)
}

// 標準格式 2024/01/01
const getLocalDateFormat = (date: Date) => {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}/${month}/${day}`
}

// 1月1日，星期一
const getTradDateFormat = (data: Date) => {
  const newDate = new Date(data).toISOString().split('T')[0].split('-')
  return `${newDate[1]} 月${newDate[2]} 日`
}


export {
  // money
  toThousands,

  // date
  getNight,
  getLocalDateFormat,
  getTradDateFormat,
}