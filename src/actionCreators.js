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

export function getPostAPI(payload) {
  return async function(dispatch) {
    try {
      const res = await axios.get(`${BASE_URL}/api/posts/${payload.id}`);
      res.data.comments = res.data.comments.reduce((acc, next) => {
        acc[next.id] = { body: next.text };
        return acc;
      }, {});
      dispatch(getPost(res.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPostsAPI() {
  return async function(dispatch) {
    try {
      const res = await axios.get(`${BASE_URL}/api/posts/`);
      let posts = res.data.reduce((acc, next) => {
        const { id, comments, ...details } = next;

        acc[id] = details;

        return acc;
      }, {});

      dispatch(gotPosts(posts));
    } catch (error) {
      console.log(error);
    }
  };
}

export function updatePostAPI({ id, ...details }) {
  return async function(dispatch) {
    try {
      await axios.put(`${BASE_URL}/api/posts/${id}`, details);

      dispatch(edit({ id, ...details }));
    } catch (error) {
      console.log(error);
    }
  };
}
export function addPostAPI(payload) {
  return async function(dispatch) {
    try {
      const res = await axios.post(`${BASE_URL}/api/posts/`, payload);

      dispatch(add(res.data));
      return res.data.id;
    } catch (error) {
      console.log(error);
    }
  };
}
export function deletePostAPI({ id }) {
  return async function(dispatch) {
    try {
      await axios.delete(`${BASE_URL}/api/posts/${id}`);

      dispatch(remove({ id }));
    } catch (error) {
      console.log(error);
    }
  };
}
export function addCommentAPI({ postId, comment }) {
  return async function(dispatch) {
    try {
      const res = await axios.post(
        `${BASE_URL}/api/posts/${postId}/comments/`,
        { text: comment }
      );

      let payload = { postId, commentId: res.data.id, comment: res.data.text };
      dispatch(addComment(payload));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteCommentAPI({ postId, commentId }) {
  return async function(dispatch) {
    try {
      await axios.delete(
        `${BASE_URL}/api/posts/${postId}/comments/${commentId}`
      );

      dispatch(removeComment({ commentId, postId }));
    } catch (error) {
      console.log(error);
    }
  };
}

export function voteAPI({ postId, type }) {
  return async function(dispatch) {
    try {
      const res = await axios.post(
        `${BASE_URL}/api/posts/${postId}/vote/${type}`
      );

      let payload = { vote: res.data.votes, postId };

      dispatch(vote(payload));
    } catch (error) {
      console.log(error);
    }
  };
}
