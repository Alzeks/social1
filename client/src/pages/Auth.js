import React, {useContext, useState} from 'react'
import {login, registration} from '../API/authAPI'
import {Container, Row, Card, Button, Form} from 'react-bootstrap'
import {NavLink, Link, useLocation, useNavigate} from 'react-router-dom'
import {LOGIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE} from '../utils/const'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'

const Auth = observer( () => {
  const {userStore} = useContext(Context)
const location = useLocation()
const isLogin = location.pathname === LOGIN_ROUTE
const {token, setToken} = useState(null)

 let navigate = useNavigate();
 const [password, setPassword] = useState('')
 const [name, setName] = useState('')
 const [phone, setPhone] = useState('')
const [dataErr, setDataErr] = useState('')

   const click = async () => {
     try{
        let data;
        if(isLogin){
        data = await login(phone, password)
        console.log('pass login');
          setDataErr(data.mess)
        }
         else{
          data = await registration(phone, password, name)
        console.log('pass registration');
        setDataErr(data.mess)
      }if(data.mess)return null
            userStore.setMainUser(data.mainUser)
            userStore.setChat2User({})
            userStore.setIsAuth(true)
            navigate(USER_ROUTE)
          }catch(e){
            alert(e.response.data.message)
          }
          }
  return (
  <Container className='d-flex justify-content-center align-items-center'
  style={{height: window.innerHeight - 54}}
  >
<Card className='align-items-center' style={{width: 600, height: 255}}
>
<h2 className=''>{isLogin ? 'authorisation' : 'registration'}</h2>
<Form className='d-flex flex-column' style={{width: 400}}
>
<div style={{color: 'red'}}>
{dataErr === 'no base params' ? 'no base params' : ''}
{dataErr === 'exist' ? 'user exist' : ''}
{dataErr === 'no sach user' ? 'no sach user' : ''}
{dataErr === 'no sach password' ? 'no sach password' : ''}
</div>
<Form.Control className='mt-2' placeholder='enter phone'
     value={phone} onChange={e => setPhone(e.target.value)}
/>
<Form.Control className='mt-2' placeholder='enter password' type='password'
     value={password} onChange={e => setPassword(e.target.value)}/>
{isLogin ? '' :
<Form.Control className='mt-2' placeholder='enter name'
      value={name} onChange={e => setName(e.target.value)}
 />}

</Form>
<Row className='mt-2'>
{isLogin ? <div> no registration? <NavLink to={REGISTRATION_ROUTE}
        >get registration </NavLink>
<Button  variant={"outline-success"} onClick={click}>Log in
</Button>
</div> :
<div>registrated? <Link to={LOGIN_ROUTE}>get authorisation </Link>
<Button  variant={"outline-success"} onClick={click}>registration
</Button>
</div>
}
</Row>
</Card>
</Container>
);
})
export default Auth;
