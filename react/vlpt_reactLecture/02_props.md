# props

props = properties

컴포넌트를 사용할 때, 특정값을 전달하고 싶을 때 사용한다.

```js
import React from 'react';

function Hello (props) {
  console.log(props);
  // 자바스크립트 값이니깐 중괄호로 감싸준것
  // 객체와 객체를 감싸는 중괄호
  return <div style={{
    color: props.color
  }}>안녕하세요. {props.name}</div>;
}

export default Hello;
```

```js
import React from 'react';

function Hello ({ color, name }) {
  // 자바스크립트 값이니깐 중괄호로 감싸준것
  // 객체와 객체를 감싸는 중괄호
  return <div style={{
    color
  }}>안녕하세요. {name}</div>;
}

export default Hello;
```

```jsx
import React from 'react';

function Wrapper( {children} ) {
  const style = {
    border: '2px solid black',
    padding: 16
  }

  return <div style={style}>{children}</div>
}

export default Wrapper;
```



name, color로 넣어준게 props

비구조 할당으로 바로 추출해서 사용가능

defaultProps로 기본값 설정가능

children : 태그와 태그사이에있는 내용