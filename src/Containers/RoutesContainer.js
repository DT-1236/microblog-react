import React, { Component } from 'react';
import { connect } from 'react-redux';
import Routes from '../Components/Routes';

class RoutesContainer extends Component {
  render() {
    return <Routes {...this.props} />;
  }
}

function mapStateToProps(state) {
  return { loading: state.loading };
}

export default connect(mapStateToProps)(RoutesContainer);
