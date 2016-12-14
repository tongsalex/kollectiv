import React, { Component } from 'react';
import { Link } from 'react-router';
import './Account.css';
import '../../reset.css';

const Account = props => (
      <div id="account-container">
        <div id="left-sub-account-container">
          <div className="account-button-container">
            <Link to="/profile" className="account-buttons">artist profile</Link>
          </div>
          <div className="account-button-container">
            <Link to="/blogposts" className="account-buttons">blog posts</Link>
          </div>
          <div className="account-button-container">
            <Link to="/createpost" className="account-buttons">new blog post</Link>
          </div>
        </div>
        <div id="right-sub-account-container">
          {props.children && React.cloneElement(props.children, {
            state: props.state,
            updateProfileFirstName: props.updateProfileFirstName,
            updateProfileLastName: props.updateProfileLastName,
            updateProfileBio: props.updateProfileBio,
            updateProfileEmail: props.updateProfileEmail,
            updateProfile: props.updateProfile,
            deleteBlogPost: props.deleteBlogPost,

            updateNewBlogPostTitle: props.updateNewBlogPostTitle,
            updateNewBlogPostSubtitle: props.updateNewBlogPostSubtitle,
            updateNewBlogPostContent: props.updateNewBlogPostContent,
            updateNewBlogPostImageUrl: props.updateNewBlogPostImageUrl,
            makeNewBlogPost: props.makeNewBlogPost,

            getSingleBlogPostToEdit: props.getSingleBlogPostToEdit,
            updateEditedBlogPostTitle: props.updateEditedBlogPostTitle,
            updateEditedBlogPostSubtitle: props.updateEditedBlogPostSubtitle,
            updateEditedBlogPostContent: props.updateEditedBlogPostContent,
            updateEditedBlogPostImageUrl: props.updateEditedBlogPostImageUrl,
            updateBlogPost: props.updateBlogPost,
          })}
        </div>
      </div>
    );


export default Account;
