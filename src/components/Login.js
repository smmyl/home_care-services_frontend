import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(true);

  const memberLogin = () => {
    setLogin(true);
  };

  const workerLogin = () => {
    setLogin(false);
  };

  return (
    <div className="loginpage">
      <div className="log">
        <br />
        <h2>Login</h2>
        <a id="memberclick" onClick={memberLogin}>Member</a>
        <a id="workerclick" onClick={workerLogin}>Caretaker</a>
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
  );
};

export default Login;
