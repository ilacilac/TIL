import React from 'react';
import styled from 'styled-components';

const TodoListItemStyle = styled.div`
  display: flex;
  align-items: center;
`;

const TodoListItem = ({ todo, changingDone, id }) => {
  return (
    <TodoListItemStyle>
      <p>{todo.content}</p>
      <input
        type="checkbox"
        defaultChecked={todo.done}
        onClick={(e) => {
          changingDone(e, id);
        }}
      />
    </TodoListItemStyle>
  );
};

export default TodoListItem;
