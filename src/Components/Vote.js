import React, { Component } from 'react';

class Vote extends Component {
  render() {
    return (
      <div>
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn btn-secondary"
            aria-label="..."
            disabled
          >
            {this.props.votes} Votes
          </button>
          <button
            type="button"
            className="btn btn-success"
            aria-label="..."
            onClick={() =>
              this.props.votePromise({ postId: this.props.id, type: 'up' })
            }
          >
            <i className="far fa-thumbs-up" />
          </button>
          <button
            type="button"
            className="btn btn-danger"
            aria-label="..."
            onClick={() =>
              this.props.votePromise({ postId: this.props.id, type: 'down' })
            }
          >
            <i className="far fa-thumbs-down" />
          </button>
        </div>
      </div>
    );
  }
}

export default Vote;
