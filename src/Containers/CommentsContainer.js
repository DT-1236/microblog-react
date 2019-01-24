import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../Components/Comments';
import { addCommentAPI } from '../actionCreators';

class CommentsContainer extends Component {
  render() {
    return <Comments {...this.props} />;
  }
}

function mapStateToProps(state, { postId }) {
  if (state.posts.hasOwnProperty(postId)) {
    return { comments: state.posts[postId].comments };
  } else {
    return { comments: {} };
  }
}

export default connect(
  mapStateToProps,
  { addCommentAPI }
)(CommentsContainer);
