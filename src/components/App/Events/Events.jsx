import React from 'react';
import './Events.css';
import '../../reset.css';
import EventPost from './EventPost/EventPost';

const Events = (props) => {
  const posts = props.state.events.map((eventPost) => {
    return (
      <EventPost
        key={eventPost.event_id.toString()}
        event_id={eventPost.event_id}
        title={eventPost.title}
        description={eventPost.description}
        image_url={eventPost.image_url}
        artist_id={eventPost.artist_id}
      />
    );
  });

  return (
    <div id="events-container">
      {posts}
    </div>
  );
};

export default Events;
