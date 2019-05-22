import { createStore } from 'redux';
import { ADD_POST, addPost, REMOVE_POST, removePost } from './actions/actionCreators';

const initialState = {
  title: null,
  body: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { 
        ...state,
        title: action.payload.title,
        body: action.payload.body
      };
    case REMOVE_POST:
      return { 
        ...state,
        title: null,
        body: null
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(addPost('hi', 'body'));
console.log('added post', store.getState());

store.dispatch(removePost());
console.log('l8r', store.getState());
