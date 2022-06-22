import React from 'react'
import cls from './SupportChat.module.scss'
import { RiSendPlaneFill } from 'react-icons/ri'
import { IoMdClose } from 'react-icons/io'
import { Message } from '../../../../configs/api'
import { useAuth } from '../../../../providers/useAuth'
import * as smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

const SupportChat = ({ setChatActive }) => {

  const [ database, setDataBase ] = React.useState(null)
  const [ text, setText ] = React.useState('')
  
  const { users } = useAuth()

  React.useEffect(() => {
    Message.get(users.id) 
      .then(res => {
        const result = Object.entries(res.data !== null ? res.data : '')
          .map(([key, value]) => {
            return {
              id: key, 
              ...value
            }
          })
        setDataBase(result);
      })

  }, [database])


  const send = () => {
    const time = new Date()

    Message.post(users.id, {
      id: users.id,
      name: users.name,
      message: text.length < 0 ? alert('Напишите что-нибудь') : text, 
      answer: false,
      times: {
        hour: time.getHours(),
        minute: time.getMinutes()  
      }
    })

    Message.postFirstMessage({
      id: users.id,
      name: users.name,
      message: text.length < 0 ? alert('Напишите что-нибудь') : text, 
      answer: false,
      times: {
        hour: time.getHours(),
        minute: time.getMinutes()  
      }
    })

    setText('')

    
  }

  return (
    <div className={cls.support}>
      <div className={cls.support_head}>
        <div className={cls.left}>
          <img src="https://prosystems.kz/templates/template_name/images/pfr/its.png" alt="" />
          <p>Служба поддержки</p>
        </div>
        <div className={cls.right}>
          <li onClick={() => setChatActive(false)}>
            <IoMdClose />
          </li>
        </div>
      </div>
      <div 
        className={cls.chat_container}
      >
        <div className={cls.myMessages}>
          {

            database !== null ? database.map(({id, name, message, answer, times}, i) => (
              <div 
                className={ answer ? cls.answerContainer : cls.messageContainer} 
                key={i}
              >
                <div 
                  className={answer ? cls.answer : cls.myMessage}
                >              
                <div className={cls.mess}>
                    <i>{answer ? 'Служба поддержки' : name}</i>
                    <p>{message}</p>
                  </div>
                  <div className={cls.time}>
                    <p>{times.hour}:{times.minute}</p>
                  </div>
                </div>
              </div> 
            )) : ''
          } 
        </div>
      </div>
      <div 
        className={cls.send_container}
      >
        <input  
          type="text"  
          placeholder='Ваше сообщение'
          value={text}
          onChange={e => {
            setText(e.target.value)
          }}
        />
        <li onClick={e => {
          e.preventDefault()
          send()
        }}>
          <RiSendPlaneFill />
        </li>
      </div>
    </div>
  )
}

export default SupportChat