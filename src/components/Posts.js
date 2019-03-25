import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        { postItems }
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  user: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  user: state.posts.user,
  posts: state.posts.posts
})

export default connect(mapStateToProps, { fetchPosts })(Posts);