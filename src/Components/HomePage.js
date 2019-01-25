import React, { Component } from 'react';
import PostCard from './PostCard';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: Object.keys(this.props.titles).length
    };
    this.infiniteScroll = this.infiniteScroll.bind(this);
  }

  async componentDidMount() {
    if (!this.state.loaded) {
      await this.props.getPostsAPI({ offset: 0, limit: this.props.pageSize });
      this.setState({ loaded: true });
    }
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  async infiniteScroll() {
    if (document.body.scrollHeight - window.innerHeight - window.scrollY < 50) {
      const length = Object.keys(this.props.titles).length;
      const { getPostsAPI, pageSize } = this.props;
      await getPostsAPI({ limit: pageSize, offset: length });
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

HomePage.defaultProps = {
  pageSize: 50
};

export default HomePage;
