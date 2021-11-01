import React from 'react';
import styled from 'styled-components';

const TodoInsertStyle = styled.div``;

const TodoInsert = ({ insertTodo }) => {
  return (
    <TodoInsertStyle>
      <input type="text" />
      <button onClick={insertTodo}>등록</button>
    </TodoInsertStyle>
  );
};

export default TodoInsert;
