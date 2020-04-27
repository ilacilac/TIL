# 객체란?

- 자바스크립트는 객체(object) 기반의 프로그래밍 어어

- 원시 값을 제외한 나머지 값들은 모두 객체이다.

  원시 값 = 변경 가능한 값

- 0개 이상의 프로퍼티의 집합

  프로퍼티는 키(key) 값(value)으로 구성된다.

- 자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있다.

- 함수도 값으로 취급할 수 있다. 

  > 일반 함수와 구분하기 위해 **메소드(method)**라 부른다

프로퍼티 : 객체의 상태를 나타내는 값(data)
메소드 : 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)

이와같이 객체의 상태를 나타내는 값과 프로퍼티를 참조하고 조작할 수 있는 동작을 모두 포함할 수 있기 때문에 상태와 동작을 하나의 단위로 구조화 할 수 있어 유용



## 객체 리터럴에 의한 객체 생성

**인스턴스**

클래스에 의해 생성되어 메모리에 저장된 실체
객체 지향 프로그래밍에서 객체는 클래스와 인스턴스를 포함한 개념이다.

자바스크립트는 프로토타입 기반 객체지향 언어로서
클랙스 기반 객체지향 언어와는 다른 다양한 객체 생성 방법이 존재한다.

- 객체 리터럴
- Object 생성자 함수
- 생성자 함수
- Object.create 메소드
- 클래스 (ES6)

객체 생성 방법 중 가장 일반적이고 단단한 방법은 **객체 리터럴**을 사용하는 방법이다.

> 객체를 생성하는 표기법

```javascript
var person = {
  name: 'Lee',
  sayHello: funciton () {
  	console.log(`Hello! My name is ${this.name}.`);
	}
};

console.log(typeof person); // object
console.log(person); // { name: "Lee", sayHellow: f}
```



중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체가 생성된다.

```javascript
var empty = {}; // 빈 객체
console.log(typeof empty); // object
```



**객체 리터럴의 중괄호는 코드 블록을 의미하지 않음에 주의하자**

> *차이점?*
>
> 코드블록 : 닫는 중괄호 뒤에 세미콜론을 붙이지 않는다.
> 객체 리터럴 : 값으로 평가되는 표현식이므로 중괄호 뒤에는 세미 콜론을 붙인다.



## 프로퍼티

- 객체는 프로퍼티들의 집합이며 프로퍼티 키와 값으로 구성된다.

- 프로퍼티를 나열할 때는 쉼표로 구분한다.

  마지막 프로퍼티 뒤에는 쉼표를 사용하지 않으나 사용해도 좋다.

```javascript
var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
  name: 'Lee',
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20
};
```

**프로퍼티 키**

- 빈 문자열을 포함하는 모든 문자열 또는 symbol 값

- 프로퍼티 값에 접근할 수 있는 이름으로 식별자 역할을 한다.

- Symbol 값도 사용할 수 있지만 일반적으로 문자열을 사용한다.

- 식별자 네이밍 규칙을 준수하는 이름, 즉 자바스크립트에서 사용 가능한 유효한 이름인 경우, 따옴표를 생략할 수 있다. 반대로 말하면 **식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용하여야 한다.** 

  ```javascript
  var person = {
    firstName: 'Minji', // 식별자네이밍 규칙을 준수하고 있다. 따라서 따옴표 생략 가능
    'last-name': 'Park' // - 연산자로 인식되기때문에 네이밍 규칙을 준수하지 않았다 -> ''을 생략하라 수 없다.
  }
  ```

- 동적으로 생성할 수도 있다.

  `[...]` 로 묶어야 한다. // 계산된 프로퍼티 이름

  ```javascript
  var obj = {};
  var key = 'hello'; 
  
  // ES5 : 프로퍼티 키 동적 생성
  obj[key] = 'world';
  // ES6 : 프로퍼티 키 동적 생성
  // var obj = { [key]: 'world' };
  
  console.log(obj); // {hello: "world"}
  ```

- 빈 문자열을 프로퍼티 키로 사용해도 에러는 발생하지 않지만
  키로서의 의미를 갖지 못하므로 권장하지 않는다.

- 문자열 / Symbol 값 이외의 값을 사용하면 암묵적 타입 변환을 통해 문자열이 된다.

  > ex) 숫자 리터럴을 사용하면 따옴표는 붙지 않지만 내부적으로는 문자열로 변환된다.

- 예약어를 프로퍼티 키로 사용해도 에러가 발생하지 않는다.
  하지만 예상치 못한 에러가 발생시킬 여지가 있으므로 권장히자 않음

- 중복 선언 시, 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다.

**프로퍼티 값**

- 자바스크립트에서 사용할 수 있는 모든 값으로 사용할 수 있다.



## 메소드

- 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다.
- 객체에 제한되어 있는 함수를 의미한다.



## 프로퍼티 접근

- 프로퍼티 값에 접근하려면 마침표를 사용하는 **마침표 표기법** 
  또는 대괄호([...])를 사용하는 **대괄호 표기법** 을 사용한다.
- 프로퍼티 키가 식별자 네이밍 규칙을 따르는 이름이면
  (= 자바스크립트에서 사용 가능한 유효한 이름)
  마침표 표기법과 대괄호 표기법을 모두 사용할 수 있다.
- 마침표의 우측 / 대괄호의 내부에는 프로퍼티 키를 지정

```javascript
var person = {
  name: 'Lee'
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Lee

// 대괄호 표기법에 의한 프로퍼티 접근
// 대괄호 내부에 지정하는 프로퍼티 키느 ㄴ반드시 따옴표로 감싼 문자열이여야 한다. 안그러면 자바스크립트 엔진은 식별자로 해석한다.
console.log(person['name']); // Lee
```

객체에 존재하지 않는 프로퍼티에 접근하면 `undefined` 를 반환한다.

프로퍼티 키가 식별자 네이밍 규칙을 준수하지않으면 반드시 대괄호 표기법으로 프로퍼티에 접근해야한다.

대괄호 내에 들어가는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다.

```javascript
var person = {
  'last-name': 'Lee',
  1: 10
};

person.'last-name'; // SyntaxError
person.last-name; // 브라우저 : NaN / node.js : Reference Error

person[last-namne]; // ReferenceError
person['last-name']; // Lee

// 프로퍼티 키가 숫자로 이루어진 문자열인 경우, 따옴표를 생략 가능하다.
person.1;     // -> SyntaxError: Unexpected number
person.'1';   // -> SyntaxError: Unexpected string
person[1];    // -> 10 : person[1] -> person['1']
person['1'];  // -> 10
```

> *브라우저 : NaN /  Node.js에서 Reference Error* 이유
>
> - 자바스크립트엔진
>
>   1. person-last 평가 // undefined
>   2. name이라는 식별자를 찾는다.(프로퍼티키 X)
>   3. name이라는 전역변수가 자바스크립트 엔진에 의해 암묵적으로 존재한다. (name -> window가르키며, 기본값은 빈 문자열)
>
>   `person.last-name` = `undefined - ''`
>
>   = NaN
>
> - Node.js
>
>   1. name이라는 식별자 선언이 없으므로 ReferenceError



## 프로퍼티 값 갱신

- 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.

```javascript
var person = {
  name: 'Lee'
};

person.name = 'Park';

console.log(person); // {name: "Park"}
```



## 프로퍼티 동적 생성

존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당된다.

```javascript
var person = {
  name: 'Lee'
};

person.age = 20;

console.log(person); // {name: "Lee", age: 20}
```



## 프로퍼티 삭제

- 객체의 프로퍼티는 delete 연산자로 삭제한다.
- delete 연산자의 피연산자는 프로퍼티 값에 접근 할 수 있는 표현식이어야 한다.
- 만약 존재하지 않는 프로퍼티를 삭제하면 아무런 에러없이 무시된다.

```javascript
var person = {
  name: 'Lee'
};

person.age = 20; // {name: "Lee", age: 20}

delete person.age; // {name: "Lee"}
```



## ES6에서 추가된 객체 리터럴의 확장기능

### 프로퍼티 축약 표현

ES6에서는 프로퍼티 값으로 변수를 사용하는 경우, 
변수이름과 프로퍼티 키가 동일한 이름일 때, 
프로퍼티 키를 생략할 수 있다.
(이때 프로퍼티 키는 변수 이름으로 자동 생성된다.)

```javascript
// ES6
let x = 1, y = 2;

// 프로퍼티 축약 표현
const obj = { x, y };
console.log(obj); //{x: 1,y: 2}
```



### 프로퍼티 키 동적 생성

문자열 또는 문자열로 변환 가능한 값을 반환하는 표현식을 사용해
프로퍼티 키를 동적으로 생성할 수 있다.

> 프로퍼티 키로 사용할 표현식을 대괄호([...])로 묶어야 한다.
> = 계산된 프로퍼티 이름
>
> ES5 : 객체 리터럴 외부에서 대괄호 표기법을 사용
> ES6 : 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있다.

```javascript
// ES5
var prefix = 'prop';
var i = 0;

var obj = {};

// 프로퍼티 키 동적 생성
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

//ES6
const prefix = 'prop';
let i = 0;

// 객체 리터럴 내부에서 프로퍼티 키 동적 생성
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```



### 메소드 축약표현

ES5에서 메소드를 정의하려면 프로퍼티 값으로 함수를 할당한다.

```javascript
// ES5
var obj = {
  name: 'Lee',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! Lee

// ES6
var obj = {
  name: 'Lee',
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! Lee

```

ES6의 메소드 축약 표현으로 정의한 메소드는 프로퍼티에 할당한 함수와 다르게 동작한다.