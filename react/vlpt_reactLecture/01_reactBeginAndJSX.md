웹 어플리케이션에 돔을 직접 조작하게 될 경우 유지보수가 어려워진다.

- 처리해야할 이벤트와 상태가 다양해지기 때문에
- 관리해야할 상태도 다양해짐
- 돔도 다양해짐
- 서로가 서로를 참조하게 되는 복잡함
- 업데이트하는 규칙도 많아짐

그래서 Ember, Backborn, Angular 가 나옴 

자바스크립트 특정값이 바뀌면 특정 돔의 속성도 바뀌게 연결 하여 업데이트하는 작업을 간소화 해주는 방식

react는 다 날려버리고 새로만들어서 보여주는 발상에서 시도되었다.

Virtual DOM :
가상의 돔 메모리에 가상으로 존재하는 돔, 자바스크립트 객체이기 때문에
속도가 훨씬 브라우저보다 빠르다



**JSX** :

- 리엑트 컴포넌트의 생김새를  정의할 때 사용하는 문법이다.

- 자바스크립트 (바벨로 변환 JSX => JS)

  REACT 안에있는 함수로 컴포넌트를 만들어야하는데 만들때마다 직접 호출하는게 어려우니 JSX문법을 사용해서 XML형태로 선언하면 JS형태로 변환하는 작업을 바벨이 한다.

- 태그는 무조건 닫혀있어야 한다.
  태그가 열려있으면 무조건 닫아줘야한다. 
  `<input>` / `<br>`은 self-closing 태그로 사용한다.
  => `<input /> <br />`

- 두개 이상의 태그는 꼭 하나의 태그로 감싸주어야 한다.

  1. `<div>` 로 감싸준다.
  2. Fragments를 사용한다 `<></>` (비어있는 태그)



- JSX내부에서 자바스크립트 값 사용하기

  중괄호 안에 변수명으로 넣기

  ```jsx
  import React from 'react';
  import Hello from './Hello';
  
  function App() {
    const name = 'react';
    return (
      <>
        <Hello />
        <div>{name}</div>
      </>
    );
  }
  
  export default App;
  
  ```

  

- JSX에서 클래스네임과 스타일설정

  ```jsx
  import React from 'react';
  import Hello from './Hello';
  import './App.css';
  
  function App() {
    const name = 'react';
    const style = {
      backgroundColor: 'black',
      color: 'aqua',
      fontSize: 24,
      padding: '1rem'
    };
    return (
      <>
        {/* 주석은 중괄호로 감싸주고 슬래쉬로 */}
        <Hello 
          // 이렇게 해도됨
        />
        <div 
          // 주석
        style={style}>{name}</div>
        <div className="gray-box"></div>
      </>
    );
  }
  
  export default App;
  ```

  클래스명 : className으로 넣어줘야 한다.

  스타일 : 객체형태로

  주석 : 중괄호로 감싸서  `{/* */}` 형태
  		  태그가 열리는 부분에서 싱글라인태그도 작성가능하다.

