# useReducer Hook

- 상태를 업데이트

- useState는 설정하고싶은 다음상태를 직접지정해서 업데이트

- useReducer은 action이란 객체 기반으로 상태를 업데이트한다. 

  action객체는 업데이트할때 참조하는 객체이다.

  type이란 값을 사용해서 어떤업데이트한지 명시 할 수 있다.

  업데이트 할때 필요한 참조할 다른값도 넣어줄 수 있다.

- 컴포넌트 상태업데이트 로직을 컴포넌트 밖에서 분리할 수 있다.



## reducer : 상태를 업데이트하는 함수

현재상태와 action을 파라미터로 받아와서 새로운상태를 업데이트 한다.

```js
function reducer(state, action) {
  switch(action.type) {
      case: 'INCREMENT':
      	return state + 1;
	    case: 'DECREMENT':
      	return state - 1
	    default:
      	return state;
  }
}
```



useReducer을 사용할땐 첫번째 파라미터로 reducer함수,
두번째엔 기본값을 넣어준다.

```js
const [number, dispatch] = useReducer(reducer, 0)
```

number : 현재 형태를 의미한다.

dispatch : action을 발생시킨 함수

