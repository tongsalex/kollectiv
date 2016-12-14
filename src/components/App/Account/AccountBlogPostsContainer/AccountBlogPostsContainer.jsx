import React from 'react';
import AccountBlogPost from './AccountBlogPost/AccountBlogPost';
import './AccountBlogPostsContainer.css';
import '../../../reset.css';

const AccountBlogPostsContainer = (props) => {
  const accountBlogPosts = props.state.accountBlogPosts.map((accountBlogPost) => {
    return (
      <AccountBlogPost
        key={accountBlogPost.blog_post_id.toString()}
        blog_post_id={accountBlogPost.blog_post_id}
        title={accountBlogPost.title}
        subtitle={accountBlogPost.subtitle}
        content={accountBlogPost.content}
        image_url={accountBlogPost.image_url}
        date_created={accountBlogPost.date_created}
        deleteBlogPost={props.deleteBlogPost}
      />
    );
  });

  return (
    <div id="accountBlogPosts-container">
      {accountBlogPosts}
    </div>
  );
};


export default AccountBlogPostsContainer;
