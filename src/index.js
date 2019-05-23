import { createStore } from 'redux';
import { ADD_POST, addPost, REMOVE_POST, removePost, UPDATE_POST, updatePost } from './actions/actionCreators';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [
        ...state,
        action.payload
      ];
    case REMOVE_POST:
      return [ 
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    case UPDATE_POST:
      return [
        ...state.slice(0, action.payload.id),

        {
          ...state[action.payload.id],
          body: action.payload.body
        },

        ...state.slice(action.payload.id + 1)
      ];
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(addPost('hi', 'body'));
console.log('added post', store.getState());

store.dispatch(addPost('hello', 'there'));
console.log('added post2', store.getState());

store.dispatch(addPost('post', 'three'));
console.log('added post2', store.getState());

store.dispatch(removePost(1));
console.log('l8r', store.getState());

store.dispatch(updatePost(1, 'nah im post 2 now'));
console.log('update', store.getState());
