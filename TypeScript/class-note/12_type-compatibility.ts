// 타입호환
// 인터페이스
interface Developer02 {
  name: string;
  skill: string;
}
// interface Person02 {
//   name: string;
// }
class Person02 {
  name: string;
  skill: string;
}
// 오른쪽과 속성이 같거나 더 많은 속성을 가지고있어야 왼쪽과 호환이 된다.
// 내부적으로 정의된 속성과 타입에대한 정의에대해 비교를 한다.
var developer02: Developer02;
var person02: Person02;
developer02 = person02;
person02 = developer02;

// 함수
var add = function(a: number) {
  // console.log(a);
}
var sum = function(a: number, b: number) {
  // return a + b;
}
sum = add;
// add = sum;

// 제네릭
interface Empty<T> {
  // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

// 제네릭에 의해 값이 바뀌는 코드일 때, 호환되지 않는다.
interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// notempty1 = notempty2;
// notempty2 = notempty1;

// 타입호환 : 파라미터, 반환타입들을 많이 가져가는쪽이 구조적으로 타입이 넓은범위에 있다.
// 더 넓은범위에있는 타입이 더 작은범위에있는 타입의 함수를 호환할 수 있다.