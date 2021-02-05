{
  // number
const num: number = -1;

// string
const str: string = '문자';

// boolean
const done: boolean = true;

// undefined
let name: undefined; // 🙁단독으로 사용하지 않는다.
let age: number | undefined; // optional, 보편적으로 데이터타입이 있거나 결정되지 않거나로 이용
age = undefined;
age = 1;
function find(): number | undefined {
  return 1;
}

// null 
let person : null; // 🙁단독으로 사용하지 않는다.
let person2: string | null; 

// unknown : 어떤 타입이 올 지 예상이 안된다.
// 가능하면 쓰지 않는다.
// type이 없는 javaScript랑 연동해서 쓸 때 많이 사용한다.
// ex) JS 라이브러리를 이용하는 경우 return 하는 타입이 모를 수 있을 때 
// (이때도 가급적 타입을 지정하도록 한다.)
let notSure: unknown;
notSure = 'ming';
notSure = true;

// any
// 가능하면 쓰지 않는다.
let anything: any = 0;
anything = 'hello';
anything = 111;

// void (생략 가능)
function print(): void {
  console.log('hello');
  return;
}

// never
// return 하는 값이 없음
function throwError(message: string): never {
  // message => server(log)
  throw new Error(message);

  // 끝나지 않은 코드
  // while(true) {}
}


// object : 원시타입을 제외한 모든타입이 올 수 있다.
let obj: object; // 🙁이렇게 쓰지않고 구체적으로 쓰도록 한다.
function acceptSomeObject(obj: object) {

}
acceptSomeObject({name: 'ming'});
acceptSomeObject({animal: 'dog'});
}