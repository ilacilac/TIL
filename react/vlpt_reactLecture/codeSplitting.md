## 코드스플리팅

파일을 분리하는 작업

애플리케이션의 규모가 커질 때, 필요하지 않은 컴포넌트 정보도 불러오면 파일크기가 커져
로딩이 오래걸릴 수 있다. 

이러한 문제점을 해결해 줄 수 있는 방법이 바로 코드 비동기 로딩이다.
이 또한 코드 스플리팅 방법 중 하나이다.
코드 비동기 로딩을 통해 자바스크립트 함수, 객체 혹은 컴포넌트를 처음에는 불러오지 않고
필요한 시점에서 불러와서 사용할 수있다.

### 1. 자바스크립트 함수 비동기 로딩

```jsx
import React from 'react';
import logo from './logo.svg';
import './App.css';
// import notify from './notify';

function App() {
  // const onClick = () => {
  //   notify();
  // }

  // import() 함수 형태로 메서드 안에서 사용하면, 파일을 따로 분리시켜서 저장한다.
  // 그리고 실제함수가 필요한 시점에 파일을 불러와 함수를 사용할 수 있다.
  const onClick = () => {
    // 프로미스 반환
    import('./notify').then(result => result.default());
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>
          hello react!
        </p>
        
      </header>
    </div>
  );
}

export default App;
```

### 2. React.lazy와 Suspense를 통한 컴포넌트 비동기 렌더링 
(서버사이드 렌더링 지원 X)

**state를 사용한 코드 스플리팅**

```jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    SplitMe: null,
  };
  handleClick = async () => {
    const loadedModule = await import('./SplitMe');
    this.setState({
      SplitMe: loadedModule.default
    })
  }
  render() {
    const {SplitMe} = this.state;
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handleClick}>
          hello react!
        </p>
        {SplitMe && <SplitMe />}
        
      </header>
    </div>
    )
  }
}
export default App;
```

**React.lazy & Suspence 사용**

```jsx
import React, { Component, Suspense, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// React.lazy는 컴포넌트를 렌더링한 시점에서 비동기적으로 로딩할 수 있게 해주는 유틸 함수이다.
const SplitMe = React.lazy(() => import('./SplitMe'));

function App() {
  // Suspence 에서 fallback props를 통해서 로딩 중에 보여 줄 JSX를 지정할 수 있다.
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>
          hello react!
        </p>
        <Suspense fallback={<div>loading ...</div>}>
          {visible && <SplitMe />}
        </Suspense>
        
      </header>
    </div>
  );
}

export default App;
```

### 3. Loadable Components를 통한 컴포넌트 비동기 렌더링
(서버사이드 렌더링 지원 O)

- 서버사이드 렌더링 지원

    서버사이드 렌더링 :: 
    웹 서비스의 초기 로딩속도 개선, 캐싱 및 검색엔진 최적화를 가능하게 해주는 기술

- 렌더링하기 이전에 필요할 때 스플리팅된 파일을 미리 불러올 수 있다.

```jsx
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';

const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading ...</div>
});

function App() {
  // Suspence 에서 fallback props를 통해서 로딩 중에 보여 줄 JSX를 지정할 수 있다.
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  }
  const onMouseOver = () => {
    SplitMe.preload();
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* MouseOver되면 파일이 로딩되고 클릭했을때 랜더링된다. */}
        <p onClick={onClick} onMouseOver={onMouseOver}>
          hello react!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
```