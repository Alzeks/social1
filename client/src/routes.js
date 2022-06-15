
//import Admin from './pages/admin'
import Chat from './pages/Chat'
import Users from './pages/Users'
import Auth from './pages/Auth'
import User from './pages/User'
import MyPage from './pages/MyPage'
import { CHAT_ROUTE, USERS_ROUTE,LOGIN_ROUTE, MYPAGE_ROUTE,
REGISTRATION_ROUTE, USER_ROUTE, NOTFOUND_ROUTE} from './utils/const'

export const authRoutes = [
  {
    path: USERS_ROUTE,
    Component: <Users/>
  },
{
  path: CHAT_ROUTE,
  Component: <Chat/>
},
{
  path: USER_ROUTE + '/:id',
  Component: <User/>
},
{
  path: MYPAGE_ROUTE,
  Component: <MyPage/>
},
{
  path: NOTFOUND_ROUTE ,
  Component: <Users/>
}
]
export const pablicRoutes = [
  {
    path: USERS_ROUTE,
    Component: <Users/>
  },
  {
    path: LOGIN_ROUTE,
    Component: <Auth/>
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth/>
  },
  // {
  //   path: USER_ROUTE + '/:id',
  //   Component: <User/>
  // },
  {
    path: NOTFOUND_ROUTE ,
    Component: <Users/>
  }
]
