import React, { Component } from 'react';
import './App.css';
import CommentContainer from '../Containers/CommentContainer';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { addCommentAPI, postId } = this.props;
    addCommentAPI({
      postId: postId,
      comment: this.state.newComment
    });
    this.setState({ newComment: '' });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  renderComments() {
    const { comments, postId } = this.props;
    return Object.keys(comments).map(id => (
      <CommentContainer
        postId={postId}
        id={id}
        key={id}
        comment={comments[id].body}
      />
    ));
  }

  render() {
    return (
      <div className="Comments">
        <h2>Comments</h2>
        <div>{this.renderComments()}</div>
        <div className="PostForm">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="newComment"
                name="newComment"
                aria-describedby="newCommentHelp"
                placeholder="Enter New Comment"
                value={this.state.newComment}
                onChange={this.handleChange}
              />
              <small id="newCommentHelp" className="form-text text-muted">
                Comment on this post
              </small>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Comments.defaultProps = {
  comments: {}
  // { '1': { body: 'I like cake' }, '2': { body: 'but I like pie' } }
};

export default Comments;
