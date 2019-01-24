import { ADD, REMOVE, EDIT, REMOVE_COMMENT, ADD_COMMENT } from './actionTypes';
const INITIAL_STATE = {
  posts: {
    '1': {
      title: 'TEST TITLE',
      description: 'Some kind of test',
      body: 'Eeven more teeeeext',
      comments: {
        '1': { body: 'I like cakes' },
        '2': { body: 'But I like pies' }
      }
    },
    '2': {
      title: 'TEST TITLE2',
      description: 'Some kind of test2',
      body: 'Eeven more teeeeext2',
      comments: {}
    }
  }
};

export default function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
    //   const { id, ...post } = action.payload;
    //   const newState = { ...state, posts: { ...state.posts } };
    //   newState.posts[id] = post;
    //   return newState;

    // eslint-disable-next-line no-fallthrough
    case EDIT: {
      const { id, ...post } = action.payload;
      const newState = { ...state, posts: { ...state.posts } };
      newState.posts[id] = post;
      return newState;
    }
    case REMOVE: {
      const { id } = action.payload;
      const newState = { ...state, posts: { ...state.posts } };
      delete newState.posts[id];
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
