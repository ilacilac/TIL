function useState(initVal) {
  let _val = initVal;
  // count 는 한번 가져오고 끝난 값
  debugger;
  const state = _val;
  const setState = (newVal) => {
    _val = newVal;
  };
  return [state, setState];
}

const [count, setCount] = useState(1);
console.log(count); // 1
setCount(2);
console.log(count); // 1

function useState2(initVal) {
  let _val = initVal;
  // count 는 한번 가져오고 끝난 값
  debugger;
  const state = () => _val;
  const setState = (newVal) => {
    _val = newVal;
  };
  return [state, setState];
}

const [count2, setCount2] = useState2(1);
// 호출 할 때 마다 값을 가져온다.
console.log(count2()); // 1
setCount2(2);
console.log(count2()); // 2
