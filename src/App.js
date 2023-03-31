import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Members from "./components/Members";
import Profile from "./components/Profile";
import Workers from "./components/Workers";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from"./components/Signup";

const App = () => {
  const [members, setMembers] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [clickMembers, setClickMembers] = useState(false);
  const [clickWorkers, setClickWorkers] = useState(false);
  const [clickProfile, setClickProfile] = useState(false);
  const [clickContact, setClickContact] = useState(false);
  const [clickLogin, setClickLogin] = useState(false);
  const [clickSignup, setClickSignup] = useState(false)
  const [clickHome, setClickHome] = useState(true);

  // ==Get Data
  const getMembers = () => {
    axios.get("http://localhost:3000/members").then((response) => {
      setMembers(response.data);
      setClickMembers(false);
      setClickWorkers(false);
      setClickProfile(false);
      setClickContact(false);
      setClickLogin(false);
      setClickSignup(false)
    });
  };
  const getWorkers = () => {
    axios.get("http://localhost:3000/workers").then((response) => {
      setWorkers(response.data);
      setClickMembers(false);
      setClickWorkers(false);
      setClickProfile(false);
      setClickContact(false);
      setClickLogin(false);
      setClickSignup(false)
    });
  };

  const showHome = () => {
    setClickHome(true);
    setClickMembers(false);
    setClickWorkers(false);
    setClickProfile(false);
    setClickContact(false);
    setClickLogin(false);
    setClickSignup(false)
  };

  const showMembers = () => {
    setClickMembers(true);
    setClickWorkers(false);
    setClickProfile(false);
    setClickContact(false);
    setClickLogin(false);
    setClickHome(false);
    setClickSignup(false)
  };

  const showWorkers = () => {
    setClickMembers(false);
    setClickWorkers(true);
    setClickProfile(false);
    setClickContact(false);
    setClickLogin(false);
    setClickHome(false);
    setClickSignup(false)
  };

  const showProfile = () => {
    setClickMembers(false);
    setClickWorkers(false);
    setClickProfile(true);
    setClickContact(false);
    setClickLogin(false);
    setClickHome(false);
    setClickSignup(false)
  };

  const showContact = () => {
    setClickMembers(false);
    setClickWorkers(false);
    setClickProfile(false);
    setClickContact(true);
    setClickLogin(false);
    setClickHome(false);
    setClickSignup(false)
  };

  const showLogin = () => {
    setClickMembers(false);
    setClickWorkers(false);
    setClickProfile(false);
    setClickContact(false);
    setClickLogin(true);
    setClickHome(false);
    setClickSignup(false)
  };

  const showSignup = () => {
    setClickMembers(false);
    setClickWorkers(false);
    setClickProfile(false);
    setClickContact(false);
    setClickLogin(false);
    setClickHome(false);
    setClickSignup(true)
  }
  useEffect(() => {
    getMembers();
    getWorkers();
  }, []);

  return (
    <>
      <div class='header'>
      <div class='title-cont'>
      <h1 class='company-title'>HomeCare Services</h1>
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
            <a href="#" onClick={showSignup}>
              Sign Up
            </a>
          </li>
          <li>
            <a href="#" onClick={showWorkers}>
              Workers
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
          <li>
            <a href="#" onClick={showLogin}>
              Login
            </a>
          </li>
        </ul>
      </nav>
      </div>
      </div>
      {clickHome ? <Home /> : null}

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
      {clickSignup ? <Signup getMembers={getMembers} 
      showMembers={showMembers} /> : null}
      {clickLogin ? <Login /> : null}
    </>
  );
};

export default App;
