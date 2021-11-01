import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  return todos.map((todo) => <TodoListItem todo={todo} />);
};

export default TodoList;
