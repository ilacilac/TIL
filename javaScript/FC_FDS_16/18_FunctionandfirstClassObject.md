# 함수와 일급 객체

## 일급 객체

- 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
- 변수나 자료 구조(객체, 배열 등)에 저장할 수 있다.
- 함수의 매개 변수에게 전달 할 수 있다.
- 함수의 결과값으로 반환할 수 있다.

자바스크립트의 함수는 아래 예제와 같이 위의 조건을 모두 만족하므로 일급 객체이다.

```javascript
// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const predicates = { increase, decrease };

// 3. 함수의 매개 변수에게 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
  let num = 0;

  return function () {
    num = predicate(num);
    return num;
  };
}

// 3. 함수는 매개 변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// 3. 함수는 매개 변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2
```

함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미이다.
객체는 값이므로 함수는 값과 동일하게 취급할 수 있다.

함수는 값을 사용할 수 있는 곳 (변수 할당문, 객체의 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문) 이라면 어디서든지 리터럴로 정의할 수 있으며
런타임에 함수 객체로 평가된다.

일급 객체로서 함수가 가지는 가장 큰 특징은 

- 일반 객체와 같이 함수의 매개 변수에 전달할 수 있으며
- 함수의 결과값으로 반환할 수도 있다는 것이다.



함수는 객체이지만 일반 객체와는 **차이**가 있다.

- 일반 객체는 호출할 수 없지만, 객체는 호출할 수 있다.

- 함수 객체는 일반 객체에는 없는 **함수 고유의 프로퍼티**를 소유한다.



## 함수 객체의 프로퍼티

함수는 객체이다. 따라서 **함수도 프로퍼티를 가질 수 있다.**

```javascript
function square(number) {
  return number * number;
}

console.dir(square);
```

일반 객체에는 없는 `arguments, caller, name, prototype, __proto__`
프로퍼티가 함수 객체에는 존재 한다.

square 함수의 모든 프로퍼티의 프로퍼티 어트리뷰트를 Object.getOwnPropertyDescriptors 메소드로 확인해보면 아래와 같다.

```javascript
function square(number) {
  return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));
/*
{
  length: {value: 1, writable: false, enumerable: false, configurable: true},
  name: {value: "square", writable: false, enumerable: false, configurable: true},
  arguments: {value: null, writable: false, enumerable: false, configurable: false},
  caller: {value: null, writable: false, enumerable: false, configurable: false},
  prototype: {value: {...}, writable: true, enumerable: false, configurable: false}
}
*/

// __proto__는 square 함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptor(square, '__proto__'));
// undefined

// __proto__는 Object.prototype 객체의 접근자 프로퍼티이다.
// square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}
```

arguments, caller, length, name, prototype 프로퍼티는 모두 함수 객체의 데이터 프로퍼티이다. 
하지만 `__proto__` 는 접근자 프로퍼티이며 함수 객체의 프로퍼티가 아닌
Object.prototype 객체의 프로퍼티를 상속받은 것을 알 수 있다.



### arguments 프로퍼티

함수 객체의 arguments 프로퍼티 값은 arguments 객체이다.
arguments 객체는 함수 호출 시 전달된 인수(arguments)들의 정보를 담고 있는
순회 가능한(iterable) 유사 배열 객체(array-like object)이며 함수 내부에서
지역 변수처럼 사용된다. 함수 외부에서는 참조할 수 없다.

> 함수 객체의 arguments 프로퍼티는 현재 일부 브라우저에서 지원하고 있지만
> ES3부터 표준에서 폐지 되었다. 따라서 Function.arguments와 같은
> 사용방법은 권장되자 않으며함수 내부에서 지역 변수처럼 사용할 수 있는
> arguments 객체를 참조하도록 한다.

```JavaScript
function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

console.log(multiply());        // NaN
console.log(multiply(1));       // NaN
console.log(multiply(1, 2));    // 2
console.log(multiply(1, 2, 3)); // 2
```

자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
따라서 함수 호출 시 매개변수 개수만큼 인수를 전달하지 않아도 에러가 발생하지 않는다.

매개변수의 개수보다 인수를 적게 전달했을 경우, 인수가 전달되지 않은 매개변수는 undefined로 초기화된 상태를 유지

매개변수의 개수보다 인수를 더 많이 전달한 경우 초과된 인수는 무시된다.

> 그렇다고  초과된 인수가 그냥 버려지는것은 아니다.
> 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
>
> arguments객체는 **인수를 프로퍼티 값**으로 소유하며
> **프로퍼티 키는 인수의 순서**를 나타낸다.
>
> arguments 객체의 **callee 프로퍼티**는 호출되어 arguments 객체를 생성한 함수, 즉 함수 자신을 가르키고
>
> arguments 객체의 **length 프로퍼티**는 인수의 개수를 가르킨다.



선언된 매개변수의 개수와 함수 호출 시에 전달하는 인수의 개수를 확인하지 않은
자바스크립트의 특성때문에 함수가 호출되면 인수 개수를 확인하고
이에 따라 함수의 동작을 달리 정의할 필요가 있을 수 있다.

이때 유용하게 사용되는것이 arguments 객체이다.
-> 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하게 사용된다.

```javascript
function sum() {
  let res = 0;

  // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수 있다.
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum());        // 0
console.log(sum(1, 2));    // 3
console.log(sum(1, 2, 3)); // 6
```

arguments 객체는 배열의 형태로 인자 정보를 담고 있지만 
실제 배열이 아닌 유사 배열 객체이다.

유사 배열 객체란 length 프로퍼티를 가진 객체로 for 문으로 순회할 수 있는 객체를 말한다.

유사 배열 객체는 배열이 아니므로 배열 메소드를 사용할 경우 에러가 발생한다. 
따라서 배열 메소드를 사용하려면 
Function.prototype.call / Function.prototype.apply 를 사용해
간접 호출해야 하는 번거로움이 있다. 



### caller 프로퍼티

caller 프로퍼티는 ECMAScript 스펙에 포함되지 않은 비표준 프로퍼티이다.
함수 객체의 caller 프로퍼티는 함수 자신을 호출한 함수를 가르킨다.

```javascript
function foo(func) {
  return func();
}

function bar() {
  return 'caller : ' + bar.caller;
}

// 브라우저에서의 실행한 결과
console.log(foo(bar)); // caller : function foo(func) {...}
console.log(bar());    // caller : null
```



### length 프로퍼티

함수 객체의 length 프로퍼티는 함수 정의 시 선언한 매개변수의 개수를 가리킨다.

```javascript
function foo() {}
console.log(foo.length); // 0

function bar(x) {
  return x;
}
console.log(bar.length); // 1

function baz(x, y) {
  return x * y;
}
console.log(baz.length); // 2
```

**arguments 객체의 length 프로퍼티와 함수 객체의 length 프로퍼티의 값은 다를 수 있으므로 주의하여야 한다.**

arguments 객체의 length 프로퍼티는 -> 인자의 개수
함수 객체의 lenght 프로퍼티는 -> 매개변수의 개수



### name 프로퍼티

함수 객체의 name 프로퍼티는 함수 이름을 나타낸다.
ES6에서 정식 표준이 되었다.
ES5와 ES6에서 동작을 달리 하므로 주의해야한다.

> ES5에서 name 프로퍼티 : 빈 문자열을 값으로 갖음
> ES6에서 name 프로퍼티 : 함수 객체를 가르키는 변수 이름을 값으로 갖음

```javascript
// 기명 함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name); // foo

// 익명 함수 표현식
var anonymousFunc = function() {};
// ES5: name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(anonymousFunc.name); // anonymousFunc

// 함수 선언문(Function declaration)
function bar() {}
console.log(bar.name); // bar
```

함수 이름과 함수 객체를 가르키는 변수 이름은 의미가 다르지 않다.
함수를 호출할 때는 함수 이름이 아닌 함수 객체를 가르키는 변수이름으로 호출한다.



### `__proto__` 접근자 프로퍼티

모든 객체는 [[Prototype]] 이라는 내부 슬롯을 갖는다.
[[Prototype]] 내부 슬롯은 객체 지향 프로그래밍 상속으 ㄹ구현하는
프로토타입 객체를 가리킨다.

`__proto__` 프로퍼티는 [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 **접근자 프로퍼티이다.** 

내부 슬롯에는 직접 접근할 수 없고 간접적인 접근 방법을 제공하는 경우에 한하여
접근할 수 있다.

[[Prototype]] 내부 슬롯에도 직접 접근할 수 없으며 `__proto__` 접근자 프로퍼티를 통해 간접적으로 프로토타입 객체에 접근할 수 있다.

```javascript
const obj = { a: 1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype); // true

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
// hasOwnProperty 메소드는 Object.prototype의 메소드이다.
console.log(obj.hasOwnProperty('a'));         // true
console.log(obj.hasOwnProperty('__proto__')); // false
```

> hasOwnProperty 메소드
>
> hasOwnProperty 메소드는 이름에서 알 수 있듯이
> 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고
> 상속받은 프로토타입의 프로퍼티 키인 경우 false를 반환한다.



### prototype 프로퍼티

prototype 프로퍼티는 함수 객체만이 소유하는 프로퍼티이다.
일반 객체에는 prototype 프로퍼티가 없다.

```javascript
// 함수 객체는 prototype 프로퍼티를 소유한다.
console.log((function() {}).hasOwnProperty('prototype')); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log(({}).hasOwnProperty('prototype')); // false
```

prototype 프로퍼티는 함수가 객체를 생성하는 생성자 함수로 사용될 때,
생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가리킨다.