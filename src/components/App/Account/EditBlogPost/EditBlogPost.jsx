import React, { Component } from 'react';
import './EditBlogPost.css';
import '../../../reset.css';
import { Link } from 'react-router'

class EditBlogPost extends Component {
  componentDidMount() {
    this.props.getSingleBlogPostToEdit(this.props.params.id);
  }
  render() {
    return (
      <div id="editblogpost-container">

      <Link to="/blogposts" className="navbar-button">back</Link>

        <div className="editblogpost-titles">title</div>
          <input className="editblogpost-inputs" onChange={this.props.updateEditedBlogPostTitle} value={this.props.state.editedBlogPost.title} />

        <div className="editblogpost-titles">subtitle</div>
          <input className="editblogpost-inputs" onChange={this.props.updateEditedBlogPostSubtitle} value={this.props.state.editedBlogPost.subtitle} />

        <div className="editblogpost-titles">content</div>
          <textarea className="editblogpost-inputs" onChange={this.props.updateEditedBlogPostContent} value={this.props.state.editedBlogPost.content} />

        <div className="editblogpost-titles">image url</div>
          <textarea id="editblogpost-bio-input" onChange={this.props.updateEditedBlogPostImageUrl} value={this.props.state.editedBlogPost.image_url} />

        <button onClick={this.props.updateBlogPost} >update</button>

      </div>
    );
  }
}

export default EditBlogPost;

