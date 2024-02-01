import { ref } from "vue"
import { defineStore } from "pinia";

export const useModalStore = defineStore('modalStore', () => {
  const isModalOpen = ref<boolean>(false)

  const openModal = () => {
    isModalOpen.value = true
  }

  const closeModal = () => {
    isModalOpen.value = false
  }

  return {
    isModalOpen,
    openModal,
    closeModal
  }
})