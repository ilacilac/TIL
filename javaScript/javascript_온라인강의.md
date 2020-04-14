# 자바스크립트

## 01. 자바스크립트란 무엇인가

프로그래밍 언어

스크립트 언어

- 어플리케이션에서 코드를 해석하고 실행할 수 있는 엔진이 스크립트로 어플리케이션을 제어하는 용도로 사용되는 프로그래밍 언어

인터프리터 언어

- 한줄씩 읽고 실행한다

  

해석하고 실행하는 엔진의 대표적인 어플리케이션이 웹브라우저

html : 구조

css : 스타일링

js : 동적으로 콘텐츠를 바꿈



서버사이드 어플리케이션 - node.js
웹브라우저에서만 사용되는것이아닌
데스크탑 어플리케이션을 만들거나(electron)
모바일 어플리케이션 ... 등등 많은 분야에서 많이 사용할 수 있음

초기엔 웹브라우저에서 유저인터페이스를 동적으로 하기위해 사용했었음


## 02. Various javaScript

런타임 환경

- 크롬, 파이어폭스(웹 브라우저)
- 서버(node.js)

ECMA : 비영리 표준화 기구
문법을 표준화하고 관리한다
스크립트 표준 명세를 담고 있다
ES5부터 표준화



## 03. 실습을 위한 준비

node.js

node -v : 설치하는 버전 확인 가능
node 파일명.js 
: 실행결과 확인가능



## 04. Expression

값을 만들어내는 간단한 코드를 표현식 이라고 한다.

값을 만들어내기 때문에 함수의 인자로 사용할 수 있다.

문자열 / 값 ...

표현식이 모여서 문장이되고
문장이 모여서 프로그램이 된다.



## 05. 키워드&예약어

keywords : 자바스크립트에서 특정한 목적을 위해 사용하는 단어
ex) var...



## 06. Identifier

식별자 : 어떤 이름을 식별할 수 있는 형태로 작성
변수, 함수, 속성을 식별하는 문자열
ex) var name = "mark"
변수, 함수의 이름 / 위에선 name이 식별자
대소문자를 구분한다.



## 07. 주석

comments : 소스코드에 영향을 주지 않고 무시됨
소스 코드를 설명할 때 많이 사용



## 08. 변수와 상수

variable and constant
값들을 메모리에 잠시 보관했다가 사용, 보관소 역할을 한다

매번 계산할 필요 없이 어디에다 값을 보관하면

1. 코드가 정확해지고
2. 불필요한 일을 하지 않을것이다.

값이변하지 않을때 상수를 지칭할 때 const(식별자)

선언하면서 바로 값을 할당하고 재할당 재선언 불가능함

let변수는 값을 재할당 가능



## 09. 변수의 유효범위

```javascript
// let, const : block scope
// {} 블록은 중괄호

{
	const name = "mark"
  console.log(name); // mark
}
console.log(name); // Reference error

let age = 37; 
{
  age++;
  console.log(age); // 38
}
console.log(age); // 38

/*
var : 함수스코프
es5까지 사용많이했었음
블록스코프가 좀더 직관적이기 때문에 let, const를 많이 사용함
*/

var a = 0;

// example01
// 함수 안에서 선언한 변수를 함수 박에서 호출 불가능.
(function() {
    var bbbb = 0;
    console.log('1', bbbb); // 1 0
})();
console.log('2', bbbb); // ReferenceError

//example02 
// 함수 밖에서 선언한 변수를 함수 안에서 호출 가능.
var bbbb = 0;
(function() {
    console.log('1', bbbb); // 1 0
})();
console.log('2', bbbb); // 2 0


// example03
// 즉시실행 함수가 아니더라도 위와동일
function testA () {
    var aaa = 1;
}
console.log(aaa); // ReferenceError

// example04
// 블록은 가능함
{
    var aaa = 1;
}
console.log(aaa); // 1

// let 선언
let a = 1;
// let a = 2; // SyntaxError
a = 10;
if (true) {
  let a = 3;
 console.log(a); // 3
}
console.log(a); // 10

// const 선언
const a = 3;
if (a + 1 === 4) {
  const a = 5;
  console.log(a); // 5
}
console.log(a); // 3

```



## 10. var와 호이스팅

함수와 var에서 일어난다
아래있는 선언을 끌어올리는 현상
동작의 오류라고 느끼는 상황이 있을 수 있음
함수 / 변수 둘다 경험 할 수 있음

```javascript
// 함수먼저 선언
function hello1() {
    console.log('hello1')
}
hello1(); // hello1

// 함수의 호출을 먼저
hello2(); // hello2
function hello2() {
    console.log('hello2');
}

//호이스팅은 선언부만 올라가게 되는거
// var testName02; 
console.log(testName02); // undefined
testName02 = 'Mark';
console.log(testName02); // Mark
var testName02 = 'test';
console.log(testName02); // test
```





## 11. 자료형

Data types(ES6기준) : 

- 기본타입
  number / string /  boolean / undefined / null / symbol(es6 추가)
- 객체 (object)
  사용자정의 / 브라우저에 기본적으로 내장하는 객체 ...

값에따라 변수 타입이 달라지기 때문에 동적 타이핑이라 한다 (dynamic type languange)

변수가 가지는 고정타입이 없을 뿐, 타입이 없는것은 아니다.

```javascript
const isTrue = true;
const isFalse = false;

console.log(isTrue, typeof isTrue); // true "boolean"
console.log(isFalse, typeof isFalse); //false "boolean"

// Boolean은 표준내장객체로 등록이 되어 불린을 이용해서 뉴를 하게되면 새로운 객체가 만들어지고
// 초기값 설정이 가능하다. 생성자 함수로 만들었고 그 값이 오브젝트를 만들어냄
// 하지만 아래와 같이 생성자 함수를 이용하여 사용하지 않는 이유는
// 객체는 조건문 안에서 true를 반환함
// 그래서 직관적으로 트루 펄스를 사용해야할 경우 혼란이 올 수 있음
const abc = new Boolean(false);
console.log(abc, typeof abc); // Boolean {false} "object"
if (abc) {
    console.log('ok');
}
// ok
if (false) {
    console.log('ok');
}
//

const bb = Boolean(false);// 보통 false대신 다른값을 넣고 평가해서 마치 형변환처럼 사용함 
// ex) 1,2를 넣는다면 true가 반환됨
console.log(bb, typeof bb); // false "boolean"



var a = null;
var b = undefined;

if (a == b) {
    console.log(a == b);
}
// true
if (a === b) {
    console.log(a === b);
}
//


let testBool = Boolean(0);
console.log(typeof testBool); // boolean
Number(testBool); // 0
Boolean(testBool); // false

```



switch

```javascript
const device = 'iphone';
switch(device) {
    case 'iphone' : 
        console.log('아이폰');
        break;
    case 'ipad' : 
        console.log('아이패드');
        break;
    case 'galaxy note' :
        console.log ('갤럭시노트');
        break;
    default:
        console.log('몰겠다');
}
```



const / function

```javascript
function add (a, b) {
    console.log(a + b)
}
var sum = add(2,5);
// 7

/*
function이란 키워드로 선언하고 함수의 이름을 뒤에 붙여주고
파라미터를 설정해주는데 함수에서 받아오는 값
내부에서 코드를 실행 할 수 있게 return반환하는 구문을 넣어줌

add라는 함수를 사용할 수 있는데 인자값을주고 
sum에 add(2,5)준값이 파라미터로 들어가고
상수 sum에 담음 그래서 콘솔로그를 찍으면 7값이 나옴
*/
```



화살표 함수

```javascript
const add01 = (a, b) => {
    return a + b;
}

const add01 = (a, b) => a + b;
```

