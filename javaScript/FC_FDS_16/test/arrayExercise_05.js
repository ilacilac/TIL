console.log('5번 문제');
/*
  특정 요소 삭제
  todos에서 삭제할 요소의 id를 인수로 전달하면 해당 요소를 삭제하는 함수를 작성하라.
  // 삭제, 제거 -> splice : mutator이므로 지우자.
*/

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
}

removeTodo(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/

/*
  // 첫번째 풀었던 방법
  const deleteTodo = todos.find((todo => todo.id === id));
  // { id: 2, content: 'CSS', completed: true }
  const deleteTodoIdx = todos.findIndex(todo => todo.id === id); // 1

  console.log('deleteTodo', deleteTodo);
  console.log('deleteTodoIdx', deleteTodoIdx);
*/
