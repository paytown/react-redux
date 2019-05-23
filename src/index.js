import { createStore } from 'redux';
import { addPost, removePost, updatePost } from './actions/actionCreators';
import reducer from './reducers/blogReducer';

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
