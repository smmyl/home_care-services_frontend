import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Home from './components/Home'
import Members from './components/Members'
import Profile from './components/Profile'
import Workers from './components/Workers'
import Contact from './components/Contact'

const App = () => {

  
  return (
    <>
      <Home/>
      <Members/>
      <Profile/>
      <Workers/>
      <Contact/>
    </>
  )
}

export default App;
