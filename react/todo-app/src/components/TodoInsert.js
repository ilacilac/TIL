import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const TodoInsertStyle = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
`;

const TodoInputStyle = styled.input`
  width: 70%;
  height: 50px;
  border: 1px solid #cccccc;
  border-radius: none;
  box-shadow: none;
  box-sizing: border-box;
`;
const TodoInsertButtonStyle = styled.button`
  width: 10%;
  height: 50px;
  border: none;
  color: #ffffff;
  box-sizing: border-box;
  background: #e91762;
`;

const TodoInsert = ({ insertTodo }) => {
  const inputRef = useRef();
  const [content, setContent] = useState('');

  const onChange = (e) => {
    setContent(e.currentTarget.value);
  };

  const onSubmit = () => {
    insertTodo(content);
    inputRef.current.value = '';
  };

  return (
    <TodoInsertStyle>
      <TodoInputStyle type="text" onChange={onChange} ref={inputRef} />
      <TodoInsertButtonStyle onClick={onSubmit}>등록</TodoInsertButtonStyle>
    </TodoInsertStyle>
  );
};

export default TodoInsert;
