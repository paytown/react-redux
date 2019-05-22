import { createStore } from 'redux';

const initialState = {
  beans: null,
  fruit: null,
  drink: null
};

const ADD_BEANS = 'ADD_BEANS';
const addBeans = beans => ({
  type: ADD_BEANS,
  payload: beans
});

const ADD_FRUIT = 'ADD_FRUIT';
const addFruit = fruit => ({
  type: ADD_FRUIT,
  payload: fruit
});

const ADD_DRINK = 'ADD_DRINK';
const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});

const REMOVE_BEANS = 'REMOVE_BEANS';
const removeBeans = () => ({
  type: REMOVE_BEANS
});

const REMOVE_FRUIT = 'REMOVE_FRUIT';
const removeFruit = () => ({
  type: REMOVE_FRUIT
});

const REMOVE_DRINK = 'REMOVE_DRINK';
const removeDrink = () => ({
  type: REMOVE_DRINK
});

const EMPTY_BOX = 'EMPTY_BOX';
const emptyBox = () => ({
  type: EMPTY_BOX
});

const FILL_EM_ALL = 'FILL_EM_ALL';
const fillEmAll = (beans, fruit, drink) => ({
  type: FILL_EM_ALL,
  payload: {
    beans: beans,
    fruit: fruit,
    drink: drink
  }
})

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

store.dispatch(addBeans('black'));
console.log('with beans', store.getState());

store.dispatch(addFruit('grape'));
console.log('with fruit', store.getState());

store.dispatch(addDrink('whiskey'));
console.log('with drink', store.getState());

store.dispatch(removeBeans());
console.log('remove beans', store.getState());

store.dispatch(removeFruit());
console.log('remove FRUIT', store.getState());

store.dispatch(removeDrink());
console.log('remove DRINK', store.getState());

store.dispatch(fillEmAll('ham', 'beef', 'pork'));
console.log('everything', store.getState());

store.dispatch(emptyBox());
console.log('empty', store.getState());
