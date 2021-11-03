import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const TodoTemplateStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 30%;
  height: 450px;
  padding: 50px;
  background: #ffffff;
`;

const TodoTemplate = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Studying', done: false },
    { id: 2, content: 'Working out', done: true },
    { id: 3, content: 'Reading a book', done: false },
  ]);

  const [content, setContent] = useState('');

  const id = Math.max(...todos.map((todo) => todo.id)) + 1;

  const changingDone = useCallback((e, id) => {
    const done = e.currentTarget.checked;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  },[todos]);

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
    <TodoTemplateStyle>
      <TodoInsert insertTodo={insertTodo} onChange={onChange} />
      <TodoList todos={todos} changingDone={changingDone} />
    </TodoTemplateStyle>
  );
};

export default TodoTemplate;

// rafce
