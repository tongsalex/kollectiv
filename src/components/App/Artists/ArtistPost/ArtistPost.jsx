import React from 'react';
import './ArtistPost.css';
import '../../../reset.css';

const ArtistPost = (props) => (
  <div id="artistpost-container">
    <div className="artistpost-image-container">
      <img className="artistpost-image" src={props.image_url} />
    </div>
    <div className="artistpost-text">{props.username}</div>
  </div>
    );

export default ArtistPost;
