import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(true);

  const member1 = document.querySelector('member1');
  const worker1 = document.querySelector('worker1')

  const memberLogin = () => {
    setLogin(true);
  };

  const workerLogin = () => {
    setLogin(false);
  };

  return (
    <div className="logbox">
    <div className="loginpage">
      <div className="log">
        <br />
        <h2>Login</h2>
        <a id="member1" onClick={memberLogin}>Member</a>
        <a id="worker1" onClick={workerLogin}>Caretaker</a>
      </div>
      <br />
      <br />
      {login ? (
        <div className="login-box">
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" />
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" />
        </div>
      ) : (
        <div className="login-box">
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" />
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" />
        </div>
      )}
      <br />
      <br />
      <input class="loginbttn" type="submit" value="Log In" />
    </div>
    </div>
  );
};

export default Login;
