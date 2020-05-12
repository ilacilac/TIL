# 클로저

클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.

```javascript
const x = 1;

function outerFunc() {
  const x = 10;

  function innerFunc() {
    console.log(x); // 10
  }

  innerFunc();
}

outerFunc();
```

```javascript
const x = 1;

function outerFunc() {
  const x = 10;
  innerFunc();
}

function innerFunc() {
  console.log(x); // 1
}

outerFunc();
```

자바스크립트는 렉시컬 스코프를 따르는 프로그래밍 언어이다.



## 렉시컬 스코프

자바스크립트는 함수를 어디서 호출했는지가 아니라
어디에 정의했는지에 따라 상위 스코프를 결정한다.
이를 **렉시컬 스코프(정적 스코프)** 라 한다.

```javascript
const x = 1;

function foo() {
  const x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // ?
bar(); // ?
```

스코프의 실체는 실행 컨텍스트의 렉시컬 환경이다.
이 렉시컬 환경은 자신의 "외부 렉시컬 환경에 대한 참조"를 통해
상위 렉시컬 환경과 연결된다. (= 스코프 체인)

함수의 상위 스코프를 결정한다
= 렉시컬 환경의 외부 렉시컬 환경에 대한 참조에 저장할 참조값을 결정한다.

렉시컬 환경의 외부 렉시컬 환경에 대한 참조에 저장할 참조값,
즉 상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에
함수가 정의된 환경(위치)에 의해 결정된다.

이것이 바로 **렉시컬 스코프**이다.



## 함수 객체의 내부 슬롯 [[Environment]]

함수가 정의된 환경과 호출되는 환경(위치)은 다를 수 있다.
따라서 렉시컬 스코프가 가능하려면 함수는 자신이 호출되는 환경과는 상관없이 자신이 정의된 환경, 즉 상위 스코프(함수 정의가 위치하는 스코프가 바로 상위 스코프이다)를 기억해야 한다.

이를 위해 함수는 자신의 내부슬롯 [[Environment]]에 
자신이 정의된 환경, 즉 상위 스코프의 참조를 저장한다.

함수 정의가 평가되어 함수 객체를 생성할 때, 자신이 정의된 환경에 의해 결정된 상위 스코프의 참조를 함수 객체 자신의 내부 슬롯[[Environment]]에 저장한다.



## 클로저와 렉시컬 환경

```javascript
const x = 1;

// ①
function outer() {
  const x = 10;
  const inner = function () { console.log(x); }; // ②
  return inner;
}

// 함수 outer를 호출하면 중첩 함수 inner를 반환한다.
// 그리고 함수 outer의 실행 컨텍스트는 실행 컨텍스트 스택에서 pop된다.
const innerFunc = outer(); // ③
innerFunc(); // ④ 10
```

자신을 포함하고 있는 외부 함수보다 중첩 함수가 더 오래 유지되는 경우,
외부 함수 밖에서 중첩 함수를 호출하더라도 외부 함수의 지역 변수에 접근할 수 있는데 이러한 함수를 클로저(closure)라고 부른다.

클로저에 의해 참조되는 상위 스코프의 변수를 **자유변수(Free variable)** 라고 부른다.



## 클로저의 활용

클로저는 상태를 안전하게 유지하기 위해 사용한다.
즉, 상태가 의도치 않게 변경되지 않도록 안전하게 은닉한다.

그리고 이전 상태를 기억하다가 상태가 변경되면 최신 상태(state)를 유지한다.

```html
<html>
  <body>
    <button class="increase">+</button>
    <span class="counter">0</span>
		
    <script>
    	// 카운트 상태를 유지하기 위한 전역 변수
      let num = 0;
      
      const $counter = document.querySelector('.counter');
      
      // 버튼이 클릭되면 전역 변수 num을 1 증가 시킨다.
      const increase = function () {
        $counter.textContent = ++num; // 상태 변화
      };
      
      document.querySelector('.increase').onclick = increase;
    </script>
  </body>
</html>
```

위 코드는 잘 동작하지만 오류를 발생시킬 가능성을 내포하고 있는 좋지 않은 코드다. 처음으로 버튼 클릭 이벤트가 발생하여 이벤트 핸들러 increase가 처음 호출되기 직전에 전역 변수 num의 값은 반드시 0이여야 한다. 그리고 다음 버튼 클릭 이벤트가 발생하여 이벤트 핸들러 increase가 호출되기 전까지 전역 변수 num의 값은 변경되지 말고 이전의 카운트 상태를 유지해야 한다. 다시 말해 **전역 변수 num의 값, 즉 카운트 상태는 반드시 이벤트 핸들러 increase만이 변경할 수 있어야 한다.**

(클로저를 사용하여 수정한 예시)

```html
<!DOCTYPE html>
<html>
<body>
  <button class="increase">+</button>
  <span class="counter">0</span>

  <script>
    const $counter = document.querySelector('.counter');

    // 버튼이 클릭되면 자유 변수 num을 1 증가 시킨다.
    const increase = (function () {
      // 카운트 상태를 유지하기 위한 자유 변수
      let num = 0;

      return function () {
        $counter.textContent = ++num; // 상태 변경
      };
    }());

    document.querySelector('.increase').onclick = increase;
  </script>
</body>
</html>
```

?? 즉시실행함수로 왜 묶었지 ??

> 스크립트가 실행되면 즉시 실행함수가 호출되고
> 즉시 실행 함수가 반환한 함수가 변수 increase에 할당되어 increase 버튼을 클릭할 때마다 호출된다. 
>
> 이때 즉시 실행 함수가 반환한 클로저는
> 자신이 정의된 위치에 의해 결정된 상위 스코프,
> 즉 즉시 실행 함수의 렉시컬 환경을 기억하고 있다.

즉시 실행 함수는 호출된 이후 소멸되지만 즉시실행 함수가 반환한 클로저는 
변수 increase에 할당되어 increase 버튼을 클릭할 때마다 호출된다.
이때 즉시 실행 함수가 반환한 클로저는 자신이 정의된 위치에 의해
결정된 상위 스코프, 즉 즉시 실행 함수의 렉시컬 환경을 기억하고 있다.

따라서 즉시 실행 함수가 반환한 클로저는 카운트 상태를 유지하기 위한 자유 변수 num을 언제나 어디서 호출하든지 참조하고 변경할 수 있다.

즉시 실행 함수는 한번만 실행되므로 
increase가 호출될 때마다 변수 counter가 재차 초기화될 일은 없을것이다.



(함수형 프로그래밍에서 클로저를 활용한 간단한 예제)

```javascript
// 함수를 인수로 전달받고 함수를 반환하는 고차 함수
// 이 함수가 반환하는 함수는 카운트 상태를 유지하기 위한 자유 변수 counter을 기억하는 클로저다.
function makeCounter(predicate) {
  // 카운트 상태를 유지하기 위한 자유 변수
  let counter = 0;
  
  // 클로저를 반환
  return function () {
    counter = predicate(counter);
    return counter;
  };
}

// 보조 함수
function increase(n) {
  return ++n;
}

// 보조 함수
function decrease(n) {
  return --n;
}

// 함수로 함수를 생성한다.
// makeCounter 함수는 보조 함수를 인수로 전달받아 함수를 반환한다.
const increser = makeCounter(increase); // ①
console.log(increaser()); // 1
console.log(increaser()); // 2

// increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동 하지 않는다.
const decreaser = makeCounter(decrease); // ②
console.log(decreaser()); // -1
console.log(decreaser()); // -2
```

위 예제에서 변수 increaser와 변수 decreaser에 할당된 함수는 각각 자신만의 독립된 렉시컬 환경을 갖기 때문에 카운트를 유지하기 위한 자유 변수 counter를 고유하지않아 카운터의 증감이 연동되지 않는다.

따라서 독립된 카운터가 아니라 연동하여 증감이 가능한 카운터를 만들려면
렉시컬 환경을 공유하는 클로저를 만들어야 한다.
이를 위해서 makeCounter 함수를 두번 호출하지 말아야 한다.

```javascript
// 함수를 반환하는 고차 함수
// 이 함수가 반환하는 함수는 카운트 상태를 유지하기 위한 자유 변수 counter을 기억하는 클로저다.
const counter = (function () {
  // 카운트 상태를 유지하기 위한 자유 변수
  let counter = 0;

  // 함수를 인수로 전달받는 클로저를 반환
  return function (predicate) {
    // 인수로 전달 받은 보조 함수에 상태 변경을 위임한다.
    counter = predicate(counter);
    return counter;
  };
}());

// 보조 함수
function increase(n) {
  return ++n;
}

// 보조 함수
function decrease(n) {
  return --n;
}

// 보조 함수를 전달하여 호출
console.log(counter(increase)); // 1
console.log(counter(increase)); // 2

// 자유 변수를 공유한다.
console.log(counter(decrease)); // 1
console.log(counter(decrease)); // 0
```



## 자주 발생하는 실수

```javascript
var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = function () {
    return i;
  };
}

for (var j = 0; j < arr.length; j++) {
  console.log(arr[j]()); 
}
```

클로저를 사용해 위 예제를 바르게 동작하는 코드로 만들어보자.

```javascript
var arr = [];

for (var i = 0; i < 5; i++){
  arr[i] = (function (id) { // ①
    return function () {
      return id;
    };
  }(i));
}

for (var j = 0; j < arr.length; j++) {
  console.log(arr[j]());
}
```

