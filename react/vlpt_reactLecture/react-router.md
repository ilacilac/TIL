## SPA

routing은 client가 담당

어떤주소에 어떤 UI를 보여줄지 규칙을 정하는 작업

라우팅은 보통 서버에서 처리했는데, SPA서는 클라이언트가 담당한다.

SPA가 아닌환경에서는 user가 서버에요청을 하면 서버에서 어떻게 보여질지 작업을 했는데, 새로운 데이터를 요청할때마다 서버측에서 새로운 페이지를 받아서 보여주려다보니 사용자와 인터랙션이 많을경우 이방식이 적합하지 않았다.
서버측에서 사용자에게 무엇을 보여준다는걸 정한다는건 서버자원이 그만큼 많이 사용되고, 불필요한 트래픽 낭비도 되었다.

SPA에서는 어떤 주소에서 어떤 URL을 보여줄지 결정하는것을 클라이언트에서 담당한다. 만약. 사용자가 about페이지에 들어가고싶을때, 바로 서버에 요청하지 않고 바로 페이지에 보여줄 수 있고, 어떤 동적인 값이 필요할 경우 특정 api를 서버에요청을 해서 딱 필요한 데이터를 json형식으로 받아서 보여줄 수 있게 된다.

SPA 아닌 환경에서는 : 서버에서 어떻게 보여줄지까지 정의해서 클라이언트에게 전달

SPA : 클라이언트가 접속하게 됬을때 uI에대한 코드를 먼저 다 준비해놓고 경로가 이동된다음에 바로 보여주고 데이터가 필요한경우 필요한 데이터만 받아서 사용할 수 있게 해준다.

이점 : 서버쪽에서는 자원을 많이 아낄 수 있고
클라이언트에서는 더 좋은 사용자 경험을 누릴 수 있게 된다.

단점 : 앱의 규모가 커지면 JS파일의 크기가 너무 커질 수 있다 
=> Code Splitting으로 해결할 수 있다.
브라우저에서 자바스크립트가 구동되지 않으면 UI를 볼 수 없다
=> 해결책 : Server Side Rendering



## react-router / next.js

리액트라우터는 컴포넌트 기반으로 라우팅을 한다.
Next.js : 서버사이드 렌더링을 엄청나게 쉽게 구현 가능, 파일 경로, 이름을 기반으로 라우팅을 한다.



## BrouwserRouter 

HTML5 History API 사용
브라우저의 주소표시줄에 나타나는 경로를 바꿔줄 수 있는데
그 경로를 바꿀 때 서버측에 새로운 요청을 하지 않고 
단순히 브라우저측에서 주소만 바꾸는 작업을 할 수 있다.

## Router

라우터를 정의할 때 사용하는 컴포넌트
어떤경로로 들어올때 어떤 컴포넌트를 보여줄거다 설정한다

## Link

Router의 주소만 바꿔줄 뿐, 새로고침을 하지 않는다.

## 파라미터와 쿼리

파라미터 : 특정 데이터 조회할 때

쿼리 : 다양한 옵션을 줘서 조회를 할 때(주로 검색)

```jsx
import React from "react";
import qs from "qs";

export default function About({ location }) {
  // 진입 : http://localhost:3000/about?a=1
  console.log(location); // {pathname: "/about", search: "?a=1", hash: "", state: undefined}
  // qs => ?를 포함한 문자열이기때문에 아래 옵션을 설정해줘야 한다.
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(query); // {a: "1"}
  const detail = query.detail === "true"; // 문자열로 가져와야한다.
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트라우터 기초를 실습해보는 예제 프로젝트 입니다.</p>
      {detail && <p>detail 값이 true 입니다.</p>}
    </div>
  );
}

```



## 서브라우트

- 라우트 안에 라우트
- 페이지 만들게 될때 특정 경로 안에 탭이 있는경우 활용할때 편리하게 사용할 수 있다.
- 태그를 선택해서 보여줄 때

```jsx
// Profiles.js
import React from "react";
import Profile from "./Profile";
import { Link, Route } from "react-router-dom";

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/ming">ming</Link>
        </li>
        <li>
          <Link to="/profiles/angdoong">angdoong</Link>
        </li>
      </ul>
      {/* 특정사용자명이 들어오지 않을때 내용이보여지게 */}
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 입력해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;

```

```jsx
// App.js
import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
// import Profile from "./Profile";
import Profiles from "./Profiles";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
}

export default App;

```



## 리액트 라우터 부가기능

### location 객체

1. 브라우저의 *window.location* 와 유사
2. 현재 페이지 정보를 지니고 있다.
3. *url의 query* 정보를 search라는 프로퍼티에 가지고 있다.

### match 객체

1. *Route*의 *path*에 정의한 것과 매칭된 정보를 가지고 있다.
2. params 에 설정한 파라미터를 담고 있다.

### history 객체

1. 브라우저의 *window.history* 와 유사
2. 주소를 임의로 변경하거나 되돌아 갈 수 있도록 한다.
3. 주소 변경시, SPA 특성을 지키기 위해 페이지 전체를 리로드 하지 않는다.
4. location 이 포함되어 있다.



라우터로 사용되는 컴포넌트에게 props로 전달
컴포넌트에서 라우터에 직접적인 접근을 할 수 있다.

Ex) 특정 함수를 호출했을 때 특정 경로로 이동하거나, 뒤로가거나 페이지 이탈을 방지할 수 있다.

push : 이동
pop : 앞으로가기 / 뒤로가기



## withRouter

- 하나의 함수

- route컴포넌트가 아닌곳에서 match, history... 를 props로 받아서 사용할 수 있게 해준다.

- location은 어디서 불러오든 똑같은 정보를 가르킨다.

- match는 컴포넌트가 랜더링된 위치를 기준으로 가르킨다.

- route를 사용하지 않는 컴포넌트에서 조건부로 이동해야할 때 

  ex) 로그인 성공했을 때 => 특정경로 / 실패했을때 => 이동안함



## Switch

- Switch 컴포넌트를 사용하면 여러가지 라우트중 가장 먼저 매칭되는 라우트 하나만 보여준다.
- 페이지를 못찾았을 때 사용하면 유용하다.
  ex) 404 page

```jsx
<Switch>
  <Route path="/" component={Home} exact />
  <Route path="/about" component={About} />
  <Route path="/profiles" component={Profiles} />
  <Route path="/history" component={HistorySample} />
  <Route
    render={({ location }) => (
      <div>
        <h2>이 페이지는 존재하지 않습니다.</h2>
        <p>{location.pathname}</p>
      </div>
    )}
    />
</Switch>
```



## NavLink

- 해당 링크의 주소가 현재 브라우저에서 바르키는 주소랑 일치하면 스타일을 바꿀 수 있다.

