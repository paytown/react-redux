import { createStore } from 'redux';

const initialState = {
  beans: null,
  fruit: null,
  drink: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_BEANS':
      return { ...state, beans: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log('init', store.getState());

store.dispatch({
  type: 'ADD_BEANS',
  payload: 'black beans'
});
console.log('with beans', store.getState());

