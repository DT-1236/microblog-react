import { REMOVE_COMMENT, ADD_COMMENT, ADD, REMOVE, EDIT } from './actionTypes';

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
