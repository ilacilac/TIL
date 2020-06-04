// State
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $removeTodo = document.querySelector('.remove-todo');
const $ckCompleteAll = document.getElementById('ck-complete-all');
const $clearCompletedBtn = document.querySelector('.clear-completed > .btn');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');

let todos = [
  { id: 1, contents: 'HTML', completed: true},
  { id: 2, contents: 'CSS', completed: false}
];


// Function 
const render = () => {
  sortId();
  countCompleted();
  countIncompleted();
  let html = '';

  // 이렇게 처리하는게 맞는걸까?
  // 전체완료 후 삭제 눌렀을때 분기 처리
  if (!todos.length) $todos.innerHTML = '';

  todos.forEach(todo => {
    html += `
    <li id=${todo.id} class="todo-item">
      <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
      <label for="ck-${todo.id}">${todo.contents}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`;

    return $todos.innerHTML = html;
  });
};
// todo 완료 / 미완료 개수 구하기
const countCompleted = () => {
  const completedCnt = todos.filter(todo => {
    return todo.completed;
  });

  // console.log(cnt.length);
  $completedTodos.textContent = completedCnt.length;
};

const countIncompleted = () => {
  const incompletedCnt = todos.filter(todo => {
    return !todo.completed;
  });
  $activeTodos.textContent = incompletedCnt.length;
};

// todo를 추가해주기
const addTodo = (e) => {
  todos = [...todos, { id: findId(), contents: e.target.value.trim(), completed: false}];
  render();
  $inputTodo.value = '';
};

// id기준으로 정렬해주기
const sortId = () => {
  todos.sort((a, b) => {
    return b.id > a.id ? 1 : b.id < a.id ? -1 : 0;
  });
};

// id값 찾아주기
const findId = () => {
  // todos에 map을써서 todo를 돌아 그래서 id를
  const idArr = todos.map(todo => {
    // console.log(todo);
    return todo.id; 
  });
  return (idArr.length) ? Math.max(...idArr) + 1 : 1;
};
// console.log(findId());

// Input 'checked' property change
const changeChecked = (e) => {
  todos.map(todo => {
    // (todo.completed === e.target.checked) ?  : console.log('dd');
    // console.log(todos); ?? 왜 두번찍힐까
    // console.log(e);

    // e.target의 부모와 todo의 id가 일치되면 반전시켜주자.
    // console.log(e.target.parentNode.id);
    // console.log(todo.id);
    if (+e.target.parentNode.id === todo.id) {
      return todo.completed = !todo.completed;
    }
  });
  // console.log(todos);
};

const deleteTodo = (e) => {
  // e의 부모 ID랑 todo의 id랑 일치하지 않는것만 리턴하기.
  todos = todos.filter(todo => {
    return +e.target.parentNode.id !== todo.id;
  });

  return todos;
};

const changeCompleteAll = (e) => {
  todos.map(todo => {
    return (e.target.checked) ? todo.completed = true : todo.completed = false;
  });
  console.log(todos);
  render();
};

const clearComplete = () => {
  todos = todos.filter(todo => {
    return !todo.completed;
  });
  console.log(todos);
  return todos;
};

// Event
window.onload = () => {
  render();
};

// Write content in input + Enter Key
$inputTodo.onkeyup = e => {
  // console.log($inputTodo.value.trim() === );
  if (e.keyCode !== 13 || $inputTodo.value.trim() === '') return;
  addTodo(e);
};

// Checkbox change
$todos.onchange = (e) => {
  changeChecked(e);
  countCompleted();
  countIncompleted();
};

// Delete icon click
$todos.onclick = (e) => {
  if (!(e.target.matches('.todo-item > .remove-todo'))) return;
  deleteTodo(e);
  render();
};

// Checked all completed checkbox
$ckCompleteAll.onchange = (e) => {
  changeCompleteAll(e);
  countCompleted();
  render();
}

// Click clearCompletedBtn
$clearCompletedBtn.onclick = () => {
  clearComplete();
  render();
}










// 1. 문서에 먼저 로드해주기
