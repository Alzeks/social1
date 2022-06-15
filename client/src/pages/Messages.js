import React, {useEffect, useState, useContext} from 'react'
import {Col, Card, Button} from 'react-bootstrap'
import {createMessage, deleteMessage, getMessages} from '../API/ChatApi'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import logo from '../logo.svg';

const Chat = observer( ()=>{
const {userStore} = useContext(Context)
  const [chat, setChat] = useState({})
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')

  useEffect(()=>{
    setChat(userStore.oneChat)
    getMessages(userStore.oneChat.id).then(data=>{
    setMessages(data)})
  }, [userStore.oneChat, ])

  const sendMessage = () => {
createMessage(value, userStore.oneChat.id, userStore.mainUser.id).then(data => {
      setMessages(data); setValue('')})
  }
  const delete_Messages = (id, chatId)=>{
  deleteMessage(id, chatId).then(data=>{setMessages(data)})
  }
 return(
<Col  >
<Card style={{ height: 500}} className = 'p-2 bg-light'>
     {messages.map(el=>
<Card>      <div  key={el.id} style={{
   background: el.typeMessage == userStore.mainUser.id ? 'grey' : 'lightgrey'}}>
   {el.typeMessage === chat.oneId ?
<div>
<img style={{width: 42, height: 40, cursor: 'pointer'}}
     className='me-2'
     src={chat.oneImg ? 'http://localhost:8000/' +
     chat.oneImg : logo}/>
     { el.message}
    <div>{chat.oneName}
<Button style={{color: 'blue'}}variant={'outline'}
className="position-absolute bottom-0 end-0"
    onClick={()=>delete_Messages(el.id, chat.id)}>Delete</Button>
</div>
</div> :
<div>
  <img style={{width: 42, height: 40, cursor: 'pointer'}}
      className='me-2'
      src={chat.twoImg ? 'http://localhost:8000/' +
      chat.twoImg : logo}/>{el.message}
<div>{chat.twoName}
<Button  style={{color: 'blue'}}variant={'outline-non'}
      className="position-absolute bottom-0 end-0"
      onClick={()=>delete_Messages(el.id, chat.id)}>Delete</Button>
</div>
</div>
   }
  </div></Card>
)}
</Card>

<Card className= 'p-3 bg-light' style={{ height: 130}}>
<div>
<input style={{ width: '100%', height: 60}}
     value={value}onChange={e=>setValue(e.target.value)}/>
</div>
<div><Button onClick={()=>sendMessage()}>Send Message</Button></div>
</Card>
</Col>
  )
})
export default Chat;
