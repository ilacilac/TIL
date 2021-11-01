import React from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';

const TodoTemplateStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 450px;
  padding: 50px;
  background: #ffffff;
`;

const TodoTemplate = ({ todos }) => {
  return (
    <TodoTemplateStyle todos={todos}>
      <TodoList todos={todos} />
    </TodoTemplateStyle>
  );
};

export default TodoTemplate;

// rafce
