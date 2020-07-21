const _ = require('lodash'); // lodash라는 라이브러리를 우리 소스코드로 가져온다 = 모듈개념

console.log(_);

const todos = [
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
];

const _todos = _.cloneDeep(todos);

console.log(todos === _todos);
console.log(todos[0] === _todos[0]);