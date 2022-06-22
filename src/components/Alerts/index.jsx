import Swal from 'sweetalert2'

export const modalAlert = {
  isSaved: () => {
    return Swal.fire({
      title: 'Успешно добавлено',
      text: 'Do you want to continue',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  },
  notSaved: () => {
    return Swal.fire({
      title: 'Не добавлено !',
      text: 'Чтобы можно было добавлять, вам нужно авторизоваться',
      icon: 'error',
      confirmButtonText: '<a href="/auth/login" style="text-decoration:none; color:white;" >Авторизоваться</a>'
    })
  },
}

