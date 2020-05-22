console.log('4번 문제');
/*
새로운 요소(예를 들어 { id: 4, content: 'Test', completed: false })를 인수로 전달하면
todos의 선두에 새로운 요소를 추가하는 함수를 작성하라. 단, Array#push는 사용하지 않도록 하자.
*/

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function addTodo(newTodo) {
  // todos = [newTodo].concat(todos); // 함수를 호출, 함수사용법을 알아야한다. 앞에오는것과 인수를 주는것을 알아야한다.
  todos = [newTodo, ...todos]; // 푼다라는 개념만 있어도 리터럴로 만들 수 있다. 함수호출없이. 그래서 이게 더 낫다.
}

addTodo({ id: 4, content: 'Test', completed: false });

console.log(todos);
// 배열에 mutator accessor을 혼합해서 쓰면 바꼈는지 안바꼈는지 모름
// 그리고 둘중에 하나 : accessor을 고르는게 좋다.

/*
[
  { id: 4, content: 'Test', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]
*/