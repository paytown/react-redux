import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ post, removePost }) {
  return (
    <>
      <Link to={`/posts/${post.id}`}>
        <p>{post.title}</p>
      </Link>
      <p onClick={removePost.bind(null, post.id)}>Delete</p>
    </>
  );
}

Post.propTypes = {
  removePost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
