import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, toggleDone, deleteTodo }) => {
  return todos.map((todo) => (
    <TodoListItem
      todo={todo}
      key={todo.id}
      toggleDone={toggleDone}
      deleteTodo={deleteTodo}
    />
  ));
};

export default React.memo(TodoList);
