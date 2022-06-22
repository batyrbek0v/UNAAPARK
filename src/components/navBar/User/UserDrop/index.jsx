import React from 'react'
import { Link } from 'react-router-dom'
import { auth, handleSignOut } from '../../../../firebase/firebase'
import { useAuth } from '../../../../providers/useAuth'
import cls from './UserDrop.module.scss'
import { UserDrop_list } from './UserDrop_list'
import userDefaultAva from '../../../images/defaultUserAvatar.png'

const UserDrop = ({ sideActive, setSideActive, name }) => {

  const { users } = useAuth()

  return (
    <div className={sideActive ? cls.userDrop : cls.none}>
      <div className={cls.username}>
<<<<<<< HEAD
        <img src={users.photo ? users.photo : userDefaultAva} alt="" />
=======
        <div className={cls.person}>
          {
            users.photo
              ? <img src={users.photo} alt="" />
              : name
          }
        </div>
>>>>>>> 3b93a53a8283c30bfd9b222191ad1643ad4b2ec7
        <h4>{users.name}</h4>
      </div>
      <div className={cls.list}>
        {
          UserDrop_list.map(({ id, title, path }) => (
            <li
              key={id}
              onClick={() => {
                setSideActive(!sideActive)
              }}
            >
              <Link to={path}>
                {title}
              </Link>
            </li>
          ))
        }
        <li
          onClick={() => {
            window.location.reload()
            handleSignOut()
          }}
        >
          <Link to=''>
            Выйти
          </Link>
        </li>
      </div>
    </div>
  )
}

export default UserDrop