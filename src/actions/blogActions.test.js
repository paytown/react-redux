import { addPost, ADD_POST } from './blogActions';

describe('blog action creators', () => {
  it('makes post', () => {
    expect(addPost('hi', 'there')).toEqual({
      type: ADD_POST,
      payload: {
        title: 'hi',
        body: 'there'
      }
    });
  });
});
