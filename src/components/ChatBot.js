import React,{useState} from 'react'
import icon from './Images/header.jpg'
import ChatMessage from './ChatMessage';
import { analyze } from '../utils';

export const ChatBot = () => {
  const [messages,setMessages]=useState([{
    message: "Hi, May i have your name?"
  }]);

  const [text,setText]=useState("");
  const onSend= () =>{
        let list=[...messages,{message:text, user:true}]
        if(list.length>2){
          const reply = analyze(text)
          list=[...list,{message:reply}]
        }
        else{
          list=[
            ...list,
            {
              message: `Hi, ${text} `
            },
            {
              message: "How can i help you?"
            }
          ]
        }
        setMessages(list)
        setText("")
        setTimeout(()=>{
          document.querySelector('#developer').scrollIntoView();

        },1)
  }
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <img src={icon}
        alt="logo"
        height={200}
        width={200} />
       <h1 className='text-primary'>Chatbot</h1>
      </div>
      <div className='chat-message'>
      { messages.length>0 && messages.map((data)=>(
         <ChatMessage
         user={data.user}
         message={data.message} />))}

      <div className='d-flex mt-2'>
        <input type="text"
        className='form-control'
        value={text}
        onChange={(e)=>setText(e.target.value)}/>
        <button type="button" 
        className='btn btn-primary ms-2 rounded'
        onClick={onSend}>Send</button>
      </div>
      <div id='developer' className='mt-3'>Developed by <a href="https://balachandart.github.io/Portfolio/">Balachandar</a></div>


      </div>
     
    </div>
  )
}
