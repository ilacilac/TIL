# 미들웨어
- 액션을 디스패치 하기 전에 특정 작업을 수행할 때
- reducer 처리 전
- 함수를 리턴하는 함수를 리턴하는 함수
- 스토어에서 미들웨어 등록하여 사용
```jsx
import { createStore, applyMiddleware } from ‘redux‘;

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
```