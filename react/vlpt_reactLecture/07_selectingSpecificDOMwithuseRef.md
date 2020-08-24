# useRef로 특정 DOM 선택하기

리액트에서도 가끔 돔을 직접 선택해야하는 상황이있다.
(엘리먼트 위치 크기, 스크롤, 포커스 설정 등등)
ref라는것을 사용한다.
useRef라는 훅 함수

```jsx
// useRef 불러오기
import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  // useRef 호출
  const nameInput = useRef();
  const { name, nickname } = inputs;
  
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    // ref객체.current가 돔을 가르킴
    // 포커스가 잡히게 
    nameInput.current.focus();
  };
  return (
    <div>
      <input 
        name="name" 
        placeholder="이름" 
        onChange={onChange} 
        value={name}
        // useRef로 만든 객체로 ref라는 값으로 원하는 돔에 설정해준다.
        ref={nameInput}
      />
      <input 
        name="nickname" 
        placeholder="닉네임" 
        onChange={onChange}
        value={nickname} 
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} : ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```

