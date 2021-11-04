import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, toggleDone, deleteTodo }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
          style={style}
        />
      );
    },
    [toggleDone, deleteTodo, todos],
  );
  // return todos.map((todo) => (
  //   <TodoListItem
  //     todo={todo}
  //     key={todo.id}
  //     toggleDone={toggleDone}
  //     deleteTodo={deleteTodo}
  //   />
  // ));

  return (
    <List
      className="TodoList"
      width={500}
      height={500}
      rowCount={todos.length}
      rowHeight={50}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);
