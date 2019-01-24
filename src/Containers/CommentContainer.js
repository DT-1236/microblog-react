import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../Components/Comment';
import { delete_commentAPI } from '../actionCreators';

class CommentContainer extends Component {
  render() {
    return <Comment {...this.props} />;
  }
}

export default connect(
  null,
  { delete_commentAPI }
)(CommentContainer);
