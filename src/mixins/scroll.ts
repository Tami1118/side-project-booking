import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollBackground() {
  // 判斷標的
  const isScroll = ref<boolean>(false);

  const changeScroll = () => {
    const windowWidth = window.innerWidth;
    let scrollThreshold = 0;
    if (windowWidth >= 1024) {
      scrollThreshold = 400;
    } else {
      scrollThreshold = 400;
    }

    const scrollPosition = window.scrollY;
    if (scrollPosition > scrollThreshold) {
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
