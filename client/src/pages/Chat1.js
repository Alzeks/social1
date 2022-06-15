import React, {useEffect, useState, useContext} from 'react'
import {Col, Card, Button, Image, Row, Container,
Input} from 'react-bootstrap'
import {getOneUser} from '../API/usersApi'
import { fetchChat, fetchChats, createChat, createMessage,
  getMessages} from '../API/ChatApi'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import logo from '../logo.svg';

const Chat = observer( ()=>{
  const {userStore} = useContext(Context)
  const [userData, setUserData] = useState()
  const [user2Data, setUser2Data] = useState({auth: {}})
  const [chatId, setChatId] = useState({})
  const [chats, setChats] = useState([])
  const [isThisChat, setIsThisChat] = useState(false)
  const [chat, setChat] = useState({})
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')

  useEffect(()=>{
       fetchChats( userStore.mainUser.id, userStore.chat2User.id).then(
     data=>{console.log(data);
    if(data.length !== 0){if(data == 'no data')return null
      setChats(data);console.log(chats)}
else{
   console.log(data.length);
   //createChat(user.myId, user.selectedId).then(data=>{
//    let b = new Promise(function(resolve,reject){
//    if(userData){resolve(userData)}})
// b.then((data)=>{console.log(data)
//})
  createChat(userStore.mainUser.id, userStore.chat2User.id,
    userStore.mainUser.name,userStore.mainUser.img,
    userStore.chat2User.name, userStore.chat2User.img
).then(data=>{
  if(!data)return data=[{chatId: 0}]
  setChats(data); console.log(data);
  })
}
})
  }, [])
  const setThisChat = (chat) => {setIsThisChat(true);
    console.log(chat);
    setChatId(chat.id);console.log(chat.id)
  getMessages(chat.id).then(data=>{console.log(data);
    setMessages(data)})
  }
  const sendMessage = () => {
createMessage(value, chatId, userStore.mainUser.id).then(data => {
      console.log(data);setMessages(data)
   })
  }

  return(
   <Container className='Chat'>
  Chat
 <Card style={{background: 'lightgrey'}}>
 <Row >
 {!chats ? <div>loading...</div> :
  <Col md={3}>
   <Card
      style={{ height: 620}}>
  {chats.map(oneChat => <div
    key={oneChat.id} onClick={()=>{setChat(oneChat);
    setThisChat(oneChat)}}>
<Card >
<div style={{background: chat.id === oneChat.id? 'lightgrey' : '' }}>
  <div>

 {oneChat.oneId === userStore.myId ?
  <div> <img style={{width: 32, height: 30, cursor: 'pointer'}}
    src={oneChat.twoImg ? 'http://localhost:8000/' +
    oneChat.twoImg : ''}/>
   {oneChat.twoName}</div> :
   <div> <img style={{width: 32, height: 30, cursor: 'pointer'}}
     src={oneChat.oneImg ? 'http://localhost:8000/' +
     oneChat.oneImg : ''}/>
    {oneChat.oneName}</div>
    }
</div>
  chat{oneChat.id} one{oneChat.oneId} two{oneChat.twoId}
</div>
</Card >
</div>)}
</Card >
  </Col >
}

{isThisChat &&
<Col md={9} >
 <div
className='d-flex flex-row align-items-left m-2'>
</div>
<Card style={{ height: 500}} className= 'p-2 bg-light'>
  {messages.map(el=><Card>  <div  key={el.id} style={{
   background: el.typeMessage == userStore.myId ? 'lightgrey' : 'grey'}}>

   {el.typeMessage === chat.oneId ?
<div><img style={{width: 42, height: 40, cursor: 'pointer'}}
     src={chat.oneImg ? 'http://localhost:8000/' +
     chat.oneImg : logo}/>
     { el.message}
    <div>{chat.oneName}</div>
</div> :
    <div><img style={{width: 42, height: 40, cursor: 'pointer'}}
      src={chat.twoImg ? 'http://localhost:8000/' +
      chat.twoImg : logo}/>{el.message}
     <div>{chat.twoName}</div>
     </div>
   }
  </div></Card>)}
  </Card>

<Card className= 'p-3 bg-light' style={{ height: 130}}>
<div>
<input style={{ width: 470, height: 60}}
value={value}onChange={e=>setValue(e.target.value)}/>
       </div>
  <div><Button onClick={()=>sendMessage()}>Send Message</Button></div>

</Card>
   </Col>}
  </Row >
 </Card>
</Container>
  )
})
export default Chat;
