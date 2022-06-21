import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleAuth from '../../Login/GoogleAuth/GoogleAuth'
import cls from './EmailRegist.module.scss'
import FormInput from '../../../components/FormInput/FormInput'
import FormButtons from '../../../components/FormButton/FormButtons'
import { handleRegistWithEmail } from '../../../firebase/firebase'
import { useAuth } from '../../../providers/useAuth'




const EmailRegist = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    return (
        <React.Fragment>
            <div className={cls.login}>
                <form>
                    <h1>Регистрация</h1>
                    <FormInput
                        type={'text'}
                        name={'userName'}
                        placeholder={'Имя пользователя'}
                        defaultValue={name}
                        setInputsValue={setName}
                    />
                    <FormInput
                        type={'email'}
                        name={'Email'}
                        placeholder={'Адрес электронной почты'}
                        defaultValue={email}
                        setInputsValue={setEmail}
                    />
                    <FormInput
                        type={'password'}
                        name={'Пароль'}
                        placeholder={'Пароль'}
                        defaultValue={password}
                        setInputsValue={setPassword}
                    />
                  
                    <FormButtons
                        title={'Зарегистрироваться'}
                        handleSubmit={handleRegistWithEmail(email , password , name)}
                    />
                    <li>
                        <span></span>
                        <li>или</li>
                        <span></span>
                    </li>
                    <li className={cls.havent}>
                        Уже есть аккаунт?
                        <Link to='/auth/login'>
                            Войти
                        </Link>
                    </li>
                    <GoogleAuth />
                </form>
            </div>
        </React.Fragment>
    )
}

export default EmailRegist
