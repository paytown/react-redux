import { createStore } from 'redux';

const initialState = {
  beans: null,
  fruit: null,
  drink: null
};

const ADD_BEANS = 'ADD_BEANS';
const ADD_FRUIT = 'ADD_FRUIT';
const ADD_DRINK = 'ADD_DRINK';
const REMOVE_BEANS = 'REMOVE_BEANS';
const REMOVE_FRUIT = 'REMOVE_FRUIT';
const REMOVE_DRINK = 'REMOVE_DRINK';
const EMPTY_BOX = 'EMPTY_BOX';
const FILL_EM_ALL = 'FILL_EM_ALL';

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_BEANS:
      return { ...state, beans: action.payload };
    case ADD_FRUIT:
      return { ...state, fruit: action.payload };
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case REMOVE_BEANS:
      return { ...state, beans: null };
    case REMOVE_FRUIT:
      return { ...state, fruit: null };
    case REMOVE_DRINK:
      return { ...state, drink: null };
    case EMPTY_BOX:
      return { ...state, beans: null, fruit: null, drink: null };
    case FILL_EM_ALL:
      return { ...state, beans: action.payload.beans, fruit: action.payload.fruit, drink: action.payload.drink };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log('init', store.getState());

store.dispatch({
  type: ADD_BEANS,
  payload: 'black beans'
});
console.log('with beans', store.getState());

store.dispatch({
  type: ADD_FRUIT,
  payload: 'durian'
});
console.log('with fruit', store.getState());

store.dispatch({
  type: ADD_DRINK,
  payload: 'whiskey'
});
console.log('with drink', store.getState());

store.dispatch({
  type: REMOVE_BEANS
});
console.log('remove beans', store.getState());

store.dispatch({
  type: REMOVE_FRUIT
});
console.log('remove FRUIT', store.getState());

store.dispatch({
  type: REMOVE_DRINK
});
console.log('remove DRINK', store.getState());

store.dispatch({
  type: FILL_EM_ALL,
  payload: {
    beans: 'pinto',
    fruit: 'apple',
    drink: 'coke'
  }
});
console.log('everything', store.getState());

store.dispatch({
  type: EMPTY_BOX
});
console.log('empty', store.getState());
