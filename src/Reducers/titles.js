import { ADD, REMOVE, EDIT, LOAD_TITLES, VOTE } from '../actionTypes';

const INITIAL_STATE = {};

export default function titles(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_TITLES: {
      return { ...state, ...action.payload };
    }
    case ADD:

    // eslint-disable-next-line no-fallthrough
    case EDIT: {
      const { id, body, votes, comments, ...post } = action.payload;
      const newState = { ...state };
      newState[id] = post;
      return newState;
    }
    case REMOVE: {
      const { id } = action.payload;
      const newState = { ...state };
      delete newState[id];
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
