import React from 'react';
import PropTypes from 'prop-types';

function PostDetails({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

PostDetails.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default PostDetails;
