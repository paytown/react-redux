import { getAllPosts, getPost } from './blogSelector';

describe('Blog Selectors', () => {
  it('All Posts', () => {
    const state = {
      blog: [
        { title: 'post 1', body: 'hi', },
        { title: 'post 2', body: 'hey' },
        { title: 'post 3', body: 'howdy' }
      ]
    };

    expect(getAllPosts(state)).toEqual([
      { id: 0, title: 'post 1', body: 'hi' },
      { id: 1, title: 'post 2', body: 'hey' },
      { id: 2, title: 'post 3', body: 'howdy' }
    ]);
  });

  it('Get post by ID', () => {
    const state = {
      blog: [
        { title: 'post 1', body: 'hi' },
        { title: 'post 2', body: 'hey' },
        { title: 'post 3', body: 'howdy' }
      ]
    };

    expect(getPost(state, 1)).toEqual(
      { id: 1, title: 'post 2', body: 'hey' }
    );
  });
});
