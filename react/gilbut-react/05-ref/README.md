# ref

- 컴포넌트 내부에서 DOM을 직접 접근할 때
  포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
  애니메이션을 직접적으로 실행시킬 때.
  서드 파티 DOM 라이브러리를 React와 같이 사용할 때.
- ref를 통해 데이터 교류 지양

## 사용방법
- React.createRef() : React 16.3
  1. React.createRef()를 통해 생성
  2. ref Attr를 통해 React element에 부착
- Callback ref
  1. ref를 달고자하는 요소에 ref라는 콜백함수를 props로 전달
  ```jsx
  <div ref={() => {}}></div>
  ```
  2. 이 콜백함수는 ref 값을 파라미터로 전달 받는다.
  ```jsx
  <div ref={(ref) => {}}></div>
  ```
  3. 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정
  ```jsx
  <div ref={(ref) => {this.rate = { top: ref.top, bottom: ref.bottom }}}></div>
  ```
  4. 그 멤버 변수는 해당 ref를 가리킨다.
  ```jsx
  class a extends Component { 
    scrollbox = ref;
    render() {

    }
  }
  ```
  !! 자기 자신을 ref로 설정해서 멤버 변수로 설정하는 느낌
  
1. id, class X
- 컴포넌트의 특성상 재활용 및 컴포넌트의 변동으로 인해
해당 컴포넌트의 특정 노드를 잡아낼 수 없다.

2. code / dom level
(ref) => {ref}
createRef()

3. current

(ref) => { this.node = ref (document element) }
{current: document element} = createRef()

call by value / reference -> 값이냐 주소값이냐


## Reference
https://ko.reactjs.org/docs/refs-and-the-dom.html

