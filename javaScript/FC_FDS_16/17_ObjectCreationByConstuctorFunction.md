# 생성자 함수에 의한 객체 생성

## Object 생성자 함수

new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다. 빈 객체를 생성한 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성할 수 있다.

```javascript
// 빈 객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = 'Lee';
person.sayHello = function () {
  console.log('Hi! My name is ' + this.name);
};

console.log(person); // {name: "Lee", sayHello: ƒ}
person.sayHello(); // Hi! My name is Lee
```

- 생성자(constructor) 함수란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다.

- 생성자 함수에 의해 생성된 객체를 인스턴스(instance)라 한다.- 

- 객체를 생성하는 방법은 객체 리터럴을 사용하는 것이 더 간편하다.



## 생성자 함수

### 객체 리터럴에 의한 객체 생성 방식의 문제점

객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편하다.
하지만 객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만을 생성한다.
따라서 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우,
매번 같은 프로퍼티를 기술해야 하기 때문에 비효율 적이다.



### 생성자 함수에 의한 객체 생성 방식의 장점

생성자 함수에 의한 객체 생성 방식은 마치 객체(인스턴스)를 생성하기 위한 템플릿(클래스) 처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성 할 수 있다.

```javascript
// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스의 생성
const circle1 = new Circle(5);  // 반지름이 5인 Circle 객체를 생성
const circle2 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
```



생성자 함수는 이름 그대로 객체(인스턴스)를 생성하는 함수이다.
일반 함수와 동일한 방법으로 생성자 함수를 정의하고 
new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.



### 생성자 함수의 인스턴스 생성 과정

생성자 함수의 역할은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한
탬플릿(클래스)으로서 동작하여 인스턴스를 생성하는 것과 
생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당) 하는 것이다.

생성자 함수가 인스턴스를 생성하는 것은 필수이고, 생성된 인스턴스를 초기화하는 것은 옵션이다.

```javascript
// 생성자 함수
function Circle(radius) {
  // 인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스 생성
const circle1 = new Circle(5);  // 반지름이 5인 Circle 객체를 생성
```

*인스턴스는 this에 바인딩 된다?*

> 바인딩 : 식별자와 값을 연결하는 과정
> ex) 변수는 할당에 의해 값이 바인딩된다.



```javascript
function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다
}

// 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
const circle = new Circle(1);
console.log(circle); // Circle {radius: 1, getDiameter: ƒ}
```

생성자 함수 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 생성자 함수의 기본 동작을 훼손한다. 따라서 생성자 함수 내부에서 return 문을 반드시 생략해야 한다.



### 내부 메소드 [[Call]]과 [[Construct]]

함수 선언문 또는 함수표현식으로 정의한 함수는 일반적인 함수로서
호출할 수 있는 것은 물론 생성자 함수로서 호출 할 수 있다.

함수는 객체이므로 일반 객체와 동일하게 동작할 수 있다. 
함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메소드를 모두 가지고 있기 때문이다.

함수가 일반 함수로서 호출되면 함수 객체의 내부 메소드 [[Call]]가 호출되고 new 연산자와 함께 생성자 함수로서 호출되면 내부 메소드 [[Construct]]가 호출된다.

```javascript
function foo() {}

// 일반적인 함수로서 호출: [[Call]]이 호출된다.
foo();

// 생성자 함수로서 호출: [[Construct]]가 호출된다.
new foo();
```

내부 메소드 [[Call]]을 갖는 함수 객체를 callable이라 하며
함수 객체 만을 위한 내부 메소드[[Construct]]를 갖는 함수 객체를 
constructor, [[Construct]]를 갖지 않는 함수를 non-constructor라고 부른다.

callable은 호출 할 수 있는 객체, 즉 함수를 말하며
constructor는 생성자 함수로서 호출할 수 있는 객체를 의미한다.



### constructor  / non-constructor

자바스크립트 엔진이 함수 정의를 평가하여 함수 객체를 생성할 때,
함수 정의 방식에 따라 함수를 constructor와 non-constructor로 구분한다.

- constructor: 함수 선언문, 함수 표현식, 클래스(클래스도 함수다)
- non-constructor: 메소드(ES6 메소드 축약 표현), 화살표 함수