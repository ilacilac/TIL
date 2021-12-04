# Redux

## 규칙
- 단일스토어
  상태관리가 복잡해 질 수 있으므로 권장하지 않는다.
- 읽기 전용 상태
  불변성을 유지
- 리듀서는 순수한 함수

## 정리
1. 액션이름을 정의한다. (상수, 문자열)
2. 액션이름(string)을 type의 값으로 사용하고,
type의 key,value가 필수로 들어있는 객체를 반환하는
액션 생성 함수를 정의한다.
(다른 key,value도 들어 있을 수 있지만 type은 꼭!! 필수로 들어가야 한다.)
3. reducer함수는 이전상태(혹은 초기상태)와 action 객체를 파라미터로 받고,
절대! 이전상태를 건드리지 않고, 파라미터 외의 값을 의존하지 않고,
새로운상태 객체를 만들어서 반환한다.
reducer함수는 store에 등록해준다.
4. store에는 상태와 리듀서, dispatch와 같은 몇 몇 내장함수가 들어있다.
dispatch는 액션을 파라미터로 넘겨준다. 
dispatch(action) -> 호출되면 스토에는 리듀서 함수를 실행시킨다. -> 새로운 상태를 만들어준다.
5. 스토어의 상태가 바뀔때마다 함수가 호출되게 하려면 스토어의 내장함수 subscribe를 사용하면 된다.
react에서는 컴포넌트에서 리덕스 상태를 조회하는 과정에서 react-redux 라이브러리를 사용하여 처리한다.
```js
const listener = () => {
  console.log('Update')
}
store.subscribe(listener);
```

액션정의 -> 리듀서정의 -> 스토어 등록 -> dispatch호출 -> 리듀서실행 -> 새로운 상태 -> subscribe

## 프레젠테이셔널 / 컨테이너 컴포넌트

[프레젠테이셔널] <-(props)- [컨테이너 컴포넌트] <-(스토어상태)- [리덕스 스토어]
                                        -(액션 디스패치)-> [리덕스 스토어]