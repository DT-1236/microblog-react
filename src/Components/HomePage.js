import React, { Component } from 'react';
import PostCard from './PostCard';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: Object.keys(this.props.titles).length
    };
  }

  async componentDidMount() {
    if (!this.state.loaded) {
      await this.props.getPostsAPI();
      this.setState({ loaded: true });
    }
  }

  renderPosts() {
    const { titles } = this.props;
    return Object.keys(titles)
      .sort((a, b) => titles[b].votes - titles[a].votes)
      .map(id => <PostCard {...titles[id]} id={id} key={id} />);
  }
  render() {
    if (!this.state.loaded) {
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
