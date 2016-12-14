import React from 'react';
import './Profile.css';
import '../../../reset.css';

const Profile = props => (
  <div id="profile-container">
    <div className="profile-titles">username</div>
      <p>{props.state.currentUser}</p>

    <div className="profile-titles">first name</div>
      <input className="profile-inputs" onChange={props.updateProfileFirstName} value={props.state.accountInfo.first_name} />

    <div className="profile-titles">last name</div>
      <input className="profile-inputs" onChange={props.updateProfileLastName} value={props.state.accountInfo.last_name} />

    <div className="profile-titles">email</div>
      <input className="profile-inputs" onChange={props.updateProfileEmail} value={props.state.accountInfo.email} />

    <div className="profile-titles">bio</div>
      <textarea id="profile-bio-input" onChange={props.updateProfileBio} value={props.state.accountInfo.bio} />

    <div className="profile-titles">Member since {props.state.accountInfo.date_created}</div>

    <button onClick={props.updateProfile}>update</button>

  </div>
    );

export default Profile;
