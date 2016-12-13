import React, { Component } from 'react';
import { Link } from 'react-router';
import './Account.css';
import '../../reset.css';

const Account = props => (
      <div id="account-container">
        <div id="left-sub-account-container">
          <Link to="/profile" className="account-buttons">artist profile</Link>
          <Link to="/blogposts" className="account-buttons">blog posts</Link>
        </div>
        <div id="right-sub-account-container">
          {props.children && React.cloneElement(props.children, {
            state: props.state,
            updateProfileFirstName: props.updateProfileFirstName,
            updateProfileLastName: props.updateProfileLastName,
            updateProfileBio: props.updateProfileBio,
            updateProfileEmail: props.updateProfileEmail,
            updateProfile: props.updateProfile,
            deleteBlogPost: props.deleteBlogPost,
          })}
        </div>
      </div>
    );


export default Account;
