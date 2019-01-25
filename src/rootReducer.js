import {
  GET_POST,
  ADD,
  REMOVE,
  EDIT,
  REMOVE_COMMENT,
  ADD_COMMENT,
  LOAD_POSTS
} from './actionTypes';
const INITIAL_STATE = {
  posts: {},
  titles: {},
  loading: true
};

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_POST: {
      const { id, ...details } = action.payload;
      const newState = { ...state, posts: { ...state.posts, [id]: details } };
      const comments = details.comments.reduce((acc, next) => {
        acc[next.id] = { body: next.text };
        return acc;
      }, {});
      newState.posts[id].comments = comments;
      return newState;
    }
    case LOAD_POSTS: {
      return { ...state, titles: action.payload, loading: false };
    }
    case ADD:
    //   const { id, ...post } = action.payload;
    //   const newState = { ...state, posts: { ...state.posts } };
    //   newState.posts[id] = post;
    //   return newState;

    // eslint-disable-next-line no-fallthrough
    case EDIT: {
      const { id, body, votes, comments, ...post } = action.payload;
      const newState = {
        ...state,
        posts: { ...state.posts },
        titles: { ...state.titles }
      };
      newState.posts[id] = { body, votes, comments, ...post };
      newState.titles[id] = post;
      return newState;
    }
    case REMOVE: {
      const { id } = action.payload;
      const newState = { ...state, posts: { ...state.posts } };
      delete newState.posts[id];
      delete newState.titles[id];
      return newState;
    }
    case ADD_COMMENT: {
      // clone previous state
      const { postId, commentId, comment } = action.payload;
      const newState = {
        ...state,
        posts: {
          ...state.posts,
          [postId]: {
            ...state.posts[postId]
          }
        }
      };
      const { ...newComments } = state.posts[postId].comments;

      //   add new comment
      newComments[commentId] = { body: comment };
      newState.posts[postId].comments = newComments;
      return newState;
    }
    case REMOVE_COMMENT: {
      // clone previous state
      const { postId, commentId } = action.payload;
      const newState = {
        ...state,
        posts: {
          ...state.posts,
          [postId]: {
            ...state.posts[postId]
          }
        }
      };
      const { ...newComments } = state.posts[postId].comments;
      newComments[commentId] = { ...newComments[commentId] };

      //   delete target comment
      delete newComments[commentId];
      newState.posts[postId].comments = newComments;
      return newState;
    }
    default: {
      return state;
    }
  }
}
