import React from 'react';
import PostList from '../components/post/PostList';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/post/PostListContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
    </>
  );
};

export default PostListPage;
