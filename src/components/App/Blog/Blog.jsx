import React from 'react';
import './Blog.css';
import '../../reset.css';
import BlogPost from './BlogPost/BlogPost';

const Blog = (props) => {
  const posts = props.state.blogPosts.map((blogPost) => {
    return (
      <BlogPost
        key={blogPost.blog_post_id.toString()}
        blog_post_id={blogPost.blog_post_id}
        title={blogPost.title}
        subtitle={blogPost.subtitle}
        image_url={blogPost.image_url}
        date_created={blogPost.date_created}
      />
    );
  });

  return (
    <div id="blog-container">
      {posts}
    </div>
  );
};

export default Blog;
