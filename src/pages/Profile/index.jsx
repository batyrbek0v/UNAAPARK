import React from 'react'
import { useAuth } from '../../providers/useAuth'
import cls from './Profile.module.scss'
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { BiWallet } from 'react-icons/bi'
import defautAvatar from '../../components/images/defaultUserAvatar.png'
import { auth } from '../../firebase/firebase'

const Profile = () => {

  const { users } = useAuth()

  console.log(users);

  return (
    <div className={cls.toCenter}>
      <div className={cls.profile}>
        <img src={users && users.photo ? users.photo : defautAvatar} alt="avatar" />
        <h3>
          <p><AiOutlineUser /></p>
          Имя пользователя: <span>{users && users.name}</span>
        </h3>
        <h4>
          <p><FaRegEnvelope /></p>
          Email: <span>{users && users.email}</span>
        </h4>
        <h4>
          <p><BiWallet/></p>
          Кошелек: <span>0 сом</span>
        </h4>
        <button onClick={() => {
          auth.currentUser.delete()
          window.location.reload()
        }}>Выйти с аккаунта</button>
      </div>
    </div>
  )
}

export default Profile