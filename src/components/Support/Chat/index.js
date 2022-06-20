import React from 'react'
import SupportChat from './supportChat'
import UsersInfo from './usersInfo'

const SupportChats = ({ chatActive , setChatActive }) => {
  const [ supportChat , setSupportChat ] = React.useState(false)
  
  return (
    <>
      {
        supportChat === false ? 
        <UsersInfo 
          chatActive={chatActive} 
          setChatActive={setChatActive} 
          setSupportChat={setSupportChat}
          supportChat={supportChat}
        />  
        : 
        <SupportChat 
          chatActive={chatActive} 
          setChatActive={setChatActive} 
          supportChat={supportChat}
          setSupportChat={setSupportChat} 
        />
      }
    </>
  )
}

export default SupportChats