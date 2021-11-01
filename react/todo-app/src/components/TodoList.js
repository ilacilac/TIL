import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  return todos.map((todo) => <TodoListItem todo={todo} key={todo.id} />);
};

export default TodoList;
