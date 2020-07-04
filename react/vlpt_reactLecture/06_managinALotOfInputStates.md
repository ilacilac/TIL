# 여러개의 input 상태 관리하기

```js
import React, { useState } from 'react';
// input에 네임값 설정하고, 이벤트가 발생했을때 이 값을 참조하게
// useState에서 객체상태로 관리하게 수정해줘야 한다.

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const { name, nickname } = inputs;
  
  const onChange = (e) => {
    const { name, value } = e.target;
    // 리액트에서 객체를 업데이트 할 때
    // 기존의 객체를 복사한다.
    // 문자열 name이 들어가지 않게 []
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
  };
  return (
    <div>
      <input 
        name="name" 
        placeholder="이름" 
        onChange={onChange} 
        value={name}
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

객체 상태를 업데이트할때, 기존상태를 한번 복사 하고 나서(스프레드 문법 사용)
특정값을 덮어씌우고 새로운 값을 덮어준다
불변성을 지켜준다
리액트 컴포넌트에서 상태 없데이트 됬음을 감지할 수 있다.
이에따라 필요한 렌더링이 발생하게 된다.

불변성을 지켜주어야만 컴포넌트 업데이트 성능을 최적화 할 수 있다.