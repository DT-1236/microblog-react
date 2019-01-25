import React, { Component } from 'react';
import { connect } from 'react-redux';
import Vote from '../Components/Vote';
import { voteAPI } from '../actionCreators';

class VoteContainer extends Component {
  render() {
    return <Vote {...this.props} />;
  }
}

function mapStateToProps(state, { id }) {
  if (Object.keys(state.titles).length) {
    return { votes: state.titles[id].votes };
  } else if (Object.keys(state.posts).length) {
    return { votes: state.posts[id].votes };
  } else {
    return {};
  }
}

export default connect(
  mapStateToProps,
  { voteAPI }
)(VoteContainer);
