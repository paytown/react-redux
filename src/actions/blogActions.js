export const ADD_POST = 'ADD_POST';
export const addPost = (title, body) => ({
  type: ADD_POST,
  payload: {
    title: title,
    body: body
  }
});

export const REMOVE_POST = 'REMOVE_POST';
export const removePost = id => ({
  type: REMOVE_POST,
  payload: id
});

export const UPDATE_POST = 'UPDATE_POST';
export const updatePost = (id, body) => ({
  type: UPDATE_POST,
  payload: { id, body }
});
