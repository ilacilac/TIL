// todos의 id값으로 배열만들기 
let todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'JavaScript', completed: false }
];
/*
let array = [];
todos.map((v, i) => {
  console.log(v);
});
*/

// for문으로 풀어보기
const todosArray = [];
for (let i = 0; i < todos.length; i++) {
  todosArray.push(todos[i].id);
}
console.log('todosArray', todosArray);

// 1. map : 화살표 함수
const todosMap = todos.map(todo => {
  return todo.id;
});
console.log('todosMap', todosMap);

// 2. map : 화살표 함수 / 단축
const todosMapSimple = todos.map(todo => todo.id);
console.log('todosMapSimple', todosMapSimple);

// 3. map : 일반 함수
const todosNormalFunction = todos.map(function (todo) {
  return todo.id;
});
console.log('todosNormalFunction', todosNormalFunction);





// 풀이
// for문
// const _todos = [];
// for (let i = 0; i < todos.length; i++) {
//   _todos.push(todos[i].id);
// }
// console.log(_todos);

// map
// console.log(todos.map(todo => todo.id));