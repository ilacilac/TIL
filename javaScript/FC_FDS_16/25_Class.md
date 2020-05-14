

# Class

ES6에서 새롭게 도입된 클래스는 기존 프로토타입 기반 객체지향 프로그래밍보다 Java나 C#과 같은 클래스 기반 객체지향 프로그래밍에 익숙한 프로그래머가 보다 빠르게 하습할 수 있도록 클래스 기반 객체지향 프로그래밍 언어와 매우 흡사한 새로운 객체 생성 매커니즘을 제시하고 있다.

ES6의 클래스가 기존의 프로토타입 기반 객체지향 모델을 폐지하고 새롭게 클래스 기반 객체지향 모델을 제공하는 것은 아니다. 사실 클래스는 함수이며 기존 프로토타입 기반 패턴을 클래스 기반 패턴 처럼 사용할 수 있도록 하는 문법적 설탕이라고 볼 수도 있다.

클래스와 생성자 함수는 모두 프로토타입 기반의 인스턴스를 생성하지만 정확히 동일하게 동작하지는 않는다. 클래스는 생성자 함수보다 엄격하며 생성자 함수에서는 제공하지 않는 기능도 제공한다.

1. 클래스는 new 연산자를 사용하지 않고 호출하면 에러 발생
   생성자 함수는 new 연산자를 사용하지 않고 호출하면 일반 함수로서 호출된다.
2. 클래스는 상속을 지원하는 extends와 super 키워드를 제공한다. 
   생성자 함수는 extends와 super 키워드를 지원하지 않는다.
3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작한다.
   하지만 함수 선언문으로 정의된 생성자 함수는 함수 호이스팅이, 함수 표현식으로 정의한 생성자 함수는 변수 호이스팅이 발생한다.
4. 클래스 내의 모든 코드에는 암묵적으로 strict 모드가 지정되어 실행되며 strict 모드를 해지할 수 없다. 
   생성자 함수는 암묵적으로 strict 모드가 지정되지 않는다.
5. 클래스의 constructor, 프로토타입 메소드, 정적 메소드는 모두 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false이다.
   (열거되지 않는다.)



생성자 함수와 클래스는 프로토타입 기반의 객체지향을 구현했다는 점에서 매우 유사하다. 하지만 클래스는 생성자 함수를 기반으로 한 객체 생성방식보다 견고하고 명료하다.

특히 클래스의 extends와 super 키워드는 상속 관계 구현을 보다 간결하고 명료하게 한다.

따라서 클래스를 프로토타입 기반 객체 생성 패턴의 단순한 문법적 설탕이라고 보기 보다는 새로운 객체 생성 메커니즘으로 보는 것이 보다 합당하다.



## 클래스 정의

클래스는 class 키워드를 사용하여 정의한다.
클래스 이름은 생성자 함수와 마찬가지로 파스칼 케이스를 사용하는 것이 일반적이다. 

```javascript
// 클래스 선언문
class Person {}
```



일반적이지는 않지만, 함수와 마찬가지로 표현식으로 클래스를 정의할 수도 있다. 이때 클래스는 함수와 마찬가지로 이름을 가질 수도 있고, 갖지 않을 수도 있다.

```javascript
// 익명 클래스 표현식
const Person = class {};

// 기명 클래스 표현식
const Person = class MyClass {};
```

클래스를 표현식으로 정의할 수 있다는것
= 클래스가 값으로 사용할 수 있는 일급 객체

- 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
- 변수나 자료 구조(객체, 배열 등)에 저장할 수 있다.
- 함수의 매개 변수에게 전달할 수 있다.
- 함수의 반환값으로 사용할 수 있다.

= 클래스는 함수이고 일급객체이다.

```javascript
// 클래스 선언문
class Person {
    // 생성자
    constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name = name; // name 프로퍼티는 public 하다.
    }
    
    // 프로토타입 메소드
    sayHi() {
        console.log(`Hi! My name is ${this.name}`);
    }
    
    // 정적 메소드
    static sayHello() {
        console.log('Hello');
    }
}

// 인스턴스 생성
const me = new Person('Lee');

// 인스턴스의 프로퍼티 참조
console.log(me.name); // Lee
// 프로토타입 메소드 호출
me.sayHi(); // Hi! My name is Lee
// 정적 메소드 호출
Person.sayHello(); // Hello!
```



## 클래스 호이스팅

클래스는 클래스 정의 이전에 참조할 수 없다.

```javascript
console.log(Person);
// ReferenceError: Cannot access 'Person' before initialization

// 클래스 선언문
class Person {}
```

클래스 선언문도 변수 선언, 함수 정의와 마찬가지로 호이스팅이 발생한다. 단, 클래스는 let, const 키워드로 선언한 변수처럼 호이스팅된다. 따라서 클래스 선언문 이전에 일시적 사각지대(Temporal Dead Zone; TDZ)에 빠지기 때문에 호이스팅이 발생하지 않는 것처럼 동작한다.



## 인스턴스 생성

클래스는 함수로 평가된다.

```javascript
class Person {}

console.log(typeof Person); // function
```

```javascript
class Person {}

// 인스턴스 생성
const me = new Person();
console.log(me); // Person {}
```

함수는 new 연산자의 사용 여부에 따라 일반 함수로 호출되거나
인스턴스 생성을 위한 생성자 함수로 호출되지만 클래스는 인스턴스를
생성하는 것이 유일한 존재 이유이므로 반드시 new 연산자와 함께 호출하여야 한다.

```javascript
class Person {}

// new 연산자 없이 호출하면 타입 에러가 발생한다.
const me = Person();
// TypeError: Class constructor Foo cannot be invoked without 'new'
```

클래스 표현식으로 정의된 클래스의 경우, 아래 예제와 같이 클래스를 가리키는 식별자(Person)를 사용해 인스턴스를 생성하지 않고 기명 클래스 표현식의 클래스 이름(MyClass)을 사용해 인스턴스를 생성하면 에러가 발생한다.

```javascript
const Person = class MyClass {};

// 함수 표현식과 마찬가지로 클래스를 가리키는 식별자로 인스턴스를 생성해야 한다.
const me = new Person();

// 클래스 이름 MyClass는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자이다.
console.log(MyClass); // ReferenceError: MyClass is not defined

const you = new MyClass(); // ReferenceError: MyClass is not defined
```

이는 기명 함수 표현식과 마찬가지로 클래스 표현식에서 사용한 클래스 이름은 외부 코드에서 접근 불가능하기 때문이다.



## 메소드

클래스 몸체에는 0개 이상의 메소드 만을 선언할 수 있다.
클래스 몸체에서 정의할 수 있는 메소드는 3가지가 있다. 

- constructor(생성자)
- 프로토타입 메소드
- 정적 메소드

### constructor

constructor는 인스턴스를 생성하고 초기화 하기 위한 트수한 메소드이다. constructor는 이름을 변경할 수 없다.

```javascript
class Person {
    // 생성자
    constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name = name;
    }
}
```

클래스는 평가되어 함수 객체가 된다.
클래스도 함수 객체의 고유의 프로퍼티를 모두 갖고 있다.
함수와 동일하게 프로토타입과 연결되어 있으며 자신의 스코프체인을 구성한다.

모든 함수 객체가 가지고 있는 prototype 프로퍼티가 가리키는 프로토타입 객체의 constructor 프로퍼티는 클래스 자신을 가리키고 있다.

이는 클래스가 인스턴스를 생성하는 생성자 함수라는 것을 의미한다.

즉, new 연산자와 함께 클래스를 호출하면 클래스는 인스턴스를 생성한다.



```javascript
// 클래스
class Person {
    // 생성자
    constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name = name;
    }
}

// 생성자 함수
function Person(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
}
```

클래스가 평가되어 생성된 함수 객체나 클래스가 생성한 인스턴스 어디에도 constructor 메소드가 보이지 않는다.

이는 클래스 몸체에 정의한 constructor가 단순한 메소드가 아니라는것을 의미한다.

> 클래스의 constructor 메소드와 Person.prototype.constructor
>
> 이름이 같아 혼동할 수 있으나 클래스 몸체에 정의한 constructor와 Person.prototype.constructor는 직접적인 관련이 없다. 프로토타입의 constructor 프로퍼티는 모든 프로토타입이 가지고 있는 프로퍼티이며 생성자 함수를 가리킨다.

constructor는 메소드로 해석되는 것이 아니라 클래스가 평가되어 생성한 함수 객체 코드의 일부가 된다. 다시 말해, 클래스 정의가 평가되면
constructor의 기술된 동작을 하는 함수 객체가 생성된다.

constructor는 생성자 함수와 유사하지만 몇가지 차이가 있다.

constructor는 클래스 내에 최대 한 개만 존재할 수 있다.
만약 클래스가 2개 이상의 constructor를 포함하면 문법(SyntaxError)가 발생한다.

constructor는 생략할 수 있다.
생략하게 되면, 클래스에 아래와 같이 디폴트 constructor가 암묵적으로 정의된다.

```javascript
class Person {
  // constructor를 생략하면 아래와 같이 디폴트 constructor가 암묵적으로 정의된다.
  constructor() {}
}

// 빈 객체가 생성된다.
const me = new Person();
console.log(me); // Person {}
```

constructor를 생략한 클래스는 디폴트 constructor에 의해 빈 객체를 생성한다. 프로퍼티가 추가되어 초기화된 인스턴스를 생성하려면 constructor 내부에서 this에 인스턴스 프로퍼티를 추가한다.

```javascript
class Person {
  constructor() {
    // 고정값으로 인스턴스 초기화
    this.name = 'Lee';
    this.address = 'Seoul';
  }
}

// 인스턴스 프로퍼티가 추가된다.
const me = new Person();
console.log(me); // Person {name: "Lee", address: "Seoul"}
```

인스턴스를 생성할 때, 클래스 외부에서 인스턴스 프로퍼티의 초기값을 전달하려면 아래와 같이 constructor에 매개변수를 선언하고 인스턴스를 생성할 때 초기값을 전달한다. 이때 초기값은 constructor의 매개변수에게 전달된다.

```javascript
class Person {
  constructor(name, address) {
    // 인수로 인스턴스 초기화
    this.name = name;
    this.address = address;
  }
}

// 인수로 초기값을 전달한다. 초기값은 constructor에 전달된다.
const me = new Person('Lee', 'Seoul');
console.log(me); // Person {name: "Lee", address: "Seoul"}
```

이처럼 constructor 내에서는 인스턴스의 생성과 동시에 인스턴스 프로퍼티 추가를 통해 인스턴스의 초기화를 실행한다. 따라서 인스턴스를 초기화하려면 constructor를 생략해서는 안된다.

constructor는 별도의 반환문을 갖지 않아야 한다.
new연산자와 함께 클래스가 호출되면 생성자함수와 동일하게 암묵적으로 this, 즉 인스턴스를 반환하기 때문이다.

만약 this가 아닌 다른 객체를 명시적으로 반환하면 this, 즉 인스턴스가 반환되지 못하고 return 문에 명시한 객체가 반환된다.
하지만 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.



### 프로토타입 메소드

클래스 몸체에서 정의한 메소드는 생성자 함수에 의한 객체 생성 방식과는 다르게 클래스의 prototype 프로퍼티에 메소드를 추가하지 않아도 기본적으로 프로토타입 메소드가 된다.

```javascript
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }

  // 프로토타입 메소드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const me = new Person('Lee');
me.sayHi(); // Hi! My name is Lee
```

클래스 몸체에서 정의한 메소드는 인스턴스의 프로토타입에 존재하는 프로토타입 메소드가 된다. 인스턴스는 프로토타입 메소드를 상속받아 사용할 수 있다.



### 정적 메소드

정적(static) 메소드는 인스턴스를 생성하지 않아도 호출할 수 있는 메소드를 말한다.클래스에서는 메소드에 static 키워드를 붙이면 정적 메소드(클래스 메소드)가 된다.

```javascript
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }

  // 정적 메소드
  static sayHi() {
    console.log('Hi!');
  }
}
```

이처럼 정적 메소드는 클래스 자신의 메소드가 된다. 클래스는 함수 객체로 평가되므로 자신의 프로퍼티/메소드를 소유할 수 있다. 클래스는 코드가 평가되는 시점에 함수 객체가 되므로 별다른 생성 과정이 필요 없다. 따라서 정적 메소드는 클래스 정의 이후 인스턴스를 생성하지 않아도 호출할 수 있다.

정적 메소드는 프로토타입 메소드처럼 인스턴스로 호출하지 않고 클래스로 호출한다.

```javascript
// 정적 메소드는 클래스로 호출한다.
// 정적 메소드는 인스턴스 없이도 호출할 수 있다.
Person.sayHi(); // Hi!
```

정적 메소드는 인스턴스로 호출할 수 없다.
정적 메소드를 소유하는 클래스는 인스턴스의 프로토타입 체인 상에 존재하지 않기 때문이다.

다시 말해, 인스턴스의 프로토타입 체인 상에는 클래스가 존재하지 않기 때문에 인스턴스로 클래스의 메소드를 상속받을 수 없다.



### 정적 메소드와 프로토타입 메소드의 차이

1. 정적 메소드와 프로토타입 메소드는 자신이 속해 있는 프로토타입 체인이 다르다.
2. 정적 메소드는 클래스로 호출하고 프로토타입 메소드는 인스턴스로 호출한다.
3. 정적 메소드는 인스턴스 프로퍼티를 참조할 수 없지만 프로토타입 메소드는 인스턴스 프로퍼티를 참조할 수 있다.

```javascript
class Square {
  // 정적 메소드
  static area(width, height) {
    return width * height;
  }
}

console.log(Square.area(10, 10)); // 100
```



클래스 또는 생성자 함수를 하나의 네임 스페이스로 사용하여 정적 메소드를 모아 놓으면 이름 충돌 가능성을 줄여 주고 관련있는 함수들을 구조화 할 수 있는 효과가 있다.

이와같은 이유로 정적 메소드는 애플리케이션 전역에서 사용할 유틸리티 함수를 전역 함수로 정의하지 않고 메소드로 구조화 할 때 유용하다.



### 클래스에서 정의한 메소드의 특징

1. function 키워드를 생략한 메소드 축약 표현을 사용한다.
2. 객체 리터럴과는 다르게 클래스에서 메소드를 정의할 때는 콤마가 필요 없다.
3. 암묵적으로 strict모드로 실행된다.
4. for...in 문이나 Object.keys 메소드 등으로 열거할 수 없다.
   즉, 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는
   프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false 이다.
5. 내부 메소드 [[Construct]]를 갖지 않는 non-constructor이다.
   따라서 new 연산자와 함께 호출할 수 없다.



## 클래스의 인스턴스 생성 과정

1. **인스턴스 생성과 this 바인딩**

   new 연산자와 함께 클래스를 호출하면 constructor의 내부 코드가 실행되기에 앞서 암묵적으로 빈객체가 생성된다. 이 빈 객체가 바로 클래스가 생성한 인스턴스이다.(아직 완성되지 않은상태)
   이때 클래스가 생성한 인스턴스의 프로토타입으로 클래스의 prototype 프로퍼티가 가리키는 객체가 설정된다.
   그리고 암묵적으로 생성된 빈 객체, 즉 인스턴스는 this에 바인딩 된다.

   따라서 constructor 내부의 this는 클래스가 생성한 인스턴스를 가리킨다.

2. **인스턴스의 초기화**

   constructor의 내부 코드가 실행되어 this에 바인딩되어 있는 인스턴스를 초기화 한다. 즉, this에 바인딩되어 있는 인스턴스에 프로퍼티를 추가하고 constructor가 인수로 전달받은 초기갑ㄳ으로 인스턴스의 프로퍼티 값을 초기화 한다. 만ㅇㄱ constructor가 생략 되었다면 이 과정도 생략된다.

3. **프로토타입 / 정적 메소드 추가**

   클래스 몸체에 정의한 프로토타입 메소드가 존재하면 클래스의 prototype 프로퍼티가 가리키는 프로토타입에 추가한다. 클래스 몸체에 정의한 정적 메소드가 존재하면 클래스에 추가한다.

4. **인스턴스 반환**

   클래스의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.

```javascript
class Person {
    // 생성자
    constructor(name) {
        // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
        console.log(this); // Person {} 
        console.log(Object.getPrototypeOf(this) === Person.prototype); // true
        
        // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
        this.name = name;
        
        // 4. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    }
    
    // 3.프로토타입 메소드는 클래스의 prototype에 메소드로 추가된다.
    sayHi() {
        console.log(`Hi! My name is ${this.name}`);
    }
    
    // 3. 정적 메소드는 클래스에 메소드로 추가된다.
    static sayHello() {
        console.log('Hello!');
    }
}
```



## 프로퍼티

### 인스턴스 프로퍼티

인스턴스 프로퍼티는 constructor 내부에서 정의되어야 한다.

```javascript
class Person {
    constructor(name) {
        // 인스턴스 프로퍼티
        this.name = name; // name 프로퍼티는 public 하다.
    }
}

const me = new Person('Lee');
console.log(me); // Person {name: "Lee"}

// name은 public하다.
console.log(me.name); // Lee
```

constructor 내부에서 this에 인스턴스 프로퍼티를 추가한다.
이로써 클래스가 암묵적으로 생성한 빈 객체, 
즉 인스턴스에 프로퍼티가 추가되어 인스턴스가 초기화 된다.

constructor 내부에서 this에 추가한 프로퍼티는 언제나 클래스가 생성한 인스턴스의 프로퍼티가 된다. ES6의 클래스는 다른 객체지향 언어처럼 private, public, protected 키워드와 같은 접근 제한자를 지원하지 않는다.

따라서 인스턴스 프로퍼티는 언제나 public 하다.



### 접근자 프로퍼티

접근자 프로퍼티는 자체적으로 값([[Value]] 내부 슬롯)을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다.

getter 함수와 setter 함수로 구성되어있다.

getter는 인스턴스 프로퍼티에 접근할 때마다 프로퍼티 값을 조작하는 행위가 필요할 때 사용한다. getter는 메소드 이름 앞에 get 키워드를 사용해 정의한다.

setter는 인스턴스 프로퍼티에 값을 할당할 때마다 프로퍼티 값을 조작하는 행위가 필요할 때 사용한다. setter는 메소드 이름 앞에 set 키워드를 사용해 정의한다.

getter는 이름 그대로 무언가를 취득할 때 사용하므로 반드시 무언가를 반환해야하고

setter는 무언가를 프로퍼티에 할당해야 할 때 사용하므로 반드시 매개 변수가 있어야 한다.(단 하나의 값만을 할당 받기 때문에 단 하나의 매개 변수만을 선언할 수 있다.)



### 클래스 필드 정의 제안

클래스 필드는 클래스 기반 객체지향 언어에서 클래스가 생성할 인스턴스의 프로퍼티를 가리키는 용어이다.

자바스크립트의 경우, 인스턴스 프로퍼티를 선언하고 초기화 하려면 반드시 생성자 함수 몸체 또는 클래스의 constructor 내부에서 this에 프로퍼티를 추가해야한다.

인스턴스 프로퍼티를 참조할 때 반드시 this를 사용하여 프로퍼티를 참조해야한다.

클레스 몸체에는 메소드 만을 선언할 수 있다.
따라서 클래스 몸체에 클래스 필드를 선언하면 문법 에러가 발생한다.
(최신브라우저, 최신 Node.js에서는 문법에러가 발생하지 않는다. 새로운 표준사양제안되어있다.)

클래스 몸체에서 클래스 필드를 정의하는 경우, this에 클래스 필드를 바인딩해서는 안된다. this는 클래스의 constructor와 메소드 내에서만 유효하다.

```javascript
class Person {
  // this에 클래스 필드를 바인딩해서는 안된다.
  this.name = ''; // SyntaxError: Unexpected token '.'
}
```



이처럼 인스턴스를 생성할 때, 클래스 필드를 초기화할 필요가 있다면 constructor 밖에서 클래스 필드를 정의할 필요가 없다. 클래스 필드를 초기화할 필요가 있다면 어차피 constructor 내부에서 클래스 필드를 참조하여 초기값을 할당해야 한다. 이때 this, 즉 클래스가 생성한 인스턴스에 클래스 필드에 해당하는 프로퍼티가 없다면 자동 추가되기 때문이다.



함수는 일급 객체이므로 함수를 클래스 필드에 할당할 수 있다. 따라서 클래스 필드를 통해 메소드를 정의할 수도 있다.

```javascript
class Person {
    // 클래스 필드에 문자열을 할당
    name = 'Lee';
	
	// 클래스 필드에 함수를 할당
	getName = function () {
        return this.name;
    }
	// 화살표 함수로 정의할 수도 있다.
	// getName = () => this.name;
}

const me = new Person();
console.log(me); // Person {name: "Lee", getName: f}
console.log(me.getName()); // Lee
```

이처럼 클래스 필드에 함수를 할당하는 경우, 이 함수는 프로퍼티 메소드가 아닌 인스턴스 메소드가 된다. 모든 클래스 필드는 인스턴스 프로퍼티가 되기 때문이다. 따라서 클래스 필드에 함수를 할당하는것은 권장하지 않는다.



### private 필드 정의 제안

constuctor 내부에서 this를 통해 정의한 인스턴스 프로퍼티는 인스턴스를 통해 클래스 외부에서 언제나 참조할 수 있다.
= 언제나 public 이다.

ES6의 클래스는 다른 객체지향 언어처럼 private, public, protected 키워드와 같은 접근제한자를 지원하지 않는다.

생성자 함수에서는 클로저를 사용하여 private한 프로퍼티를 흉내낼 수 있었다. 단 private한 프로퍼티를 흉내낸 자유 변수에 접근하면 에러가 발생하지 않고 undefined를 반환하므로 아쉬움이 남는다.

2020년 3월 현재 TC39 프로세스의 stage 3(candidate)에는 [private 필드를 정의할 수 있는 새로운 표준 사양이 제안](https://github.com/tc39/proposal-class-fields#private-fields)되어 있다. 표준 사양으로 승급이 확실시 되는 이 제안도 최신 브라우저(Chrome 74 이상)과 최신 최신 Node.js(버전 12 이상)에 이미 구현되어 있다.

```javascript
class Person {
  // private 필드 정의
  #name = '';

  constructor(name) {
// private 필드 참조
    this.#name = name;
  }
}

const me = new Person('Lee');

// private 필드 #name은 클래스 외부에서 참조할 수 없다.
console.log(me.#name);
// SyntaxError: Private field '#name' must be declared in an enclosing class
```

public 필드는 어디서든지 참조할 수 있지만 private 필드는 클래스 내부에서만 참조할 수 있다.

즉, 부모 클래스를 포함한 클래스 외부에서 private 필드에 직접 접근할 수 있는 방법은 없다. 다만 접근자 프로퍼티를 통해 간접적으로 접근하는 방법은 유효하다.

private 필드는 반드시 클래스 몸체에 정의해야 한다. private 필드를 직접 constructor에 정의하면 에러가 발생한다



### static 필드 정의 제안

클래스에는 static 키워드를 사용하여 정적 메소드를 정의할 수 있다.
하지만 static 키워드를 사용하여 정적 필드를 정의할 수는 없었다.

하지만 static public 필드, static private 필드, static private 메소드를 정의할 수 있는 새로운 표준 사양인 [“Static class features”](https://github.com/tc39/proposal-static-class-features)이 2020년 3월 현재, TC39 프로세스의 stage 3(candidate)에 제안되어 있다. 이 제안 중에 static public/private 필드는 2020년 3월 현재, 최신 브라우저(Chrome 72 이상)과 최신 Node.js(버전 12 이상)에 이미 구현되어 있다.

```javascript
class MyMath {
    // static public 필드 정의
    static PI = 22 / 7;

	// static private 필드 정의
	static #num = 10;
    
    // static 메소드
    static increment() {
        return ++MyMath.num;
    }
}

console.log(MyMath.PI); // 3.142857142857143
console.log(MyMath,increment()); / 11
```

