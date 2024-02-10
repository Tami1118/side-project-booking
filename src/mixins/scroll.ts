import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollBackground() {
  // 判斷標的
  const isScroll = ref<boolean>(false);

  const changeScroll = () => {
    // 取 window.scrollY 判斷是否超過指定高度
    const scrollPosition = window.scrollY;
    if (scrollPosition > 700) {
      isScroll.value = true;
    } else {
      isScroll.value = false;
    }
  };

  onMounted(() => {
    // 監聽 window scroll 軸
    window.addEventListener('scroll', changeScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', changeScroll);
  });

  return {
    isScroll,
  };
}
