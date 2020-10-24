# redux

- 상태관리 라이브러리
- 컴포넌트 상태관리 로직들을 분리하여 효율적으로 관리할 수 있다.
- 미들웨어 / 비동기 작업을 더욱 체계적으로 관리 가능
- 기본적인 최적화가 이미 되어있다.
- 리덕스 자체는 동기적인 동작밖에 못하기때문에 비동기적인 작업을 끼워넣으려면 미들웨어를 사용해야한다.

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



## 리덕스 개발자 도구

- 현재 스토어상태를 개발자도구에서 조회할 수 있다.
- 어떤 액션이 디스패치되었는지, 액션에따라 상태가 어떻게 변했는지 볼 수 있다.
- 액션의 상태를 되돌릴 수 있고, 바로 dispatch할 수 있다.

```
Redux Devtools => chrome 웹 스토어 가서 설치
프로젝트 => yarn add redux-devtools-extension

index.js => store을 만들때,

import {composeWithDevTools} from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());

페이지 => 개발자도구 / Redux 탭
```



## Connect

- Props를 통해 리덕스의 상태 또는 액션을 디스패치하는 함수를 받아옴

- useSelector / useDispatch가 나온뒤로 잘 사용하지않음

- HOC 

  

## HOC

- 재사용되는 값, 함수를 Props로 받아올 수 있게 해주는 옛날 패턴



## Ducks 구조와 redux-actions

Ducks 구조에는 Reducer 파일안에 액션타입과 액션생성자 함수를 함께 넣어 관리한ㄷ다.
그리고 이를 "모듈" 이라고 부른다.

### createAction을 통한 액션생성 자동화

파라미터로 전달받은 값을 액션의 payload 값으로 설정해준다.

createAction 함수에서 두번째 파라미터로 받는 부분은 payloadCreator 로서, 
payload 를 어떻게 정할 지 설정한다. 

만약에 생략하면 기본적으로 `payload => payload` 형태로 되기 때문에, 위 코드를 다음과 같이 작성해도 작동에 있어선 차이가 없지만 차후 헷갈릴 가능성이 있으므로 명시적으로 표시해주도록 하자.

### switch문 대신 handleActions 사용하기

리듀서에서 액션의 type에 따라 다른작업을 하기위해서 switch문을 사용하는데
scope가 리듀서 함수로 설정되어있어서 서로 다른 case에서 let이나 const를
통하여 변수를 선언하게 되면 같은이름이 중첩될 시엔 에러가 발생한다.
그렇다고 각 case마다 함수를 정의하는건 코드를 읽기 힘들어진다.
이 문제를 handleActions로 해결할 수 있다.

첫번째 파라미터 : 액션에 따라 실행 할 함수들을 가지고 있는 객체
두번째 파라미터 : 상태의 기본 값(initialState)

### 적용방법

```bash
yarn add redux-actions
```

```js
import { createAction, handleActions } from 'redux-actions';

// 액션 생성자
// 해당 액션생성자들이, 어떤 파라미터를 받아야하는지, 주석에 메모로 달아둡니다.
export const create = createAction(CREATE); // color
export const remove = createAction(REMOVE); 
export const increment = createAction(INCREMENT); // index
export const decrement = createAction(DECREMENT); // index
export const setColor = createAction(SET_COLOR); // { index, color }
```

```js
//  handleActions 를 통하여 리듀서의 틀을 만들어준다.
// 우리의 액션타입에는 접두사가 들어가있기 때문에 그냥 CREATE: 를 하면 안되고, [CREATE]: 로 해주어야합니다.
export default handleActions({
    [CREATE]: (state, action) => state,
    [REMOVE]: (state, action) => state,
    [INCREMENT]: (state, action) => state,
    [DECREMENT]: (state, action) => state,
    [SET_COLOR]: (state, action) => state,
}, initialState);
```

```js
export default handleActions({
    [CREATE]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.push(
            Map({
                color: action.payload,
                number: 0
            })
        ))
    },

    [REMOVE]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.pop())
    },

    [INCREMENT]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.update(
            action.payload, 
            (counter) => counter.set('number', counter.get('number') + 1))
        );
    },

    [DECREMENT]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.update(
            action.payload, 
            (counter) => counter.set('number', counter.get('number') - 1))
        );
    },

    [SET_COLOR]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.update(
            action.payload.index, 
            (counter) => counter.set('color', action.payload.color))
        );
    },
}, initialState);
```

참고 : https://velopert.com/3358
https://velog.io/@velopert/Redux-3-%EB%A6%AC%EB%8D%95%EC%8A%A4%EB%A5%BC-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%99%80-%ED%95%A8%EA%BB%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-nvjltahf5e