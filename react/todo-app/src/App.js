import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import styled from 'styled-components';

const GlobalStyle = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const todos = [
    { id: 1, content: 'Studying', done: false },
    { id: 2, content: 'Working out', done: true },
    { id: 3, content: 'Reading a book', done: false },
  ];
  return (
    <GlobalStyle>
      <TodoTemplate todos={todos} />
    </GlobalStyle>
  );
};

export default App;
