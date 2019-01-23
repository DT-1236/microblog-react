import React, { Component } from 'react';
import './App.css';

class Comment extends Component {
  render() {
    const { postId, id, remove_comment } = this.props;
    return (
      <div className="Comment">
        <button onClick={() => remove_comment({ postId, commentId: id })}>
          <i className="fas fa-trash-alt" />
        </button>
        <p>{this.props.comment}</p>
      </div>
    );
  }
}

export default Comment;
