// State
let todos = [];

// Doms
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $ckCompleteAll = document.querySelector('#ck-complete-all');
const $clearCompleted = document.querySelector('.clear-completed');
const $completedTodos = document.querySelector('.clear-completed .completed-todos');
const $activeTodos = document.querySelector('.active-todos');

const $nav = document.querySelector('.nav');

// Function 
const getTodo = () => {
   // get datas
   todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'javaScript', completed: true }
  ];
  todos = todos.sort((todo1, todo2) => todo2.id - todo1.id);

  changeTodo = [...todos];
  render();
};


const render = () => {
  if (!todos.length) $todos.innerHTML = '';

  let html = '';
  // add to li in ul
  todos.forEach(({ id, content, completed }) => {
    html += `
    <li id="${id}" class="todo-item">
      <input id="ck-my${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
      <label for="ck-my${id}">${content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`;
    $todos.innerHTML = html;
  });

  countCompleted();
  countImcompleted();
};

// AddTodo li
const addTodo = (content) => {
  todos = [{ id: generateId(), content, completed: false }, ...todos];
};

// Generate ID
const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};

// Delete todo
const deleteTodo = (target) => {
  todos = todos.filter(todo => {
    return todo.id !== +target.parentNode.id;
  });
};

// toggleCompleted 
const toggleCompletedAll = (allChk) => {
  todos = todos.map(todo => {
    return todo = { ...todo, completed: allChk.checked };
  });
  
};

// Delete completed todos
const deleteCompleted = () => {
  todos = todos.filter(todo => !todo.completed);
};

// Count completed todos
const countCompleted = () => {
  return $completedTodos.textContent = todos.filter(todo => todo.completed).length;
};

// Count imcompleted todos
const countImcompleted = () => {
  return $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
};

// Toggle completed todo
const toggleCompleted = (target) => {
  todos = todos.map(todo => (+target.parentNode.id === todo.id) ? ({ ...todo, completed: !todo.completed }) : todo);
};

// test
// active chk
const activeChk = () => {
  [...$nav.children].forEach(li => {
    // nav content
  if (li.id === 'all' && li.matches('.active')) {
    render();
  }
  // todos active 누르면, todos를 복사한 todoscopy = todos를 필터한 배열이 들어가고 todoscopy를 render하자
  if (li.id === 'active' && li.matches('.active')) {
    // console.log('active');
    let html = '';
    let copytodos = todos.filter(todo => !todo.completed);
    if (!copytodos.length) $todos.innerHTML = '';
    copytodos.forEach(({ id, content, completed }) => {
      html += `
      <li id="${id}" class="todo-item">
        <input id="ck-my${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
        <label for="ck-my${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
      copytodos.length ? $todos.innerHTML = html : $todos.innerHTML = '';
    });
  }

  // todos active 누르면, todos를 복사한 todoscopy = todos를 필터한 배열이 들어가고 todoscopy를 render하자
  if (li.id === 'completed' && li.matches('.active')) {
    // console.log('com');
    let html = '';
    let copytodos = todos.filter(todo => todo.completed);
    if (!copytodos.length) $todos.innerHTML = '';
    copytodos.forEach(({ id, content, completed }) => {
      html += `
      <li id="${id}" class="todo-item">
        <input id="ck-my${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
        <label for="ck-my${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
      copytodos.length ? $todos.innerHTML = html : $todos.innerHTML = '';
    });
  }
  });
};
// Event Handler
window.onload = () => {
  getTodo();
};

// Input content event
$inputTodo.onkeyup = (e) => {
  if (e.keyCode !== 13 || e.target.value.trim() === '') return;
  addTodo($inputTodo.value);
  $inputTodo.value = '';
  render();
  activeChk();
};

// Delete btn click
$todos.onclick = ({ target }) => {
  if (!target.matches('.todo-item > i')) return;
  deleteTodo(target);
  render();
  activeChk();
};

// Checked complete
$todos.onchange = ({ target }) => {
  toggleCompleted(target);
  render();
  activeChk();
};

// Checked complete all button
$ckCompleteAll.onchange = ({ target }) => {
  toggleCompletedAll(target);
  render();
  activeChk();
};

// Clear completed 
$clearCompleted.onclick = () => {
  deleteCompleted();
  render();
  activeChk();
};

// nav li click
$nav.onclick = (e) => {
  if (!e.target.matches('li')) return;

  
  // nav menu click
  [...$nav.children].forEach(li => {
    li.classList.remove('active');
    if (e.target === li) li.classList.add('active');
  });

  activeChk();
}