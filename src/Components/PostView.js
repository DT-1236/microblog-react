import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommentsContainer from '../Containers/CommentsContainer';

class PostView extends Component {
  render() {
    const { title, description, body, id, remove, history } = this.props;
    return (
      <div>
        <div>
          <div>
            <h1>{title}</h1>
            <h5>{description}</h5>
          </div>
          <div>
            <Link name="edit" to={`/${id}/edit`}>
              <i className="fas fa-edit" />
            </Link>
            <button
              name="delete"
              onClick={() => {
                remove({ id });
                history.replace('/');
              }}
            >
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        </div>
        <p>{body}</p>
        <hr />
        <CommentsContainer postId={id} />
      </div>
    );
  }
}

PostView.defaultProps = {
  id: 1,
  title: 'TEST TITLE',
  description: 'Some kind of test',
  body: 'Eeven more teeeeext'
};

export default PostView;
