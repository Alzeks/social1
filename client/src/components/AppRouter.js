import ReactDOM from "react-dom"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {pablicRoutes, authRoutes} from '../routes'
import {SHOP_ROUTE} from '../utils/const'

const AppRouter = () => {
  const isAuth = true
  //const isAuth = useSelector(state => state.users.isAuth)
  console.log(isAuth);

  return (
<Routes>
{pablicRoutes.map(({path, Component}) =>
<Route key={path} path={path} element={Component} exact/>
)}
{isAuth && authRoutes.map(({path, Component}) =>
<Route key={path} path={path} element={Component}/>
)}

</Routes>

);
}
export default AppRouter;
