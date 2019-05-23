import { getAllPosts, getPost } from './blogSelector';

describe('Blog Selectors', () => {
  it('All Posts', () => {
    const state = {
      posts: [
        { title: 'post 1', body: 'hi' },
        { title: 'post 2', body: 'hey' },
        { title: 'post 3', body: 'howdy' }
      ]
    };

    expect(getAllPosts(state)).toEqual([
      { title: 'post 1', body: 'hi' },
      { title: 'post 2', body: 'hey' },
      { title: 'post 3', body: 'howdy' }
    ]);
  });

  it('Get post by ID', () => {
    const state = {
      posts: [
        { title: 'post 1', body: 'hi' },
        { title: 'post 2', body: 'hey' },
        { title: 'post 3', body: 'howdy' }
      ]
    };

    expect(getPost(state, 1)).toEqual(
      { title: 'post 2', body: 'hey' }
    );
  });
});
