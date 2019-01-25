import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from '../Components/HomePage';
import { getPostsAPI } from '../actionCreators';

class HomePageContainer extends Component {
  render() {
    return <HomePage {...this.props} />;
  }
}

function mapStateToProps(state) {
  return { titles: state.titles, loading: state.loading };
}

export default connect(
  mapStateToProps,
  { getPostsAPI }
)(HomePageContainer);
