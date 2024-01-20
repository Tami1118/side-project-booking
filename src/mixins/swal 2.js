import Swal from 'sweetalert2/dist/sweetalert2.js'
import '@sweetalert2/theme-dark/dark.scss'

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-start",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

const Alert = Swal.mixin({
  toast: false,
  icon: 'error',
  iconColor: '#be0e3d',
  confirmButtonColor: '#be0e3d',
})

export {
  Toast,
  Alert,
  Swal,
}