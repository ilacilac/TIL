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

const ajax = (() => {
  const req = (method, url, payload) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.send(JSON.stringify(payload));
      xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(new Error(xhr.status));
        }
      };
    });
  };
  
  return {
    get(url) {
      return req('GET', url);
    },
    post(url, payload) {
      return req('POST', url, payload);
    },
    patch(url, payload) { // 1
      return req('PATCH', url, payload); // 2
    },
    delete(url) {
      return req('DELETE', url);
    }
  }
})();

// ajax.get => todos
const getTodos = () => {
  ajax.get('/todos')
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
};

const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1);

const addTodo = content => {
  // todos = [{ id: generateId(), content, completed: false }, ...todos];
  ajax.post('/todos', { id: generateId(), content, completed: false })
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
  console.log('[addTodo]', todos);
};

const toggleTodo = id => {
  ajax.patch(`/todos/${id}`, { id })
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
  console.log('[toggleTodo]', todos);
};

// 삭제할 todo 한개 {}
const removeTodo = id => {
  ajax.delete(`/todos/${id}`)
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
  console.log('[removeTodo]', todos);
};

const toggleCompleteAll = completed => {
  // (url, payload, callback)
  ajax.patch('/todos', { completed: $completeAll.checked })
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err))
  // todos = todos.map(todo => ({ ...todo, completed }));
  console.log('[toggleCompleteAll]', todos);
};

const removeCompleted = () => {
  ajax.delete('/todos/completed')
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
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

