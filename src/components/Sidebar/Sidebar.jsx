import React from 'react';
import Login from './Login/Login';
import './Sidebar.css';
import '../reset.css';

const Sidebar = props => (
  <div id="sidebar-container">
    <Login
      loginUsername={props.loginUsername}
      updateLoginUsername={props.updateLoginUsername}
      loginPassword={props.loginPassword}
      updateLoginPassword={props.updateLoginPassword}
      login={props.login}
      logout={props.logout}
    />
  </div>
    );

export default Sidebar;
