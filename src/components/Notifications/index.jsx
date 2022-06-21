import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Message } from '../../configs/api'
import ChatAdmin from '../ChatAdmin'
import cls from './Notifications.module.scss'


const Notifications = () => {
  const [ chatBase, setChatBase ] = React.useState(null)

  React.useEffect(() => {
    Message.getFirstMessage()
      .then(res => {
        const result = Object.values(res.data)
        
        setChatBase(result)

      })
    }, [chatBase])
    
    const navigate = useNavigate()

    const toChat = (id) => {
      localStorage.setItem('userId', id)
      navigate('/chat')
    }
    
  // const send = () => {
  //   const time = new Date()

  //   Message.post( users.id, {
  //     message: text, 
  //     answer: true,
  //     times: {
  //       hour: time.getHours(),
  //       minute: time.getMinutes()  
  //     }
  //   })
  // }

  return (
    <div>
      {
        chatBase && chatBase.map(({id, name, message}) => (
          <div 
            className={cls.message}
            onClick={() => toChat(id)}
          >
            <p>{name}</p>
            <p>{message}</p>
          </div>
        ))
      }
{/* 
      <input type="text" onChange={e => setText(e.target.value)}/>
      <button onClick={() => send()}>Отправить</button> */}
    </div>
  )
}

export default Notifications