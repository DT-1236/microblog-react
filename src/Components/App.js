import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';

class App extends Component {
  render() {
    if (this.props.loading) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="App container d-flex flex-column justify-content-center align-items-center text-center">
          <NavBar />
          <Routes />
        </div>
      );
    }
  }
}

export default App;
