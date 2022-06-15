

import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UsersStore from './store/UsersStore';

//import reportWebVitals from './reportWebVitals';
// <Context.Provider value={{
//   users: new UsersStore()}}>
export const Context = createContext(null)

ReactDOM.render(
  <React.StrictMode>
  <Context.Provider value={{userStore: new UsersStore()}}>
    <App />
</Context.Provider>,
</React.StrictMode>,
  document.getElementById('root')
);
