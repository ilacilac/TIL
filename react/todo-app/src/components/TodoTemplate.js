import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const TodoTemplateStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 450px;
  padding: 50px 20px;
  background: #ffffff;
`;

const TodoListStyle = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const TodoTemplate = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Studying', done: false },
    { id: 2, content: 'Working out', done: true },
    { id: 3, content: 'Reading a book', done: false },
  ]);

  const toggleDone = useCallback((id) => {
    // const targetTodo = todos.filter((todo) => todo.id === id)[0]; // [{}]
    // const newTodo = {...targetTodo, done: !targetTodo.done};
    // const newTodos = todos.map(todo => todo.id === id ? newTodo : todo);

    // const newTodos = todos.map((todo) => {
    //   if (todo.id !== id) return todo;
    //   return { ...todo, done: !done };
    // });

    // const newTodos = todos.map((todo) =>
    //   todo.id === id ? { ...todo, done: !todo.done } : todo,
    // );
    // setTodos(newTodos);

    // 최적화
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }, []);

  const insertTodo = useCallback(
    (content) => {
      const id = Math.max(...todos.map((todo) => todo.id)) + 1;

      // const newTodo = {
      //   id,
      //   content,
      //   done: false,
      // };
      // setTodos([...todos, newTodo]);

      // 최적화
      setTodos((todos) => [...todos, { id, content, done: false }]);
    },
    [todos],
  );

  const deleteTodo = useCallback((id) => {
    // const newTodos = todos.filter(todo => {
    //   return todo.id !== id;
    // });
    // console.log(newTodos)
    // setTodos(newTodos);

    // 최적화
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <TodoTemplateStyle>
      <TodoInsert insertTodo={insertTodo} />
      <TodoListStyle>
        <TodoList
          todos={todos}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
        />
      </TodoListStyle>
    </TodoTemplateStyle>
  );
};

export default TodoTemplate;

// rafce
