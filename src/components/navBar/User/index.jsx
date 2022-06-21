import React from 'react'
import cls from './User.module.scss'
import { IoIosArrowDown, IoMdClose } from 'react-icons/io'
import UserDrop from './UserDrop'
import userDefaultAva from '../../images/defaultUserAvatar.png'

const User = ({ photo }) => {

  const [ sideActive, setSideActive ] = React.useState(false)

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
      <div 
        className={cls.userInfo}
        onClick={() => {
          setSideActive(!sideActive)
        }}
      >
        <img className={cls.header} src={photo ? photo : userDefaultAva} alt="" />
        <li className={sideActive ? cls.rotated : cls.default}>
          <IoIosArrowDown />
        </li>
      </div>
      <UserDrop sideActive={sideActive} setSideActive={setSideActive} />
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