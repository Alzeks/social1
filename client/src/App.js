import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React, { useState, useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import MyAva from './components/MyAva'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
<Header/>
<AppRouter/>
<MyAva/>
  </div>
    </BrowserRouter>
  );
}

export default App;
