// intersection type :: 여러 타입을 하나로 합쳐진 타입
interface User {
  name: string;
}
interface Action {
  do(): void;
}

// 기존타입을 활용하여 타입을 만들때 사용한다.
function createUserAction(u: User, a: Action): User & Action {
  return { ...u, ...a };
}
const u = createUserAction({ name: "jay" }, { do() {} });

// | 를 사용하여 타입설정 :: union

// 함수 오버로딩, 함수에서 사용할 수 있는 시그니처를 명시
// 문자열, 숫자를 같이 사용하는걸 방지한다.
function compare(x: string, y: string);
function compare(x: number, y: number);
// IDE에서 두 타입 모두 사용할 수 있는 메소드만 추천해준다
// 유니언 타입 지정, 타입가드를 if문으로 만듬
function compare(x: string | number, y: string | number) {
  if (typeof x === "number" && typeof y === "number") {
    // 이곳에서는 number type으로 인식
    // 타입가드
    return x === y ? 0 : x > y ? 1 : -1;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }
  throw Error("not supported type");
}
const v = compare(1, 2);
// const v1 = compare(1, "2"); // 위에처럼 오버로딩해주면 오류표시난다
console.log([3, 2, 1].sort(compare)); //  compare함수는 sort할때 매개변수로 콜백함수로 전달할 수 있다.
// [1, 2, 3];
console.log(["c", "b", "a"].sort(compare));
// ['a', 'b', 'c']

// interface를 union 타입을 사용하게 될 경우
// typeof는 자바스크립트 연산자이므로 사용할 수 없다.
function isAction(v: User | Action): v is Action {
  // do()가 있으면 Action 이다.
  return (<Action>v).do() !== undefined;
}
function process(v: User | Action) {
  // 강제로 고정해줘야 한다.
  // 내가 이 타입을 알고 쓰는거야=> type assertion
  // if ((<Action>v).do) {
  //   (<Action>v).do();
  // }
  if (isAction(v)) {
    v.do();
  } else {
    console.log(v.name);
  }
}
