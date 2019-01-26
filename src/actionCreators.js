import {
  GET_POST,
  REMOVE_COMMENT,
  ADD_COMMENT,
  ADD,
  REMOVE,
  EDIT,
  LOAD_TITLES,
  VOTE
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
    type: LOAD_TITLES,
    payload
  };
}

export function vote(payload) {
  return {
    type: VOTE,
    payload
  };
}

export function getPostsPromise(dispatch) {
  return function({ limit, offset }) {
    axios
      .get(`${BASE_URL}/api/posts/?limit=${limit}&offset=${offset}`)
      .then(res => {
        const posts = res.data.reduce((acc, next) => {
          const { id, ...details } = next;
          acc[id] = details;
          return acc;
        }, {});
        dispatch({ type: LOAD_TITLES, payload: posts });
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

export function votePromise(dispatch) {
  return function({ postId, type }) {
    return axios
      .post(`${BASE_URL}/api/posts/${postId}/vote/${type}`)
      .then(res => dispatch(vote({ vote: res.data.votes, postId })))
      .catch(error => console.error(error));
  };
}
