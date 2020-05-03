# 프로퍼티 어트리뷰트

## 내부 슬롯과 내부 메소드

ECMAScript 사양에 등장하는 이중 대괄호로([...])로 감싼 이름들이 내부 슬롯과 내부 메소드이다.

ECMAScript 사양에 정의된 대로 구현되어 자바슼크립트 엔진에서 실제로 동작하지만 외부로 공개된 객체 프로퍼티는 아니다.
단, 일부 내부 슬롯과 내부 메소드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.



## 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체

자바스크립트 엔진은 프로퍼티를 생성할 때, 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.

프로퍼티 상태란

- 프로퍼티의 값(value)
- 값의 갱신 가능여부(writable)
- 열거 가능 여부(enumerable)
- 재정의 가능 여부(confiburable)



프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태값(meta-property)인 내부 슬롯([Value]), ([Writable]), ([Enumerable]), ([Configuralbe])이다.

따라서 프로퍼티 어트리뷰트에 직접 접근할 수 없지만,
Object.getOwnPropertyDescriptor 메소드를 사용하여 간접적으로 확인할 수 있다.

```javascript
const person = {
    name: 'Lee'
};
// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// {value: "Lee", writable: true, enumerable: true, configurable: true}
```

Object.getOwnPropertyDescriptor 메소드를 호출할 때
첫번째 매개변수에는 객체의 참조를 전달하고 
두번째 매개변수에는 프로퍼티 키를 문자열로 전달한다.

이때 Object.getOwnPropertyDescripto 메소드는 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터(PropertyDescriptor) 객체를 반환한다.

존재하지 않는 프로퍼티나 상속받은 프로퍼티에 대한 프로퍼티 디스크립터를 요구하면 undefined 반환

ES8에서 도입된 Object.getOwnPropertyDescriptors 메소드는 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.

```javascript
const person = {
  name: 'Lee'
};

// 프로퍼티 동적 생성
person.age = 20;

// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
console.log(Object.getOwnPropertyDescriptors(person));
```



## 데이터 프로퍼티와 접근자 프로퍼티

프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.

- 데이터 프로퍼티(Data property)

  키와 값으로 구성된 일반적인 프로퍼티이다.

- 접근자 프로퍼티(Accessor property)

  자체저으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티다.



### 데이터 프로퍼티

데이터 프로퍼티는 아래와 같은프로퍼티 어트리뷰트를 갖는다.
(자바스크립트 엔진이 프로퍼티를 생성할 때 기본값으로 자동 정의됨)

| 프로퍼티 어트리뷰트 | 프로퍼티 디스크립터 객체의 프로퍼티 | 설명                                                         |
| :------------------ | :---------------------------------- | :----------------------------------------------------------- |
| [[Value]]           | value                               | - 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다. - 프로퍼티 키를 통해 프로퍼티 값을 변경하면 [[Value]]에 값을 재할당한다. 이때 프로퍼티가 없으면 프로퍼티를 동적 생성하고 생성된 프로퍼티의 [[Value]]에 값을 저장한다. |
| [[Writable]]        | writable                            | - 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다. - [[Writable]]의 값이 false인 경우, 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없는 읽기 전용 프로퍼티가 된다. |
| [[Enumerable]]      | enumerable                          | - 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는다. - [[Enumerable]]의 값이 false인 경우, 해당 프로퍼티는 for…in 문이나 Object.keys 메소드 등으로 열거할 수 없다. |
| [[Configurable]]    | configurable                        | - 프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖는다. - [[Configurable]]의 값이 false인 경우, 해당 프로퍼티의 삭제, 프로퍼티 어트리뷰트 값의 변경이 금지된다. 단, [[Writable]]이 true인 경우, [[Value]]의 변경과 [[Writable]]을 false로 변경하는 것은 허용된다. |



### 접근자 프로퍼티

접근자 프로퍼티는 자체적으는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다.

| 프로퍼티 어트리뷰트 | 프로퍼티 디스크립터 객체의 프로퍼티 | 설명                                                         |
| :------------------ | :---------------------------------- | :----------------------------------------------------------- |
| [[Get]]             | get                                 | 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수이다. 즉, 접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수가 호출되고 그 결과가 프로퍼티 값으로 반환된다. |
| [[Set]]             | set                                 | 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수이다. 즉, 접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트 [[Set]]의 값, 즉 setter 함수가 호출되고 그 결과가 프로퍼티 값으로 저장된다. |
| [[Enumerable]]      | enumerable                          | 데이터 프로퍼티의 [[Enumerable]]와 같다.                     |
| [[Configurable]]    | configurable                        | 데이터 프로퍼티의 [[Configurable]]와 같다.                   |

접근자 함수는 getter / setter 함수라고도 부른다.
접근자 프로퍼티는 getter와 setter 함수를 모두 정의할 수 있고
하나만 정의할 수도 있다.

```javascript
const person = {
  // 데이터 프로퍼티
  firstName: 'Ungmo',
  lastName: 'Lee',

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티이다.
  // getter 함수
  get fullName() {
    console.log('getter 실행');
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set fullName(name) {
    console.log('setter 실행');
    // 배열 디스트럭처링 할당: "31.1 배열 디스트럭처링 할당" 참고
    [this.firstName, this.lastName] = name.split(' ');
  }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(person.firstName + ' ' + person.lastName); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person.fullName = 'Heegun Lee';
console.log(person); // {firstName: "Heegun", lastName: "Lee"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName); // Heegun Lee

// firstName는 데이터 프로퍼티이다.
// 데이터 프로퍼티는 value, writable, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);
// {value: "Heegun", writable: true, enumerable: true, configurable: true}

// fullName는 접근자 프로퍼티이다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);
// {get: ƒ, set: ƒ, enumerable: true, configurable: true}
```

person 객체의 firstName과 lastName 프로퍼티는 일반적인 데이터 프로퍼티다. 메소드 앞에 get, set이 붙은 메소드가 있는데 이것들이 바로 getter와 setter 함수이고 getter/setter 함수의 이름 fullName이 접근자 프로퍼티이다. 접근자 프로퍼티는 자체적으로 값(프로퍼티 어트리뷰트 [[Value]])을 가지지 않으며 다만 데이터 프로퍼티의 값을 읽거나 저장할 때 관여할 뿐이다.

> **프로토타입**
>
> 프로토타입(prototype)은 어떤 객체의 상위(부모) 객체의 역할을 하는 객체이다. 프로토타입은 하위(자식) 객체에게 자신의 프로퍼티와 메소드를 상속한다. 프로토타입 객체의 프로퍼티나 메소드를 상속받은 하위 객체는 자신의 프로퍼티 또는 메소드인 것처럼 자유롭게 사용할 수 있다.



접근자 프로퍼티와 데이터 프로퍼티 구별 방법은 아래와 같다.

```javascript
// 일반 객체의 __proto__는 접근자 프로퍼티이다.
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}

// 함수 객체의 prototype은 데이터 프로퍼티이다.
Object.getOwnPropertyDescriptor(function() {}, 'prototype');
// {value: {…}, writable: true, enumerable: false, configurable: false}
```



## 프로퍼티 정의

프로퍼티 정의란 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의하는 것을 말한다

Object.defineProperty 메소드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있다.

```javascript
const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
  value: 'Ungmo',
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(person, 'lastName', {
  value: 'Lee'
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);
// firstName {value: "Ungmo", writable: true, enumerable: true, configurable: true}

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다.
descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);
// lastName {value: "Lee", writable: false, enumerable: false, configurable: false}

// [[Enumerable]]의 값이 false인 경우,
// 해당 프로퍼티는 for…in 문이나 Object.keys 등으로 열거할 수 없다.
// lastName 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다.
console.log(Object.keys(person)); // ["firstName"]

// [[Writable]]의 값이 false인 경우, 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없다.
// lastName 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없다.
// 이때 값을 변경하면 에러는 발생하지 않고 무시된다.
person.lastName = 'Kim';

// [[Configurable]]의 값이 false인 경우, 해당 프로퍼티를 삭제할 수 없다.
// lastName 프로퍼티는 [[Configurable]]의 값이 false이므로 삭제할 수 없다.
// 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시된다.
delete person.lastName;

// [[Configurable]]의 값이 false인 경우, 해당 프로퍼티를 재정의할 수 없다.
// Object.defineProperty(person, 'lastName', { enumerable: true });
// Uncaught TypeError: Cannot redefine property: lastName

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);
// lastName {value: "Lee", writable: false, enumerable: false, configurable: false}

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
  // getter 함수
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
  enumerable: true,
  configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);
// fullName {get: ƒ, set: ƒ, enumerable: true, configurable: true}

person.fullName = 'Heegun Lee';
console.log(person); // {firstName: "Heegun", lastName: "Lee"}
```

Object.defineProperty 메소드는 한번에 하나의 프로퍼티만 정의할 수 있다. Object.defineProperties 메소드를 사용하면 여러 개의 프로퍼티를 한번에 정의할 수 있다.



## 객체 변경 방지

객체는 변경 가능한 값이므로 재할당 없이 직접 변경이 가능하다.

- 프로퍼티를 추가, 삭제
- 프로퍼티 값을 갱신
- Object.defineProperty || Object.defineProperties 
  메소드를 사용하여 프로퍼티 어트리뷰트를 재정의



자바스크립트는 객체의 변경을 방지할 수 있는 다양한 메소드를 제공한다. 객체 변경 방지 메소드 들은 객체의 변경을 금지하는 강도가 다르다.

| 구분           | 메소드                   | 프로퍼티 추가 | 프로퍼티 삭제 | 프로퍼티 값 읽기 | 프로퍼티 값 쓰기 | 프로퍼티 어트리뷰트 재정의 |
| :------------- | :----------------------- | :-----------: | :-----------: | :--------------: | :--------------: | :------------------------: |
| 객체 확장 금지 | Object.preventExtensions |       ✕       |       ○       |        ○         |        ○         |             ○              |
| 객체 밀봉      | Object.seal              |       ✕       |       ✕       |        ○         |        ○         |             ✕              |
| 객체 동결      | Object.freeze            |       ✕       |       ✕       |        ○         |        ✕         |             ✕              |

확장이 금지된 객체인지 여부는 Object.isExtensible 메소드로 확인 할 수 있다.

밀봉된 객체인지 여부는 Object.isSealed 메소드로 확인 할 수 있다.

동결된 객체인지 여부는 Object.isFrozen 메소드로 확인 할 수 있다.