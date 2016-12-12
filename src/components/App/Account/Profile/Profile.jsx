import React from 'react';
import './Profile.css';
import '../../../reset.css';

const Profile = props => (
  <div id="profile-container">
    <div className="profile-titles">username</div>
    <p>{props.state.accountInfo.username}</p>

    <div className="profile-titles">first name</div>
    <input className="profile-inputs" value={props.state.accountInfo.first_name} />

    <div className="profile-titles">last name</div>
    <input className="profile-inputs" value={props.state.accountInfo.last_name} />

    <div className="profile-titles">bio</div>
    <input className="profile-inputs" value={props.state.accountInfo.bio} />

    <div className="profile-titles">email</div>
    <input className="profile-inputs" value={props.state.accountInfo.email} />

    <div className="profile-titles">Member since {props.state.accountInfo.date_created}</div>

    <button>update</button>
  </div>
    );

export default Profile;
