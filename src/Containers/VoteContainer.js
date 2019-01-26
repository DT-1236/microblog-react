import React, { Component } from 'react';
import { connect } from 'react-redux';
import Vote from '../Components/Vote';
import { votePromise } from '../actionCreators';

class VoteContainer extends Component {
  render() {
    return <Vote {...this.props} />;
  }
}

function mapStateToProps(state, { id }) {
  if (state.titles.hasOwnProperty(id)) {
    return { votes: state.titles[id].votes };
  } else if (state.posts.hasOwnProperty(id)) {
    return { votes: state.posts[id].votes };
  } else {
    return {};
  }
}

function mapDispatchToProps(dispatch) {
  return { votePromise: votePromise(dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteContainer);
