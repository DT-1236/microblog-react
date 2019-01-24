import {
  REMOVE_COMMENT,
  ADD_COMMENT,
  ADD,
  REMOVE,
  EDIT,
  LOAD_POSTS
} from './actionTypes';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export function add(payload) {
  return {
    type: ADD,
    payload
  };
}

export function remove(payload) {
  return {
    type: REMOVE,
    payload
  };
}

export function edit(payload) {
  return {
    type: EDIT,
    payload
  };
}
export function remove_comment(payload) {
  return {
    type: REMOVE_COMMENT,
    payload
  };
}
export function add_comment(payload) {
  return {
    type: ADD_COMMENT,
    payload
  };
}

export function got_posts(payload) {
  return {
    type: LOAD_POSTS,
    payload
  };
}

export function get_posts() {
  return async function(dispatch) {
    try {
      const res = await axios.get(`${BASE_URL}/api/posts/`);

      let posts = res.data.reduce((acc, next) => {
        const { id, comments, ...details } = next;

        acc[id] = details;

        acc[id].comments = comments.reduce((accComments, nextComments) => {
          accComments[nextComments.id] = { body: nextComments.text };

          return accComments;
        }, {});

        return acc;
      }, {});

      console.log(posts);

      dispatch(got_posts(posts));
    } catch (error) {}
  };
}
