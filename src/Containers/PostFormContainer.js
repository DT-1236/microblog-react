import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../Components/PostForm';
import { updatePostPromise, addPostPromise } from '../actionCreators';

class PostFormContainer extends Component {
  render() {
    return <PostForm {...this.props} />;
  }
}

function mapStateToProps(state, { id }) {
  const length = Object.keys(state.posts).length;
  return { ...state.posts[id], length, loading: state.loading };
}

function mapDispatchToProps(dispatch) {
  return {
    addPostPromise: addPostPromise(dispatch),
    updatePostPromise: updatePostPromise(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostFormContainer);
