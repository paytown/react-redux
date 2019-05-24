import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts, removePost }) {
  console.log('removePost', removePost);
  console.log('posts', posts);
  const postList = posts.map(post => (
    <li key={post.id}>
      <Post post={post} removePost={removePost} />
    </li>
  ));

  return (
    <ul>{postList}</ul>
  );
}

Posts.propTypes = {
  removePost: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  })).isRequired
};

export default Posts;
