import React, {useEffect, useState} from 'react'
import {getOneUser} from '../API/usersApi'
import {useParams} from 'react-router-dom'
import {Col, Card, Button, Row, Container} from 'react-bootstrap'
import logo from '../logo.svg';

const User =  () =>  {
const {id} = useParams()
const [userData, setUserData] = useState({})

useEffect(() =>{
  getOneUser(id).then(data => {
    if(!data)return setUserData({id: 'no data'})
    setUserData(data)})
}, [])

  return(
    <div className='User'>
    <Container style={{width: 700, height: 700,background: 'grey'}}
    className={' d-flex align-items-center justify-content-center'}>
    <Card style={{width: 500, height: 500,background: 'lightgrey'}}>
  UserAva
  <Row>
  <Col md={6} className='m-3' >
  <Card style={{width: 162, height: 160, cursor: 'pointer'}}>
  <img Alt='img'
  src={userData.img ? 'http://localhost:8000/' + userData.img
  : logo}/>
  </Card>
  </Col>

  <Col md={4}>
  <div>name: { userData.name}</div>
  <div>phone:  { userData.phone}</div>
  <Button
      className={'bg-blue me-4'}
        >Let chat</Button>
  </Col>
  </Row>
  </Card>
  </Container>

    </div>
  )
}//)
export default User;
