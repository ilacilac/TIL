import React from 'react';
import styled from 'styled-components';
import { MdDelete, MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

const TodoListItemStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 0 0 20px;
  box-sizing: border-box;
  & + & {
    border-top: 1px solid #dee2e6;
  }
  &:nth-child(even) {
    background: #eee;
  }
`;

const TodoCheckStyle = styled.div``;

const TodoContentStyle = styled.p`
  // flex-grow: 2;
  flex-basis: 80%;
  padding-left: 10px;
`;

const TodoDeleteBtnStyle = styled.button`
  // text-indent: -9999px;
  cursor: pointer;
  flex-grow: 1;
  border: none;
  background: transparent;
`;

const TodoListItem = ({ todo, toggleDone, deleteTodo, style }) => {
  const { id, content, done } = todo;

  return (
    <TodoListItemStyle style={style}>
      <TodoCheckStyle
        onClick={() => {
          toggleDone(id);
        }}
      >
        {done ? (
          <MdCheckBox size="20" color="#e91762" />
        ) : (
          <MdCheckBoxOutlineBlank size="20" color="#e91762" />
        )}
      </TodoCheckStyle>
      <TodoContentStyle>{content}</TodoContentStyle>
      <TodoDeleteBtnStyle
        onClick={() => {
          deleteTodo(id);
        }}
      >
        <MdDelete aria-label="삭제" color="#666666" />
      </TodoDeleteBtnStyle>
    </TodoListItemStyle>
  );
};

export default React.memo(TodoListItem);
