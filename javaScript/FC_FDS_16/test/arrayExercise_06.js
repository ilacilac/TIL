console.log('6번 문제');
/*
  특정 요소의 프로퍼티 값 반전
  todos에서 대상 요소의 id를 인수로 전달하면 해당 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라.

  hint) 기존 객체의 특정 프로퍼티를 변경/추가하여 새로운 객체를 생성하려면 Object.assign 또는 스프레드 문법을 사용한다.
*/

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
  // todos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  todos = todos.map(todo => (todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
}
// map, 삼항연산자
toggleCompletedById(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/

// 첫번째 풀었던 방법
/*
function toggleCompletedById(id) {
  todos.forEach(todo => {
    if (todo.id === id) {
      todo.completed = todo.completed ? false : true;
    }
    // console.log(todo);
    // console.log(todo.completed);
  });
*/

// 두번째 풀었던 방법
/*
function toggleCompletedById(id) {
  todos.forEach((todo, index) => {
    if (id === todo.id) {
      const { completed } = todo;
      todo = { ...todo, completed: !completed };
    }
    todos[index] = todo;
  });
}
*/