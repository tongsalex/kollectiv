import React from 'react';
import './NewBlogPost.css';
import '../../../reset.css';

const NewBlogPost = props => (
  <div id="newblogpost-container">
    <div className="newblogpost-titles">username</div>
      <p>{props.state.currentUser}</p>

    <div className="newblogpost-titles">first name</div>
      <input className="newblogpost-inputs" onChange={props.updateProfileFirstName} value={props.state.accountInfo.first_name} />

    <div className="newblogpost-titles">last name</div>
      <input className="newblogpost-inputs" onChange={props.updateProfileLastName} value={props.state.accountInfo.last_name} />

    <div className="newblogpost-titles">email</div>
      <input className="newblogpost-inputs" onChange={props.updateProfileEmail} value={props.state.accountInfo.email} />

    <div className="newblogpost-titles">bio</div>
      <textarea id="newblogpost-bio-input" onChange={props.updateProfileBio} value={props.state.accountInfo.bio} />

    <div className="newblogpost-titles">Member since {props.state.accountInfo.date_created}</div>

    <button onClick={props.updateProfile}>update</button>

  </div>
    );

export default NewBlogPost;
