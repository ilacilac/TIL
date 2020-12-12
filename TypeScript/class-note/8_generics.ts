// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10);
// logText('text');
// logText(true);

// 함수를 호출 할때 파라미터 타입을 지정해준다.
// function logText<T>(text: T):T {
//   console.log(text);
//   return text;
// }
// logText<string>('Hi');

// 동일한 코드지만 타입이 달라 중복된 코드 발생하는 경우
// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }
// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// 유니온타입을 사용하면 파라미터는 정의할 수 있지만 return 값에서 타입추론이 안된다.
// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }
// const a = logText('a');

// logText(10);
// const num = logNumber(10);
// logText(true);

// 함수에 제네릭을 사용할 꺼야
// 함수로 정의할 때 받은 타입을 먼저 인자로 넘긴다 = 파라미터 타입으로 쓰겠다 => 리턴할때도 그 타입을 쓰겠다.
// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// 호출할 때 정의를 한다.
// logText라는 함수를 string이라는 타입으로 받아서 사용하겠다를 호출할 때 정의한다.
// const str = logText<string>('a'); // 인자와 반환값도 제네릭으로 선언해준다.
// str.split('');
// const login = logText<boolean>(true)
// logText(10);

// 실제로 함수를 정의할 때 타입을 비워놓은 상태에서
// 타입에 뭐가 들어갈거다라는걸 호출 시점에서 정하고 
// 타입을 추론을 해서 최종 반환값 까지 붙일 수 있다. 
// 이것을 제네릭이라 한다.

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }
// const obj: Dropdown = { value: 10, selected: false };

// interface Dropdown<T> {
//   value: T;
//   selected: boolean;
// }
// const obj02: Dropdown<string> = { value: 'abc', selected: false };

// 제네릭 타입 제한 :: 타입 힌트롤 줄 수 있다.
// T는 배열이기때문에 length를 제공할꺼야 => T가 배열로 들어오기때문에 logTextLength를 호출할때 배열이 들어와야한다 뜬다.
// function logTextLength<T>(text: T[]): T[] {
//   // console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   })
//   return text;
// }
// logTextLength<string>(['hi']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  console.log(text);
  return text;
}
// 문자열에는 length라는 속성이 들어가기때문에 들어갈 수 있다.
// 숫자는 안된다. => 숫자10에는 length가 제공되고있지 않기때문에 포함할 수 없다.
logTextLength('a');

// 제네릭 타입 제한 3 - keyof

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// extends :: 기존되어있는 인터페이서 / 타입을 확장할 떄 사용한다.
// ShoppingItem에 있는 key들 중에 한가지가 타입이 될 것이다. (name / price / stock)
function getShoppingItenOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItenOption(10);
// getShoppingItenOption<string>('a');
getShoppingItenOption('name');