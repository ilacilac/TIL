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
function logText<T>(text: T): T {
  console.log(text);
  return text;
}
// 호출할 때 정의를 한다.
// logText라는 함수를 string이라는 타입으로 받아서 사용하겠다를 호출할 때 정의한다.
const str = logText<string>('a'); // 인자와 반환값도 제네릭으로 선언해준다.
str.split('');
const login = logText<boolean>(true)
logText(10);

// 실제로 함수를 정의할 때 타입을 비워놓은 상태에서
// 타입에 뭐가 들어갈거다라는걸 호출 시점에서 정하고 
// 타입을 추론을 해서 최종 반환값 까지 붙일 수 있다. 
// 이것을 제네릭이라 한다.