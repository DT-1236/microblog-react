import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from '../Components/HomePage';
import { getPostsPromise } from '../actionCreators';

class HomePageContainer extends Component {
  render() {
    return <HomePage {...this.props} />;
  }
}

function mapStateToProps(state) {
  return { titles: state.titles };
}

function mapDispatchToProps(dispatch) {
  return {
    getPostsPromise: getPostsPromise(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer);
