import React from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import './Sidebar.css';
import '../reset.css';

const Sidebar = props => (
  <div id="sidebar-container">

    <button id="sidebar-exit-button">X</button>

    <Login
      loginUsername={props.loginUsername}
      loginPassword={props.loginPassword}
      updateLogin={props.updateLogin}
      login={props.login}
      logout={props.logout}
    />

    <Signup

    />


  </div>
    );

export default Sidebar;
