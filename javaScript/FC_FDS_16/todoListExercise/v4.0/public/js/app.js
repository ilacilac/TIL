import { ajax } from './ajax.js';
// State
let todos = [];
let navState = 'all';

// DOMs
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('.complete-all > .checkbox');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $nav = document.querySelector('.nav');

const render = () => {
  let html = '';

  const _todos = todos.filter(({ completed }) => (navState === 'completed' ? completed : navState === 'active' ? !completed : true));

  _todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}" class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });

  $todos.innerHTML = html;
  $completedTodos.textContent = todos.filter(({ completed }) => completed).length;
  $activeTodos.textContent = todos.filter(({ completed }) => !completed).length;
};

// ajax.get => todos
const getTodos = () => {
  ajax.get('/todos', _todos => {
    todos = _todos;
    render();
  });
  console.log('[getTodos]', todos);
};

const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const addTodo = content => {
  // todos = [{ id: generateId(), content, completed: false }, ...todos];
  // url, payload, callback
  ajax.post('/todos', { id: generateId(), content, completed: false }, _todos => {
    todos = _todos;
    render();
  });
  console.log('[addTodo]', todos);
};

const toggleTodo = id => {
  ajax.patch(`/todos/${id}`, { id }, _todos => {
    todos = _todos;
    render();
  });
  console.log('[toggleTodo]', todos);
};

// 삭제할 todo 한개 {}
const removeTodo = id => {
  ajax.delete(`/todos/${id}`, _todos => {
    todos = _todos;
    render();
  });
  console.log('[removeTodo]', todos);
};

const toggleCompleteAll = completed => {
  // (url, payload, callback)
  ajax.patch('/todos', { completed: $completeAll.checked }, _todos => {
    todos = _todos;
    render();
  })
  // todos = todos.map(todo => ({ ...todo, completed }));
  console.log('[toggleCompleteAll]', todos);

  
};

const removeCompleted = () => {
  ajax.delete('/todos/completed', _todos => {
    todos = _todos;
    render();
  });
};

const changeNavState = id => {
  [...$nav.children].forEach($navItem => {
    $navItem.classList.toggle('active', $navItem.id === id);
  });

  navState = id;

  console.log('[changeNavState]', navState);
  render();
};

// Event bindings
window.onload = getTodos;

$inputTodo.onkeyup = ({ keyCode, target }) => {
  const content = target.value.trim();
  if (keyCode !== 13 || content === '') return;
  addTodo(content);
  target.value = '';
};

$todos.onchange = e => {
  toggleTodo(e.target.parentNode.id);
};

$todos.onclick = e => {
  if (!e.target.matches('.todos > li > .remove-todo')) return;
  removeTodo(e.target.parentNode.id);
};

$completeAll.onchange = e => {
  toggleCompleteAll(e.target.checked);
};

$clearCompleted.onclick = removeCompleted;

$nav.onclick = ({ target }) => {
  if (!target.matches('.nav > li:not(.active)')) return;
  changeNavState(target.id);
};
