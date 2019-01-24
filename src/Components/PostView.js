import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommentsContainer from '../Containers/CommentsContainer';

class PostView extends Component {
  componentDidMount() {}

  render() {
    const { title, description, body, id, delete_post, history } = this.props;
    if (!description && !this.props.loading) {
      history.replace('/');
    }
    return (
      <div className="d-flex justify-content-center">
        <div className="card bg-light mb-3">
          <div>
            <div className="card-header">
              <h1>{title}</h1>
              <h5>{description}</h5>
            </div>
            <div className="card-body">
              <Link name="edit" to={`/${id}/edit`}>
                <i className="fas fa-edit" />
              </Link>
              <button
                className="border-0 text-danger"
                name="delete"
                onClick={() => {
                  delete_post({ id });
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
      </div>
    );
  }
}

PostView.defaultProps = {
  comments: {}
  //   id: 1,
  //   title: 'TEST TITLE',
  //   description: 'Some kind of test',
  //   body: 'Eeven more teeeeext'
};

export default PostView;
