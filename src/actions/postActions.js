import { FETCH_POSTS } from './types';

export const fetchPosts = (id) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }));
}