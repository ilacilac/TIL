// codeRuner -> ctrl option n / node.js 환경
// package.json : 프로젝트 시 깔았던 오픈소스 이력을 남겨주는 파일
/*
console.log(result);
var result = 10 + 20;
*/
/*
var person = {
  name: 'Lee'
};

console.log(person.name); // Lee
*/
// function add() {
//   var result = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// }
// console.log(add(2, 5, 10));

const o = {
  foo: 1
};
o.bar = 2;

Object.defineProperty(o, 'baz', {
  value: 3,
  writable: true
});
Object.getOwnPropertyDescriptor(o, '__proto__');
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
