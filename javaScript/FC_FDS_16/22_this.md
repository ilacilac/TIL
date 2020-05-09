# this

## this 키워드

- this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는
  **자기 참조 변수**이다.
- this를 통해 **자신이 속한 객체** 또는 **자신이 생성할 인스턴스의 프로퍼티나 메소드를 참조**할 수 있다.
- 자바스크립트의 this는 **함수가 호출되는 방식에 따라**
  this에 바인딩될 값, 즉 **this 바인딩이 동적**으로 결정된다.



객체지향 프로그래밍에서 살펴보았듯이
**객체**는 **상태(state)**를 나타내는 **프로퍼티**와 **동작(behavior)**을 나타내는 **메소드**를 하나의 논리적인 단위로 묶은 **복합적인 자료 구조**이다.

> 동작을 나타내는 메소드는 자신이 속한 객체의 상태,
> 즉 프로퍼티를 참조하고 변경할 수 있어야 한다.
>
> 이때 메소드가 자신이 속한 객체의 프로퍼티를 참조하려면
> **먼저 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.**



객체 리터럴 방식으로 생성한 객체의 경우,
메소드 내부에서 메소드 자신이 속한 객체를 가리키는 식별자를 
재귀적으로 참조할 수 있다.

```javascript
const circle = {
  // 프로퍼티 : 객체 고유의 상태 데이터
  radius: 5,
  // 메소드 : 상태 데이터를 참조하고 조작하는 동작
  getDiameter() {
    // 이 메소드가 자신이 속한 객체의 프로퍼티나 다른 메소드를 참조하려면
		// 자신이 속한 객체 circle 참조할 수 있어야 한다.
    return 2 * circle.radius;
  }
};
```

객체리터럴은 할당단계에서 평가된다.
= getDiameter **메소드가 호출되는 시점에는 이미 객체리터럴의 평가가 완료**되어 **객체가 생성**되었고, **식별자** circle에 **생성된 객체가 할당된 이후**이다.
따라서 메소드 내부에서 식별자 circle을 참조할 수 있다.

하지만 자기 자신이 속한 객체를 재귀적으로 참조하는 방식은 일반적이지 않으며
바람직하지도 않다. 



**[생성자 함수 방식으로 인스턴스를 생성하는 경우]**

```javascript
function Circle(radius) {
  // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
  ????.radius = radius;
}

Circle.prototype.getDiameter = function () {
  // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
  return 2 * ????.radius;
};

// 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야 한다.
const circle = new Circle(5);
```

```javascript
// 객체 리터럴
const circle = {
  radius: 5,
  getDiameter() {
    // this는 메소드를 호출한 객체를 가리킨다.
    return 2 * this.radius;
  }
};

console.log(circle.getDiameter()); // 10
```

객체 리터럴의 메소드 내부에서의 this는 메소드를 호출한 객체, 즉 circle을 가리킨다.



```javascript
// 생성자 함수
function Circle(radius) {
  // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
}

Circle.prototype.getDiameter = function () {
  // this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  return 2 * this.radius;
};

// 인스턴스 생성
const circle = new Circle(5);
console.log(circle.getDiameter()); // 10
```



this는 코드 어디든지 참조가능하다.
전역에서도 함수 내부에서도 참조할 수 있다.

```javascript
// this는 어디서든지 참조 가능하다.
// 전역에서 this는 전역 객체 window를 가리킨다.
console.log(this); // window

function square(number) {
  // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
  console.log(this); // window
  return number * number;
}
square(2);

const person = {
  name: 'Lee',
  getName() {
    // 메소드 내부에서 this는 메소드를 호출한 객체를 가리킨다.
    console.log(this); // {name: "Lee", getName: ƒ}
    return this.name;
  }
};
console.log(person.getName()); // Lee

function Person(name) {
  this.name = name;
  // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  console.log(this); // Person {name: "Lee"}
}

const me = new Person('Lee');
```

this는 **객체의 프로퍼티나 메소드를 참조하기 위한 자기 참조 변수**이므로 일반적으로 **객체의 메소드 내부 또는 생성자 함수 내부에서만 의미가 있다.** 따라서 strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다. 일반 함수 내부에서 this를 사용할 필요가 없기 때문이다.



## 함수 호출방식과 this 바인딩

this가 가리키는 값, 즉 this 바인딩은 함수의 호출 방식, 
즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.

> **렉시컬 스코프와 this 바인딩은 결정 시기가 다르다.**
> 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프(Lexical scope)는 
> 함수 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프를 결정한다.
> this에 바인딩될 객체는 함수 호출 시점에서 결정된다.

함수 호출방식

- 일반함수호출
- 메소드 호출
- 생성자 함수 호출
- Function.prototype.apply/call/bind 메소드에 의한 간접 호출

```javascript
// this에 바인딩될 객체는 함수 호출 방식에 따라 동적으로 결정된다.
const foo = function () {
  console.dir(this);
};

// 동일한 함수도 다양한 방식으로 호출할 수 있다.

// 1. 일반 함수 호출
// foo 함수를 일반적인 방식으로 호출
// this는 전역 객체 window를 가리킨다.
foo(); // window

// 2. 메소드 호출
// foo 함수를 프로퍼티의 값으로 할당하여 호출
// this는 메소드를 호출한 객체 obj를 가리킨다.
const obj = { foo };
obj.foo(); // obj

// 3. 생성자 함수 호출
// foo 함수를 new 연산자와 함께 생성자 함수로 호출
// this는 생성자 함수가 생성한 인스턴스를 가리킨다.
new foo(); // foo {}

// 4. Function.prototype.apply/call/bind 메소드에 의한 간접 호출
// this는 인수에 의해 결정된다.
const bar = { name: 'bar' };

foo.call(bar);   // bar
foo.apply(bar);  // bar
foo.bind(bar)(); // bar
```



### 일반함수 호출

기본적으로 this에는 전역 객체(Global object)가 바인딩된다.
전역함수는 물론, 중첩 함수를 일반 함수로 호출하면 함수 내부에서 this에는 전역 객체가 바인딩된다.

```javascript
function foo() {
    console.log("foo's this :", this);
    function bar() {
        console.log("bar's this :", this);
    }
    bar();
}
foo();

// foo's this : Window
// bar's this : Window
```

this는 객체의 프로퍼티나 메소드를 참조하기 위한 자기참조변수이므로 객체를 생성하지 않는 일반함수에서 this는 의미가 없다. 따라서 아래 예제처럼 strict mode가 적용된 일반함수 내부의 this에는 undefined가 바인딩 된다.

```javascript
function foo() {
    'use strict';
    
	console.log("foo's this :", this);
    function bar() {
        console.log("bar's this :", this);
    }
    bar();
}
foo();
// foo's this : undefined
// bar's this : undefined
```

메소드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩 된다.

```javascript
var value = 1;

const obj = {
    value: 100,
    foo() {
        console.log("foo's this :", this);
        console.log("foo's this.value :", this.value);
    
    // 메소드 내에서 정의한 중첩 함수
    function bar() {
        console.log("bar's this :", this); 
        console.log("bar's this.value :", this.value);
    }

	// 메소드 내에서 정의한 중첩 함수도 일반함수로 호출되면
	// 중첩 함수 내부의 this에는 전역 객체가 바인딩된다.
	bar();
    }
};

obj.foo();

// foo's this : {value: 100, foo: ƒ}
// foo's this.value : 100
// bar's this : Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// bar's this.value : 1
```



콜백 함수 내부의 this에도 전역 객체가 바인딩된다. 어떠한 함수라도 일반 함수로 호출되면 this에 전역 객체가 바인딩된다.

```javascript
var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this: ", this); // {value: 100, foo: ƒ}
    // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
    setTimeout(function () {
      console.log("callback's this: ", this); // window
      console.log("callback's this.value: ", this.value); // 1
    }, 100);
  }
};

obj.foo();
```

> **setTimeout 함수**
> setTimeout 함수는 두번째 매개변수에 전달한 시간(ms)만큼 대기한 다음, 첫번째 매개변수에 전달한 콜백 함수를 호출하는 타이머 함수이다. 위 예제의 경우, 100ms을 대기한 다음, 콜백 함수를 호출한다.

**이처럼 일반 함수로 호출된 모든 함수(중첩 함수, 콜백 함수 포함) 내부의 this에는 전역 객체가 바인딩된다.**

하지만 메소드 내에서 정의한 중첩 함수 또는 메소드에게 전달한 콜백 함수(보조 함수)의 this가 전역 객체를 바인딩하는 것은 문제가 있다. 

>  중첩 함수 또는 콜백 함수(보조 함수)는 외부 함수를 돕는 헬퍼 함수로서 역할하므로 외부 함수의 일부 로직을 대신하는 경우가 대부분이다. 하지만 외부 함수인 메소드와 중첩 함수의 this가 일치하지 않는다는 것은 중첩 함수 또는 콜백 함수(보조 함수)를 헬퍼 함수로 동작하기 어렵게 만든다.
>
> 위 예제의 경우, 메소드 내부에서 setTimeout 함수에 전달된 콜백 함수의 this에는 전역 객체가 바인딩된다. 따라서 this.value는 객체 obj의 value 프로퍼티가 아닌 전역 객체의 value 프로퍼티, 즉 window. value를 참조한다. var 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 되므로 window. value은 1이다.

메소드 내부의 중첩 함수나 콜백 함수의 this 바인딩을 메소드의 this 바인딩과 일치시키기 위한 방법은 아래와 같다.

```javascript
var value = 1;

const obj = {
  value: 100,
  foo() {
    // this 바인딩(obj)를 변수 that에 할당한다.
    const that = this;

    // 콜백 함수 내부에서 this 대신 that을 참조한다.
    setTimeout(function () {
      console.log(that.value); // 100
    }, 100);
  }
};

obj.foo();
```

위 방법 이외에도 자바스크립트는 this를 명시적으로 바인딩할 수 있는 Function.prototype.apply, Function.prototype.call, Function.prototype.bind 메소드를 제공한다.

```javascript
var value = 1;

const obj = {
  value: 100,
  foo() {
    // 콜백 함수에 명시적으로 this를 바인딩한다.
    setTimeout(function () {
      console.log(this.value); // 100
    }.bind(this), 100);
  }
};

obj.foo();
```



## 메소드 호출

메소드 내부의 this는 메소드를 호출한 객체, 즉 메소드 이름 앞의 마침표(.) 연잔자 앞에 기술한 객체에 바인딩 된다.

```javascript
const person = {
  name: 'Lee',
  getName() {
    // 메소드의 this는 메소드를 호출한 객체에 바인딩된다.
    return this.name;
  }
};

const anotherPerson = {
  name: 'Kim'
};
// 메소드 getName을 anotherPerson 객체의 메소드로 할당
anotherPerson.getName = person.getName;

// 메소드 getName을 호출한 객체는 anotherPerson이다.
console.log(anotherPerson.getName()); // kim

// 메소드 getName을 변수에 할당
const getName = person.getName;

// 메소드 getName을 일반 함수로 호출
console.log(getName()); // ''
// => getName 함수 내부에서 참조한 this.name은 window.name과 같다
// window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이다. window.name의 값은 ‘’이다.
// 만약 Node.js 환경에서 실행하면 undefined가 출력된다.
```

getName 프로퍼티가 가리키는 함수 객체, 즉 getName 메소드는 다른 객체의 프로퍼티에 할당하는 것으로 다른 객체의 메소드가 될 수도 있고 일반 변수에 할당하여 일반 함수로 호출될 수도 있다.



### 생성자 함수 호출

생성자 함수 내부의 this에는 생성자 함수가 (미래에) 생성할 인스턴스가 바인딩 된다.

생성자 함수는 이름 그대로 객체(인스턴스)를 생성하는 함수이다. 일반 함수와 동일한 방법으로 생성자 함수를 정의하고 new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다. 만약 new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수가 아니라 일반 함수로 동작한다.



##  Function.prototype.apply/call/bind 메소드에 의한 간접 호출

Function.prototype.apply
Function.prototype.call
메소드는 인수로 this와 인수 리스트를 전달받아 함수를 호출한다.

apply와 call메소드는 Function.prototype 메소드이다.

즉, apply와 call 메소드는 Funtion 생성자 함수를 constructor 프로퍼티로 가리키는 모든 함수가 상속받아 사용할 수 있다.

```javascript
/*
 * 주어진 this 바인딩과 인수 리스트 배열을 사용하여 함수를 호출한다.
 * @param thisArg - this로 사용될 객체
 * @param argsArray - 함수에게 전달할 인수 리스트의 배열 또는 유사 배열 객체
 * @returns 호출된 함수의 반환값
*/
Function.prototype.apply(thisArg[, argsArray])

/*
 * 주어진 this 바인딩과 인수 리스트를 사용하여 함수를 호출한다.
 * @param thisArg - this로 사용될 객체
 * @param arg1, arg2, ... - 함수에게 전달할 인수 리스트
 * @returns 호출된 함수의 반환값
*/
Function.prototype.call (thisArg[, arg1[, arg2[, ...]]])
```

```javascript
function getThisBinding() {
  return this;
}

// this로 사용할 객체
const thisArg = { a: 1 };

console.log(getThisBinding()); // window

// 함수(getThisBinding)를 호출하면서 인수로 전달한 객체를 호출한 함수의 this에 바인딩한다.
console.log(getThisBinding.apply(thisArg)); // { a: 1 }
console.log(getThisBinding.call(thisArg)); // { a: 1 }
```

```javascript
function getThisBinding() {
  console.log(arguments);
  return this;
}

// this로 사용할 객체
const thisArg = { a: 1 };

// 함수(getThisBinding)를 호출하면서 인수로 전달한 객체를 호출한 함수의 this에 바인딩한다.
// apply 메소드는 호출할 함수의 인수를 배열로 묶어 전달한다.
console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// { a: 1 }

// call 메소드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.
console.log(getThisBinding.call(thisArg, 1, 2, 3));
// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// { a: 1 }
```

apply 메소드는 호출할 함수의 인수를 배열로 묶어 전달한다. 
call 메소드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다. 

이처럼 apply와 call 메소드는 호출할 함수에 인수를 전달하는 방식만 다를 뿐 
this로 사용할 객체를 전달하면서 함수를 호출하는 것은 동일하다.

apply와 call 메소드의 대표적인 용도는 **arguments 객체와 같은 유사 배열 객체에 배열 메소드를 사용하는 경우이다.** arguments 객체는 배열이 아니기 때문에 Array.prototype.slice와 같은 배열의 메소드를 사용할 수 없으나 apply와 call 메소드를 이용하면 가능하다.

```javascript
function convertArgsToArray() {
  console.log(arguments); // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

  // arguments 객체를 배열로 변환
  // slice: 배열의 특정 부분에 대한 복사본을 생성한다.
  const arr = Array.prototype.slice.apply(arguments);
  // const arr = Array.prototype.slice.call(arguments);
  console.log(arr); // [1, 2, 3]

  return arr; 
}

convertArgsToArray(1, 2, 3); // [ 1, 2, 3 ]
```

```javascript
function getThisBinding() {
  return this;
}

// this로 사용할 객체
const thisArg = { a: 1 };

// bind 메소드는 함수에 this로 사용할 객체를 전달한다.
// bind 메소드는 함수를 호출하지는 않는다.
console.log(getThisBinding.bind(thisArg)); // getThisBinding
// bind 메소드는 함수를 호출하지는 않으므로 명시적으로 호출해야 한다.
console.log(getThisBinding.bind(thisArg)()); // {a: 1}
```

bind 메소드는 메소드의 this와 메소드 내부의 중첩 함수 또는 콜백 함수의 this가 불일치하는 문제를 해결하기 위해 유용하게 사용된다. 아래 예제를 살펴보자.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function (callback) {
  // ①
  callback();
};

function foo() {
  console.log(this.name); // ②
}

const person = new Person('Lee');

person.doSomething(foo); // ''
// =>  window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이다. window.name의 기본값은 ''이다.
// 만약 Node.js 환경에서 실행하면 undefined가 출력된다.
```

콜백 함수 foo가 호출되기 이전인 ①의 시점에서 this는 doSomething 메소드를 호출한 객체, 즉 person 객체를 가리킨다. 그러나 콜백 함수 foo가 일반 함수로서 호출된 ②의 시점에서 this는 전역 객체 window를 가리킨다. 따라서 foo 함수 내부에서 참조한 this.name은 window.name과 같다.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function (callback) {
  // ①
  console.log('this', this); // this Person {name: "Lee"}
  callback.bind(this)();
  // callback.apply(this);
  // callback.call(this);
};

function foo() {
  console.log(this.name); // ② 
}

const person = new Person('Lee');

person.doSomething(foo); // Lee  
```



| 함수 호출 방식                                             | this 바인딩                                                  |
| :--------------------------------------------------------- | :----------------------------------------------------------- |
| 일반 함수 호출                                             | 전역 객체                                                    |
| 메소드 호출                                                | 메소드를 호출한 객체                                         |
| 생성자 함수 호출                                           | 생성자 함수가 (미래에) 생성할 인스턴스                       |
| Function.prototype.apply/call/bind 메소드에 의한 간접 호출 | Function.prototype.apply/call/bind 메소드에 인자로 전달한 객체 |