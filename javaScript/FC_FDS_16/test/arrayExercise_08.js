console.log('8번 문제')
/*
todos에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라.
단, for 문, Array#forEach는 사용하지 않도록 하자.
*/
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  // let completedCnt = 0;
  // todos.filter(todo => (todo.completed ? ++completedCnt : completedCnt));
  // return completedCnt;

  return todos.filter(todo => todo.completed).length;

}

console.log(countCompletedTodos()); // 1

/*
  // 처음 쓴 답
  todos.filter((todo) => {
    if (todo.completed) {
      ++completedCnt;
    }
  });
*/
