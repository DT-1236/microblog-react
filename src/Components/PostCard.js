import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VoteContainer from '../Containers/VoteContainer';

class PostCard extends Component {
  render() {
    const { id, title, description } = this.props;
    return (
      <div className="card m-2">
        <h5 className="card-header">
          <Link to={`/${id}`}>{title}</Link>
        </h5>
        <div className="card-body">
          <h5 className="card-title">{description}</h5>
          <VoteContainer id={id} />
        </div>
      </div>
    );
  }
}

export default PostCard;
