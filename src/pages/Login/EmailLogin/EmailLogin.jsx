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
                    <FormButtons
                        title={'Войти'}
                        handleSubmit={handleLoginWithEmail(email, password)}
                    />
     
                    <li>
                        <span></span>
                        <li>или</li>
                        <span></span>
                    </li>
                    <li className={cls.havent}>
                        Нет аккаунта?
                        <Link to='/auth/register'>
                            Регистрация
                        </Link>
                    </li>
                    <GoogleAuth />
                </form>
            </div>
        </React.Fragment>
    )
}

export default EmailLogin
