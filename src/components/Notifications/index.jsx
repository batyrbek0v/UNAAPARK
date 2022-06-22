import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Message } from '../../configs/api'
import cls from './Notifications.module.scss'


const Notifications = () => {
  const [ chatBase, setChatBase ] = React.useState(null)

  React.useEffect(() => {
    Message.getFirstMessage()
      .then(res => {
        const result = Object.values(res.data)

        var newResult = result && result.filter(item => {
          return item.name === item.name ? item : ''
        })
        console.log(newResult);
      })
    }, [chatBase])
    
    const navigate = useNavigate()

    const toChat = (id) => {
      localStorage.setItem('userId', id)
      navigate('/chat')
    }
<<<<<<< HEAD

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
=======
>>>>>>> 3b93a53a8283c30bfd9b222191ad1643ad4b2ec7

  return (
    <div>
      {
        chatBase && chatBase.map(({id, name, message}, i) => (
        <div 
          className={cls.message}
          onClick={() => toChat(id)}
          key={i}
        >
          
          <p>{name}</p>
          <p>{message}</p>
        </div>
        ))  
      }
<<<<<<< HEAD
    {/* 
      <input type="text" onChange={e => setText(e.target.value)}/>
      <button onClick={() => send()}>Отправить</button> */}
=======
>>>>>>> 3b93a53a8283c30bfd9b222191ad1643ad4b2ec7
    </div>
  )
}

export default Notifications