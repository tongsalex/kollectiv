import React from 'react';
import './AccountBlogPost.css';
import '../../../../reset.css';

const AccountBlogPost = (props) => (
  <div id="accountBlogPost-container">
    <div>{props.blog_post_id}</div>
    <div className="accountBlogPost-titles">blog post created on: </div>
      <div id="accountBlogPost-date-created">{props.date_created}</div>
    <div className="accountBlogPost-titles">title</div>
      <div className="accountBlogPost-inputs" id="accountBlogPost-title">{props.title}</div>
    <div className="accountBlogPost-titles">subtitle</div>
      <div className="accountBlogPost-inputs" id="accountBlogPost-sub-title">{props.subtitle}</div>
    <div className="accountBlogPost-titles">content</div>
      <div className="accountBlogPost-inputs" id="accountBlogPost-content">{props.content}</div>
    <div className="accountBlogPost-titles">image url</div>
      <div className="accountBlogPost-inputs" id="accountBlogPost-image">{props.image_url}</div>

    <div className="accountBlogPost-button-containers">
      <button
        className="accountBlogPost-buttons"
        id="accountBlogPost-update"
        onClick={() => props.updateBlogPost()}
      >update
      </button>

    </div>

    <div className="accountBlogPost-button-containers">
      <button className="accountBlogPost-buttons" id="accountBlogPost-delete" onClick={() => props.deleteBlogPost(props.blog_post_id)}>delete</button>
    </div>
  </div>
    );

export default AccountBlogPost;
