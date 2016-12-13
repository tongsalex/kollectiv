import React from 'react';
import Login from './Login/Login';
// import Signup from './Signup/Signup';
import './Sidebar.css';
import '../reset.css';

const Sidebar = props => (
  <div id="sidebar-container">

    <button id="sidebar-button" onClick={props.closeSidebar}>X</button>
    <Login
      loginUsername={props.loginUsername}
      loginPassword={props.loginPassword}
      updateLoginUsername={props.updateLoginUsername}
      updateLoginPassword={props.updateLoginPassword}
      login={props.login}
      logout={props.logout}
    />

  </div>
    );

export default Sidebar;
