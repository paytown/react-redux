export const getAllPosts = store => store.blog.map((post, id) => ({
  ...post,
  id
}));

export const getPost = (store, i) => getAllPosts(store)[i];
