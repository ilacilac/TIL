# 빌트인 객체

## 자바스크립트 객체의 분류

자바스크립트 객체는 아래와 같이 크게 3개의 객체로 분류할 수 있다.

- 표준 빌트인 객체
- 호스트객체
- 사용자 정의 객체



**표준 빌트인 객체**

> 표준 빌트인 객체 (standard built-in objects / native objects / global objects)는 ECMAScript 사양에 정의된 객체이므로 자바스크립트 실행 환경과
> 관계없이 언제나 사용할 수 있다.
>
> 표준 빌트인 객체는 전역 객체의 프로퍼티로서 제공된다.
> 따라서 별도의 선언없이 전역 변수처럼 언제나 참조할 수 있다.

**호스트 객체**

> 호스트 객체(host objects)는 ECMAScript 사양에 정의되어 있지 않지만 자바스크립트 실행 환경 또는 Node.js 환경에서 추가적으로 제공하는 객체를 말한다.
>
> **브라우저 환경** : DOM, BOM, Canvas, XMLHttpRequst, fetch, requestAnimationFram, SVG, Web Storage, Web Component, Web worker
> 위와같은 클라이언트 사이드 Web API를 호스트 객체로 제공
>
> **Node.js 환경** : Node.js 고유의 API를 호스트 객체로 제공

**사용자 정의 객체**

> 사용자 정의 객체(user-defined objects)는 표준 빌트인 객체와 호스트 객체처럼 기본 제공되는 객체가 아닌 사용자가 직접 정의한 객체를 말한다.



## 표준 빌트인 객체

자바스크립트는 Object, String, Number, Boolean, Symbol, Date. Math, RegExp, Array, Map/Set, WeakMap/WeakSet, Function, Promise, Reflect, Proxy,  JSON, Error 등 40여개의 표준 빌트인 객체를 제공한다.

Math, Reflect, JSON을 제외한 표준 빌트인 객체는 모두 인스턴스를 생성할 수 있는 **생성자 함수 객체이다.**

> 생성자 함수 객체인 표준 빌트인 객체는 
> 프로토타입 메소드와 정적 메소드를 제공하고
> 생성자 함수 객체가 아닌 표준 빌트인 객체는 정적 메소드만을 제공한다.
>
> ex) 표준 빌트인 객체인 String, Number, Boolean, Function, Array, Date는 생성자 함수로 호출하여 인스턴스를 생성할 수 있다.
>
> ```javascript
> // String 생성자 함수에 의한 String 객체 생성
> const strObj = new String('Lee'); // 빌트인 객체인 String을 생성자 함수로서 호출
> console.log(typeof strObj); // object
> console.log(strObj);        // String {"Lee"}
> // 생성한 String 인스턴스의 프로토타입은 String.prototype이다.
> 
> console.log(Object.getPrototypeOf(strObj) === String.prototype); // true
> ```



예를 들어 표준 빌트인 객체인 Number를 생성자 함수로 호출하여 생성한 Number 인스턴스는 Number.prototype이 제공하는 다양한 기능의 프로토타입 메소드를 사용할 수 있다.

```javascript
// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1.5);
console.log(typeof numObj); // object
console.log(numObj); Number {1.5}

// toFixed는 프로토타입 메소드이다.
// 소숫점자리를 반올림 하여 문자열로 반환한다.
console.log(numObj.toFixed()); // 2
```



표준 빌트인 객체인 Number는 인스턴스 없이 정적으로 호출할 수 있는 정적 메소드도 제공한다.

```javascript
// isInterger는 정적 메소드이다.
// 정수(interger)인지 검사하여 그 결과를 Boolean으로 반환한다.
console.log(Number.isInterger(0.5)); // false
```



## 원시 값과 래퍼 객체

문자열이나 숫자, 불리언 등의 원시 값이 있음에도 불구하고 문자열, 숫자, 불리언 객체를 생성하는 String, Number, Boolean 등의 표준 빌트인 생성자 함수가 존재하는 이유는 무엇일까?

아래 예제를 살펴보자. 원시 값은 객체가 아니므로 프로퍼티나 메소드를 가질 수 없음에도 불구하고 **원시 값인 문자열이 마치 객체처럼 동작한다.**

```javascript
const str = 'hello';

// 원시 타입인 문자열이 프로퍼티와 메소드를 갖고 있다.
console.log(str.length); // 5
console.log(str.toUpperCase()); // HELLO
```

표준 빌트인 객체가 제공하는 프로토타입 메소드를 사용하려면 반드시 인스턴스를 생성하고 인스턴스로 프로토타입 메소드를 호출해야한다.

> 그런데 왜 위 예제를 살펴보면 원시값으로 표준 빌트인 객체의 프로토타입 메소드를 호출하면 정상적으로 동작할까?
>
> 이는 원시값인 문자열, 숫자, 불리언 값인 경우, **마치 객체처럼** 이들 원시 값에 대해 **마침표 표기법(또는 대괄호 표기법)으로 접근하면 자바스크립트 엔진이 일시적으로 원시 값을 연관된 객체로 변환**해 주기 때문이다.
>
> 즉, 원시 값을 객체처럼 사용하면 자바스크립트 엔진은 암묵적으로 연관된 객체를 생성하고 생성된 객체로 프로퍼티에 접근하거나 메소드를 호출하고 다시 원시 값으로 되돌린다.
>
> 이처럼 **문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시 객체를 레퍼 객체(wrapper object)**라 한다.
>
> ex) 문자열에 대해 마침표 표기법으로 접근하면 그 순간 레퍼 객체인
> String 생성자 함수의 인스턴스가 생성되고 문자열은 레퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
>
> ```javascript
> const str = 'hi';
> 
> // 원시 타입인 문자열이 레퍼 객체인 String 인스턴스로 변환된다.
> console.log(str.length); // 2
> console.log(str.toUpperCase); // HI
> 
> // 레퍼 객체로 프로퍼티 접근이나 메소드 호출한 후, 다시 원시값으로 되돌린다.
> console.log(typeof str); // string
> ```



그 후, 레퍼 객체의 처리가 종료하면 레퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 되돌리고 레퍼 객체는 가비지 컬렉션의 대상이 된다.

```javascript
const str = 'hello'; // ① 식별자 str은 문자열을 값으로 가지고있다.

// 래퍼 객체에 프로퍼티 추가
str.name = 'Lee'; // ② 식별자 str은 레퍼 객체를 가리킨다.
// ③ str은 이전의 원시값으로 돌아간다.
// (래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 갖는다.)

// 이 시점에 str은 위 코드의 래퍼 객체가 아닌 새로운 래퍼 객체를 가리킨다.
console.log(str.name); // ④ undefined
// ⑤ str은 이전의 원시값으로 돌아간다.
```

```javascript
const num = 1.5;

// 원시 타입인 숫자가 레퍼 객체인 String 객체로 변환된다.
// 순간 레퍼 객체인 Number 생성자 함수의 인스턴스가 생성되고 숫자는 레퍼 객체의 [[NumberData]] 내부 슬롯에 할당된다. 
console.log(num.toFixed()); // 2

// 레퍼 객체로 프로퍼티 접근이나 메소드 호출한 후, 다시 원시값으로 되돌린다.
// 레퍼 객체의 처리가 종료하면 레퍼 객체의 [[NumberData]] 내부 슬롯에 할당된 원시값을 되돌리고 레퍼 객체는 가비지 컬렉션의 대상이 된다.
console.log(typeof num, num); // number 1.5
```

이처럼 **문자열, 숫자, 불리언, 심볼은 암묵적으로 생성되는 레퍼 객체에 의해 마치 객체처럼 사용할 수 있으며** 표준 빌트인 객체인 String, Number, Boolean, Symbol의 프로토타입 메소드 또는 프로퍼티를 참조할 수 있다.

따라서 **String, Number, Boolean 생성자 함수를 new 연산자와 함께 호출하여 문자열, 숫자, 불리언 인스턴스를 생성할 필요가 없으며 권장하지도 않는다.**

null과 undefined는 레퍼 객체를 생성하지 않는다. 따라서 null과 undefined 값을 객체처럼 사용하면 에러가 발생한다.



## 전역 객체

전역 객체(Global Object)는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체이며, 어떤 객체에도 속하지 않은 최상위 객체이다.

전역 객체는 자바스크립트 환경에 따라 지칭하는 이름이 제각각이다.
브라우저 환경에서는 window(또는 self, this, frames)가 전역 객체를 가리키지만
Node.js 환경에서는 global이 전역 객체를 가리킨다.

전역 객체는 표준 빌트인 객체 (Object, String, Number, Function, Array...) 들과 환경에 따른 호스트 객체(클라이언트 web API 또는 Node.js의 호스트 API) 
그리고 var 키워드로 선언한 전역 변수와 전역 함수를 프로퍼티로 갖는다.

즉, 전역 객체는 계층적 구조 상 어떤 객체에도 속하지 않은 모든 빌트인 객체(표준 빌트인 객체와 호스트 객체)의 최상위 객체이다. 

> 전역 객체가 최상위 객체라는 것은 프로토타입 상속 관계 상에서 최상위 객체라는 의미가 아니고 객체의 계층 구조 상 표준 빌트인 객체와 호스트 객체를 프로퍼티로 소유한다는것을 말한다.



**전역 객체의 특징**

- 전역 객체는 개발자가 의도적으로 생성할 수 없다. 즉, 전역 객체를 생성할 수 있는 생성자 함수가 제공되지 않는다.
- 전역 객체의 프로퍼티를 참조할 때 window(또는 global)를 생략 할 수 있다.

- 전역 객체는 모든 표준 빌트인 객체를 프로퍼티로 가지고 있다.
- 자바스크립트 실행 환경에 따라 추가적으로 프로퍼티와 메소드를 갖는다. 
  브라우저환경 : Web API
  Node.js환경 : Node.js 고유의 API

- var 키워드로 선언한 전역 변수와 선언하지 않은 변수에 값을 할당한 암묵적 전역
  그리고 전역 함수는 적역 객체의 프로퍼티가 된다.

```javascript
// var 키워드로 선언한 전역 변수
var foo = 1;
console.log(window.foo); // 1

// 암묵적 전역. bar는 전역 변수가 아니라 전역 객체의 프로퍼티이다.
bar = 2;
console.log(window.bar); // 2

// 전역 함수
function baz() { return 3; }
console.log(window.baz()); // 3
```

> let이나 const 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다.
> 즉, window.foo와 같이 접근할 수 없다.
>
> let이나 const 키워드로 선언한 전역 변수는 보이지 않는 개념적인 블록 내에 존재하게 된다.

- 브라우저 환경의 모든 자바스크립트 코드는 하나의 전역 객체 window를 공유한다. 여러개의 script 태그를 통해 자바스크립트 코드를 분리하여도 하나의 전역 객체 window를 공유하는 것은 변함이 없다.

  이는 분리되어 있는 자바스크립트 코드가 하나의 전역을 공유한다는 의미이다.



### 빌트인 전역 프로퍼티

빌트인 전역 프로퍼티는 전역 객체의 프로퍼티를 의미한다.
주로 어플리케이션 전역에서 사용하는 값을 제공한다.

- Infinity
- NaN
- undefined



### 빌트인 전역 함수

빌트인 전역 함수는 애플리케이션 전역에서 호출할 수 있는 빌트인 함수로서 
전역 객체의 메소드이다.

- eval
  문자열 형태로 매개변수에 전달된 코드를 런타임에 동적으로 평가하고 실행하여 결과값을 반환한다. 전달된 문자열 코드가 여러 개의 문으로 이루어져있다면
  모든 문을 실행 후 마지막 결과값을 반환한다.

```javascript
var x = 1;

function foo() {
  // eval 함수는 런타임에 foo 함수의 스코프를 동적으로 수정한다.
  eval('var x = 2;');
  console.log(x); // 2
}

foo();

console.log(x); // 1

// 엄격 모드
var x = 1;

function foo() {
  'use strict';

  // 엄격 모드에서 eval 함수는 기존의 스코프를 수정하지 않고 자체적인 스코프를 생성한다.
  eval('var x = 2; console.log(x);'); // 2
  console.log(x); // 1
}

foo();
```

```javascript
var x = 1;

function foo() {
  console.log(x); // 1
}

foo();

console.log(x); // 1
```

```javascript
var x = 1;

function foo() {
  x = 2;
  console.log(x); // 2
}

foo();

console.log(x); // 2
```

 eval 함수는 런타임에 기존의 스코프를 동적으로 수정할 수 있다. 다시 말해 eval 함수는 렉시컬 스코프를 동적으로 수정할 수 있다. 하지만 성능적인 면에서 손해를 감수해야 한다.

eval 함수를 통해 사용자로부터 입력 받은 콘텐츠(untrusted data)를 실행하는 것은 **보안에 매우 취약하다.** 또한 자바스크립트 엔진에 의해 최적화가 수행되지 않으므로 일반적인 코드 실행에 비해 처리 속도가 느리다. **따라서 eval 함수의 사용은 가급적 금지되어야 한다.**

- isFinite

  매개변수에 전달된 값이 정상적인 유한수인지 검사하여 그 결과를 불리언 타입으로 반환한다. 매개변수에 전달된 값이 숫자가 아닌경우, 숫자로 타입을 변환한 후 검사를 수행한다.

- isNaN

  매개변수에 전달된 값이 NaN인지 검사하여 그 결과를 불리언 타입으로 반환한다. 매개변수에 전달된 값이 숫자가 아닌 경우, 숫자로 타입을 변환한 후 검사를 수행한다.

- parseFloat

  매개변수에 전달된 문자열을 부동소수점 숫자(floating point number)로 변환하여 반환한다.

- parseInt

  매개변수에 전달된 문자열을 정수형 숫자(Integer)로 해석(parsing)하여 반환한다. 반환값은 언제나 10진수이다.



### encodeURI / decodeURI

**encodeURI** 함수는 매개변수로 전달된 URI를 인코딩한다.
URI는 인터넷에 있는 자원을 나타내는 유일한 주소를 말한다.
URI의 하위개념으로 URL, URN이 있다.

> 여기서 인코딩이란 URI의 문자들을 이스케이프 처리하는 것을 의미한다.
>
> 이스케이프 처리는 네트워크를 통해 정보를 공유할 때 어떤 시스템에서도 읽을 수 있는 아스키문자셋으로 변환하는 것이다.

**decodeURI** 함수는 매개변수로 전달된 인코딩된 URI을 전달받아 이스케이프 처리되기 이전으로 디코딩한다.

```javascript
const uri = 'http://example.com?name=이웅모&job=programmer&teacher';

// encodeURI 함수는 완전한 URI를 전달받아 인코딩하여 이스케이프 처리한다.
const enc = encodeURI(uri);
console.log(enc);
// http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher

// decodeURI 함수는 인코딩된 완전한 URI를 전달받아 이스케이프 처리되기 이전으로 디코딩한다.
const dec = decodeURI(enc);
console.log(dec);
// http://example.com?name=이웅모&job=programmer&teacher
```



### encodeURIComponent / decodeURIComponent

encodeURIComponent 함수는 매개변수로 전달된 URI 구성요소를 인코딩한다.

> 매개변수로 전달된 문자열을 URI의 구성요소인 쿼리 파라미터로 일부 간주한다.
> 따라서 쿼리 파라미터 구분자로 사용되는 =, ?, &를 인코딩한다.
>
> 반면 encodeURI 함수는 매개변수로 전달된 문자열을 완전한 URI 전체라고 간주한다. 따라서 쿼리 파라미터 구분자로 사용되는 =, ?, &를 인코딩 하지 않는다.
>
> ```javascript
> // URI의 쿼리 파라미터
> const uriComp = 'name=이웅모&job=programmer&teacher';
> 
> // encodeURIComponent 함수는 매개변수로 전달된 문자열을 URI의 구성요소인 쿼리 파라미터의 일부 간주한다.
> // 따라서 쿼리 파라미터 구분자로 사용되는 =, ?, &를 인코딩한다.
> let enc = encodeURIComponent(uriComp);
> console.log(enc);
> // name%3D%EC%9D%B4%EC%9B%85%EB%AA%A8%26job%3Dprogrammer%26teacher
> 
> let dec = decodeURIComponent(enc);
> console.log(dec);
> // 이웅모&job=programmer&teacher
> 
> // encodeURI 함수는 매개변수로 전달된 문자열을 완전한 URI로 간주한다.
> // 따라서 쿼리 파라미터 구분자로 사용되는 =, ?, &를 인코딩하지 않는다.
> enc = encodeURI(uriComp);
> console.log(enc);
> // name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher
> 
> dec = decodeURI(enc);
> console.log(dec);
> // name=이웅모&job=programmer&teacher
> ```



### 암묵적 전역

```javascript
var x = 10; // 전역 변수

function foo () {
  y = 20; // 선언하지 않은 식별자에 값을 할당
}
foo();

// 선언하지 않은 식별자 y를 전역에서 참조할 수 있다.
console.log(x + y); // 30
```

위의 예문을 보면 foo 함수 내의 y는 선언하지 않은 식별자이다. 
따라서 `y = 20` 이 실행되면 참조 에러가 발생할 것처럼 보인다.
하지만 선언하지 않은 식별자 y는 마치 선언된 전역변수처럼 동작한다.

**이는 선언하지 않은 식별자에 값을 할당하면 전역 객체의 프로퍼티가 되기 때문이다.**

> [실행과정]
>
> 1. foo 함수가 호출
> 2. 자바스크립트 엔진은 변수 y에 값을 할당하기 위해 먼저 스코프 체인을 통해 선언된 변수인지 확인한다.
> 3. 이때 foo 함수의 스코프와 전역 스코프 어디에서도 변수 y의 선언을 찾을 수 없어 참조 에러가 발생해야 하지만!
>    자바스크립트 엔진은 `y = 20` 을 `window.y = 20` 으로 해석하여
>    **전역 객체의 프로퍼티를 동적생성한다.**
> 4. y는 전역 객체의 프로퍼티가 되어 마치 전역변수처럼 동작한다.
>
> **이러한 현상을 암묵적 전역(implicit global) 이라 한다.**

하지만 y는 변수 선언없이 단지 전역 객체의 프로퍼티로 추가 되었을 뿐이다.
**따라서 y는 변수가 아니다.**

> 또한 변수가 아니라 **단지 프로퍼티**인 y는 delete 연산자로 삭제할 수 있다.
> 전역 변수는 프로퍼티이지만 delete 연산자로 삭제할 수 없다.

```javascript
var x = 10; // 전역 변수

function foo () {
  // 선언하지 않은 변수
  y = 20;
  console.log(x + y);
}

foo(); // 30

console.log(window.x); // 10
console.log(window.y); // 20

delete x; // 전역 변수는 삭제되지 않는다.
delete y; // 프로퍼티는 삭제된다.

console.log(window.x); // 10
console.log(window.y); // undefined
```

