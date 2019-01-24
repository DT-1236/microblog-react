import React, { Component } from 'react';
import PostCard from './PostCard';

class HomePage extends Component {
  renderPosts() {
    const { posts } = this.props;
    return Object.keys(posts).map(id => (
      <PostCard {...posts[id]} id={id} key={id} />
    ));
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">{this.renderPosts()}</div>
        </div>
      </div>
    );
  }
}

export default HomePage;
