import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../Components/App';
import { get_posts } from '../actionCreators';

class AppContainer extends Component {
  render() {
    return <App {...this.props} />;
  }
}

function mapStateToProps(state) {
  return { loading: state.loading };
}

export default connect(
  mapStateToProps,
  { get_posts }
)(AppContainer);
