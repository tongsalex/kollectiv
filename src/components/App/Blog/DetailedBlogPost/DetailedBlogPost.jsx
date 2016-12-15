import React, { Component } from 'react';
import './DetailedBlogPost.css';
import '../../../reset.css';
import { Link } from 'react-router'


class DetailedBlogPost extends Component {
  componentDidMount() {
    this.props.getSingleBlogPost(this.props.params.id);
  }
  render() {
    return (
      <div id="detailedBlogPost-container">

      <Link to="/" className="navbar-button">back</Link>

        <div id="detailedBlogPost-image-container">
          <img className="detailedBlogPost-image" src={this.props.state.detailedBlogPost.image_url} />
        </div>

        <h1 className="detailedBlogPost-text" id="detailedBlogPost-title">{this.props.state.detailedBlogPost.title}</h1>
        <h2 className="detailedBlogPost-text" id="detailedBlogPost-subtitle">{this.props.state.detailedBlogPost.subtitle}</h2>
        <p className="detailedBlogPost-text" id="detailedBlogPost-content">{this.props.state.detailedBlogPost.content}</p>
        <p className="detailedBlogPost-text">{this.props.state.detailedBlogPost.date_created}</p>

      </div>
    );
  }
}

export default DetailedBlogPost;
