// interface Person2 {
//   name: string;
//   age: number;
// }

type Person2 = {
  name: string;
  age: number;
}

var layla: Person2 = {
  name: 'Layla',
  age: 100
}

type MyString = string;
var str: MyString = 'hello';

// 별칭을 활용하면 코드를 쉽게 작성할 수 있고 가독성도 좋아진다.
type Todo = {id: string; title: string; done: boolean};
function getTodo(todo: Todo){};

// 타입별칭 vs 인터페이스
// 타입별칭 : 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여한다.
// 인터페이스는 확장이 가능하지만, 타입별칭은 확장이 불가능하다.