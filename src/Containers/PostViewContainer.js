import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostView from '../Components/PostView';
import { deletePostPromise, getPostPromise } from '../actionCreators';

class PostViewContainer extends Component {
  render() {
    return <PostView {...this.props} />;
  }
}

function mapStateToProps(state, { id }) {
  return { ...state.posts[id] };
}

function mapDispatchToProps(dispatch) {
  return {
    getPostPromise: getPostPromise(dispatch),
    deletePostPromise: deletePostPromise(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostViewContainer);
