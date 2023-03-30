import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Home from './components/Home'
import Members from './components/Members'
import Profile from './components/Profile'
import Workers from './components/Workers'
import Contact from './components/Contact'
import Login from './components/Login'

const App = () => {

  
  return (
    <>
    {/* <nav className='navbar'>
      <ul>
        <li><a href='#' id=''>Home</a></li>
        <li><a href='#' id=''>Sign Up</a></li>
        <li><a href='#' id=''>Workers</a></li>
        <li><a href='#' id=''>Clients</a></li>
        <li><a href='#' id=''>Contact</a></li>
      </ul>
    </nav> */}
      <Home/>
      <Members/>
      <Profile/>
      <Workers/>
      <Contact/>
      <Login/>
    </>
  )
}

export default App;
