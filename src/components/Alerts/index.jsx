import Swal from 'sweetalert2'

export const modalAlert = {
  isSaved: (title, icon,) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    return Toast.fire({
      title: `${title}`,
      icon: `${icon}`,
      color:'#3B4FF9',
    })
  },
  // isSaved: (title, text, icon, btn) => {
  //   return Swal.fire({
  //     title: `${title}`,
  //     text: `${text}`,
  //     icon: `${icon}`,
  //     confirmButtonText: `${btn}`
  //   })
  // },
  notSaved: (title, text, icon, btn) => {
    return Swal.fire({
      title: `${title}`,
      text: `${text}`,
      icon: `${icon}`,
      confirmButtonText: `${btn}`
    })
  },
}


