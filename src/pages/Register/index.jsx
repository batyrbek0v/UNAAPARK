import React from 'react'
import cls from './login.module.scss'
import { useAuth } from '../../providers/useAuth'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader'
import EmailRegist from './EmailRegist/EmailRegist'

const Register = () => {

  
  return (
    <div className={cls.login}>
      <EmailRegist />      
    </div>

  )
}

export default Register