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
    case 'ADD_FRUIT':
      return { ...state, fruit: action.payload };
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
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

store.dispatch({
  type: 'ADD_FRUIT',
  payload: 'durian'
});
console.log('with fruit', store.getState());

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'whiskey'
});
console.log('with drink', store.getState());
