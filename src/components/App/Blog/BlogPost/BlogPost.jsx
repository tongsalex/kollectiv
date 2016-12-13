import React from 'react';
import './BlogPost.css';
import '../../../reset.css';

const BlogPost = (props) => (
  <div id="blogpost-container">
    <div id="blogpost-left-sub-container">
      <h1 className="blogpost-title">{props.title}</h1>
      <h2 className="blogpost-sub-title">{props.subtitle}</h2>
      <button className="blogpost-button">more</button>
    </div>
    <div id="blogpost-right-sub-container">
      <img className="blogpost-image" src={props.image_url} />
    </div>
  </div>
    );

export default BlogPost;
