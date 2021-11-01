import React from 'react';

const TodoListItem = ({ todo }) => {
  return (
    <div>
      <p>{todo.content}</p>
      <input type="checkbox" checked={todo.done} />
    </div>
  );
};

export default TodoListItem;
