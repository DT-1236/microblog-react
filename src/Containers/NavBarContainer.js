import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../Components/NavBar';
import { get_posts } from '../actionCreators';

class NavBarContainer extends Component {
  render() {
    return <NavBar {...this.props} />;
  }
}

function mapStateToProps(state) {
  return { loading: state.loading };
}

export default connect(
  mapStateToProps,
  { get_posts }
)(NavBarContainer);
