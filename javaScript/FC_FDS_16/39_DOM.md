# DOM

브라우저의 렌더링 엔진은 HTML 문서를 파싱하여 DOM을 생성한다.
DOM은 HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API
즉, 프로퍼티와 메소드를 제공하는 트리자료구조이다.

= DOM은 문서의 구조화된 표현을 제공하고, 프로그래밍 언어가 DOM구조에 접근할 수 있는 방법 제공(문서구조 / 스타일 / 내용 변경 가능)
= HTML을 효율적으로 동적으로 변경하기 위해, HTML 문서를 JS



## 노드

### HTML 요소와 노드객체

HTML 요소 :

- HTML 문서를 구성하는 개별적인 요소 (= HTML문서는 HTML 요소들의 집합으로 이루어짐)
- 렌더링엔진에 의해 파싱되어 DOM을 구성하는 **요소 노드 객체**로 변환된다.
- 요소의 어트리뷰트 => 어트리뷰트 노드
- HTML 요소의 텍스트 컨텐츠 => 텍스트 노드
- HTML 요소의 컨텐츠 영역(시작 태그와 종료 태그 사이)에는 텍스트 뿐만 아니라 다른 HTML 요소도 포함할 수 있다. ( = 중첩 관계를 갖는다. / 부자관계가 형성된다.)
- HTML 문서의 구성 요소인 HTML 요소를 객체화한 모든 노드 객체들을 **트리 자료 구조**로 구성한다.
- 노드 객체들로 구성된 트리 자료 구조를 DOM이라고 한다. 
  노드 객체의 트리로 구조화되어 있기 때문에 DOM을 **DOM 트리**라고 부르기도 한다.



### 노드 객체의 타입

노드 객체는 총 12개의 종류(노드 타입)가 있다. 
이 중에서 중요한 노드 타입은 아래와 같이 4가지이다.

- 문서 노드

  - DOM 트리의 최상위에 존재하는 루트 노드로서 document 객체를 가리킨다.
  - document 객체는 브라우저가 렌더링한 HTML 문서 전체를 가리키는 객체
  - 전역 객체 window의 document 프로퍼티에 바인딩되어 있다.
  - window.document 또는 document로 참조할 수 있다.
  - 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해야 한다.(진입점 역할)

- 요소 노드

  - HTML 요소를 가리키는 객체이다.
  - HTML 요소 간의 중첩에 의해 부자 관계를 가지며 이 부자 관계를 통해 정보를 구조화한다.
    ( = 문서의 구조를 표현)

- 어트리뷰트 노드

  - HTML 요소의 어트리뷰트를 가리키는 객체이다. 
  - 어트리뷰트가 지정된 HTML 요소의 요소 노드와 형제(Sibling) 관계를 갖는다. 
  - 요소 노드에 접근하면 어트리뷰트 노드에 접근하여 어트리뷰트를 참조하거나 변경할 수 있다.

- 텍스트 노드

  - HTML 요소의 텍스트를 가리키는 객체이다.

  - 텍스트 노드는 요소 노드의 자식 노드

  - 자신의 자식 노드를 가질 수 없는 리프 노드(leaf node)이다.

    ( = 텍스트 노드는 DOM 트리의 최종단이다.)



### 노드 객체의 상속 구조

모든 노드 객체는 Object, EventTarget, Node 인터페이스를 상속받는다.
문서 노드는 Document, HTMLDocument 인터페이스를 상속받고 어트리뷰트 노드는 Attr, 텍스트 노드는 CharacterData 인터페이스를 각각 상속받는다.

요소 노드는 Element 인터페이스를 상속받는다. 또한 요소 노드는 추가적으로 HTMLElement와 태그의 종류 별로 세분화된 HTMLHeadElement, HTMLBodyElement 등의 인터페이스를 상속받는다.

**[ 프로토타입 체인 관점 ]**

```html
<!DOCTYPE html>
<html>
<body>
  <input type="text">
  <script>
    // input 요소 노드 객체를 선택
    const $input = document.querySelector('input');

    // input 요소 노드 객체의 프로토타입 체인
    console.log(
      Object.getPrototypeOf($input) === HTMLInputElement.prototype,
      Object.getPrototypeOf(HTMLInputElement.prototype) === HTMLElement.prototype,
      Object.getPrototypeOf(HTMLElement.prototype) === Element.prototype,
      Object.getPrototypeOf(Element.prototype) === Node.prototype,
      Object.getPrototypeOf(Node.prototype) === EventTarget.prototype,
      Object.getPrototypeOf(EventTarget.prototype) === Object.prototype
    ); // 모두 true
  </script>
</body>
</html>
```



배열이 객체인 동시에 배열인 것처럼 input 요소 노드 객체도 아래와 같이 다양한 특성을 갖는 객체이며 이러한 특성을 나타내는 기능을 상속 관계를 통해 구분하여 제공한다.

| input 요소 노드 객체의 특성                                  | 프로토타입을 제공하는 객체 |
| :----------------------------------------------------------- | :------------------------- |
| 객체                                                         | Object                     |
| 이벤트를 발생시키는 객체                                     | EventTarget                |
| 트리 자료 구조의 노드 객체                                   | Node                       |
| 브라우저가 렌더링할 수 있는 웹 문서의 요소(HTML, XML, SVG)를 표현하는 객체 | Element                    |
| 웹 문서의 요소 중에서 HTML 요소를 표현하는 객체              | HTMLElement                |
| HTML 요소 중에서 input 요소를 표현하는 객체                  | HTMLInputElement           |

노드 객체의 상속 구조 확인법

- 개발자도구의 Elements 패널 우측의 Properties 패널에서 확인할 수 있다.
- Object.prototype.toString 메소드를 호출하여 자신의 프로토타입을 확인할 수 있다.

```html
<!DOCTYPE html>
<html>
<body>
  <input type="text">
  <script>
    // input 요소 노드 객체를 선택
    const $input = document.querySelector('input');

    // input 요소 노드 객체의 프로토타입 확인
    console.log($input.toString()); // [object HTMLInputElement]
    // well-known symbol인 Symbol.toStringTag은 toString 메소드이 반환하는
    // 객체 설명 디폴트 문자열의 작성에 사용되는 문자열이다.
    console.log($input[Symbol.toStringTag]); // HTMLInputElement
  </script>
</body>
</html>
```



노드 객체는 공통적인 기능도 있지만, 고유한 기능도 갖는다.

노드 객체는 공통된 기능일수록 프로토타입 체인의 상위에, 개별적인 고유 기능일수록 프로토타입 체인의 하위에 프로토타입 체인을 구축하여 노드 객체에 필요한 기능, 즉 프로퍼티와 메소드를 제공하는 상속 구조를 갖는다.

**공통적인기능**

- 이벤트를 발생시킨다.
- 트리 탐색 기능, 노드 정보 제공 기능이 필요하다.

**고유한 기능**

- ex) input 요소 노드 객체는 value 프로퍼티가 필요하지만 div 요소 노드 객체는 value 프로퍼티가 필요하지 않다. 따라서 필요한 기능을 제공하는 인터페이스(HTMLInputElement, HTMLDivElement 등)가 HTML 요소의 종류에 따라 각각 다르다.



 **DOM은 HTML 문서의 계층적 구조와 정보를 표현하는 것은 물론 노드 객체의 종류에 따라 상속을 통해 자신에 필요한 기능, 즉 프로퍼티와 메소드의 집합인 DOM API(Application Programming Interface)를 제공한다. DOM API를 통해 HTML의 구조나 내용 또는 스타일 등을 동적으로 조작할 수 있다.**



## 요소 노드 취득

HTML의 구조나 내용 또는 스타일 등을 동적으로 조작하려면 먼저 요소 노드를 취득하여야 한다. 텍스트 노드는 요소 노드의 자식 노드이고 어트리뷰트 노드는 요소 노드의 형제 노드이기 때문에 텍스트 노드나 어트리뷰트 노드를 조작하고자 할 때도 마찬가지다.



### id로 요소 노드 취득

`Document.prototype.getElementById` : 
인수로 전달한 id 어트리뷰트 값(id 값)을 갖는 하나의 요소 노드를 탐색하여 반환한다.



### 태그 이름으로 요소 노드 취득

`Document.prototype/Element.prototype.getElementsByTagName` :
인수로 전달한 태그 이름을 갖는 모든 요소 노드 들을 탐색하여 반환한다. 메소드 이름에 포함된 Elements가 복수형인 것에서 알 수 있듯이 getElementsByTagName 메소드는 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 HTMLCollection 객체를 반환한다.

getElementsByTagName 메소드가 반환하는 DOM 컬렉션 객체인 HTMLCollection 객체는 유사 배열 객체이자 이터러블이다.



### class로 요소 노드 취득

`Document.prototype/Element.prototype.getElementsByClassName` :
인수로 전달한 class 어트리뷰트 값(class 값)을 갖는 모든 요소 노드 들을 탐색하여 반환한다.

getElementsByTagName 메소드와 마찬가지로 getElementsByClassName 메소드는 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 HTMLCollection 객체를 반환한다.



### CSS 선택자로 요소 노드 취득

`Document.prototype/Element.prototype.querySelector` :
인수로 전달한 CSS 선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환한다. 만약 인수로 전달한 CSS 선택자를 만족시키는 요소 노드가 여러 개인 경우, 첫번째 요소 노드만 반환한다. 인수로 전달된 CSS 선택자를 만족시키는 요소가 존재하지 않는 경우, null을 반환한다.

querySelectorAll 메소드는 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 NodeList 객체를 반환한다. 

CSS 선택자 문법을 사용하는 querySelector, querySelectorAll 메소드는 getElementById, getElementsBy*** 메소드보다 다소 느린 것으로 알려져 있다. 하지만 CSS 선택자 문법으로 보다 구체적인 조건으로 요소 노드를 취득할 수 있고 일관된 방식으로 요소 노드를 취득할 수 있다는 장점이 있다. 따라서 id가 있는 요소를 취득하는 경우에는 getElementById 메소드를 사용하고 그 외의 경우에는 querySelector, querySelectorAll 메소드를 사용하는 것을 추천한다.



### 탐색 가능 여부 확인

[Element.prototype.matches 메소드](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)는 인수로 전달된 선택자에 의해 특정 노드를 탐색 가능한지 확인한다.



### HTMLCollection과 NodeList

HTMLCollection과 NodeList는 DOM API가 여러 개의 결과값을 반환하기 위한 DOM 컬렉션 객체이다. HTMLCollection과 NodeList는 모두 유사 배열 객체이자 이터러블이다. 따라서 for…of 문으로 순회할 수 있으며 [스프레드 문법](https://poiemaweb.com/fastcampus/spread-syntax)을 사용하여 간단히 배열로 변환할 수 있다.

HTMLCollection과 NodeList의 중요한 특징은 노드 객체의 상태 변화를 실시간으로 반영하는 살아 있는(live) 객체라는 것이다. HTMLCollection은 언제나 live 객체로 동작한다. 단, NodeList는 대부분의 경우 노드 객체의 상태 변화를 실시간으로 반영하지 않고 과거의 정적 상태를 유지하는 non-live 객체로 동작하지만 경우에 따라 live 객체로 동작할 때가 있다.



#### HTMLCollection

getElementsByTagName, getElementsByClassName 메소드가 반환하는 HTMLCollection 객체는 노드 객체의 상태 변화를 실시간으로 반영하는 살아 있는(live) DOM 컬렉션 객체이다. 따라서 HTMLCollection 객체를 살아 있는(live) 객체라고 부르기도 한다.

```html
<!DOCTYPE html>
<head>
  <style>
    .red { color: red; }
    .blue { color: blue; }
  </style>
</head>
<html>
  <body>
    <ul id="fruits">
      <li class="red">Apple</li>
      <li class="red">Banana</li>
      <li class="red">Orange</li>
    </ul>
    <script>
      // class 값이 'red'인 요소 노드를 모두 탐색하여 반환한다.
      // 탐색된 요소 노드 들은 HTMLCollection 객체에 담겨 반환된다.
      const $elems = document.getElementsByClassName('red');
      // HTMLCollection 객체에는 3개의 요소가 담겨 있다.
      console.log($elems); // HTMLCollection(3) [li.red, li.red, li.red]

      // HTMLCollection 객체의 모든 요소의 class 값을 'blue'로 변경한다.
      for (let i = 0; i < $elems.length; i++) {
        $elems[i].className = 'blue';
      }

      // HTMLCollection 객체의 요소가 3개에서 1개로 변경되었다.
      console.log($elems); // HTMLCollection(1) [li.red]
    </script>
  </body>
</html>
```



#### NodeList

querySelectorAll 메소드는 DOM 컬렉션 객체인 NodeList 객체를 반환한다. 이때 NodeList 객체는 실시간으로 노드 객체의 상태 변경을 반영하지 않는(non-live) 객체이다.

```javascript
// querySelectorAll은 DOM 컬렉션 객체인 NodeList를 반환한다.
const $elems = document.querySelectorAll('.red');

// querySelectorAll가 반환하는 노드 객체는
// NodeList.prototype.forEach 메소드를 상속받아 사용할 수 있다.
$elems.forEach(elem => elem.className = 'blue');
```

**노드 객체의 상태 변경과 상관없이 안전하게 DOM 컬렉션을 사용하려면 HTMLCollection이나 NodeList 객체를 배열로 변환하여 사용하는 것을 추천한다.**

HTMLCollection과 NodeList 객체가 메소드를 제공하기는 하지만 배열의 고차 함수 만큼은 다양한 기능을 제공하지는 않는다. 배열로 변환하면 배열의 유용한 고차 함수(forEach, map, filter, reduce 등)를 사용할 수 있다는 장점도 있다.

HTMLCollection과 NodeList는 모두 유사 배열 객체이자 이터러블이다. 따라서 [스프레드 문법](https://poiemaweb.com/fastcampus/spread-syntax)을 사용하여 간단히 배열로 변환할 수 있다.



## 노드 탐색

요소 노드 객체를 취득한 다음, 취득한 요소 노드를 기점으로 DOM 트리의 노드를 옮겨 다니며 부모, 형제, 자식 등을 탐색(traversing, node walking)해야 할 때가 있다.

```html
<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="banana">Banana</li>
  <li class="orange">Orange</li>
</ul>
```

ul#fruits 요소는 3개의 자식 요소를 갖는다. 이때 먼저 ul#fruits 요소 노드를 취득한 다음, 자식 노드를 모두 탐색하거나 첫번째 자식 노드 또는 마지막 자식 노드 만을 탐색할 수 있다.

li.banana 요소는 2개의 형제 요소와 부모 요소를 갖는다. 이때 먼저 li.banana 요소 노드를 취득한 다음, 형제 노드를 탐색하거나 부모 노드를 탐색할 수 있다.



### 공백 텍스트 노드

HTML 요소 사이의 개행이나 공백은 텍스트 노드를 생성한다.
따라서 노드 탐색 시에는 개행이나 공백 문자가 생성한 텍스트 노드에 주의해아 한다.