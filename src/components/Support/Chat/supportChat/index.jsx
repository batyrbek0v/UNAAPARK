import React from 'react'
import cls from './SupportChat.module.scss'
import { RiSendPlaneFill } from 'react-icons/ri'
import { IoMdClose } from 'react-icons/io'
import { Message, Answer } from '../../../../configs/api'

const SupportChat = ({setChatActive}) => {

  const [ database, setDataBase ] = React.useState(null)
  const [ answersBase, setAnswersBase ] = React.useState(null)
  const [ text, setText ] = React.useState('')

  React.useEffect(() => {
    Message.get() 
      .then(res => {
        const result = Object.values(res.data)
        setDataBase(result);
      })

    Answer.get()
      .then(res => {
        const result = Object.values(res.data)
        setAnswersBase(result)
      })

  }, [answersBase])

  const send = () => {
    const time = new Date()
    
    Message.post({
      messages: {
        message: text
      },
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
            database && database.map(({name, messages, times}, i) => (
              <div className={cls.main_block}>
                <div 
                className={cls.myMessage}
                key={i}
                >              
                <div className={cls.mess}>
                    <i>{name}</i>
                    <p>{messages.message}</p>
                  </div>
                  <div className={cls.time}>
                    <p>{times.hour}:{times.minute}</p>
                  </div>
                </div>
              </div>
            )) 
          } 

          {
            answersBase && answersBase.map(({message, times}, i) => (
              <div 
                className={cls.answer}
                key={i}
              >
                <div className={cls.time}>
                  <p>{times.hour}:{times.minute}</p>
                </div>
                <div className={cls.mess}>
                  <i>Служба поддержки</i>
                  <p>{message}</p>
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