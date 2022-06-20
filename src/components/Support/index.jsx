import React from 'react'
import cls from './Support.module.scss'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import SupportChats from './Chat'

const Support = () => {
 
  const [ chatActive , setChatActive ] = React.useState(false)

  return (
    <>
      {
        chatActive === false ? 
          ''
        : 
        <SupportChats 
          chatActive={chatActive} 
          setChatActive={setChatActive} 
        />
      }
      <div 
        className={cls.support}
        onClick={() => {
          setChatActive(true)
        }}
      >
        <li>
          <HiOutlineChatAlt2 />
        </li>
      </div>
    </>
  )
}

export default Support