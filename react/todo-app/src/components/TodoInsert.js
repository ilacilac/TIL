import React from 'react';
import styled from 'styled-components';

const TodoInsertStyle = styled.div``;

const TodoInsert = ({ insertTodo, onChange }) => {
  return (
    <TodoInsertStyle>
      <input type="text" onChange={onChange} />
      <button onClick={insertTodo}>등록</button>
    </TodoInsertStyle>
  );
};

export default TodoInsert;
