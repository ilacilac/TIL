# 이벤트

## 이벤트 드리븐 프로그래밍

이벤트와 그에 대응하는 함수를 통해 사용자와 애플리케이션은 상호작용이 가능하게 된다. 이와같이 프로그램의 흐름을 이벤트 중심으로 제어하는 프로그래밍 방식을 이벤트 드리븐 프로그래밍 이라한다.

**브라우저 : **
처리해야 할 특정 사건이 발생하면 이를 감지하여 이벤트를 발생시킨다.
ex)  클릭, 키보드 입력, 마우스 이동 등이 일어나면 브라우저는 이를 감지하여 특정한 타입의 이벤트를 발생시킨다.

**이벤트 핸들러 :** 
만약 애플리케이션이 특정 타입의 이벤트에 대해 반응하여 어떤 일을 하고 싶다면 해당하는 타입의 이벤트가 발생했을 때 호출될 함수를 브라우저에게 알려 호출을 위임한다. 

이때 이벤트가 발생핼을 때 호출될 함수를 이벤트 핸들러라 하고,
이벤트가 발생했을 때 브라우저에게 이벤트 핸들러의 호출을 위임하는 것을 **이벤트 핸들러 등록**이라한다.



## 이벤트 타입

이벤트 타입은 이벤트의 종류를 나타내는 문자열이다.

- 마우스 이벤트
- 키보드 이벤트
- 포커스 이벤트
- 폼 이벤트
- DOM 뮤테이션 이벤트
- 뷰이벤트
- 리소스 이벤트



## 이벤트 핸들러 등록

이벤트 핸들러는 이벤트가 발생했을 때 브라우저에 호출을 위임한 함수이다.
= 이벤트가 발생하면 브라우저에 의해 호출될 함수가 **이벤트 핸들러이다.**

이벤트가 발생했을 때 브라우저에게 이벤트 핸들러의 호출을 위임하는 것을 이벤트 핸들러 등록이라 한다.

이벤트 핸들러를 등록하는 방법은 3가지이다.



### 이벤트 핸들러 어트리뷰트 방식

HTML 요소의 어트리뷰트에는 이벤트에 대응하는 이벤트 핸들러 어트리뷰트가 있다. 

HTML 요소의 이벤트 핸들러 어트리뷰트 값으로 함수 호출문 등의 문을 할당하면 이벤트 핸들러가 등록된다.

```html
<!DOCTYPE html>
<html>
<body>
  <button onclick="sayHi('Lee')">Click me!</button>
  <script>
    function sayHi(name) {
      console.log(`Hi! ${name}.`);
    }
  </script>
</body>
</html>
```

이벤트 핸들러 어트리뷰트 값으로 함수 참조가 아닌 **함수 호출문** 등의 문을 할당한다.

이벤트 핸들러 등록이란 함수 호출을 브라우저에게 위임하는 것
이벤트 핸들러를 등록할 때, 콜백 함수와 마찬가지로 함수 참조를 등록해야 브라우저가 등록된 함수 즉 이벤트 핸들러를 호출할 수 있다.

함수를 반환하는 고차 함수 호출문을 이벤트 핸들러로 등록한다면 문제가 없겠지만 함수가 아닌 값을 반환하는 함수 호출문을 이벤트 핸들러로 등록하면 브라우저가 이벤트 핸들러를 호출할 수 없다.

> 그럼 위의 예제는??
>
> 이때 이벤트 핸들러 어트리뷰트 값은 사실 이벤트 핸들러의 함수 몸체를 의미한다.
>
> 아래와같은 함수를 생성하여 이벤트 핸들러 프로퍼티에 할당한다.
>
> ```js
> function onclick(event) {
>   sayHi('Lee');
> }
> ```

이처럼 동작하는 이유는 이벤트 핸들러 어트리뷰트 값으로 함수 참조를 할당하면  이벤트 핸들러에 인수를 전달하기 곤란하기 때문이다.

결국, 이벤트 핸들러 어트리뷰트 값으로 할당한 문자열은 암묵적으로 정의되는 이벤트 핸들러의 함수 몸체이다.

(이 방식은 알아두되, 사용은 하지말자)



### 이벤트 핸들러 프로퍼티 방식

- window 객체와 Document, HTMLElement 타입의 DOM 노드 객체는 이벤트에 대응하는 이벤트 핸들러 프로퍼티를 가지고 있다.

- 이벤트 핸들러 어트리뷰트와 마찬가지로 on접두사와 이벤트 종류를 나타내는 이벤트 타입으로 이루어져있다.

- 이벤트 핸들러 프로퍼티에 함수를 바인딩하면 이벤트 핸들러가 등록된다.

```html
<!DOCTYPE html>
<html>
<body>
  <button>Click me!</button>
  <script>
    const $button = document.querySelector('button');

    // 이벤트 핸들러 프로퍼티에 이벤트 핸들러를 바인딩
    $button.onclick = function () {
      console.log('button click');
    };
  </script>
</body>
</html>
```



이벤트 핸들러를 등록하기 위해서는

- 이벤트를 발생시킬 객체 지정 ( = event target)
- 이벤트의 종류를 나타내는 문자열인 이벤트 타입 지정
- 이벤트 핸들러 지정



이벤트 핸들러는 대부분 이벤트를 발생시킬 이벤트 타깃에 바인딩한다.
하지만 반드시 이벤트 핸들러를 이벤트 타깃에 바인딩 해야하는것은 아니다.

**이벤트 핸들러 프로퍼티 방식**

- HTML과 자바스크립트가 뒤섞이는 문제를 해결할 수 있다.
- 이벤트 핸들러 프로퍼티에 하나의 이벤트 핸들러 만을 바인딩 할 수 있다.

```html
<html>
<body>
  <button>Click me!</button>
  <script>
    const $button = document.querySelector('button');

    // 이벤트 핸들러 프로퍼티 방식은 하나의 이벤트에 하나의 이벤트 핸들러만을 바인딩할 수 있다
    // 첫번째 바인딩된 이벤트 핸들러는 두번째 바인딩된 이벤트 핸들러에 의해 재할당되어 실행되지 않는다.
    $button.onclick = function () {
      console.log('Button clicked 1');
    };

    // 두번째 바인딩된 이벤트 핸들러
    $button.onclick = function () {
      console.log('Button clicked 2');
    };
  </script>
</body>
</html>
```



### addEventListener 메소드 방식

- DOM Level 2에서 도입됨
- EventTarget.prototype.addEventListener 메소드를 사용하여 이벤트 핸들러를 등록할 수 있다.
- 첫번째 매개변수 : 이벤트 타입 (on 접두사 붙이지 않는다.)
- 두번째 매개변수 : 이벤트 핸들러
- 마지막 매개변수 : 이벤트를 캐치할 이벤트 전파 단계 
  생략 및 false : 버블링단계에서 이벤트 캐치
  true : 캡처링 단계에서 이벤트 캐치

```html
<!DOCTYPE html>
<html>
<body>
  <button>Click me!</button>
  <script>
    const $button = document.querySelector('button');

    // 이벤트 핸들러 프로퍼티 방식
    /*
    $button.onclick = function () {
      console.log('button click');
    };
		*/
    
    // addEventListener 메소드 방식
    $button.addEventListener('click', function () {
      console.log('button click');
    });
  </script>
</body>
</html>
```

**이벤트 핸들러 프로퍼티 방식 :**
이벤트 핸들러 프로퍼티에 이벤트 핸들러를 바인딩

**addEventListener 메소드 :** 
이벤트 핸들러를 인수로 전달

동일한 요소에서 발생한 동일한 이벤트에 대해 이벤트 핸들러 프로퍼티 방식은 하나 이사으이 이벤트 핸들러를 바인딩할 수 없지만 **addEventListener 메소드는 하나 이상의 이벤트 핸들러를 등록할 수 있다.**

이때 이벤트 핸들러는 등록된 순서대로 호출된다.

```html
<!DOCTYPE html>
<html>
<body>
  <button>Click me!</button>
  <script>
    const $button = document.querySelector('button');

    // addEventListener 메소드는 동일한 요소에서 발생한 동일한 이벤트에 대해
    // 하나 이상의 이벤트 핸들러를 등록할 수 있다.
    $button.addEventListener('click', function () {
      console.log('[1]button click');
    });

    $button.addEventListener('click', function () {
      console.log('[2]button click');
    });
  </script>
</body>
</html>
```



addEventListener 메소드를 통해 **참조가 동일한 이벤트 핸들러를 중복 등록하면** 하나의 이벤트 핸들러만 등록된다.



## 이벤트 핸들러 제거

addEventListener 메소드로 등록한 이벤트 핸들러를 제거하려면 EventTarget.prototype.removeEventListener 메소드를 사용한다.

```html
<!DOCTYPE html>
<html>
<body>
  <button>Click me!</button>
  <script>
    const $button = document.querySelector('button');

    const handleClick = () => console.log('button click');

    // 이벤트 핸들러 등록
    $button.addEventListener('click', handleClick);
    // 이벤트 핸들러 제거
    // addEventListener 메소드에 전달한 인수와
    // removeEventListener 메소드에 전달한 인수가 일치하지 않는다.
    $button.removeEventListener('click', handleClick, true); // 실패
    $button.removeEventListener('click', handleClick); // 성공
  </script>
</body>
</html>
```

이벤트 핸들러를 제거하려면 이벤트 핸들러의 참조를 변수나 자료 구조에 저장하고 있어야 한다.

단, 이벤트 핸들러 내부에서 removeEventListener 메소드를 호출하여 자신을 제거하는 방법은 가능하다. (이때 이벤트 핸들러는 단 한번만 호출된다.)

무명 함수를 이벤트 핸들러로 등록 시, 함수 자신을 가리키는 
arguments.callee를 사용할 수 도 있다.

> arguments.callee는 코드 최적화를 방해하므로 strict mode에서 사용이 금지된다. 따라서 가급적 이벤트 핸들러의 참조를 변수나 자료 구조에 저장하여 제거하는 편이 좋다.



이벤트 핸들러 프로퍼티 방식으로 등록한 이벤트 핸들러는 
removeEventListener 메소드로 제거할 수 없다.

> 제거하려면 이벤트 핸들러 프로퍼티에 null을 할당한다.



## 이벤트 객체

이벤트가 발생하면 이벤트에 관련한 다양한 정보를 담고 있는 이벤트 객체가 동적으로 생성된다.

생성된 이벤트 객체는 이벤트 핸들러의 첫번째 매개 변수에게 전달된다.

```html
<!DOCTYPE html>
<html>
<body>
  <p>클릭하세요. 클릭한 곳의 좌표가 표시됩니다.</p>
  <em class="message"></em>
  <script>
		const $msg = document.querySelector('.message');
    
    // 클릭 이벤트에 의해 생성된 이벤트 객체는 이벤트 핸들러의 첫번째 매개 변수에게 전달된다.
    function showCoords(e) {
      $msg.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`;
    }
    window.onclick = showCoords;
  </script>
</body>
</html>
```

클릭 이벤트에 의해 생성된 이벤트 객체는 이베트 핸들러의 첫번째 매개변수 e에 암묵적으로 전달된다. 이는 브라우저가 이벤트 핸들러를 호출할 때 이벤트 객체를 인수로 전달하기 때문이다.

이벤트 객체를 전달받으려면 이벤트 핸들러를 정의할 때 이벤트 객체를 전달받을 **매개변수를 명시적으로 선언하여야 한다.**



### 이벤트 객체의 상속 구조

Event, UIEvent, MouseEvent : 생성자함수 = 이벤트 객체를 생성할 수 있다.

이벤트가 발생하면 생성되는 이벤트 객체도 생성자 함수에 의해 생성되며 생성자 함수와 더불어 생성되는 프로토타입으로 구성된 프로토타입 체인의 일원이 된다.

이벤트 객체의 프로퍼티는 발생한 이벤트의 타입에 따라 달라진다.



### 이벤트 객체의 공통 프로퍼티

Event 인터페이스, 즉 Event.prototype에 정의되어 있는 이벤트 관련 프로퍼티는 UIEvent, CustomEvent, MouseEvent 등 모든 파생 이벤트 객체에 상속된다. 

일반적으로 이벤트 객체의 target 프로퍼티와 currentTarget 프로퍼티는 동일한 DOM 요소를 가리키지만 나중에 살펴볼 이벤트 위임에서는 이벤트 객체의 target 프로퍼티와 currentTarget 프로퍼티가 다른 DOM 요소를 가리킬 수 있다.



### 마우스 정보 취득

click, dbclick, mousedown, mouseup, mousemove, mousenter, mouseleave 이벤트가 발생하면 생성되는 [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) 타입의 이벤트 객체는 아래와 같은 고유의 프로퍼티를 갖는다.



### 키보드 정보 취득

keydown, keyup, keypress 이벤트가 발생하면 생성되는 [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/keyboardEvent) 타입의 이벤트 객체는 altKey, ctrlKey, shiftKey, metaKey, key, keyCode와 같은 고유의 프로퍼티를 갖는다.



## 이벤트 전파

DOM 트리상에 존재하는 DOM 요소 노드에서 발생한 이벤트는 DOM 트리를 통해 전파된다. 이를 이벤트 전파라고 한다.

- 캡처링 단계(capturing phase) :

  이벤트가 상위 요소에서 하위 요소 방향으로 전파

- 타깃 단계(target phase) : 

  이벤트가 이벤트 타깃에 도달

- 버블링 단계(bubbling phase) :

  이벤트가 하위 요소에서 상위 요소 방향으로 전파

이벤트 핸들러 어트리뷰트 / 프로퍼티 방식으로 등록한 이벤트 핸들러는 타깃 단계와 버블링 단계의 이벤트만을 캐치할 수 있다.

addEventListener 메소드 방식으로 등록한 이벤트 핸들러는
버블링 또는 캡처링 단계의 이벤트를 선별적으로 캐치할 수 있다.

> 캡처링 단계 캐치 => 3번째 인수로 true
>
> 버블링 단계 캐치 => 3번째 인수로 false / 생략



## 이벤트 위임

다수의 하위 요소에 각각 이벤트 핸들러를 등록하는 대신 하나의 상위요소에 이벤트 핸들러를 등록하는 방법을 말한다.

하위 요소에서 발생하는 이벤트는 버블링 단계에서 부모 요소 방향으로 전파된다. 따라서 상위 요소는 하위 요소에서 발생한 이벤트를 캐치할 수 있다.

이벤트 위임을 통해 상위 DOM요소에 이벤트 핸들러를 등록하면

- 여러 개의 하위 요소에 이벤트 핸들러를 등록할 필요가 없다.
- 동적으로 하위 요소를 추가하더라도 일일히 추가된 요소에 이벤트 핸들러를 등록할 필요가 없다.

포커스 이벤트 focus, blur는 이벤트가 버블링되지 않는다. 따라서 하위 요소에서 focus, blur이벤트를 발생시키는 경우, 이벤트 위임을 사용할 수 없다.



## 기본 동작의 변경

### 기본 동작 중단

DOM 요소의 저마다의 기본 동작이 있다. 예를 들어, a 요소를 클릭하면 href 어트리뷰트에 지정된 링크로 이동하고, checkbox 또는 radio 요소를 클릭하면 체크 또는 해제된다.

이벤트 객체의 preventDefault 메소드는 이러한 DOM 요소의 기본 동작을 중단시킨다.



### 이벤트 전파 방지

이벤트 객체의 stopPropagaion 메소드는 이벤트 전파를 중지시킨다.



## 이벤트 핸들러 내부의 this

### 이벤트 핸들러 어트리뷰트 방식

이벤트 핸들러 내부의 this는 전역 객체 window를 가리킨다.



### 이벤트 핸들러 프로퍼티 방식과 addEventListener 메소드 방식

이벤트 핸들러 프로퍼티 방식과 addEventListener 메소드 방식 모두 이벤트 핸들러 내부의 this는 이벤트를 바인딩한 DOM 요소를 가리킨다. 즉, 이벤트 객체의 currentTarget 프로퍼티와 같다.



???
클래스에서 이벤트 핸들러를 바인딩하는 경우, this에 주의해야 한다. 아래 예제를 살펴보자. 아래 예제는 **이벤트 핸들러 프로퍼티 방식을 사용하고 있으나 addEventListener 메소드 방식을 사용하는 경우와 동일하다.**

```html
<!DOCTYPE html>
<html>
<body>
  <button class="btn">0</button>
  <script>
    class App {
      constructor() {
        this.$button = document.querySelector('.btn');
        this.count = 0;

        // increase 메소드를 이벤트 핸들러로 등록
        // 이벤트 핸들러 increase 내부의 this는 DOM 요소(this.$button)를 가리킨다.
        this.$button.onclick = this.increase;
        // -> TypeError: Cannot set property 'textContent' of undefined
      }

      increase() {
        this.$button.textContent = ++this.count;
      }
    }

    new App();
  </script>
</body>
</html>
```



```html
<!DOCTYPE html>
<html>
<body>
  <button class="btn">0</button>
  <script>
    class App {
      constructor() {
        this.$button = document.querySelector('.btn');
        this.count = 0;

        // increase 메소드를 이벤트 핸들러로 등록
        // 이벤트 핸들러 increase 내부의 this는 DOM 요소(this.$button)를 가리킨다.
        // this.$button.onclick = this.increase;
        // -> TypeError: Cannot set property 'textContent' of undefined

        // increase 메소드 내부의 this가 인스턴스를 가리키도록 한다.
        this.$button.onclick = this.increase.bind(this);
      }

      increase() {
        this.$button.textContent = ++this.count;
        console.log(this);
        // App {$button: button.btn, count: 1}
        // App {$button: button.btn, count: 2}
      }
    }

    new App();
  </script>
</body>
</html>
```



## 이벤트 핸들러에 인수 전달

함수에게 인수를 전달하려면 함수를 호출할 때 전달해야 한다.

이벤트 핸들러 프로퍼티 방식과 addEventListener 메소드 방식에서는 이벤트 내부에서 함수를 호출하면서 인수를 전달할 수 있다.

또는 이벤트 핸들러를 반환하는 함수를 호출하면서 인수를 전달할 수도 있다.



## 커스텀 이벤트

### 커스텀 이벤트 생성

이벤트가 발생하면 생성되는 이벤트 객체는 이벤트의 종류에 따라 이벤트 타입이 결정되지만 Event, UIEvent, MouseEvent와 같은 생성자 함수로 이벤트 객체를 생성하는 경우, 이벤트 타입을 명시적으로 지정할 수 있다.

**이를 커스텀 이벤트라 한다.**

```js
// KeyboardEvent 생성자 함수로 keyup 이벤트 타입의 커스텀 이벤트 객체를 생성
const keyboardEvent = new KeyboardEvent('keyup');
console.log(keyboardEvent.type); // keyup
```

생성된 커스텀 이벤트 객체는 버블링되지 않으며 취소할 수도 없다.



또는 임의 문자열을 사용하여 기존의 이벤트 타입이 아닌 새로운 이벤트 타입을 지정할 수도 있다. 이 경우, 일반적으로 CustomEvent 이벤트 생성자 함수를 사용한다. 

bubbles또는 cancelable 프로퍼티뿐만 아니라 이벤트 생성자 함수에 따라 생성된 이벤트의 특성에 맞는 프로퍼티를 설정할 수 있다. 



### 커스텀 이벤트 디스패치

생성된 커스텀 이벤트는 dispatchEvent 메소드로 디스패치(이벤트를 발생시키는 행위)할 수 있다.

???
일반적으로 이벤트는 비동기적으로 발생하지만 dispatchEvent 메소드는 커스텀 이벤트를 동기적으로 발생시킨다. 따라서 dispatchEvent 메소드로 이벤트를 디스패치하기 이전에 커스텀 이벤트를 처리할 이벤트 핸들러를 등록해야 한다.

기존의 이벤트 타입이 아닌 새로운 이벤트 타입을 지정하여 커스텀 이벤트 객체를 생성한 경우, 이벤트 핸들러 등록은 반드시 addEventListener 방식을 사용해야 한다. 새로운 이벤트 타입의 커스텀 이벤트에 대해 이벤트 핸들러 어트리뷰트/프로퍼티 방식을 사용할 수 없는 이유는 on + 이벤트 타입으로 이루어진 이벤트 핸들러 어트리뷰트/프로퍼티가 존재하지 않기 때문이다. 예를 들어, foo라는 이벤트 타입의 커스텀 이벤트를 생성한 경우, ‘onfoo’라는 핸들러 어트리뷰트/프로퍼티가 존재하지 않기 때문에 이벤트 핸들러를 등록할 수 없다.