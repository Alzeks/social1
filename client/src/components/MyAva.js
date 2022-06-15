import React, {useEffect, useState, useContext} from 'react'
import {getOneUser} from '../API/usersApi'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {Col, Container, Button, Image,Card} from 'react-bootstrap'
import AddPhoto from '../components/modal/AddPhoto'
import logo from '../logo.svg';
import {useNavigate} from 'react-router-dom'

const MyPage = observer( () =>  {
  const {userStore} = useContext(Context)
  let navigate = useNavigate();
const [userData, setUserData] = useState({})

  const [isCreateDevice, setIsCreateDevice] = useState(false)
//<img src={logo}/>
return(
<div className='User'>
MyAva
<Col md={2} className='m-3' >
<Card style={{width: 170, height: 95, cursor: 'pointer'}}
      className ='p-2'>
     {userStore.mainUser.phone ? <div>
<img style={{width: 72, height: 70, cursor: 'pointer'}}
    onClick={()=>  navigate('/MyPage')}
    src={'http://localhost:8000/' + userStore.mainUser.img}/>
    { userStore.mainUser.name}</div> :
    <div>Login in or registrate</div>}
</Card>
</Col>
</div>
  )
})
export default MyPage;
