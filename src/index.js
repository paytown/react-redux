import { createStore } from 'redux';
import { addPost, removePost, updatePost } from './actions/blogActions';
import { addComment, removeComment } from './actions/commentActions';
import reducers from './reducers/index';

const store = createStore(reducers);

store.dispatch(addPost('hi', 'body'));
console.log('added post', store.getState());

store.dispatch(addPost('hello', 'there'));
console.log('added post2', store.getState());

store.dispatch(addPost('post', 'three'));
console.log('added post3', store.getState());

store.dispatch(removePost(1));
console.log('l8r', store.getState());

store.dispatch(updatePost(1, 'nah im post 2 now'));
console.log('update', store.getState());

store.dispatch(addComment(0, 'comment one'));
console.log('comment1', store.getState());

store.dispatch(addComment(0, 'comment 2'));
console.log('comment2', store.getState());

store.dispatch(removeComment(0, 1));
console.log('delete comment2', store.getState());
