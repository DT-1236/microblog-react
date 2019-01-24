import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import PostView from './PostView';
import PostForm from './PostForm';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {
        '1': {
          title: 'CakeTitle',
          description: 'CakeDescription',
          body: 'CakeBody',
          comments: {}
        },
        '2': {
          title: 'CakeTitle2',
          description: 'CakeDescription2',
          body: 'CakeBody2',
          comments: {
            '1': { body: 'Comment1' },
            '2': { body: 'Comment2' }
          }
        }
      }
    };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
    this.addComment = this.addComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }

  // title, description, body, comments,
  add({ id, ...details }) {
    this.setState({
      ...this.state,
      posts: { ...this.state.posts, [id]: details }
    });
  }

  remove({ id }) {
    const newState = { ...this.state, posts: this.state.posts };
    delete newState.posts[id];
    this.setState(newState);
  }

  edit({ id, ...details }) {
    this.setState({
      ...this.state,
      posts: { ...this.state.posts, [id]: details }
    });
  }

  addComment({ postId, comment, commentId }) {
    this.setState({
      ...this.state,
      posts: {
        ...this.state.posts,
        [postId]: {
          ...this.state.posts[postId],
          comments: {
            ...this.state.posts[postId].comments,
            [commentId]: { body: comment }
          }
        }
      }
    });
  }

  removeComment({ postId, commentId }) {
    const newState = {
      ...this.state,
      posts: {
        ...this.state.posts,
        [postId]: {
          ...this.state.posts[postId],
          comments: {
            ...this.state.posts[postId].comments
          }
        }
      }
    };

    delete newState.posts[postId].comments[commentId];
    this.setState(newState);
  }

  render() {
    const { posts } = this.state;
    const { add, remove, edit, addComment, removeComment } = this;
    const postsLength = Object.keys(this.state.posts).length;

    return (
      <Switch>
        <Route exact path="/" render={() => <HomePage {...this.state} />} />
        <Route
          exact
          path="/new"
          render={props => (
            <PostForm
              length={postsLength}
              funcs={{ add }}
              mode="New"
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/:id"
          render={props => {
            const { id } = props.match.params;
            return (
              <PostView
                funcs={{ remove, edit, addComment, removeComment }}
                id={id}
                {...props}
                {...posts[id]}
              />
            );
          }}
        />
        <Route
          exact
          path="/:id/edit"
          render={props => {
            const { id } = props.match.params;
            return (
              <PostForm
                funcs={{ edit }}
                mode="Edit"
                id={id}
                {...props}
                {...posts[id]}
              />
            );
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
