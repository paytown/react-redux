export const getAllPosts = state => state.blog.map((post, id) => ({
  ...post,
  id
}));

export const getPost = (state, i) => getAllPosts(state)[i];
