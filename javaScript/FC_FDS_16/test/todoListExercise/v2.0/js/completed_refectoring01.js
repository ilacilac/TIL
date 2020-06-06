// State
let todos = []; // 왜 전역으로 쓸까? => 이 밑에있는 모든 로직들이 얘를 의존하게 되어있다.
// 전역의 문제 : 암묵적변환
// 모듈 => 파일을 쪼갰을때 모듈로 만든순간 let은 지역스코프가 된다.
// 나중에 웹팩으로 모듈 번들링을 한것이고 이게 전역으로 보이지만 나중에 모듈로 만들면 지역변수가 된다.

// DOMs 
const $todos = document.querySelector('.todos'); // *4
const $inputTodo = document.querySelector('.input-todo'); // *1-6
const $completeAll = document.querySelector('#ck-complete-all');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed > .btn');

// 서버로 부터 데이터를 가져온다.
const getTodos = () => { // *1
  // 데이터를 가져왔다 치자.
  todos = [
    { id: 1, content: 'HTML', completed: false},
    { id: 2, content: 'CSS', completed: true},
    { id: 3, content: 'Javascript', completed: false},
  ];

  // *6 서버에서 sort해서 주면 좋음 => 백쪽에서 해주는게 좋음
  todos = todos.sort((todo1, todo2) => todo2.id - todo1.id); // todos를 고쳐주는 mutator => 앞에 todos = // 일관성있게 객체를 변경할때는 재할당을 해준다.(마치 원시값처럼) 그럼 편해질것!
  render();
};

// id값 구하기
// *1-5 // 조건문준이유 : 배열에 없을경우
const generateId = () => todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1; 


// *1-4
const addTodo = content => { 
  todos = [{ id: generateId(), content, completed: false}, ...todos];
};


// *1-9
const removeTodo = id => {
  // 받아서 맞춰주는게 좋다 => 맞춰서주면 규칙이 생기는것이다. => 틀릴 수 있다.
  todos = todos.filter(todo => todo.id !== +id);
};

// *1-11
const toggleTodo = id => {
  todos = todos.map(todo => todo.id === +id ? { ...todo, completed: !todo.completed } : todo);
  console.log('[toggletodo]', todos);
};


// *1-13
const completeAll = completed => {
  todos = todos.map(todo => ({ ...todo, completed }));
};


// check
const clearCompleted = () => {
  todos = todos.filter(todo => !todo.completed);
};

// *3 : *2 호출 이전에 선언하는게 좋기때문에 여기
const render = () => {
  let html = '';
  todos.forEach(({ id, content, completed }) => { // *1-1 : 디스트럭처링 할당
    html += `<li id="${id}" class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });
  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
  $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
  $todos.innerHTML = html; // *5
}

// *1-2 삭제 render(); 위로 이동 sort아래
/*
window.onload = () => { // *2
  getTodos(); 
}
*/


// Event bindings
window.onload = getTodos; // *1-3

// *1-7
$inputTodo.onkeyup = e => {
  // 여기서 this는 window
  if (e.keyCode !== 13) return;
  
  addTodo($inputTodo.value);
  $inputTodo.value = '';
  render();
};

// *1-8
// i를 직접 쓰면 생기기전에 참조가되느로 null.onclick이되므로 에러발생 => 이벤트 위임 사용
$todos.onclick = ({ target }) => {
  // selector 문법을 가지고 가져올 수 있는 노드객체이냐
  if (!target.matches('.remove-todo')) return;
  removeTodo(target.parentNode.id); // 부모의부모노드를 찾아가서 부모노드를 removeChild로 하면 상태유지가 안된다. => id를 가져와서 지운다.
  render();
};


// completed property 값을 변경
// *1-10
$todos.onchange = ({ target }) => {
  toggleTodo(target.parentNode.id);
  render();
};

// *1-12
$completeAll.onchange = e => {
  completeAll($completeAll.checked);
  render();
};

clearCompleted.onclick = e => {
  clearCompleted();
  render();
};