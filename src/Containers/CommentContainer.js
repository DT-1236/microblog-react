import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../Components/Comment';
import { deleteCommentPromise } from '../actionCreators';

class CommentContainer extends Component {
  render() {
    return <Comment {...this.props} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteCommentPromise: deleteCommentPromise(dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CommentContainer);
