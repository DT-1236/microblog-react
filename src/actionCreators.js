import {
  GET_POST,
  REMOVE_COMMENT,
  ADD_COMMENT,
  ADD,
  REMOVE,
  EDIT,
  LOAD_POSTS,
  INDICATE_LOADING
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

export function getPost(payload) {
  return {
    type: GET_POST,
    payload
  };
}

export function removeComment(payload) {
  return {
    type: REMOVE_COMMENT,
    payload
  };
}
export function addComment(payload) {
  return {
    type: ADD_COMMENT,
    payload
  };
}

export function gotPosts(payload) {
  return {
    type: LOAD_POSTS,
    payload
  };
}

export function getPostsPromise(dispatch) {
  return function() {
    dispatch({ type: INDICATE_LOADING });
    axios
      .get(`${BASE_URL}/api/posts/`)
      .then(res => {
        const posts = res.data.reduce((acc, next) => {
          const { id, comments, ...details } = next;
          acc[id] = details;
          acc[id].comments = comments.reduce((accComments, nextComments) => {
            accComments[nextComments.id] = { body: nextComments.text };
            return accComments;
          }, {});
          return acc;
        }, {});
        dispatch({ type: LOAD_POSTS, payload: posts });
      })
      .catch(error => console.error(error));
  };
}

export function getPostPromise(dispatch) {
  return function({ id }) {
    return axios
      .get(`${BASE_URL}/api/posts/${id}`)
      .then(res => {
        dispatch(getPost(res.data));
      })
      .catch(error => console.error(error));
  };
}

export function deletePostPromise(dispatch) {
  return function({ id }) {
    return axios
      .delete(`${BASE_URL}/api/posts/${id}`)
      .then(res => {
        dispatch(remove({ id }));
      })
      .catch(error => console.error(error));
  };
}

export function updatePostPromise(dispatch) {
  return function({ id, ...details }) {
    return axios
      .put(`${BASE_URL}/api/posts/${id}`, details)
      .then(res => dispatch(edit({ id, ...details })))
      .catch(error => console.error(error));
  };
}

export function addPostPromise(dispatch) {
  return function(payload) {
    return axios
      .post(`${BASE_URL}/api/posts/`, payload)
      .then(res => {
        dispatch(add(res.data));
        return res.data.id;
      })
      .catch(error => console.error(error));
  };
}

export function addCommentPromise(dispatch) {
  return function({ postId, comment }) {
    return axios
      .post(`${BASE_URL}/api/posts/${postId}/comments/`, { text: comment })
      .then(res => {
        const payload = {
          postId,
          commentId: res.data.id,
          comment: res.data.text
        };
        dispatch(addComment(payload));
      })
      .catch(error => console.error(error));
  };
}

export function deleteCommentPromise(dispatch) {
  return function({ postId, commentId }) {
    axios
      .delete(`${BASE_URL}/api/posts/${postId}/comments/${commentId}`)
      .then(() => dispatch(removeComment({ commentId, postId })))
      .catch(error => console.error(error));
  };
}
