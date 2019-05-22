import { createStore } from 'redux';
import { ADD_BEANS, addBeans, ADD_FRUIT, addFruit, ADD_DRINK, addDrink, REMOVE_BEANS, removeBeans, REMOVE_FRUIT, removeFruit, REMOVE_DRINK, removeDrink, EMPTY_BOX, emptyBox, FILL_EM_ALL, fillEmAll } from './actions/actionCreators';


const initialState = {
  beans: null,
  fruit: null,
  drink: null
};

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
