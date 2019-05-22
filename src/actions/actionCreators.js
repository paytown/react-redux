export const ADD_POST = 'ADD_POST';
export const addPost = (title, body) => ({
  type: ADD_POST,
  payload: {
    title: title,
    body: body
  }
});
