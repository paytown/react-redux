import React from 'react';
import PropTypes from 'prop-types';
import CommentPostId from '../../containers/comments/CommentPostId';
import CreateComment from '../../containers/comments/CreateComment';

function PostDetails({ post }) {
  // const paragraph = post.body.split('\n').map((p, i) => (
  //   <p key={i}>{p}</p>
  // ));
  return (
    <section>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>

      <div>
        <CommentPostId postId={post.id} />
        <CreateComment postId={post.id} />
      </div>
    </section>
  );
}

PostDetails.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default PostDetails;
