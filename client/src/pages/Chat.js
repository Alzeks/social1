import React, {useState} from 'react'
import {Col, Card, Row, Container} from 'react-bootstrap'
import ChatPage from './ChatPage'
import Messages from './Messages'

const Chat =  ()=>{

  const [isMessages, setIsMessages] = useState(false)

const isMessagesPage =()=> {setIsMessages(true)}
  return(
<Container className='p-3'style={{background: 'grey'}}>
  ChatPage
<Card  style={{background: 'lightgrey'}}>
<Row >
<Col md={3} >
<ChatPage isMessagesPage={isMessagesPage}/>
</Col>
{ isMessages &&
<Col md={9} style={{background: 'grey'}}>
<Messages/>
</Col>}
</Row >
</Card>
</Container>
  )
}
export default Chat;
