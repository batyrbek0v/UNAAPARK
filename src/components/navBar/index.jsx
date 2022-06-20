import React from 'react'
import cls from './navBar.module.scss'
import { GoThreeBars } from 'react-icons/go'
import { NavBar_utils } from '../utils/navBar_utils'
import { Link } from 'react-router-dom'
import { SideBar } from './SideBar'
import logo from '../images/Logo.png'
import User from './User'
import { useAuth } from '../../providers/useAuth'
import { handleSignOut } from '../../firebase/firebase'

const NavBar = () => {
  const data = JSON.parse(localStorage.getItem('data'))

  const [sideActive, setSideActive] = React.useState(false)

  const [listIndex, setListIndex] = React.useState(1)

  const { users } = useAuth()

  
  // const [ sideActive , setSideActive ] = React.useState(false)
  // const [ listIndex, setListIndex ] = React.useState()
  
  const sideBarActiveTrue = () => {
    setSideActive(true)
  }

  return (
    <>
      <div className={cls.navBar}>
        <div className={cls.logo}>
          <h2>
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
          </h2>
        </div>
        <ul className={cls.list}>
          <ul>
            {
              NavBar_utils.map(({ id, title, path }) => <li
                key={id}
                className={id === listIndex ? cls.active : ''}
                onClick={() => setListIndex(id)}
              ><Link to={path}>{title}</Link></li>)
            }
            <button onClick={e => {
              e.preventDefault()
              handleSignOut()
            }}>Sign Out</button>
          </ul>
        </ul>
        {/* {
          user && (
            <div className={cls.user}>
              <User photo={user.photo} />
            </div>
          )
        } */}
        <div className={cls.bars} onClick={() => sideBarActiveTrue()}>
          <li>
            <GoThreeBars />
          </li>
        </div>
      </div>
      <SideBar sideActive={sideActive} setSideActive={setSideActive} />
    </>
  )
}

export default NavBar