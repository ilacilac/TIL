// JS 문자열 선언
// var str = "hello";

// TS 문자열 선언
const str: string = "hello";

// TS 숫자
const num: number = 10;

// TS 배열
const heroes: Array<string> = ["Capt", "Thor", "Hulk"];
const arr: Array<number> = [1, 2, 3];
const items: number[] = [1, 2, 3];

// TS 튜플 (배열에 인덱스에 타입지정)
const address: [string, number] = ["Seoul", 100];

// TS 객체
const obj: object = {};
// const person: object = {
//   name: "ilac",
//   age: 100,
// };
const person: { name: string; age: number } = {
  name: "ilac",
  age: 100,
};

// TS 진위값
const show: boolean = true;
