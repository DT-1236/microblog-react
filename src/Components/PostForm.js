import React, { Component } from 'react';
import './App.css';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title || '',
      description: this.props.description || '',
      body: this.props.body || '',
      comments: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { mode, id, history, length } = this.props;
    const { edit, add } = this.props.funcs;
    event.preventDefault();
    if (mode === 'Edit') {
      edit({ ...this.state, id });
    } else {
      add({ ...this.state, id: length + 1 });
    }
    history.push(`/${id || length + 1}`);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { mode } = this.props;
    return (
      <div className="PostForm">
        <h1>{mode} Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="titleHelp"
              placeholder="Enter title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <small id="titleHelp" className="form-text text-muted">
              Give your post a title
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              aria-describedby="descriptionHelp"
              placeholder="Enter description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <small id="descriptionHelp" className="form-text text-muted">
              Give your post a description
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="body">Body:</label>
            <textarea
              rows="5"
              type="text"
              className="form-control"
              id="body"
              name="body"
              aria-describedby="bodyHelp"
              placeholder="Enter body"
              value={this.state.body}
              onChange={this.handleChange}
            />
            <small id="bodyHelp" className="form-text text-muted">
              Write the complete body of the post
            </small>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
