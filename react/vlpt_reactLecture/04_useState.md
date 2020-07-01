# useState 를 통한 동적 상태 관리

사용자 인터랙션에 따라 바뀌는 것 구현

리액트 16.8 이하에선 함수형으로 상태관리를 못했음
hooks라는 기능이 도입되면서 함수형 컴포넌트에서도 상태관리가 가능하게 됨

useState 함수도 hooks중 하나



## counter.js

```jsx
import React, { useState } from 'react';
// 1. 리액트에서 useState 함수를 불러온다
function Counter() {
  // 2. number라는 상태를 만들거고 number의 기본값을 0으로 설정하고 
  // setNumber 이 상태를 바꿔주는 함수이다.
  // useState 호출되면 배열이 리턴됨
  // 첫번째 원소 : number / 두번째 원소 : setNumber로 바뀐 number값
  const [number, setNumber] = useState(0);

  // console.log('useState', useState);
  // console.log('number', number);
  // console.log('setNumber', setNumber);

  const onIncrease = () => {
    // 업데이트 함수를 넣어 줄 수 있음
    // 리액트 컴포넌트 최적화 단계에서 업데이트 함수가 필요하다.
    setNumber(prevNumber => prevNumber + 1);
  };
  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
    // 함수를 넣어줘야지 함수를 호출하면 안되고(렌더링할때 호출한다) 함수타입의 값을 그대로 넣어준다
  )
}

export default Counter;
```



