import React, {useEffect, useState, useContext} from 'react'
import {Card, Button} from 'react-bootstrap'
import {fetchChats, createChat, deleteChat} from '../API/ChatApi'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import logo from '../logo.svg';

const Chat = observer( ({isMessagesPage})=>{
  const {userStore} = useContext(Context)
  const [chats, setChats] = useState([])
  const [chat, setChat] = useState({})

  useEffect(()=>{
  fetchChats( userStore.mainUser.id, userStore.chat2User.id)
  .then(data=>{
    if(data.length !== 0){if(data == 'no data')return null
      setChats(data)
    }
else{
createChat(userStore.mainUser.id, userStore.chat2User.id ,
    userStore.mainUser.name,userStore.mainUser.img,
    userStore.chat2User.name, userStore.chat2User.img
).then(data=>{
  if(!data)return data=[{chatId: 0}]
  setChats(data);userStore.setChatUser(data.id)
  })
}
})
}, [])
  const messagesPage = (chat) => {
    isMessagesPage()
    userStore.setOneChat(chat)
  }
const delete_Chat = (chatId)=>{
  deleteChat(chatId,  userStore.mainUser.id).then(data=>{
   setChats(data)
})
}
//</div>chat{oneChat.id} one{oneChat.oneId} two{oneChat.twoId}</div>
  return(
<Card style={{background: 'lightgrey'}}>
<Card style={{height: 720}} >
{chats.map(oneChat => <div
      key={oneChat.id} onClick={()=>{setChat(oneChat);
      messagesPage(oneChat)}}>
<Card >
<div style={{background: chat.id === oneChat.id? 'lightgrey' : '' }}>
<div>
            {oneChat.oneId === userStore.mainUser.id ?
<div> <img style={{width: 42, height: 40, cursor: 'pointer'}}
    src={oneChat.twoImg ? 'http://localhost:8000/' +
    oneChat.twoImg : logo}/>
    {oneChat.twoName}
<Button  style={{color: 'blue', fontSize: '12px'}}variant={'outline-non'}
       className="position-absolute bottom-0 end-0"
       onClick={()=>delete_Chat(oneChat.id)}>Delete</Button>
</div> :
<div> <img style={{width: 42, height: 40, cursor: 'pointer'}}
     src={oneChat.oneImg ? 'http://localhost:8000/' +
     oneChat.oneImg : logo}/>
     {oneChat.oneName}
<Button  style={{color: 'blue', fontSize: '12px'}}variant={'outline-non'}
       className="position-absolute bottom-0 end-0"
        onClick={()=>delete_Chat(oneChat.id)}>Delete</Button>
</div>
}
</div>  </div>
</Card >
</div>)}
</Card >
</Card>
  )
})
export default Chat;
