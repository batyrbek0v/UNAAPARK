import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar_utils } from '../../utils/navBar_utils'
import { IoMdClose } from 'react-icons/io'
import { BiPlusCircle } from 'react-icons/bi' 
import cls from './sidebar.module.scss'
import User from '../User'

export const SideBar = ({sideActive, setSideActive}) => {

  const data = JSON.parse(localStorage.getItem('data'))

  const sideBarActiveFalse = () => {
    setSideActive(false)
  }

  const [ userActive , setUserActive ] = React.useState(false)

  const activeUser = () => {
    setUserActive(true)
  }


  return (
    <div className={sideActive ? cls.sideBarActive : cls.sideBar}>
      <div className={cls.barsClose} onClick={() => sideBarActiveFalse()}>
        <li>
          <IoMdClose />
        </li>
      </div>
      <div className={cls.list}>
        {
          NavBar_utils.map(({id, title, path}) => (
            <li key={id} onClick={() => setSideActive(false)}>
              <Link to={path}>
                {title}
              </Link>
            </li>
          ))
        }
      </div>
      <div className={!localStorage.getItem('data') ? cls.sign : cls.signNotActive}>
        <li onClick={() => sideBarActiveFalse()}>
          <Link to='/login' >
            Войти
          </Link>
        </li>
        <span>/</span>
        <li onClick={() => sideBarActiveFalse()}>
          <Link to='/register'>
            Регистрация
          </Link>
        </li>
      </div>
      {
        data !== null ? <div className={cls.user} onClick={e => {
          e.preventDefault()

          activeUser()
        }}>
          <img src={data.user.photoURL} alt="avatar" />
          <p>{data._tokenResponse.firstName}</p>
        </div> : ''
        }
      {
        data !== null ? <User active={userActive} setActive={setUserActive} /> : ''
      }
    </div>
  )
}

export default SideBar