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
      return { ...state, [id]: post };
    }
    case REMOVE: {
      const { id } = action.payload;
      const newState = { ...state };
      delete newState[id];
      return newState;
    }

    case VOTE: {
      const { postId, vote } = action.payload;
      return { ...state, [postId]: { ...state[postId], votes: vote } };
    }
    default: {
      return state;
    }
  }
}
