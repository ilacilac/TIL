```jsx
import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onReset = () => {
    setText('');
  };
  return (
    <div>
      // 초기화 버튼눌렀을때 같이 초기화시켜줘야 하므로 value={text}
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {text}
      </div>
    </div>
  );
}

export default InputSample;
```

