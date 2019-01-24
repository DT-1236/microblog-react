import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  renderPost() {
    // Map over props/state containing posts
    // return PostCards
  }

  componentDidMount() {
    this.props.getPostsAPI();
  }
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Microblog</Link>
        </h1>
        <p>Some rando description</p>
        <Link to="/new">Add a new Post</Link>
      </div>
    );
  }
}

export default NavBar;
