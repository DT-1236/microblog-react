import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../Components/Comment';
import { remove_comment } from '../actionCreators';

class CommentContainer extends Component {
  render() {
    return <Comment {...this.props} />;
  }
}

export default connect(
  null,
  { remove_comment }
)(CommentContainer);
