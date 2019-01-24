import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../Components/PostForm';
import { edit, add } from '../actionCreators';

class PostFormContainer extends Component {
  render() {
    return <PostForm {...this.props} />;
  }
}

function mapStateToProps(state, { id }) {
  const length = Object.keys(state.posts).length;
  return { ...state.posts[id], length };
}

export default connect(
  mapStateToProps,
  { edit, add }
)(PostFormContainer);
