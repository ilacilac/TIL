1. index / styled / template
2. component -> 공통에서 분기처리해서 보여주는거
3. action -> saga -> action 여러개 -> reducer

```jsx
createAction (type, callback) => {
  return (data) => {
    return {type, payload: callback(data)}
  }
}

dispath({
  type : type
  payload : data
});

// component dispatch({type: ‘type’, payload: ????});
// component dispatch(createAction(???));
```

## 24-3

1. Link에 onClick하는 첫번째방식은 비추! (예상치 못하게 동작할 수 있고 애초에 Link태그에 onClick은 ' ㅅ'a..)
2. rest parameter 받을 때 순서가 중요하다. (동일한 props를 받을경우, 순서대로 받기때문에 마지막께 덮어씌기때문에 해당작업에서 button component로 예시를 들자면, onClick이 덮어씔 수 있다.)
3. new Date()는 사용자PC를 기반으로 동작한다. 그렇기때문에 해당예제에서 만약 토큰 만료기간을 체크할 때, Front에서 해준다고 하면, 서버랑 Double Check가 필요하다.
4. localStorage가 안되는 브라우저에서 로그인 유지를 구현하게 하려면?

- localStorage가 없어도 되는 상황으로 만들어주기
- localStorage가 없을경우를 Check해서 새로운 객체형태로 만들어주기
- cookie에 저장하기

## 25장

1. reducer / saga 동시에 처리해줬을 때, 동작순서
2. data를 state / redux로 관리했을 때 차이 -> 고민해보기

- 전역으로 관리했을 때
- store state = 저장소
  임시 / 완료
- item의 input 변경될 때 : [input, setInput] = useState('');
- item 저장할 때 : dispatch()

## 26장

코드 작성하기전에 생각하기 (플로우를 먼저 적자)

## 27장

onEdit
JSX
useEffect
