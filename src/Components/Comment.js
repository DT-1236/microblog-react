import React, { Component } from 'react';
import './App.css';

class Comment extends Component {
  render() {
    const { postId, id, delete_commentAPI } = this.props;
    return (
      <div className="Comment">
        <button
          className="border-0 text-danger"
          onClick={() => delete_commentAPI({ postId, commentId: id })}
        >
          <i className="fas fa-trash-alt" />
        </button>
        <p>{this.props.comment}</p>
      </div>
    );
  }
}

export default Comment;
