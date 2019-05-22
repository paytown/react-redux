import { createStore } from 'redux';
import { ADD_POST } from './actions/actionCreators';

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
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: ADD_POST,
  payload: {
    title: 'My Cool Blog',
    body: 'Hello world!'
  }
});
console.log('added post', store.getState());
