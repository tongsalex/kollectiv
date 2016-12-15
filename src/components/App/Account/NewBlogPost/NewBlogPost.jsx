import React from 'react';
import './NewBlogPost.css';
import '../../../reset.css';

const NewBlogPost = props => (
  <div id="newblogpost-container">


      <input className="newblogpost-inputs" onChange={props.updateNewBlogPostTitle} value={props.state.newBlogPost.title} placeholder="title" />

      <input className="newblogpost-inputs" onChange={props.updateNewBlogPostSubtitle} value={props.state.newBlogPost.subtitle} placeholder="subtitle" />

      <textarea className="newblogpost-inputs" id="newblogpost-content" onChange={props.updateNewBlogPostContent} value={props.state.newBlogPost.content} placeholder="content" />

      <textarea className="newblogpost-inputs" onChange={props.updateNewBlogPostImageUrl} value={props.state.newBlogPost.image_url} placeholder="image_url" />

    <div id="newblogpost-button-container">
      <button id="newblogpost-button" onClick={props.makeNewBlogPost}>submit</button>
    </div>

  </div>
    );

export default NewBlogPost;
