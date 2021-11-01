import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import styled from 'styled-components';
import TodoInsert from './components/TodoInsert';

const GlobalStyle = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const insertTodo = (e) => {
  console.log(e);
};

const App = () => {
  const todos = [
    { id: 1, content: 'Studying', done: false },
    { id: 2, content: 'Working out', done: true },
    { id: 3, content: 'Reading a book', done: false },
  ];
  return (
    <GlobalStyle>
      <TodoInsert />
      <TodoTemplate todos={todos} insertTodo={insertTodo} />
    </GlobalStyle>
  );
};

export default App;
