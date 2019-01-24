import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostView from '../Components/PostView';
import { edit, remove } from '../actionCreators';

class PostViewContainer extends Component {
  render() {
    return <PostView {...this.props} />;
  }
}

function mapStateToProps(state, { id }) {
  return { ...state.posts[id] };
}

export default connect(
  mapStateToProps,
  { edit, remove }
)(PostViewContainer);
