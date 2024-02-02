// currency
// 千分位
const toThousands = (price: number) => {
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


export {
  toThousands,
  getLocalDateFormat,
  getTradDateFormat,
}