# 프로토타입

자바스크립트는 명령형, 함수형, 프로토타입 기반 객체지향 프로그래밍을 지원하는
멀티 패러다임 프로그래밍 언어다.

자바스크립트는 객체 기반의 프로그래밍 언어이며 자바스크립트를 이루고 있는
거의 "모든 것"이 객체이다. 원시 타입의 값을 제외한 나버지 값들(함수, 배열, 정규표현식 등)은 모두 객체이다.



## 객체지향 프로그래밍

프로그램을 명령어 또는 함수의 몽록으로 보는 전통적인 명령형 프로그래밍의 절차지향적 관점에서 벗어나
여러 개의 독립적 단위, 즉 객체들의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 말한다.

객체지향 프로그래밍은 실세계의 실체(사물이나 개념)를 인식하는 철학적 사고를 프로그래밍에 접목하려는 시도에서 시작한다. 실체는 특징이나 성질을 나타내는 속성(attribute, property)을 가지고 있고, 이를 통해 실체를 인식하거나 구별할 수 있다.

다양한 속성 중에서 프로그램에 필요한 속성만을 간추려 내어 표현하는것을 **추상화(abstraction)** 라 한다.

속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체라 하며, 객체지향 프로그래밍은 독립적인 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임 이다.

```javascript
const circle = {
  radius: 5, // 반지름

  // 원의 지름: 2r
  getDiameter() {
    return 2 * this.radius;
  },

  // 원의 둘레: 2πr
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },

  // 원의 넓이: πrr
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(circle);
// {radius: 5, getDiameter: ƒ, getPerimeter: ƒ, getArea: ƒ}

console.log(circle.getDiameter());  // 10
console.log(circle.getPerimeter()); // 31.41592653589793
console.log(circle.getArea());      // 78.53981633974483
```

객체지향 프로그래밍은 객체의 상태를 나타내는 데이터와 
상태 데이터를 조작할 수 있는 동작을 하나의 논리적인 단위로 묶어 생각한다.

따라서 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조라고 할 수 있다.

상태 데이터 : 프로퍼티
동작 : 메소드



## 상속과 프로퍼티

상속은 객체지향 프로그래밍의 핵심 개념이다.
어떤 객체의 프로퍼티 또는 메소드를 다른 객체가 상속받아 그대로 사용할 수 있는것을 말한다.

자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거한다.
중복을 제거하는 방법은 기존의 코드를 적극적으로 재사용하는 것이다.

```javascript
// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    // Math.PI는 원주율을 나타내는 상수이다.
    // Math.pow는 첫번째 인수를 두번째 인수로 거듭제곱한 값을 반환한다.
    return Math.PI * Math.pow(this.radius, 2);
  };
}

// 인스턴스 생성
// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
// getArea 메소드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// 따라서 getArea 메소드는 하나만 생성하여 모든 인스턴스가 공유하는 것이 바람직하다.
console.log(circle1.getArea === circle2.getArea); // false

console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172
```

이처럼 동일한 생성자 함수에 의해 생성된 모든 인스턴스가 동일한 메소드를
중복 소유하는것은 메모리를 불필요하게 낭비한다.

또한 인스턴스를 생성할 때 마다 메소드를 생성하므로 퍼포먼스에도 악영향을 준다.

```javascript
// 생성자 함수
function Circle(radius) {
  this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 공유할 수 있도록 getArea 메소드를 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// 프로토타입 Circle.prototype로부터 getArea 메소드를 상속받는다.
// 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메소드를 공유한다.
console.log(circle1.getArea === circle2.getArea); // true

console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172
```

상속은 코드의 재사용이란 관점에서 매우 유용하다.
생성자 함수가 생성할 모든 인스턴스가 공통적으로 사용할 프로퍼티나
메소드를 프로토타입에 미리 구현에 놓으면 생성자 함수가 생성할 모든 인스턴스는
별도의 구현없이 상위(부모)객체인 프로토타입의 자산을 공유하여 사용할 수 있다.



## 프로토타입 객체

객체지향 프로그래밍의 근간을 이루는 객체간 상속을 구현하기 위해 사용된다.
프로토타입은 어떤 객체 상위(부모) 객체의 역할을 하는 객체로서 다른 객체에
공유 프로퍼티(메소드 포함)를 제공한다. 프로토 타입을 상속받은 하위(자식) 객체는
상위 객체의 프로퍼티를 자신의 프로퍼티처럼 자유롭게 사용할 수 있다.

모든 객체는 [[Prototype]] 이라는 내부 슬롯을 가지며
내부 슬롯의 값은 프로토타입의 참조이다. [[Prototype]]에 저장되는
프로토타입은 객체 생성 방식에 의해 결정된다.
즉, 객체가 생성될 때 객체 생성 방식에 따라 프로토타입이 결정되고 [[Prototype]]에 저장된다.

객체 리터럴에 의해 생성된 객체의 프로토타입은 Object.prototype
생성자 함수에 의해 생성된 객체의 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩 되어있는 객체이다.

모든 객체는 하다의 프로토타입은 갖는다.
그리고 모든 프로토타입은 생성자 함수와 연결되어 있다.
= 객체와 프로토타입과 생성자 함수는 서로 연결되어있다.

[[Prototype]] 내부슬롯에 직접 접근할 수 없다.
하지만 **객체**는 `__proto__` 접근자 프로퍼티를 통해 자신의 프로토타입
즉 자신의 [[Prototype]] 내부 슬롯이 가리키는 프로토타입에 간접적으로 접근할 수 있다. 
그리고 **프로토타입**은 자신의 **constructor** 프로퍼티를 통해
생성자 함수에 접근할 수 있고, 
**생성자 함수**는 자신의 **protytype 프로퍼티를 통해** 프로토타입에 접은할 수 있다.



### `__proto__` 접근자 프로퍼티

모든 객체는 `__proto__` 접근자 프로퍼티를 통해 자신의 프로토타입,
즉 [[Prototype]] 내부 슬롯에 간접적으로 접근할 수 있다.

```javascript
const person = { name: 'Lee' };
```

`__proto__` 접근자 프로퍼티를 통해 person 객체의 [[Prototype]] 내부 슬롯이 가리키는 객체인 **Object.prototype**에 접근한 결과를 크롬 브라우저가 콘솔에 표시한 것이다. 

이처럼 모든 객체는 `__proto__` 접근자 프로퍼티를 통해 프로토타입을 가리키는 [[Prototype]] 내부 슬롯에 접근할 수 있다.

접근자 프로퍼티는 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다.



Object.prototype의 접근자 프로퍼티인 `__proto__` 는 getter/setter 함수라고
부르는 접근자 함수를 통해 [[Prototype]] 내부 슬롯의 값, 즉 프로토타입을 취득하거나 할당한다.

`__proto__` 접근자 프로퍼티를 통해 프로토타입에 접근하면 내부적으로 `__proto__` 접근자 프로퍼티의 getter 함수인 `get__proto__` 가 호출된다.

`__proto__` 접근자 프로퍼티를 통해 새로운 프로토타입을 할당하면 `__proto__` 접근자 프로퍼티의 setter 함수인 `set__proto__` 가 호출된다.

```javascript
const obj = {};
const parent = { x: 1 };

// getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;
// setter함수인 set __proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;

console.log(obj.x); // 1
```



`__proto__` 접근자 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라
Object.prototype의 프로퍼티이다. 모든 객체는 상속을 통해
`Object.prototype.__proto__` 접근자 프로퍼티를 사용할 수 있다.

```javascript
const person = { name: 'Lee' };

// person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty('__proto__')); // false

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype); // true
```

Object.prototype
모든 객체는 프로토타입의 계층 구조인 프로토타입 체인에 묶여있다.
자바스크립트 엔진은 객체의 프로퍼티(메소드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 `__proto__` 접근자 프로퍼티가 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. 

프로토타입 체인의 종점, 즉 프로토타입 체인의 최상위 객체는 Object.prototype이며 이 객체의 프로퍼티와 메소드는 모든 객체에게 상속된다.



`__proto__` 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유

[[Prototype]] 내부 슬롯의 값, 즉 프로토타입에 접근하기 위해
접근자 프로퍼티를 사용하는 이유는 상호 참조에 의해 프로토타입 체인이 
생성되는 것을 방지하기 위함이다.

```javascript
const parent = {};
const child = {};

// child의 프로토타입을 parent로 설정
child.__proto__ = parent;
// parent의 프로토타입을 child로 설정
parent.__proto__ = child; // TypeError: Cyclic __proto__ value
```

위 예제는 parent 객체를 child 객체의 프로토타입으로 설정한 후, child 객체를 parent 객체의 프로토타입으로 설정하였다. 

이러한 코드가 에러없이 정상적으로 처리되면 서로가 자신의 프로토타입이 되는 비정상적인 프로토타입 체인이 만들어 지기 때문에 `__proto__` 접근자 프로퍼티는 에러를 발생시킨다.

**프로토타입 체인은 단방향 링크드 리스트로 구현되어야 한다.**
즉, 프로퍼티 검색 방향이 한쪽 방향으로만 흘러가야 한다.
하지만 위와같이 순환 참조적인 프로토타입 체인이 만들어지면
프로토타입 체인 종점이 존재하지 않기 때문에 프로토타입 체인에서 프로퍼티를
검색할 때 무한루프에 빠진다.

따라서 아무런 체크없이 무조건 프로토타입을 교체할 수 없도록, `__proto__` 접근자 프로퍼티를 통해 프로토타입에 접근하고 교체하도록 구현되어있다.



`__proto__` 접근자 프로퍼티를 코드 내에서 직접 사용하는 것은 비추천이다.

`__proto__` 접근자 프로퍼티는 ES5까지 ECMAScript 사양에 포함되지 않은 비표준이었다. 하지만 일부 브라우저에서 `__proto__` 를 지원하고 있었기 때문에 브라우저 호환성을 고려하여 ES6에서 `__proto__` 를 표준으로 채택하였다.

하지만 코드 내에서 `__proto__` 를 직접 사용하는 것은 추천하지 않는다.
**모든 객체가 `__proto__` 접근자 프로퍼티를 사용할 수 있는것은 아니기 때문이다.**

직접상속을 통해 Object.prototype을 상속받지 않은 객체를 생성할 수 있다.

```javascript
// obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__를 상속받을 수 없다.
const obj = Object.create(null);

// obj는 Object.__proto__를 상속받을 수 없다.
console.log(obj.__proto__); // undefined

// 따라서 Object.getPrototypeOf 메소드를 사용하는 편이 좋다.
console.log(Object.getPrototypeOf(obj)); // null
```

따라서 **프로토타입의 참조**를 취득하고 싶은 경우 `__proto__` 접근자 프로퍼티 대신
**Object.getPrototypeOf** 메소드를,
**프로토타입을 교체**하고 싶은 경우 **Object.setPrototypeOf** 메소드를 사용하는것을 권장한다.

```javascript
const obj = {};
const parent = { x: 1 };

// obj 객체의 프로토타입을 취득
Object.getPrototypeOf(obj); // obj.__proto__;
// obj 객체의 프로토타입을 교체
Object.setPrototypeOf(obj, parent); // obj.__proto__ = parent;

console.log(obj.x); // 1
```

Object.getPrototypeOf 메소드는 ES5에서 도입된 메소드이며 IE9 이상을 지원한다. 
Object.setPrototypeOf 메소드는 ES6에서 도입된 메소드이며 IE11 이상을 지원한다.



### 함수 객체의 prototype 프로퍼티

함수객체는 `__proto__` 접근자 프로퍼티 이외에
prototype 프로퍼티도 소유한다. 
함수 객체만이 소유하는 prototype 프로퍼티는 **생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다**

```javascript
// 함수 객체는 prototype 프로퍼티를 소유한다.
console.log((function () {}).hasOwnProperty('prototype')); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log({}.hasOwnProperty('prototype')); // false
```

prototype 프로퍼티는 생성자 함수가 생성할 객체(인스턴스)의 프로토타입을 가리킨다. 따라서 생성자 함수로서 호출할 수 없는 함수, 즉 non-constructor인 화살표 함수와 메소드는 prototype 프로퍼티를 소유하지 않으며 프로토타입도 생성하지 않는다.

```javascript
// 화살표 함수는 non-constructor이다.
const Person = name => {
  this.name = name;
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(Person.hasOwnProperty('prototype')); // false

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(Person.prototype); // undefined

// ES6의 메소드 축약 표현으로 정의한 메소드는 non-constructor이다.
const obj = {
  foo() {}
};

// non-constructor는 prototype 프로퍼티를 소유하지 않는다.
console.log(obj.foo.hasOwnProperty('prototype')); // false

// non-constructor는 프로토타입을 생성하지 않는다.
console.log(obj.foo.prototype); // undefined
```

**모든 객체가 가지고 있는(엄밀히 말하면 Object.prototype로부터 상속받은) __proto__ 접근자 프로퍼티와 함수 객체만이 가지고 있는 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다.** 하지만 이들 프로퍼티를 사용하는 주체가 다르다.

| 구분                      | 소유      | 값                | 사용 주체   | 사용 목적                                                    |
| :------------------------ | :-------- | :---------------- | :---------- | :----------------------------------------------------------- |
| __proto__ 접근자 프로퍼티 | 모든 객체 | 프로토타입의 참조 | 모든 객체   | 객체가 자신의 프로토타입에 접근 또는 교체하기 위해 사용      |
| prototype 프로퍼티        | 함수 객체 | 프로토타입의 참조 | 생성자 함수 | 생성자 함수가 자신이 생성할 객체(인스턴스)의 프로토타입을 할당하기 위해 사용 |

```javascript
// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person('Lee');

// 결국 Person.prototype와 me.__proto__는 결국 동일한 프로토타입을 가리킨다.
console.log(Person.prototype === me.__proto__);  // true
```



### 프로토타입의 constructor 프로퍼티와 생성자 함수

모든 프로토타입은 constructor 프로퍼티를 갖는다.
이 constructor 프로퍼티는 prototype 프로퍼티로 자신을 참조하고 있는
생성자 함수를 가리킨다. 이 연결은 생성자 함수가 생성될 때,
즉 함수 객체가 생성될 때 이루어진다.

```javascript
// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person('Lee');

// me 객체의 생성자 함수는 Person이다.
console.log(me.constructor === Person);  // true
```

위 예제

1. Person 생성자 함수는 me 객체를 생성
2. me 객체는 프로토타입의 constructor 프로퍼티를 통해 생성자 함수와 연결
3. me 객체에는 constructor 프로퍼티가 없지만 me 객체의 프로토타입인 Person.prototype에 constructor 프로퍼티가 있다.
4. me 객체는 프로토타입인 Person.prototype에 constructor 프로퍼티를 상속받아 사용할 수 있다.



## 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입

생성자 함수에 의해 생성된 인스턴스는 프로토타입의 constructor 프로퍼티에 의해 생성자 함수와 연결된다.

```javascript
// obj 객체를 생성한 생성자 함수는 Object이다.
const obj = new Object();

// add 함수 객체를 생성한 생성자 함수는 Function이다.
const add = new Function('a', 'b', 'return a + b');

// 생성자 함수
function Person(name) {
  this.name = name;
}
// me 객체를 생성한 생성자 함수는 Person이다.
const me = new Person('Lee');
```



하지만 리터럴 표기법에 의한 객체 생성 방식과 같이, 명시적으로 new 연산자와 함께 생성자 함수를 호출하여 인스턴스를 생성하지 않는 객체 생성 방식도 존재한다.

```javascript
스를 생성하지 않는 객체 생성 방식도 존재한다.

// 객체 리터럴
const obj = {};

// 함수 리터럴
const add = function (a, b) { return a + b; };

// 배열 리터럴
const arr = [1, 2, 3];

// 정규표현식 리터럴
const regexr = /is/ig;
```

리터럴 표기법에 의해 생성된 객체도 물론 프로토타입이 존재한다. 하지만 리터럴 표기법에 의해 생성된 객체의 경우, 프로토타입의 constructor 프로퍼티가 가리키는 생성자 함수가 반드시 객체를 생성한 생성자 함수라고 단정할 수는 없다.

```javascript
// 객체 obj는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성하였다.
const obj = {};

// 하지만 객체 obj의 생성자 함수는 Object 생성자 함수이다.
console.log(obj.constructor === Object); // true
```

> 위 예제의 객체 obj는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴에 의해 생성된 객체이다. 하지만 객체 obj는 Object 생성자 함수와 constructor 프로퍼티로 연결되어 있다. 그렇다면 객체 리터럴에 의해 생성된 객체는 사실 Object 생성자 함수로 생성되는 것은 아닐까? 
>
> -> Object 생성자 함수는 new 연산자와 함께 호출하지 않아도 new 연산자와 함께 호출한 것과 동일하게 동작한다. 그리고 인수가 전달되지 않았을 때 추상 연산 ObjectCreate을 호출하여 빈 객체를 생성한다. 인수가 전달된 경우에는 인수를 객체로 변환한다.

```javascript
// Object 생성자 함수에 의한 객체 생성
let obj = new Object();
console.log(obj); // {}

// Object 생성자 함수는 new 연산자와 함께 호출하지 않아도 new 연산자와 함께 호출한 것과 동일하게 동작한다.
// 인수가 전달되지 않았을 때 추상 연산 ObjectCreate을 호출하여 빈 객체를 생성한다.
obj = Object();
console.log(obj); // {}

// 인수가 전달된 경우에는 인수를 객체로 변환한다.
// Number 객체 생성
obj = new Object(123);
console.log(obj); // Number {123}

// String  객체 생성
obj = new Object('123');
console.log(obj); // String {"123"}
```

> 이처럼 Object 생성자 함수 호출과 객체 리터럴의 평가는 추상 연산 ObjectCreate을 호출하여 빈 객체를 생성하는 점에서 동일하나 new.tartget 확인이나 프로퍼티를 추가하는 처리 등 세부 내용은 다르다. 따라서 **객체 리터럴에 의해 생성된 객체는 Object 생성자 함수가 생성한 객체가 아니다.**



 Function 생성자 함수 방식으로 생성한 함수는 렉시컬 스코프를 만들지 않고 전역 함수인 것처럼 스코프를 생성하며 클로저도 만들지 않는다. 따라서 함수 선언문과 함수 표현식을 평가하여 함수 객체를 생성한 것은 Function 생성자 함수가 아니다. 하지만 constructor 프로퍼티를 통해 확인해보면 함수 foo의 생성자 함수는 Function 생성자 함수이다.

```javascript
// 함수 foo는 Function 생성자 함수로 생성한 함수 객체가 아니라 함수 선언문으로 생성하였다.
function foo() {}

// 하지만 constructor 프로퍼티를 통해 확인해보면 함수 foo의 생성자 함수는 Function 생성자 함수이다.
console.log(foo.constructor === Function); // true
```

리터럴 표기법에 의해 생성된 객체도 상속을 위해 프로토타입이 필요하다. 따라서 리터럴 표기법에 의해 생성된 객체도 가상적인 생성자 함수를 갖는다. 프로토타입은 생성자 함수와 더불어 생성되며 prototype, constructor 프로퍼터에 의해 연결되어 있기 때문이다. 다시 말해, **프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍(pair)으로 존재**하기 때문이다.

리터럴 표기법(객체 리터럴, 함수 리터럴, 배열 리터럴, 정규 표현식 리터럴 등)에 의해 생성된 객체는 생성자 함수에 의해 생성된 객체는 아니다. 하지만 큰 틀에서 생각해 보면 리터럴 표기법으로 생성한 객체도 생성자 함수로 생성한 객체와 본질적인 면에서 큰 차이는 없다.

> 예를 들어, 객체 리터럴에 의해 생성한 객체와 Object 생성자 함수에 의해 생성한 객체는 생성 과정에 차이는 있지만 결국 객체로서 동일한 특성을 갖는다. 함수 리터럴에 의해 생성한 함수와 Function 생성자 함수에 의해 생성한 함수는 생성 과정과 스코프, 클로저 등의 차이가 있지만 결국 함수로서 동일한 특성을 갖는다.



## 프로토타입의 생성 시점

객체는 리터럴 표기법 또는 생성자 함수에 의해 생성되므로
결국 모든 객체는 생성자 함수와 연결되어 있다.

**프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다.**
프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍(pair)으로 존재하기 때문이다.

생성자함수

- 사용자 정의 생성자 함수
  사용자가 직접 정의
- 빌트인 생성자 함수
  자바스크립트가 기본적으로 제공한 함수



### 사용자 정의 생성자 함수와 프로토타입 생성 시점

내부 메소드 [[Construct]]를 갖는 함수 객체, 즉 화살표 함수나 ES6의 메소드 축약표현으로 정의하지 않고 일반 함수(함수 선언문, 함수 표현식)로 정의한 함수객체는 new 연산자와 함께 생성자 함수로서 호출할 수 있다.

생성자 함수로서 호출할 수 있는 함수, 즉 constructor는 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.

```javascript
// 함수 정의(constructor)가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
console.log(Person.prototype); // {constructor: ƒ}

// 생성자 함수
function Person(name) {
  this.name = name;
}
```



생성자 함수로서 호출할 수 없는 함수, 즉 non-constructor는 프로토타입이 생성되지 않는다.

```javascript
// 화살표 함수는 non-constructor이다.
const Person = name => {
  this.name = name;
};

// non-constructor는 프로토타입이 생성되지 않는다.
console.log(Person.prototype); // undefined
```

함수 선언문은 다른 코드가 실행되기 이전에 자바스크립트 엔진에 의해 먼저 실행된다. 따라서 함수 선언문으로 정의된 Person 생성자 함수는 어떤 코드보다 먼저 평가되어 함수 객체가 된다. 이때 프로토타입도 더불어 생성된다. 생성된 프로토타입은 Person 생성자 함수의 prototype 프로퍼티에 바인딩된다.

빌트인 생성자 함수가 아닌 사용자 정의 생성자 함수는 자신이 평가되어 함수 객체로 생성되는 시점에 프로토타입도 더불어 생성되며 생성된 프로토타입의 프로토타입은 언제나 Object.prototype이다.



### 빌트인 생성자 함수와 프로토타입 생성 시점

Object, String, Number, Function, Array, RegExp, Date, Promise 등과 같은 빌트인 생성자 함수도 일반 함수와 마찬가지로 빌트인 생성자 함수가 생성되는 시점에 프로토타입이 생성된다. 

모든 빌트인 생성자 함수는 전역 객체가 생성되는 시점에 생성된다. 생성된 프로토타입은 빌트인 생성자 함수의 prototype 프로퍼티에 바인딩된다.

```javascript
// 전역 객체 window는 브라우저에 종속적이므로 아래 코드는 브라우저 환경에서 실행해야 한다.
// 빌트인 객체인 Object는 전역 객체 window의 프로퍼티이다.
window.Object === Object // true
```

객체가 생성되기 이전에 생성자 함수와 프로토타입은 이미 객체화되어 존재하고 있다.
이후 생성자 함수 또는 리터럴 표기법으로 객체를 생성하면 프로토타입은 생성된 객체의 [[Prototype]] 내부 슬롯에 할당된다. 이로써 생성된 객체는 프로토타입을 상속받는다.



## 객체 생성 방식과 프로토타입의 결정

객체는 아래와 같이 다양한 생성방법이 있다.

- 객체 리터럴
- Object 생성자 함수
- 생성자 함수
- Object.create 메소드
- 클래스 (ES6)

공통점 : 추상연산 ObjectCreate에 의해 생성된다.

> 추상 연산 ObjectCreate는 **필수적으로** 자신이 생성할 객체의 프로토타입(proto)을 인수로 전달받는다. 
>
> 그리고 자신이 생성할 객체에 추가할 프로퍼티 목록(internalSlotList)은 옵션으로 전달할 수 있다. 
>
> 추상 연산 ObjectCreate는 빈객체를 생성한 후, 객체에 추가할 프로퍼티 목록(internalSlotList)이 인수로 전달된 경우, 프로퍼티를 객체에 추가한다. 
>
> 그리고 인수로 전달받은 프로토타입을 자신이 생성한 객체의 [[Prototype]] 내부 슬롯에 할당한 다음, 생성한 객체를 반환한다.
>
> 즉, 프로토타입은 추상 연산 ObjectCreate에 전달되는 인수(proto)에 의해 결정된다. 이 인수는 객체가 생성되는 시점에 객체 생성 방식에 의해 결정된다.



### 객체 리터럴에 의해 생성된 객체의 프로토타입

자바스크립트 엔진은 객체 리터럴을 평가하여 객체를 생성할 때 추상연산 ObjectCreate를 호출한다.

이때 추상 연산 ObjectCreate에 전달되는 프로토타입은 ObjectPrototype 이다.
즉, 객체 리터럴에 의해 생성되는 객체의 프로토타입은 Object.prototype 이다.



### Object 생성자 함수에 의해 생성된 객체의 프로토타입

명시적으로 Object 생성자 함수를 호출하여 객체를 생성하면 빈 객체가 생성된다.
Object 생성자 함수를 호출하면 객체 리터럴과 마찬가지로 추상 연산 ObjectCreate를 호출한다. 이때 추상 연산 ObjectCreate에 전달되는 프로토타입은 Object.prototype이다. 

즉, Object 생성자 함수에 의해 생성되는 객체의 프로토타입은 
Object,prototype이다.



객체 리터럴과 Object 생성자 함수에 의한 객체 생성 방식의 차이는 프로퍼티를 추가하는 방식에 있다. 
**객체 리터럴 방식**은 객체 리터럴 내부에 프로퍼티를 추가하지만 
**Object 생성자 함수 방식**은 일단 빈 객체를 생성한 이후 프로퍼티를 추가해야 한다.



### 생성자 함수에 의해 생성된 객체의 프로토타입

new 연산자와 함께 생성자 함수를 호출하여 인스턴스를 생성하면 다른 객체 방식과 마찬가지로 추상연산 ObjectCreate를 호출한다.

이때 추상 연산 ObjectCreate에 전달되는 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩되어 있는 객체이다. 즉, 생성자 함수에 의해 생성되는 객체의 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩 되어있는 객체이다.



## 프로토타입 체인

```javascript
function Person(name) {
  this.name = name;
}

// 프로토타입 메소드
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me = new Person('Lee');

// hasOwnProperty는 Object.prototype의 메소드이다.
console.log(me.hasOwnProperty('name')); // true
```

Person 생성자 함수에 의해 생성된 me 객체는 Object.prototype의 메소드인 hasOwnProperty를 호출할 수 있다. 이것은 me 객체가 Person.prototype 뿐만 아니라 Object.prototype도 상속받았다는 의미이다.

me 객체의 프로토타입은 Person.prototype이다.

Person.prototype의 프로토타입은 Object.prototype이다. 프로토타입의 프로토타입은 언제나 Object.prototype이다.



자바스크립트는 객체의 프로퍼티(메소드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 [[Prototype]] 내부 슬롯의 참조값을 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. 이것을 **프로토타입 체인**이라 한다. 프로토타입 체인은 자바스크립트가 객체 지향 프로그래밍의 상속을 구현하는 메커니즘이다.

프로토타입 체인의 최상위에 위치하는 객체는 언제나 Object.prototype이다. 따라서 모든 객체는 Object.prototype을 상속받는다. **Object.prototype을 프로토타입 체인의 종점(End of prototype chain)**이라 한다. Object.prototype의 프로토타입, 즉 [[Prototype]] 내부 슬롯의 값은 null이다.

프로토타입 체인의 종점인 Object.prototype에서도 프로퍼티를 검색할 수 없는 경우, undefined를 반환한다. 이때 에러가 발생하지 않는 것에 주의하자.



이와 같이 자바스크립트 엔진은 프로토타입 체인을 따라 프로퍼티/메소드를 검색한다. 다시 말해, 자바스크립트 엔진은 객체 간의 상속 관계로 이루어진 프로토타입의 계층적인 구조에서 객체의 프로퍼티를 검색한다. 따라서 **프로토타입 체인은 상속과 프로퍼티 검색을 위한 메커니즘**이라고 할 수 있다

이에 반해, 프로퍼티가 아닌 식별자는 스코프 체인에서 검색한다. 다시 말해, 자바스크립트 엔진은 함수의 중첩 관계로 이루어진 스코프의 계층적 구조에서 식별자를 검색한다. 따라서 **스코프 체인은 식별자 검색을 위한 메커니즘**이라고 할 수 있다.



## 캡슐화

```javascript
const Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메소드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };

  // 생성자 함수를 반환
  return Person;
}());

const me = new Person('Lee');
```

즉시 실행 함수를 사용하여 생성자 함수와 프로토타입을 확장하는 코드를 하나의 함수 내에 깔끔하게 모을 수 있다.

위 패턴을 사용하면 캡슐화를 쉽게 구현할 수 있다. 캡슐화(encapsulation)는 정보의 일부를 외부에 감추어 은닉(정보 은닉(information hiding))하는 것을 말한다. 즉, 외부에 공개할 필요가 없는 구현의 일부를 외부에 노출되지 않도록 감추어 적절치 못한 접근으로부터 정보를 보호하고 객체간의 상호 의존성, 즉 결합도를 낮추는 효과가 얻는다.

```javascript
const Person = (function () {
  // 자유 변수이며 private하다
  let _name = '';

  // 생성자 함수
  function Person(name) { _name = name; }

  // 프로토타입 메소드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${_name}`);
  };

  // 생성자 함수를 반환
  return Person;
}());

const me = new Person('Lee');

// _name은 지역 변수이므로 외부에서 접근하여 변경할 수 없다. 즉, private하다.
me._name = 'Kim';
me.sayHello(); // Hi! My name is Lee
```

Person 생성자 함수와 sayHello 메소드는 이미 종료되어 소멸한 즉시 실행 함수의 지역 변수 _name을 참조할 수 있다. 클로저는 자바스크립트의 매우 유용한 기능 중 하나이다.



## 오버라이딩과 프로퍼티 쉐도잉

```javascript
const Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메소드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };

  // 생성자 함수를 반환
  return Person;
}());

const me = new Person('Lee');

// 인스턴스 메소드
me.sayHello = function () {
  console.log(`Hey! My name is ${this.name}`);
};

// 인스턴스 메소드가 호출된다. 프로토타입 메소드는 인스턴스 메소드에 의해 가려진다.
me.sayHello(); // Hey! My name is Lee
```

프로토타입이 소유한 프로퍼티(메소드 포함)를 프로토타입 프로퍼티, 인스턴스가 소유한 프로퍼티를 인스턴스 프로퍼티라고 부른다.

프로토타입 프로퍼티와 같은 이름의 프로퍼티를 인스턴스에 추가하면 프로토타입 체인을 따라 프로토타입 프로퍼티를 검색하여 프로토타입 프로퍼티를 덮어쓰는 것이 아니라 인스턴스 프로퍼티로 추가한다. 이때 인스턴스 메소드 sayHello는 프로토타입 메소드 sayHello를 **오버라이딩하였고** 프로토타입 메소드 sayHello는 가려진다. 이처럼 상속 관계에 의해 프로퍼티가 가려지는 현상을 **프로퍼티 쉐도잉**(property shadowing)이라 한다.

**오버라이딩(Overriding)**
상위 클래스가 가지고 있는 메소드를 하위 클래스가 재정의하여 사용하는 방식이다.

**오버로딩(Overloading)**
함수의 이름은 동일하지만 매개변수의 타입 또는 개수가 다른 메소드를 구현하고 매개변수에 의해 메소드를 구별하여 호출하는 방식이다. 자바스크립트는 오버로딩을 지원하지 않지만 arguments 객체를 사용하여 구현할 수는 있다.

하위 객체를 통해 프로토타입의 프로퍼티를 변경 또는 삭제하는 것은 불가능하다. 다시 말해 하위 객체를 통해 프로토타입에 get 액세스는 허용되나 set 액세스는 허용되지 않는다.

프로토타입 프로퍼티를 변경 또는 삭제하려면 하위 객체를 통해 프로토타입 체인으로 접근하는 것이 아니라 프로토타입에 직접 접근하여야 한다.

```javascript
// 프로토타입 메소드 변경
Person.prototype.sayHello = function () {
  console.log(`Hey! My name is ${this.name}`);
};
me.sayHello(); // Hey! My name is Lee

// 프로토타입 메소드 삭제
delete Person.prototype.sayHello;
me.sayHello(); // TypeError: me.sayHello is not a function
```



## 프로토타입의 교체

프로토타입은 다른 임의의 객체로 변경할 수 있다.
이것은 부모 객체인 프로토타입을 동적으로 변경할 수 있다는 것을 의미한다.

이러한 특징을 활용하여 객체 간의 상속 관계를 동적으로 변경할 수 있다.

프로토타입은 생성자 함수 또는 인스턴스에 의해 교체할 수 있다.

### 생성자 함수에 의한 프로토타입의 교체

```javascript
const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  // ① 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
  Person.prototype = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    }
  };

  return Person;
}());

const me = new Person('Lee');
```

```javascript
// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 링크가 파괴된다.
console.log(me.constructor === Person); // false
// 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색된다.
console.log(me.constructor === Object); // true
```



### 인스턴스에 의한 프로토타입의 교체

프로토타입은 생성자 함수의 prototype 프로퍼티 뿐만 아니라
인스턴스의 `__proto__` 접근자 프로퍼티(또는 Object.getPrototypeOf 메소드) 를 통해 접근할 수 있다. 
따라서 인스턴스의  `__proto__` 접근자 프로퍼티(또는 Object.setPrototypeOf 메소드)를 통해 프로토타입을 교체할 수 있다.

생성자 함수의 prototype 프로퍼티에 다른 임의의 객체를 바인딩하는 것은 미래에 생성할 인스턴스의 프로토타입을 교체하는 것이다. `__proto__` 접근자 프로퍼티를 통해 프로토타입을 교체하는 것은 이미 생성된 객체의 프로토타입을 교체하는 것이다. 아래 예제를 살펴보자.

```javascript
function Person(name) {
  this.name = name;
}

const me = new Person('Lee');

// 프로토타입으로 교체할 객체
const parent = {
  sayHello() {
    console.log(`Hi! My name is ${this.name}`);
  }
};

// ① me 객체의 프로토타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me, parent);
// 위 코드는 아래의 코드와 동일하게 동작한다.
// me.__proto__ = parent;

me.sayHello(); // Hi! My name is Lee
```

```javascript
// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 링크가 파괴된다.
console.log(me.constructor === Person); // false
// 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색된다.
console.log(me.constructor === Object); // true

```

생성자 함수에 의한 프로토타입 교체와 마찬가지로 인스턴스에 의한 프로토타입 교체도 constructor 프로퍼티와 생성자 함수 간의 연결을 파괴한다.

프로토타입 교체를 통해 객체 간의 상속 관계를 동적으로 변경하는 것은 꽤나 번거롭다. 하지만 ES6에서 도입된 클래스를 사용하면 간편하고 직관적으로 상속 관계를 구현할 수 있다. 



## instanceof 연산자

instanceof 연산자는 이항 연산자로서 좌변에 객체를 가리키는 식별자, 우변에 생성자 함수를 가리키는 식별자를 피연산자로 받는다. 만약 우변의 피연산자가 함수가 아닌 경우, TypeError가 발생한다.

```javascript
객체 instanceof 생성자 함수
```

좌변의 객체가 우변의 생성자 함수와 연결된 인스턴스라면 true로 평가되고 그렇지 않은 경우에는 false로 평가된다. instanceof 연산자는 상속 관계를 고려한다는 것에 주의하자

```javascript
// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person('Lee');

// me 객체는 Person 생성자 함수에 의해 생성된 인스턴스이다.
console.log(me instanceof Person); // true
// instanceof 연산자는 상속 관계를 고려한다.
// me 객체는 Object.prototype을 상속받기 때문에 아래의 코드는 true로 평가된다.
console.log(me instanceof Object); // true
```

```javascript
// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person('Lee');

// 프로토타입으로 교체할 객체
const parent = {};

// 인스턴스에 의한 프로토타입의 교체
// 교체된 프로토타입에는 constructor 프로퍼티가 없기 때문에
// 프로토타입과 생성자 함수의 링크가 파괴된다.
Object.setPrototypeOf(me, parent);

// me 객체는 Person 생성자 함수에 의해 생성된 인스턴스이다.
// 그러나 instanceof 연산자는 false를 반환한다.
console.log(me instanceof Person); // false
// instanceof 연산자는 상속 관계를 고려한다.
// me 객체는 Object.prototype을 상속받기 때문에 아래의 코드는 true로 평가된다.
console.log(me instanceof Object); // true
```

instanceof 연산자는 프로토타입의 constructor 프로퍼티가 가리키는 생성자 함수를 찾는 것이 아니라 프로토타입 체인 상에 존재하는 프로토타입에 영향을 받는다.

```javascript
const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
  Person.prototype = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    }
  };

  return Person;
}());

const me = new Person('Lee');

// constructor 프로퍼티와 생성자 함수 간의 링크가 파괴되어도
// instanceof는 아무런 영향을 받지 않는다.
console.log(me instanceof Person); // true
console.log(me instanceof Object); // true
```



## 직접 상속

### Object.create에 의한 직접상속

Object.create 메소드는 명시적으로 프로토타입을 지정하여 새로운 객체를 생성한다. Object.create 메소드도 다른 객체 생성 방식과 마찬가지로 추상연산 ObjectCreate를 호출한다.

```javascript
/**
 * 지정된 프로토타입 및 프로퍼티를 갖는 새로운 객체를 생성하여 반환한다.
 * @param {Object} prototype - 생성할 객체의 프로토타입으로 지정할 객체
 * @param {Object} [propertiesObject] - 생성할 객체의 프로퍼티를 갖는 객체
 * @returns {Object} 지정된 프로토타입 및 프로퍼티를 갖는 새로운 객체
 */
Object.create(prototype[, propertiesObject])
```

Object.create 메소드의 첫번째 매개변수에는 생성할 객체의 프로토타입으로 지정할 객체를 전달한다. 
두번째 매개변수에는 생성할 객체의 프로퍼티를 갖는 객체를 전달한다. 

```javascript
// 프로토타입이 null인 객체를 생성한다.
// 즉, 생성된 객체는 프로토타입 체인의 종점이므로 프로토타입 체인이 생성되지 않는다.
// obj → null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null); // true
// Object.prototype를 상속받지 못한다.
console.log(obj.toString()); // TypeError: obj.toString is not a function

// obj = {};와 동일하다.
// obj → Object.prototype → null
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// obj = { x: 1 };와 동일하다.
// obj → Object.prototype → null
obj = Object.create(Object.prototype, {
  x: { value: 1 }
});
// 위 코드는 아래와 동일하다.
// obj = Object.create(Object.prototype);
// obj.x = 1;
console.log(obj.x); // 1
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

const myProto = { x: 10 };
// 객체를 직접 상속받는다.
// obj → myProto → Object.prototype → null
obj = Object.create(myProto);

console.log(obj.x); // 10
console.log(Object.getPrototypeOf(obj) === myProto); // true

// 생성자 함수
function Person(name) {
  this.name = name;
}

// obj = new Person('Lee')와 동일하다.
// obj → Person.prototype → Object.prototype → null
obj = Object.create(Person.prototype);
obj.name = 'Lee';
console.log(obj.name); // Lee
console.log(Object.getPrototypeOf(obj) === Person.prototype); // true

```

Object.create 메소드는 첫번째 매개변수에 전달한 객체의 프로토타입 체인에 속하는 객체를 생성한다. 즉, 객체를 생성하면서 직접적으로 상속을 구현하는 것이다. 이 메소드의 장점은 아래와 같다.

- new 연산자가 없이도 객체를 생성할 수 있다.
- 객체 리터럴에 의해 생성된 객체도 특정 객체를 상속받을 수 있다.
- 프로토타입을 지정하면서 객체를 생성할 수 있다.



Object.create 메소드를 통해 프로토타입 체인을 생성하지 않는 객체, 다시 말해 프로토타입의 종점에 위치하는 객체를 생성할 수 있기 때문에
Object.prototype의 빌트인 메소드를 객체가 직접 호출하는 것을 비추천한다.

아래와 같이 간접적으로 호출하는 것이 좋다.

```javascript
// 프로토타입이 null인 객체를 생성한다.
const obj = Object.create(null);
obj.a = 1;

// console.log(obj.hasOwnProperty('a')); // TypeError: obj.hasOwnProperty is not a function

// Object.prototype의 빌트인 메소드는 객체로 직접 호출하지 않는다.
console.log(Object.prototype.hasOwnProperty.call(obj, 'a')); // true
```



### 객체 리터럴 내부에서 `__proto__` 에 의한 직접 상속

Object.create 메소드는 직접 상속은 위와 같이 여러 장점이 있다. 하지만 두번째 인자로 프로퍼티를 정의하는 것은 번거롭다. 일단 객체를 생성한 이후, 프로퍼티를 추가하는 방법도 있으나 이 또한 깔끔한 방법은 아니다.

ES6에서는 객체 리터럴 내부에서 __proto__ 접근자 프로퍼티를 사용하여 직접 상속을 구현할 수 있다.

```javascript
const myProto = { x: 10 };

// 객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있다.
const obj = {
  y: 20,
  // 객체를 직접 상속받는다.
  // obj → myProto → Object.prototype → null
  __proto__: myProto
};
// 위 코드는 아래와 동일하다.
// const obj = Object.create(myProto, { y: { value: 20 } });

console.log(obj.x, obj.y); // 10 20
console.log(Object.getPrototypeOf(obj) === myProto); // true
```



## 정적 프로퍼티/메소드

정적(static) 프로퍼티/메소드는 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메소드를 말한다.

```javascript
// 생성자 함수
function Person(name) {
  this.name = name;
}

// 프로토타입 메소드
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

// Person 생성자 함수는 객체이므로 자신의 프로퍼티/메소드를 소유할 수 있다.
// 정적 프로퍼티
Person.staticProp = 'static prop';
// 정적 메소드
Person.staticMethod = function () {
  console.log('staticMethod');
};

const me = new Person('Lee');

// 생성자 함수에 추가한 정적 프로퍼티/메소드는 생성자 함수로 참조/호출한다.
Person.staticMethod(); // staticMethod

// 정적 프로퍼티/메소드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없다.
// 인스턴스로 참조/호출할 수 있는 프로퍼티/메소드는 프로토타입 체인 상에 존재해야 한다.
me.staticMethod(); // TypeError: me.staticMethod is not a function
```

Person 생성자 함수는 객체이므로 자신의 프로퍼티/메소드를 소유할 수 있다. Person 생성자 함수 객체가 소유한 프로퍼티/메소드를 정적 프로퍼티/메소드라고 부른다. 정적 프로퍼티/메소드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없다.

프로토타입 메소드를 호출하려면 인스턴스를 생성해야 하지만 정적 메소드는 인스턴스를 생성하지 않아도 호출할 수 있다.



## 프로퍼티 존재 확인

in 연산자는 객체 내에 프로퍼티가 존재하는지 여부를 확인한다. in 연산자의 사용 방법은 아래와 같다.

```javascript
/**
 * key: 프로퍼티 키를 나타내는 문자열
 * object: 객체로 평가되는 표현식
 */
key in object
```

```javascript
const person = {
  name: 'Lee',
  address: 'Seoul'
};

// person 객체에 name 프로퍼티가 존재한다.
console.log('name' in person);    // true
// person 객체에 address 프로퍼티가 존재한다.
console.log('address' in person); // true
// person 객체에 age 프로퍼티가 존재하지 않는다.
console.log('age' in person);     // false
```

Object.prototype.hasOwnProperty 메소드를 사용해도 객체의 프로퍼티의 존재 여부를 확인할 수 있다.

> 메소드는 이름에서 알 수 있듯이 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고 상속받은 프로토타입의 프로퍼티 키인 경우 false를 반환한다.

in 연산자 대신 ES6에서 새롭게 도입된 [Reflect.has 메소드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has)를 사용할 수도 있다. Reflect.has 메소드는 in 연산자와 동일하게 동작한다.



## 프로퍼티 열거

### for...in 문

객체의 모든 프로퍼티를 순회하며 열거(enumeration)하려면 for…in 문을 사용한다.

```javascript
for (변수선언문 in 객체) { … }
```

```javascript
const person = {
  name: 'Lee',
  address: 'Seoul'
};

// for...in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당된다. 단, 순서는 보장되지 않는다.
for (const key in person) {
  console.log(key + ': ' + person[key]);
}
// name: Lee
// address: Seoul
```

for…in 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 ture인 프로퍼티를 순회하며 열거(enumeration)한다.

배열에는 for…in 문을 사용하지 말고 일반적인 for 문이나 for…of 문 또는 Array.prototype.forEach 메소드를 사용하기를 권장한다. 사실 배열도 객체이므로 프로퍼티와 상속받은 프로퍼티가 포함될 수 있다.



### Object.keys/values/entries 메소드

for…in 문은 객체 자신의 프로퍼티 뿐만 아니라 상속받은 프로퍼티도 열거한다. 따라서 Object.prototype.hasOwnProperty 메소드를 사용하여 객체 자신의 프로퍼티인지 확인하는 추가 처리가 필요하다.

객체 자신의 프로퍼티만을 열거하기 위해서는 for…in 문을 사용하는 것 보다 Object.keys/values/entries 메소드를 사용하는 것을 권장한다.

Object.keys 메소드는 객체 자신의 열거 가능한(enumerable) 프로퍼티 키를 배열로 반환한다.

```javascript
const person = {
  name: 'Lee',
  address: 'Seoul',
  __proto__: { age: 20 }
};

console.log(Object.keys(person)); // ["name", "address"]
```

ES8에서 도입된 Object.values 메소드는 객체 자신의 열거 가능한 프로퍼티 값을 배열로 반환한다.

```javascript
console.log(Object.values(person)); // ["Lee", "Seoul"]
```

ES8에서 도입된 Object.entries 메소드는 객체 자신의 열거 가능한 프로퍼티 키와 값의 쌍의 배열을 배열에 담아 반환한다.

```javascript
console.log(Object.entries(person)); // [["name", "Lee"], ["address", "Seoul"]]

Object.entries(person).forEach(([key, value]) => console.log(key, value));
/*
name Lee
address Seoul
*/
```

