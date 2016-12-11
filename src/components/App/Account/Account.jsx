import React, { Component } from 'react';
import { Link } from 'react-router';
import './Account.css';
import '../../reset.css';

class Account extends Component {
  render() {
    return (
      <div id="account-container">
        <div id="left-sub-account-container">
          <Link to="/profile" className="account-buttons">artist profile</Link>
          <Link to="/profile" className="account-buttons">blog posts</Link>
          <Link to="/profile" className="account-buttons">event listings</Link>
        </div>
        <div id="right-sub-account-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Account;
