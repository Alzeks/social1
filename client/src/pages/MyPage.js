import React, {useEffect, useState, useContext} from 'react'
import {getOneUser, deleteUser} from '../API/usersApi'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {Col, Container, Button, Card, Row} from 'react-bootstrap'
import AddPhoto from '../components/modal/AddPhoto'
import {useNavigate} from 'react-router-dom'

const MyPage = observer( () =>  {
  const {userStore} = useContext(Context)
const [userData, setUserData] = useState({})
const navigate  = useNavigate();

const [isCreatePhoto, setIsCreatePhoto] = useState(false)
const [isChangePhone, setIsChangePhone] = useState(false)
  const [isDeleteUser, setIsDeleteUser] = useState(false)

useEffect(() =>{
  getOneUser(userStore.mainUser.id).then(data => {
    if(!data)return {name: 'need registration'}
    setUserData(data)})
}, [])
const delete_Acoun = () => {
  deleteUser(userStore.mainUser.id).then(data=>{console.log(data);
    if(data === 1){ userStore.setMainUser({})
    userStore.setIsAuth(false); navigate('/')}
    else {return null}
  })
}
return(
    <Container className='User' style={{ height: 800}}>
<Card>
MyPage
<Row>
<Col md={3} className='m-3' >
<Card>
<img
src={'http://localhost:8000/' + userData.img}/>
</Card>
<div>name:{ userData.name}</div>
<div>phone:{ userData.phone}</div>
</Col>
<Col  md={5}>
<Button className={'mt-2'} variant={'outline-dark'}
onClick={()=> delete_Acoun()}>Delete Acount</Button>
</Col>
</Row>
<Container className={'d-flex flex-column'}>
<Button className={'mt-2'} variant={'outline-dark'}
onClick={()=> setIsCreatePhoto(true)}>Chenge Photo</Button>
<Button className={'mt-2'} variant={'outline-dark'}
onClick={()=> setIsCreatePhoto(true)}>Delete Photo</Button>
<Button variant={'outline-dark'} className={'mt-2'}
onClick={()=> setIsChangePhone(true)}>Change phone</Button>
<Button variant={'outline-danger'}className={'mt-2'}
onClick={()=> setIsDeleteUser(true)}>Delete User </Button>

<AddPhoto show={isCreatePhoto} onHide={() => setIsCreatePhoto(false)}/>

</Container>
</Card>
    </Container>
  )
})
export default MyPage;
