import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <p>{post.title}</p>
    </Link>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
