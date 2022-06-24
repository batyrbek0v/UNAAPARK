import Swal from 'sweetalert2'

export const modalAlert = {
  isSaved: () => {
    return Swal.fire({
      title: 'Успешно добавлено!',
      text: 'Нажмите чтобы продолжить',
      icon: 'success',
      confirmButtonText: 'Продолжить'
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
  emptyArea: () => {
    return Swal.fire({
      title: 'Напишите что-нибудь !',
      text: 'Чтобы отправить сообщение напишите что-то',
      icon: 'error',
      confirmButtonText: 'Продолжить'
    })
  },
}

