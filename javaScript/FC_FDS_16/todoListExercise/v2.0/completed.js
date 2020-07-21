// State
let todos = [];

// DOMs 
const $todos = document.querySelector('.todos'); // *4

// 서버로 부터 데이터를 가져온다.
const getTodos = () => { // *1
  // 데이터를 가져왔다 치자.
  todos = [
    { id: 1, content: 'HTML', completed: false},
    { id: 2, content: 'CSS', completed: true},
    { id: 3, content: 'Javascript', completed: false}
  ];
};
// 데이터를 호출
// window.onload에 도큐먼트를 쓰면..? 아님 요소노드를 쓰면?
// 모든 리소스가 로드되었다를 알려면 최상단에 있어야한다.
// 로드는 윈도우에서만 발생한다.

// *3 : *2 호출 이전에 선언하는게 좋기때문에 여기
const render = () => {
  let html = '';
  todos.forEach(todo => {
    html += `<li id="${todo.id}" class="todo-item">
        <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
        <label for="ck-${todo.id}">${todo.content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });

  $todos.innerHTML = html; // *5
}

window.onload = () => { // *2
  getTodos(); 
  render();
}
