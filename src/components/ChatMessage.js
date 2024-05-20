import React from 'react'
import  {Person, ChatDots } from "react-bootstrap-icons"

const ChatMessage = ({user,message}) => {
  return (
    <div className={`d-flex ${user && 'justify-content-end'}`}>
      {
        user ?(
          <span className='message-right'> 
            <span className='message-text'>{message}</span>
            <Person className='message-icon' />
          </span>
        ):(
          <span className='message-left'>
            <ChatDots  className='message-icon' />
            <span className='message-text'>{message}</span>
          </span>
        )
      }
    </div>
  )
}

export default ChatMessage