import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../../../firebase/firebase'
import { useAuth } from '../../../../providers/useAuth'
import cls from './UserDrop.module.scss'
import { UserDrop_list } from './UserDrop_list'

const UserDrop = ({sideActive, setSideActive}) => {

  const { users } = useAuth()

  return (
    <div className={ sideActive ? cls.userDrop : cls.none}>
      <div className={cls.username}>
        <img src={users.photo} alt="" />
        <h4>{users.name}</h4>
      </div>
      <div className={cls.list}>
        {
          UserDrop_list.map(({id, title, path}) => (
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
            setSideActive(!sideActive)
            auth.currentUser.delete()
            window.location.reload()
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