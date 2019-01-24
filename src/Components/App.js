import React, { Component } from 'react';
import './App.css';
import NavBarContainer from '../Containers/NavBarContainer';
import Routes from './Routes';

class App extends Component {
  render() {
    if (this.props.loading) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="App">
          <NavBarContainer />
          <Routes />
        </div>
      );
    }
  }
}

export default App;
