import React from 'react'
import cls from './SupportChat.module.scss'
import { RiSendPlaneFill } from 'react-icons/ri'
import { IoMdClose } from 'react-icons/io'
import { Message } from '../../../../configs/api'
import { useAuth } from '../../../../providers/useAuth'

const SupportChat = ({ setChatActive }) => {

  const [ database, setDataBase ] = React.useState(null)
  const [ text, setText ] = React.useState('')
  
  const { users } = useAuth()

  React.useEffect(() => {
    Message.get(users && users.id) 
      .then(res => {
        const result = Object.entries(res.data && res.data)
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
      name: users.name,
      message: text,
      answer: false,
      times: {
        hour: time.getHours(),
        minute: time.getMinutes()  
      }
    })
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

            database && database.map(({name, message, answer, times}, i) => (
              <div className={ answer ? cls.answerContainer : cls.messageContainer}>
                <div 
                className={answer ? cls.answer : cls.myMessage}
                key={i}
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
            )) 
          } 
        </div>
      </div>
      <div 
        className={cls.send_container}
      >
        <input  
          type="text"  
          placeholder='Ваше сообщение'
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