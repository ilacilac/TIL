import React, { useState } from 'react';
import styled from 'styled-components';

const TodoInsertStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TodoInputStyle = styled.input`
  width: 85%;
  height: 30px;
  border: 1px solid #cccccc;
  border-radius: none;
  box-shadow: none;
  box-sizing: border-box;
`;
const TodoInsertButtonStyle = styled.button`
  width: 15%;
  height: 30px;
  border: none;
  color: #ffffff;
  box-sizing: border-box;
  background: #e91762;
`;

const TodoInsert = ({ insertTodo }) => {
  const [content, setContent] = useState('');

  const onChange = (e) => {
    setContent(e.currentTarget.value);
  };

  const onSubmit = () => {
    insertTodo(content);
  }

  return (
    <TodoInsertStyle>
      <TodoInputStyle type="text" onChange={onChange} />
      <TodoInsertButtonStyle onClick={onSubmit}>등록</TodoInsertButtonStyle>
    </TodoInsertStyle>
  );
};

export default TodoInsert;
