// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// 유니온타입 : 하나 이상의 타입을 허용한다.
var test: string | number | boolean;

function logMessage(value: string | number) {
  // 타입 가드 : 특정타입으로 타입의 범위를 좁혀나가는 과정
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
    throw new TypeError('Value must be string or number');
  }
}
logMessage('hello');
logMessage(100);

interface Developer02 {
  name: string;
  skill: string;
}
interface Person02 {
  name: string;
  age: number;
}
// 유티온타입
// function askSomeone(someone: Developer02 | Person02) {
//   someone.name;
//   someone.skill; // 접근 X
//   someone.age; // 접근 X
// }

// 인터섹션 타입 : 타입을 연결해준다.
function askSomeone(someone: Developer02 & Person02) {
  someone.name;
  someone.skill; // 접근 O
  someone.age; // 접근 O
}

// var test: string | number | boolean;
// var ang: string & number & boolean;