# 미들웨어
- 액션을 디스패치 하기 전에 특정 작업을 수행할 때
- reducer 처리 전
- 함수를 리턴하는 함수를 리턴하는 함수
- 스토어에서 미들웨어 등록하여 사용
```jsx
import { createStore, applyMiddleware } from ‘redux‘;

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
```

## redux-thunk
1. redux-thunk로 thunk 함수 만들기
2. thunk 함수로 디스패치 -> 함수를 전달받아, store의 dispatch와 getState를 파라미터로 넣어서 호출

redux-thunk를 사용하면 dispatch를 파라미터로 받는 함수를 리턴할 수 있는데
이 리턴한 함수 내부에서 dispatch를 이용하여 action을 처리한다.
? 어떻게
-> redux-thunk 구조를 봐보자
```js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```
