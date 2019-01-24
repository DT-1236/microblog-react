import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../Components/App';
import { get_posts } from '../actionCreators';

class AppContainer extends Component {
  render() {
    return <App {...this.props} />;
  }
}

export default connect(
  null,
  { get_posts }
)(AppContainer);
