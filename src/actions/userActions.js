import { FETCH_USERS, UPDATE_SELECT_USER } from './types';

export const fetchUsers = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => dispatch({
      type: FETCH_USERS,
      payload: users
    }));
}

export const setSelectUser = (id) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users?id=' + id)
      .then(res => res.json())
      .then(selectedUser => dispatch({
        type: UPDATE_SELECT_USER,
        payload: selectedUser
      }));
}
