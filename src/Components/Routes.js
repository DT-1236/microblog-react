import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePageContainer from '../Containers/HomePageContainer';
import PostViewContainer from '../Containers/PostViewContainer';
import PostFormContainer from '../Containers/PostFormContainer';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <HomePageContainer />} />
        <Route
          exact
          path="/new"
          render={props => <PostFormContainer mode="New" {...props} />}
        />
        <Route
          exact
          path="/:id"
          render={props => (
            <PostViewContainer id={props.match.params.id} {...props} />
          )}
        />
        <Route
          exact
          path="/:id/edit"
          render={props => (
            <PostFormContainer
              mode="Edit"
              id={props.match.params.id}
              {...props}
            />
          )}
        />
      </Switch>
    );
  }
}

export default Routes;
