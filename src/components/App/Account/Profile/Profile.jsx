import React from 'react';
import './Profile.css';
import '../../../reset.css';

const Profile = props => (
    <div id="profile-container">
      <div className="profile-titles">username</div>
      <p>username goes here</p>
      <div className="profile-titles">first name</div>
        <input value="hello"></input>
      <div className="profile-titles">last name</div>
        <input></input>
      <div className="profile-titles">bio</div>
        <input></input>
      <div className="profile-titles">email</div>
        <input></input>
      <div className="profile-titles">Member since </div>
    </div>
    );

export default Profile;
