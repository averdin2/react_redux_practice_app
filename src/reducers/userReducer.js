import { FETCH_USERS, UPDATE_SELECT_USER } from '../actions/types';

const initialState = {
  users: [],
  selectedUser: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS:
     return {
       ...state,
       users: action.payload
     };
    case UPDATE_SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload
      };
    default: 
      return state;
  }
}