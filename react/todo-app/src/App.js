import React, { useState } from 'react';
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

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Studying', done: false },
    { id: 2, content: 'Working out', done: true },
    { id: 3, content: 'Reading a book', done: false },
  ]);

  const [content, setContent] = useState('');

  const id = Math.max(...todos.map((todo) => todo.id)) + 1;

  const changingDone = (e, id) => {
    const done = e.currentTarget.checked;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const insertTodo = () => {
    setTodos([
      ...todos,
      {
        id,
        content,
        done: false,
      },
    ]);
  };

  const onChange = (e) => {
    setContent(e.currentTarget.value);
  };
  return (
    <GlobalStyle>
      <TodoInsert insertTodo={insertTodo} onChange={onChange} />
      <TodoTemplate todos={todos} changingDone={changingDone} />
    </GlobalStyle>
  );
};

export default App;
