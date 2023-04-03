import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Members from "./components/Members";
import Profile from "./components/Profile";
import Workers from "./components/Workers";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  const [members, setMembers] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [clickMembers, setClickMembers] = useState(false);
  const [clickWorkers, setClickWorkers] = useState(false);
  const [clickProfile, setClickProfile] = useState(false);
  const [clickContact, setClickContact] = useState(false);
  const [clickRegister, setClickRegister] = useState(false);
  const [clickLogin, setClickLogin] = useState(false);
  const [clickHome, setClickHome] = useState(true);


  // ==Get Data
  const getMembers = () => {
    axios.get("http://localhost:3000/members").then((response) => {
      setMembers(response.data);
    });
  };
  const getWorkers = () => {
    axios.get("http://localhost:3000/workers").then((response) => {
      setWorkers(response.data);
    });
  };

  const showHome = () => {
    setClickHome(true);
    setClickMembers(false);
    setClickWorkers(false);
    setClickProfile(false);
    setClickContact(false);
    setClickRegister(false);
    setClickLogin(false);
  };

  const showMembers = () => {
    setClickMembers(true);
    setClickWorkers(false);
    setClickProfile(false);
    setClickContact(false);
    setClickRegister(false);
    setClickHome(false);
    setClickLogin(false);
  };

  const showWorkers = () => {
    setClickMembers(false);
    setClickWorkers(true);
    setClickProfile(false);
    setClickContact(false);
    setClickRegister(false);
    setClickHome(false);
    setClickLogin(false);
  };

  const showProfile = () => {
    setClickMembers(false);
    setClickWorkers(false);
    setClickProfile(true);
    setClickContact(false);
    setClickRegister(false);
    setClickHome(false);
    setClickLogin(false);
  };

  const showContact = () => {
    setClickMembers(false);
    setClickWorkers(false);
    setClickProfile(false);
    setClickContact(true);
    setClickRegister(false);
    setClickHome(false);
    setClickLogin(false);
  };

  const showRegister = () => {
    setClickMembers(false);
    setClickWorkers(false);
    setClickProfile(false);
    setClickContact(false);
    setClickRegister(true);
    setClickHome(false);
    setClickLogin(false);
  };
  const showLogin = () => {
    setClickMembers(false);
    setClickWorkers(false);
    setClickProfile(false);
    setClickContact(false);
    setClickRegister(false);
    setClickHome(false);
    setClickLogin(true);
  };



  
  useEffect(() => {
    getMembers();
    getWorkers();
  }, []);

  return (
    <>
      <div class='header'>
      <div class='title-cont'>
      <a href = '#' class='company-title'>HomeCare Services</a>
      </div>
      <div class='nav-cont'>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#" onClick={showHome}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={showLogin}>
              Login
            </a>
          </li>
          <li>
            <a href="#" onClick={showRegister}>
              Register
            </a>
          </li>
          <li>
            <a href="#" onClick={showWorkers}>
              Caretakers
            </a>
          </li>
          <li>
            <a href="#" onClick={showMembers}>
              Members
            </a>
          </li>
          <li>
            <a href="#" onClick={showContact}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      </div>
      </div>
      {clickHome ? (
        <Home 
          showHome={showHome}
          showContact={showContact}
          showRegister={showRegister}
        /> 
      ): null}

      {clickMembers ? (
        <Members
          getMembers={getMembers}
          setMembers={setMembers}
          members={members}
        />
      ) : null}
      {clickProfile ? <Profile /> : null}
      {clickWorkers ? (
        <Workers
          getWorkers={getWorkers}
          setWorkers={setWorkers}
          workers={workers}
        />
      ) : null}
      {clickContact ? <Contact /> : null}
      {clickRegister ? 
      <Register 
        getMembers={getMembers} 
        setMembers={setMembers}
        getWorkers={getWorkers}
        setWorkers={setWorkers}
        showMembers={showMembers}
        showWorkers={showWorkers}
      /> : null}
      {clickLogin ? 
      <Login 
      /> : null}
    </>
  );
};

export default App;
