import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommentsContainer from '../Containers/CommentsContainer';
import VoteContainer from '../Containers/VoteContainer';

class PostView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: this.props.hasOwnProperty('title')
    };
  }
  async componentDidMount() {
    if (!this.state.loaded) {
      await this.props.getPostAPI({ id: this.props.id });
      this.setState({ loaded: true });
    }
  }

  render() {
    const { title, description, body, id, deletePostAPI, history } = this.props;
    if (this.state.loaded && !title) {
      history.replace('/');
    }
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="card bg-light mb-3 p-1">
          <div>
            <div className="card-header">
              <h1>{title}</h1>
              <h5>{description}</h5>
              <VoteContainer id={id} />
            </div>
            <div className="card-body">
              <Link name="edit" to={`/${id}/edit`}>
                <i className="fas fa-edit" />
              </Link>
              <button
                className="border-0 text-danger post-delete"
                name="delete"
                onClick={async () => {
                  await deletePostAPI({ id });
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
