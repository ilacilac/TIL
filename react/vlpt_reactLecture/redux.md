# redux

- 상태관리 라이브러리
- 컴포넌트 상태관리 로직들을 분리하여 효율적으로 관리할 수 있다.
- 미들웨어 / 비동기 작업을 더욱 체계적으로 관리 가능
- 기본적인 최적화가 이미 되어있다.



## Action 

- 상태에 어떠한 변화가 필요할 때, 액션이라는 객체를 발생 시킨다.

- { type: ""} 값이 필수이다.

- 리덕스에서 상태를 업데이트할 때 타입을 보고 어떻게 업데이트 할 지 정한다.

- type은 필수, 다른값은 옵션으로 넣어줄 수 있다.

  ```
  // example
  // 새로운 할일을 만드는 액션이고
  // 아래의 데이터를 추가한다.
  {
  	type: "ADD_TODO",
  	data: {
  		id: 0,
  		text: "리덕스 배우기"
  	}
  }
  ```

  

## 액션 생성함수

- 단순히 파라미터를 받아서 액션객체를 생성해주는 함수

```js
export function addTodo(data) {
  return {
    type: "ADD_TODO",
    data
  };
}

// 화살표 함수로도 만들 수 있다.
```



## 리듀서

- 순수한 함수여야 한다. 
  => 이전의 상태는 절대로 변경하지 않고, 변화를 일으킨 새로운 상태 객체를 만들어서 반환한다.
  똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과값을 반환해야만 한다.
  new Date(), Math.random(), axios.get() 사용 X
  => 해당작업은 컴포넌트단 혹은 미들웨어에서 처리해줘야 한다.
- 변화를 일으키는 함수
- 두가지 파라미터를 가져온다 (state, action)
- action type을 가지고 action type이 무엇이냐 따라 업데이트 작업을 한다.
- 불변성을 유지해줘야한다. => 컴포넌트들이 제대로 리랜더링된다.
- default로는 기존 state를 반환해줘야 한다
  => 리덕스를 사용할 때 여러가지 리듀서를 만들고 합쳐서 루트 리듀서를 만들 수 있다.
  루트 리듀서 안에 작은 리듀서를 서브 리듀서라고 한다.



## 스토어

- 한 애플리케이션 하나당 스토어 하나

- 현재 앱의 상태와 리듀서, 몇가지의 내장함수가 들어있다.

  dispatch : 스토어의 내장함수중 하나, 액션을 발생시키는 것 / 액션을 스토어에게 전달한다.

  ```
  dispatch({type: 'INCREASE'}); // 액션객체를 만들어서 dispatch 파라미터로 넣어 호출한다.
  // 호출하고나면 해당 액션이 리듀서에 전달이 되어, 리듀서에서 새로운 상태를 반환해주면
  // 스토어의 상태가 새로워진다.
  ```

  subscribe : 스토어의 내장함수중 하나, 호출할 때 파라미터로 특정함수를 넣어주면 액션이 디스패치될때마다 설정된 함수가 호출된다 => 스토어상태가 업데이트될 때마다 특정함수를 호출 할 수 있는 것
  주로 직접 사용하지 않고 react-redux 라이브러리에서 제공하는 connect함수, 또는 useSelector 훅을 사용하여
  만약 스토어의 상태가 업데이트되면 컴포넌트가 리랜더링되는작업을 대신 처리해준다.
  컴포넌트를 만들게되면 컴포넌트가 리덕스에 구독을 하게되는 것
  = 리덕스 상태가 업데이트되면 컴포넌트도 리랜더링 된다.

```js
// 스토어를 만들어주는 함수
import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 보통 액션생성함수를 작성할때는 소문자, 타입은 대문자
const increase = () => ({
  type: INCREASE,
});
const decrease = () => ({
  type: DECREASE,
});
const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});
const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
// console.log(store.getState()); // 스토어안의 상태를 조회

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// unsubscribe(); // 구독 해제

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "wow" }));

// store 인스턴스를 콘솔에 사용할 수 있음
window.store = store;
// window.unsubscribe = unsubscribe;

// 특정 액션이 디스패치되면 스토어 상태가 업데이트 되고
// 상태가 업데이트 되면 구독했던 함수가 호출된다.
// unsubscribe(); 하면 더이상 호출되지 않는다.

```

```
store.dispatch({type: "INCREASE"});

디스패치가되면서
리듀서 호출
스토어상태 업데이트
구독했던 listenr 호출
```



## 리덕스 모듈

액션타입 / 액션생성함수 / 리듀서가 들어있는 js =>Ducks패턴

reducer은 export default로
Action creators는 export로 내보내준다.

이 파일을 리덕스 모듈이라 한다.

리듀서가 여러가지인경우 합쳐줘야된다.  => 루트리듀서
루트리듀서를 만들때는 combineReducers 함수를 redux에서 불러와서 사용한다.

```js
import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
```



리액트 프로젝트에 리덕스를 적용하려면 
`react-redux` 패키지를 설치해야한다.

```
// 리액트프로젝트에서 리덕스를 적용할 수 있게 해준다.
import { Provider } from "react-redux";

// 스토어를 만들어주는 리덕스의 함수
import { createStore } from "redux";

// 스토어를 사용할땐 reducer을 파라미터로 넣어준다.
```

```
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducers from "./modules/index";

const store = createStore(rootReducers);
console.log(store.getState());
// {counter: {…}, todos: Array(0)}
// counter:
// diff: 1
// number: 0
// __proto__: Object
// todos: Array(0)
// length: 0
// __proto__: Array(0)
// __proto__: Object
ReactDOM.render(
// 리액트 컴포넌트 어디서든지 스토어를 사용할 수 있게된다.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

컴포넌트에서 스토어에 접근해서 상태도 불러오고 액션을 디스패치하는방법



## 프레젠테이션 컴포넌트

- 리덕스 스토어에 직접적으로 접근하지않고 필요한값, 함수를 props로 받아와서 사용하는 컴포넌트
- UI 선언에 집중



## 컨테이너 컴포넌트

- 리덕스에있는 상태를 조회하거나 action을 디스패치 할 수 있는 컴포넌트