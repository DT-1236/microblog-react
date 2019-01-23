import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from '../Components/PostForm';
import { edit } from '../actionCreators';

class PostFormContainer extends Component {
  render() {
    return <PostForm {...this.props} />;
  }
}

function mapStateToProps(state, ownProps) {
  return { ...state.posts[ownProps.id] };
}

export default connect(
  mapStateToProps,
  { edit }
)(PostFormContainer);
