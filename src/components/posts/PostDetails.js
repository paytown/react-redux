import React from 'react';
import PropTypes from 'prop-types';

function PostDetails({ post }) {
  const paragraph = post.body.split('\n').map((p, i) => (
    <p key={i}>{p}</p>
  ));
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{paragraph}</p>
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
