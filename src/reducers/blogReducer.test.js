import reducer from './blogReducer';
import { addPost } from '../actions/blogActions';

describe('blog reducer', () => {
  it('adds a post', () => {
    const newState = reducer([], addPost('title', 'body'));
  
    expect(newState).toEqual([
      { title: 'title', body: 'body' }
    ]);
  });
});
