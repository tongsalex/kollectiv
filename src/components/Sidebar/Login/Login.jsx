import React from 'react';

import './Login.css';
import '../../reset.css';

const Login = props => (
  <div id="login-container">
    <h1 id="login-title">login</h1>

    <input
      className="login-inputs"
      type="text"
      placeholder="Username"
      value={props.loginUsername}
      onChange={props.updateLoginUsername}
    />

    <input
      className="login-inputs"
      type="text"
      placeholder="Password"
      value={props.loginPassword}
      onChange={props.updateLoginPassword}
    />

    <button
      id="loginButton"
      onClick={props.login}
    >
      Login!
    </button>

  </div>
    );

export default Login;
