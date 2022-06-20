import React from 'react'
import cls from './User.module.scss'
import { IoMdClose } from 'react-icons/io'
import { Link, } from 'react-router-dom'

const User = ({ photo }) => {
  // const data = JSON.parse(localStorage.getItem('data'))

  // const signOut = () => {
  //   localStorage.clear()

  //   window.location.reload()
  // }

  // const disactivate = () => {
  //   setActive(false)
  // }


  // if(data !== undefined){
  //   navigate('/cars')
  // }else{
  //   navigate('/login')
  // }
  console.log(photo);
  return (
    <div>
      <img className={cls.header} src={photo} alt="" />
    </div>
    // <div>
    //   <div className={cls.header}>
    //     <img src={photo} alt="" />
    //     {/* <img src={user.photo ? user.photo : 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg'} alt="" /> */}
    //   </div>
    // </div>
  )
}

export default User