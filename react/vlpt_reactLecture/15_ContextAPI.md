# Context API

전역적으로 사용할 데이터가 있을때 유용한 기능

```jsx
// 새 Context를 만들때는 createContext 함수를 사용한다.
import { createContext } from "react";

// 파라미터에는 해당 Context의 기본상태를 지정한다.
const ColorContext = createContext({ color: "black" });

export default ColorContext;

```

```jsx
import React from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (

    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color,
          }}
        ></div>
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;

```

```jsx
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

function App() {
  return (
    // Provider 사용시 꼭 value를 넣어줄 것
    <ColorContext.Provider value={{ color: "red" }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;

```

---

```jsx
// App.js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColor";
import TestColor from "./components/TestColor";

function App() {
  return (
    // Provider 사용시 꼭 value를 넣어줄 것
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
      <TestColor />
    </ColorProvider>
  );
}

export default App;

```

```jsx
// components/ColorBox.js
import React from "react";
import { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  return (
    // ColorContext 안에 들어있는 Consumer라는 컴포넌트를 통해 색상 조회
    <ColorConsumer>
      {/* 아래와 같이 Consumer 사이에 중괄호를 열어서 그 안에 함수를 넣어주는 패턴을
     Function as a child, 혹은 Render Props라고 한다. */}
      {({ state }) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color,
            }}
          ></div>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subColor,
            }}
          ></div>
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;

```

```jsx
// contexts/colors.js
import React from "react";
import { createContext, useState } from "react";

const ColorContext = createContext({
  // 아래 설정은 없어도 동작함, 하지만 createContext는 해줘야함
  // state: { color: "black", subColor: "red" },
  // actions: {
  //   setColor: () => {},
  //   setSubColor: () => {},
  // },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subColor, setSubColor] = useState("red");

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };

  return (
    // 위에 설정한 value props로 넣어주기
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;

```

```jsx
// components/SelectColor.js
import React from "react";
import { ColorConsumer } from "../contexts/color";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {/* 위에 1에서 설정한 부분 사용 */}
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubColor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;

```

```jsx
// TestColor.js
import React from "react";
import { ColorConsumer } from "../contexts/color";

const TestColor = () => {
  return (
    <div>
      <ColorConsumer>
        {({ state }) => (
          <>
            <p>Main Color : {state.color}</p>
            <p>Sub Color : {state.subColor}</p>
          </>
        )}
      </ColorConsumer>
    </div>
  );
};

export default TestColor;

```



## useContext Hook

```jsx
// components/ColorBox.js
import React, { useContext } from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      ></div>
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subColor,
        }}
      ></div>
    </>
  );
};

export default ColorBox;

```

