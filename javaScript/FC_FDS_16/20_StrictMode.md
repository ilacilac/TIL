# Strict mode

오타나 문법지식의 미비로 인한 실수로 인한 오류를 줄여 안정적인 코드생산을 하기위해
잠재적인 오류를 발생시키기 어려운 개발환경을 만들고 그환경에서 개발하는 것이
근본적인 해결책일 수 있다.

이를 지원하기위해 ES5부터 strict mode가 추가되었다.

> 기존에는 무시되던 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생



ESLint와 같은 린트도구를 사용하면 strict mode와 유사한 효과를 얻을 수 있다.



## stict mode의 적용

- 전역의 선두 또는 함수 몸체의 선두에 `'use strict';` 를 추가한다.
- 전역에 적용한 strict mode는 스크립트 단위로 적용된다.

```html
<!DOCTYPE html>
<html>
<body>
  <script>
    'use strict';
  </script>
  <script>
    x = 1; // 에러가 발생하지 않는다.
    console.log(x); // 1
  </script>
  <script>
    'use strict';

    y = 1; // ReferenceError: y is not defined
    console.log(y);
  </script>
</body>
</html>
```

외부 서드 파티 라이브러리를 사용하는 경우, 라이브러리가
non-strict mode일 경우도 있기 때문에 전역에 strict mode를 적용하는 것은
바람직하지 않다.

> 이러한 경우, 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다.



- 함수 단위로 strict mode를 적용하는 것도 피하자

  > 어떤 함수는 적용하고, 적용하지 않고는 바람직 하지 않고
  > 일일이 strict mode를 적용하는 것은 번거로운 일이다.
  >
  > 그리고 strict mode가 적용된 함수가 참조할 함수 외부의 컨텍스트에
  > strict mode를 적용하지 않는다면 문제가 될 수 있다.
  >
  > ```javascript
  > (function () {
  >   // non-strict mode
  >   var lеt = 10; // 에러가 발생하지 않는다.
  > 
  >   function foo() {
  >     'use strict';
  > 
  >     let = 20; // SyntaxError: Unexpected strict mode reserved word
  >   }
  >   foo();
  > }());
  > ```



## strict mode가 발생시키는 에러

- 암묵적 전역
  선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.
- 변수, 함수, 매개변수의 삭제
  delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생한다.
- 매개변수 이름의 중복
  중복된 함수 매개변수 이름을 사용하면 SyntaxError가 발생한다.
- with 문의 사용
  with 문을 사용하면 SyntaxError가 발생한다.



## strict mode 적용에 의한 변화

- 일반 함수의 this
  strict mode 에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩 된다. 생성자 함수가 아닌 일반 함수 내부에서는 this를 사용하라 필요가 없기 때문이다. 이때 에러는 발생하지 않는다.

- arguments 객체
  strict mode 에서는 매개변수에 전달된 인수를 재할당하여 변경하여도
  arguments 객체에 반영되지 않는다.

  ```javascript
  (function (a) {
    // 매개변수에 전달된 인수를 재할당하여 변경
    a = 2;
  
    // 변경된 인수가 arguments 객체에 반영되지 않는다.
    console.log(arguments); // { 0: 1, length: 1 }
  }(1))
  // Arguments [2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  ```

  ```javascript
  (function (a) {
    'use strict';
    // 매개변수에 전달된 인수를 재할당하여 변경
    a = 2;
  
    // 변경된 인수가 arguments 객체에 반영되지 않는다.
    console.log(arguments); // { 0: 1, length: 1 }
  }(1));
  // Arguments [1, callee: (...), Symbol(Symbol.iterator): ƒ]
  ```

  