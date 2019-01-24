import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../Components/Comments';
import { add_comment } from '../actionCreators';

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
  { add_comment }
)(CommentsContainer);
