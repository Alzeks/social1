import React, {useContext} from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'//no in bootstrap
import {Context} from '../index'
import { REGISTRATION_ROUTE,USERS_ROUTE,CHAT_ROUTE,
  MYPAGE_ROUTE} from '../utils/const'
import {observer} from 'mobx-react-lite'
import { Container, Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

const Header = observer(() => {
  const {userStore} = useContext(Context)
  let navigate = useNavigate();
//src='/cart.png'
const exit = () =>{
  userStore.setChat2User({})
  userStore.setMainUser({});
  userStore.setIsAuth(false)
  navigate('USERS_ROUTE')
}
  return (
<Navbar bg="dark" variant="dark" className='App-header'>
<Container style={{width: '800px'}}>
<Link style={{color: 'white', fontSize: '17px'}} to='/'
      className={'text-decoration-none ms-4'} >Home
      </Link>
<Navbar.Brand >NASA Chat</Navbar.Brand>
<Nav>
      { userStore.isAuth ? <div >
<Link style={{color: 'white', fontSize: '17px'}} to={USERS_ROUTE}
        className={'text-decoration-none font-size-2px'}>Users
        </Link>
<Link to={CHAT_ROUTE} style={{color: 'white', fontSize: '17px'}}
       className={'text-decoration-none m-3' }>
       <img width={30} alt='img' src='/cart.png'/>
       </Link>
<Link to={CHAT_ROUTE} style={{color: 'white', fontSize: '17px'}}
            className={'text-decoration-none m-2' }>Chat
            </Link>
<Link to={MYPAGE_ROUTE} style={{color: 'white', fontSize: '17px'}}
            className={'text-decoration-none m-3' }>MyPage
            </Link>
<Button onClick={() => exit()}className={'bg-blue me-4'}
         > Exit</Button>
</div> :
        <div>
<Link to={REGISTRATION_ROUTE} style={{color: 'white', fontSize: '20px'}}
        className={'text-decoration-none me-4'}
        > ENTER</Link>
<Link to={CHAT_ROUTE}style={{color: 'white'}}
        className={'text-decoration-none'}>
      </Link>
</div>
      }
      </Nav>
</Container>
</Navbar>
);
})
export default Header;
