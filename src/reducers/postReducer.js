import { FETCH_POSTS, UPDATE_SELECT_USER } from '../actions/types';

const initialState = {
  user: [],
  posts: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case UPDATE_SELECT_USER:
      return {
        ...state,
        user: action.payload
      }
    default: 
      return state;
  }
}