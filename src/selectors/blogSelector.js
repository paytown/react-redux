export const getAllPosts = state => state.posts.map((post, id) => ({
  ...post,
  id
}));

export const getPost = (state, i) => getAllPosts(state)[i];
