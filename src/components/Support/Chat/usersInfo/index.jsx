import React from 'react'
import cls from './Info.module.scss'
import { IoMdClose } from 'react-icons/io'
import { Message } from '../../../../configs/api'

const UsersInfo = ({chatActive, setChatActive, setSupportChat, supportChat}) => {
  const [ name, setName ] = React.useState('')
  const [ message, setMessage ] = React.useState('')

  const sendInfo = () => {
    const time = new Date()

    if(name.length === 0 || message.length === 0){
      alert('Заполните форму')
    }else{
      setSupportChat(!supportChat)

      Message.post({
        name: name,
        messages: {
          message: message
        },
        times: {
          hour: time.getHours(),
          minute: time.getMinutes()  
        },
      })
    }
  }

  return (
    <div className={chatActive ? cls.info : cls.infoNone}>
      <div className={cls.info_head}>
        <div className={cls.left}>
          <p>Представьтесь и начните чат</p>
        </div>
        <div className={cls.right}>
          <li onClick={() => setChatActive(false)}>
            <IoMdClose />
          </li>
        </div>
      </div>
      <form className={cls.info_form}>
        <input type="text" placeholder="Ваше имя" onChange={e => setName(e.target.value)}/>
        <input type="text" placeholder="Ваше начальное сообщение" onChange={e => setMessage(e.target.value)}/>
        <button onClick={e => {
          e.preventDefault()
          sendInfo()
        }}>Начать диалог</button>
      </form> 
    </div>
  )
}

export default UsersInfo