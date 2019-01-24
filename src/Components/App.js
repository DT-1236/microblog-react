import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';

class App extends Component {
  componentDidMount() {
    this.props.get_posts();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;
