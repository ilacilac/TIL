/*
content
completed
id
sort됬다고 가정
3개프로퍼티
*/
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
function render() {
  let html = '';
  todos.forEach(todo => {
    html += `
    <li id="${todo.id}">
      <label><input type="checkbox"${todo.completed ? ' checked' : ''}>${todo.content}</label>
    </li>`;
  });
  return html;
}
console.log(render());


/*
  // 첫번째 풀었던 방법 : 중복이 많다.
  if (todo.completed) {
    html += `<input type="checkbox" checked>${todo.content}</label></li>`;
  } else {
    html += `<input type="checkbox">${todo.content}</label></li>`;
  }
*/

/*
// 결과값
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/

