import React from 'react';

const TodoListItem = ({ todo }) => {
  return (
    <div>
      <p>{todo.content}</p>
      <input type="checkbox" defaultChecked={todo.done} />
    </div>
  );
};

export default TodoListItem;
