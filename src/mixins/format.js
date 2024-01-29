// money
// 千分位
const toThousands = (money) => {
  let comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
  return money.toString().replace(comma, ',')
}

// date
// 住宿天數(晚)
const getNight = (range) => {
  return range / (1000 * 60 * 60 * 24)
}

// 標準格式 2024/1/1
const getLocalDateFormat = (date) => {
  return new Date(date).toLocaleDateString()
}

// 1月1日，星期一
const getTradDateFormat = (data) => {
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