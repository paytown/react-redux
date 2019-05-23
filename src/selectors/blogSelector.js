export const getAllPosts = state => state.posts.map((post) => ({
  ...post
}));

export const getPost = (state, i) => getAllPosts(state)[i];
