// function useState(initialValue) {
//   var _val = initialValue;
//   function state() {
//     return _val;
//   }
//   function setState(newVal) {
//     _val = newVal;
//   }
//   return [state, setState];
// }

// // useState의 스코프에 대한 접근권한이 있음
// // 이러한 참조를 클로저라고 한다.
// var [foo, setFoo] = useState(0);

// console.log(foo());
// setFoo(1);
// console.log(foo());

// // Counter
// function Counter() {
//   const [count, setCount] = useState(0);
//   return {
//     click: () => setCount(count() + 1),
//     render: () => console.log(count()),
//   };
// }

// const C = Counter();
// C.render();
// C.click();
// C.render();

// function useState(initialValue) {
//   var _val = initialValue;

//   function setState(newVal) {
//     _val = newVal;
//   }
//   return [_val, setState];
// }

const MyReact = (function () {
  // let _val, _deps; // scope 내부에서 상태와 의존성을 잡아 놓는다.
  let hooks = [],
    currentHook = 0;
  return {
    render(Component) {
      const Comp = Component(); // Counter();
      /*
       () => {
          const [count, setCount] = MyReact.useState(0);
          return {
            click: () => setCount(count + 1),
            render: () => console.log("render", { count }),
          };
        }
      */
      Comp.render(); // () => console.log("render", { count });
      currentHook = 0;
      return Comp;
    },
    /**
     * 
     MyReact.useEffect(() => {
      console.log("effect", count);
    }, [count]);
     */
    useEffect(callback, depArray) {
      const hasNoDeps = !depArray;
      const deps = hooks[currentHook]; // type : array | undefined
      const hasChangedDeps = deps
        ? !depArray.every((el, i) => el === deps[i])
        : true;
      if (hasNoDeps || hasChangedDeps) {
        callback();
        hooks[currentHook] = depArray;
      }
      currentHook++; // 해당 Hook에 대한 작업완료
    },
    useState(initialValue) {
      // _val = _val || initialValue;
      // function setState(newVal) {
      //   _val = newVal;
      // }
      // return [_val, setState];
      hooks[currentHook] = hooks[currentHook] || initialValue;
      const setStateHookIndex = currentHook; // setState의 클로저를 위해
      const setState = (newState) => (hooks[setStateHookIndex] = newState);
      return [hooks[currentHook++], setState];
    },
  };
})();

function Counter() {
  const [count, setCount] = MyReact.useState(0);
  const [text, setText] = MyReact.useState("foo");
  MyReact.useEffect(() => {
    console.log("effect", count);
  }, [count, text]);
  return {
    click: () => setCount(count + 1),
    type: (txt) => setText(txt),
    noop: () => setCount(count),
    render: () => console.log("render", { count, text }),
  };
}

let App; // effect 0, render => {count: 0, text: "foo"}
App = MyReact.render(Counter);
App.click();
App = MyReact.render(Counter);
App.type("bar");
App = MyReact.render(Counter);
App.noop();
App = MyReact.render(Counter);
App.click();
App = MyReact.render(Counter);
