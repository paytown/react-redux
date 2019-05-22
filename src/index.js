import { createStore } from 'redux';
import { addBeans, addFruit, addDrink, removeBeans, removeDrink, removeFruit, fillEmAll, emptyBox } from './actions/actionCreators';
import reducer from './reducers/allReducers';

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
