import React from 'react';
import { Link } from 'react-router';
import './BlogPost.css';
import '../../../reset.css';

const BlogPost = (props) => (
  <div id="blogpost-container">
    <div id="blogpost-left-sub-container">
      <h1 className="blogpost-title">{props.title}</h1>
      <h2 className="blogpost-sub-title">{props.subtitle}</h2>
      <Link to={'/blog/'+props.blog_post_id} className="blogpost-button">more</Link>

    </div>
    <div id="blogpost-right-sub-container">
      <img className="blogpost-image" src={props.image_url} />
    </div>
  </div>
    );

export default BlogPost;
