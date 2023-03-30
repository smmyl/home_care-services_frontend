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
  const[members, setMembers] = useState([])
  const[workers, setWorkers] = useState([])

  // ==Get Data
  const getMembers = () => {
      axios.get('http://localhost:3000/members').then((response) => {
          setMembers(response.data)
      })
  }
  const getWorkers = () => {
    axios.get('http://localhost:3000/workers').then((response) => {
        setWorkers(response.data)
    })
  }

  useEffect(() => {
    getMembers()
    getWorkers()
  }, [])

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
      <Members
        getMembers = {getMembers}
        setMembers = {setMembers}
        members = {members}
      />
      <Profile/>
      <Workers
        getWorkers = {getWorkers}
        setWorkers = {setWorkers}
        workers = {workers}
      />
      <Contact/>
      <Login
        getMembers = {getMembers}
      />
    </>
  )
}

export default App;
