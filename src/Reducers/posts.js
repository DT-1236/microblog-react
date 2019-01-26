import {
  GET_POST,
  ADD,
  REMOVE,
  EDIT,
  REMOVE_COMMENT,
  ADD_COMMENT,
  VOTE
} from '../actionTypes';

const INITIAL_STATE = {};

export default function posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_POST: {
      const { id, ...details } = action.payload;
      return { ...state, [id]: details };
    }
    case ADD:

    // eslint-disable-next-line no-fallthrough
    case EDIT: {
      const { id, ...post } = action.payload;
      return { ...state, [id]: { ...post } };
    }
    case REMOVE: {
      const { id } = action.payload;
      const newState = { ...state };
      delete newState[id];
      return newState;
    }
    case ADD_COMMENT: {
      const { postId, commentId, comment } = action.payload;
      const newState = { ...state };
      const { ...newComments } = state[postId].comments;

      newComments[commentId] = { body: comment };
      newState[postId].comments = newComments;
      return newState;
    }
    case REMOVE_COMMENT: {
      const { postId, commentId } = action.payload;
      const newState = { ...state, [postId]: { ...state[postId] } };
      const { ...newComments } = state[postId].comments;
      newComments[commentId] = { ...newComments[commentId] };

      delete newComments[commentId];
      newState[postId].comments = newComments;
      return newState;
    }
    case VOTE: {
      const { postId, vote } = action.payload;
      const newState = { ...state, [postId]: { ...state[postId] } };
      newState[postId].votes = vote;
      return newState;
    }
    default: {
      return state;
    }
  }
}
