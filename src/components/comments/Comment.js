import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <p>{comment}</p>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;
