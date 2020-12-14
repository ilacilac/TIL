// 변수, 파라미터 기본값, 함수의 반환 값 등 을 설정할 때 타입추론이 일어난다.
// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b + c; 
}
// 10 + '10' // '1010'

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
// var shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello',
// }

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;  
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'This is Description',
  value: 'string value',
  tag: 'a',
}

// Best Common Type
// 가장 근접한 타입을 추론한다. (유니온으로 묶어나간다.)
var arr = [1, 2, true, true, 'a'];