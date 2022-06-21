import React from 'react'
import { Link } from 'react-router-dom'
import cls from './CheckingAuth.module.scss'
import { IoMdClose } from 'react-icons/io'
import SupportChat from '../supportChat'
import { useAuth } from '../../../../providers/useAuth'

const CheckingAuth = ({ chatActive, setChatActive }) => {
  const { users } = useAuth()

  return (
    <>
      {
        !users ? 
        <div className={cls.checking}>
          <div className={cls.checking_head}>
            <div className={cls.left}>
              <p>Чат только для зарегистрированных</p>
            </div>
            <div className={cls.right}>
              <li onClick={() => setChatActive(!chatActive)}>
                <IoMdClose />
              </li>
            </div>
          </div>
          
          <div className={cls.content}>
            <li onClick={() => setChatActive(!chatActive)}>
              <Link to={'/auth/login'}>
                Войти
              </Link>
            </li>
            <span>/</span>
            <li onClick={() => setChatActive(!chatActive)}>
              <Link to={'/auth/register'}>
                Зарегистрироваться
              </Link>
            </li>
          </div>
        </div>
      :
        <SupportChat 
          chatActive={chatActive} 
          setChatActive={setChatActive}
        />
      }
    </>
  )
}

export default CheckingAuth