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

      dispatch(got_posts(posts));
    } catch (error) {
      console.log(error);
    }
  };
}
//////////
export function update_post({ id, ...details }) {
  return async function(dispatch) {
    try {
      await axios.put(`${BASE_URL}/api/posts/${id}`, details);

      dispatch(edit({ id, ...details }));
    } catch (error) {
      console.log(error);
    }
  };
}
export function add_post(payload) {
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
export function delete_post({ id }) {
  return async function(dispatch) {
    try {
      await axios.delete(`${BASE_URL}/api/posts/${id}`);

      dispatch(remove({ id }));
    } catch (error) {
      console.log(error);
    }
  };
}
export function add_commentAPI({ postId, comment }) {
  return async function(dispatch) {
    try {
      const res = await axios.post(
        `${BASE_URL}/api/posts/${postId}/comments/`,
        { text: comment }
      );

      let payload = { postId, commentId: res.data.id, comment: res.data.text };
      dispatch(add_comment(payload));
    } catch (error) {
      console.log(error);
    }
  };
}

export function delete_commentAPI({ postId, commentId }) {
  return async function(dispatch) {
    try {
      await axios.delete(
        `${BASE_URL}/api/posts/${postId}/comments/${commentId}`
      );

      dispatch(remove_comment({ commentId, postId }));
    } catch (error) {
      console.log(error);
    }
  };
}
