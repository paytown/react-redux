import React from 'react';
import CreatePost from '../posts/CreatePost';
import AllPosts from '../posts/AllPosts';

export default function HomePage() {
  return (
    <>
      <CreatePost />
      <AllPosts />
    </>
  );
}
