import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../Components/Comment';
import { deleteCommentAPI } from '../actionCreators';

class CommentContainer extends Component {
  render() {
    return <Comment {...this.props} />;
  }
}

export default connect(
  null,
  { deleteCommentAPI }
)(CommentContainer);
