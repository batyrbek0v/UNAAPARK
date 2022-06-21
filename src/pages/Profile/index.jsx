import React from 'react'
import { useAuth } from '../../providers/useAuth'
import cls from './Profile.module.scss'
import { FaEnvelope, FaUser } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import defautAvatar from '../../components/images/defaultUserAvatar.png'
import { auth, handleSignOut } from '../../firebase/firebase'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {

  const navigate = useNavigate()
  const { users } = useAuth()

  console.log(users);

  if (!users) return navigate('/')
  
  return (
    <div className={cls.container}>
      <div className={cls.profile}>
        <div className={cls.profile_info}>
          <div className={cls.profile_img}>
            <img src={users && users.photo ? users.photo : defautAvatar} alt="avatar" />
          </div>
          <ul className={cls.list}>
            <li>
              <FaUser />
              {users ? users.name : 'Нет имени'}
            </li>
            <li>
              <FaEnvelope />
              {users ? users.email : 'Нет почты'}
            </li>
          </ul>
        </div>
        <Link to={'/saved'} className={cls.saved}>
          <span>
            <BsFillBookmarkFill />
            Cохраненные
          </span>
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
        </Link>
        <button
          className={cls.btn}
          onClick={() => {
            window.location.reload()
            handleSignOut()
          }}
        >
          Выйти c аккаунта
        </button>
      </div>
    </div>
  )
}

export default Profile