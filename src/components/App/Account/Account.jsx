import React, { Component } from 'react';
import { Link } from 'react-router';
import './Account.css';
import '../../reset.css';

const Account = props => (
      <div id="account-container">
        <div id="left-sub-account-container">
          <Link to="/profile" className="account-buttons">artist profile</Link>
          <Link to="/blogposts" className="account-buttons">blog posts</Link>
          <Link to="/profile" className="account-buttons">event listings</Link>
        </div>
        <div id="right-sub-account-container">
          {props.children && React.cloneElement(props.children, {
            state: props.state,
          })}
        </div>
      </div>
    );


export default Account;
