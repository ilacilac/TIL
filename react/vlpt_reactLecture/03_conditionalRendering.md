```jsx
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;

```

```jsx
import React from 'react';

function Hello ({ color, name, isSpecial }) {
  return (
    <div style={{
      color
    }}>
      {isSpecial ? '스페셜하다 ' : '스페셜하지않다 '}
      안녕하세요. {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
};
export default Hello;
```

falsy한값 : undefined, null, false
0은 예외이다.

&& : 참 거짓에 따라 단순히 보여주고 안보여주고일때 간편하게 사용가능
삼항연산자 : 내용이 달라질 때