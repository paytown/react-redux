import { addPost, ADD_POST } from './actionCreators';

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
