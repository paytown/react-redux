export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (title, body) => ({
  type: ADD_COMMENT,
  payload: {
    body: body
  }
});

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const removeComment = id => ({
  type: REMOVE_COMMENT,
  payload: id
});
