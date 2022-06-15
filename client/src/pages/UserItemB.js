import React, {useContext} from 'react'
import { useNavigate } from "react-router-dom"
import {USER_ROUTE, CHAT_ROUTE} from "../utils/const"
import logo from '../logo.svg';
//import ava from '../ava.svg';
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {Col, Card, Button, Image, Row, Container} from 'react-bootstrap'

const UserItemB = observer( ({user}) =>  {
 const {userStore} = useContext(Context)
const navigate  = useNavigate();
//src='https://klike.net/uploads/posts/2020-07/1594278030_1.jpg'

const create_Chat = (userChat) => {
  userStore.setChat2User(userChat)
  navigate(CHAT_ROUTE)
}

  return(
<Container className='bg-light'>
<Card>{user.id === userStore.mainUser.id ||
  <Row md={4} className='bg-light'>
    <Col md={3}>

<Image style={{width: 62, height: 60, cursor: 'pointer'}}
     src={'http://localhost:8000/' + user.img} alt='img'
      onClick={() => navigate(USER_ROUTE + '/' + user.id)}
      />
            <Card>{user.name}</Card>
    </Col>
    <Col md={4}>
      <div>
         <div className='text-black-50'>{user.name}</div>
         <div>Phone:{ user.phone}</div>
         <div className='text-black-50'> {user.name}</div>
      </div>
    </Col>
    <Col md={4}>
<Button style={{color: 'grey'}} variant={'outline'}
      onClick={()=>create_Chat(user)}>Chat</Button>
    </Col>
  </Row>
}</Card>
</Container>
  )
})
export default UserItemB;
