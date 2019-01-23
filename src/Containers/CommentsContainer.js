import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../Components/Comments';
import { add_comment } from '../actionCreators';

class CommentsContainer extends Component {
  render() {
    return <Comments {...this.props} />;
  }
}

function mapStateToProps(state, ownProps) {
  return { comments: state.posts[ownProps.postId].comments };
}

export default connect(
  mapStateToProps,
  { add_comment }
)(CommentsContainer);
