import React from 'react';
import './Artists.css';
import '../../reset.css';
import ArtistPost from './ArtistPost/ArtistPost';

const Artists = (props) => {
  const artists = props.state.artists.map((artist) => {
    return (
      <ArtistPost
        key={artist.artist_id.toString()}
        username={artist.username}
        image_url={artist.image_url}
      />
    );
  });

  return (
    <div id="artists-container">
      {artists}
    </div>
  );
};


export default Artists;
