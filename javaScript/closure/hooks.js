const React = (function () {
  let hooks = [];
  let idx = 0;

  function useState(initVal) {
    const state = hooks[idx] || initVal;
    const _idx = idx; // 이 훅이 사용해야 하는 인덱스를 가둬둔다.
    const setState = (newVal) => {
      hooks[_idx] = newVal;
    };
    idx++;
    return [state, setState];
  }

  function useEffect(cb, depArray) {
    const oldDeps = hooks[idx];
    let hasChanged = true;
    if (oldDeps) {
      hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
    }
    // 값이 바뀌었으니 콜백을 실행한다.
    if (hasChanged) {
      cb();
    }

    hooks[idx] = depArray;
    idx++;
  }

  function render(Component) {
    idx = 0; // 랜더링 시 훅의 인덱스 초기화
    const C = Component();
    C.render();
    console.log(hooks);
    return C;
  }

  return { useState, useEffect, render };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState("apple");
  React.useEffect(() => {
    console.log("side effect");
  }, []);
  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
    type: (word) => setText(word),
  };
}

var App = React.render(Component);
App.click();

var App = React.render(Component);
App.type("banana");

var App = React.render(Component);
App.click();

var App = React.render(Component);
App.type("cat");

var App = React.render(Component);
App.click();
