import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewPage = ({ category }) => {
  console.log(category);
  return (
    <>
      <Categories category={category} />
      <NewsList category={category} />
    </>
  );
};

export default NewPage;
