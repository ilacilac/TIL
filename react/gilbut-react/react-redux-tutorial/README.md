## ES6에 너무 익숙해져있다. 
- handleActions 에서 사용하는 { [key]: value } 형태
- 객체축약기법
```js
const rootReducer = combineReducers({
  counter,
  todos,
});

const rootReducer = combineReducers({
  number: counter, // 이런식으로 store에 들어가는 state의 이름 변경
  todos,
});
```

## store={store} 등록 시, 하위컴포넌트의 store을 props로 전달하는게 아닌, hooks를 전달해주는 것? vs props로 전달하는 것?
```js
/**
 * Makes the Redux store available to the connect() calls in the component hierarchy below.
 * Redux 저장소를 아래 구성 요소 계층 구조의 connect() 호출에 사용할 수 있도록 합니다.
 */
export class Provider<A extends Action = AnyAction> extends Component<ProviderProps<A>> { }
```

1. react-redux의 Provider을 최상위 컴포넌트로 wrap 시켜준다.
2. Provider 컴포넌트에 store을 props로 설정해준다. 
  -> store자체를 하위에서 props로 받지은 않지만(받지 않는것보다는 받지 못하는 느낌.. 이부분이 좀 어렵다.), props로 설정해줌으로 하위 컴포넌트에서 connect 함수를 사용할 수 있다. 
  -> 이게 hooks를 전달해주는 의미가 맞는것인가?? 
  -> 앱 전체에서 store에 접속해야한다.
3. Provider을 통해 하위 컴포넌트에서는 react-redux의 connect 함수를 사용 할 수 있다.
4. connect 함수를 통해 store에 연결시킨다. (HOC)

### Reference
https://velog.io/@iamhayoung/React-Redux-React-Redux-%EC%9E%85%EB%AC%B8-Provider-Connect-mapStateToProps-mapDispatchToProps