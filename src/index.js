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
    case 'EMPTY_BOX':
      return { ...state, beans: null, fruit: null, drink: null };
    case 'FILL_EM_ALL':
      return { ...state, beans: action.payload.beans, fruit: action.payload.fruit, drink: action.payload.drink };
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

store.dispatch({
  type: 'EMPTY_BOX'
});
console.log('empty', store.getState());

store.dispatch({
  type: 'FILL_EM_ALL',
  payload: {
    beans: 'pinto',
    fruit: 'apple',
    drink: 'coke'
  }
});
console.log('everything', store.getState());
