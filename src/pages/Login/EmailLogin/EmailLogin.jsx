import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import cls from '../../Register/EmailRegist/EmailRegist.module.scss'
import FormInput from '../../../components/FormInput/FormInput'
import GoogleAuth from '../GoogleAuth/GoogleAuth'
import FormButtons from '../../../components/FormButton/FormButtons'
import { handleLoginWithEmail } from '../../../firebase/firebase'




const EmailLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <React.Fragment>
            <div className={cls.login}>
                <form>
                    <h1>Войти</h1>
                    <FormInput
                        type={'email'}
                        name={'Email'}
                        placeholder={'Email'}
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
                    <button
                        className={cls.button}
                        onClick={e => {
                            e.preventDefault()
                            handleLoginWithEmail(email, password)
                        }}
                    >
                        Войти
                    </button>
                    <p>
                        <span></span>
                        <li>или</li>
                        <span></span>
                    </p>
                    <p className={cls.havent}>
                        Нет аккаунта?
                        <Link to='/auth/register'>
                            Регистрация
                        </Link>
                    </p>
                    <GoogleAuth />
                </form>
            </div>
        </React.Fragment>
    )
}

export default EmailLogin
