/*
const points = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열 오름차순 정렬
// 비교 함수의 반환값이 0보다 작은 경우, a를 우선하여 정렬한다.
points.sort((a, b) => {
  console.log('a', a);
  console.log('b', b);
  // return a - b;
});
// console.log(points); // [1, 2, 5, 10, 25, 40, 100]
/*
a 100
b 40
a 1
b 100
a 5
b 1
a 2
b 5
a 25
b 2
a 10
b 25
*/

/*
// 클래스
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}

const me = new Person();
console.log(me); // Person { name: undefined }
console.log(Person); // [Function: Person]
*/

// ES5
/*
var arr = [1, 2, 3];
var [one, two, three] = arr;

console.log(one, two, three); // 1 2 3
*/

/*
const names = ['JHyooun', 'Gahyeon', 'Gyumin', 'DongWook', 'Miyeon'];
const result = names.filter(name => {
  return name.length === 7;
});
console.log(result);
*/

/*
const score = [90, 85, 100, 70, 80];
// eslint-disable-next-line no-unused-vars
const values = score;
// const result = values.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
const result = Math.max(...score);
console.log(result);
*/

let [x, a] = [1];
console.log(x, a);