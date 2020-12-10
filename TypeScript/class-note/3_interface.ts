// 이후에 User이라는 인터페이스로
// 반복되는 타입을 인터페이스로 정의한다.
// 장점 : 가독성이 좋다, 상호간의 약속
interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 100,
  name: 'ming'
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
  
}
const ilac = {
  name: 'ilac',
  age: 100
}
getUser(ilac);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum01: SumFunction;
sum01 = function(a: number, b: number): number {
  return a+ b;
}

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum03: SumFunction;
sum03 = function(a: number, b: number) {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;

// 딕셔너리 패턴
// 인덱싱과 유사함
interface StringRegexDictionary {
  [key: string]: RegExp
}
var obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// obj['cssFile'] = 'a';
Object.keys(obj).forEach(function(value) {});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  // name: string; // extends하면 필요 없어짐
  // age: number; // extends하면 필요 없어짐
  language: string;
}

var ming: Developer = {
  language: 'TS',
  age: 100,
  name: 'ming'
}