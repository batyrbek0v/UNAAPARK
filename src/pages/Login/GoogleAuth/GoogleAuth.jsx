import React from 'react'
import cls from './GoogleAuth.module.scss'
import Google from  '../../../components/images/Google.png'
import { handleLoginWithGoogle } from '../../../firebase/firebase'
import { addNewUser } from '../../../configs/api'
import { useAuth } from '../../../providers/useAuth'

const GoogleAuth = () => {
    const { users } = useAuth()

    React.useEffect(() => {
      if(users){
        addNewUser.post(users)
      }
    }, [users])

    return (
        <div>
            <button
                className={cls.button}
                onClick={e => {
                    e.preventDefault()
                    handleLoginWithGoogle()
                }}
                >
                <img src={Google} alt="Google-Logo"/>
                Войти с Google
            </button>
        </div>
    )
}

export default GoogleAuth
