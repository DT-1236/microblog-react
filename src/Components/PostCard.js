import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostCard extends Component {
  render() {
    return (
      <div className="border col-sm m-2">
        <Link to={`/${this.props.id}`}>{this.props.title}</Link>
        <h5>{this.props.description}</h5>
      </div>
    );
  }
}

export default PostCard;
