import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, changingDone }) => {
  return todos.map((todo) => (
    <TodoListItem
      todo={todo}
      key={todo.id}
      id={todo.id}
      changingDone={changingDone}
    />
  ));
};

export default TodoList;
