import React, { Component } from 'react';
import PostCard from './PostCard';

class HomePage extends Component {
  componentDidMount() {
    // Consider adding a check for titles length
    this.props.getPostsPromise();
  }

  renderPosts() {
    const { titles } = this.props;
    return Object.keys(titles).map(id => (
      <PostCard {...titles[id]} id={id} key={id} />
    ));
  }
  render() {
    if (this.props.loading) {
      return <p>Loading...</p>;
    }
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
