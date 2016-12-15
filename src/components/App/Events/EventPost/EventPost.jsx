import React from 'react';
import './EventPost.css';
import '../../../reset.css';

const EventPost = (props) => {

  const divBackground = {
    color: 'white',
    backgroundImage: `url('${props.image_url}')`,
  };

  return (
  <div id="eventpost-container" style={divBackground}>

    <div id="eventpost-sub-container">
      <h1 className="eventpost-text" id="eventpost-title">{props.title}</h1>
      <h2 className="eventpost-text" id="eventpost-subtitle">{props.description}</h2>
      <h3 className="eventpost-text" id="eventpost-phone">Sign up for the guest list with your phone number below:</h3>
      <div id="eventpost-input-container"><input id="eventpost-input" /> <button id="eventpost-button">submit</button></div>
    </div>

  </div>
  );
};


export default EventPost;
