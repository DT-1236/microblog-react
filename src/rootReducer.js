import { combineReducers } from 'redux';
import titles from './Reducers/titles';
import posts from './Reducers/posts';

export default combineReducers({ titles, posts });
