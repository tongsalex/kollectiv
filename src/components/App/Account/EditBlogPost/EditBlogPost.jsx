import React from 'react';
import './EditBlogPost.css';
import '../../../reset.css';

const EditBlogPost = props => (
  <div id="editblogpost-container">
    <div className="editblogpost-titles">title</div>
      <input className="editblogpost-inputs" />

    <div className="editblogpost-titles">subtitle</div>
      <input className="editblogpost-inputs" />

    <div className="editblogpost-titles">content</div>
      <textarea className="editblogpost-inputs" />

    <div className="editblogpost-titles">image url</div>
      <textarea id="editblogpost-bio-input" />

    <button>update</button>

  </div>
    );

export default EditBlogPost;
