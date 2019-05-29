import { getAllComments } from './commentSelector';

describe('Comment Selector', () => {
  it('Get all comments on post', () => {
    const state = {
      comments: {
        1: ['howdy'],
        2: ['what', 'huh']
      }
    };

    expect(getAllComments(state, 2)).toEqual(['what', 'huh']);
  });
});
