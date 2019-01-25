import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommentsContainer from '../Containers/CommentsContainer';

class PostView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: this.props.hasOwnProperty('title')
    };
  }
  componentDidMount() {
    if (!this.state.loaded) {
      this.props
        .getPostPromise({ id: this.props.id })
        .then(() => this.setState({ loaded: true }));
    }
  }

  render() {
    const {
      title,
      description,
      body,
      id,
      deletePostPromise,
      history
    } = this.props;
    if (this.state.loaded && !title) {
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
                  deletePostPromise({ id }).then(() => history.replace('/'));
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
