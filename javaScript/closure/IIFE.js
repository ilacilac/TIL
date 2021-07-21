/**
 * 전역 범위에서 변수가 선언되는것을 방지한다.
 * IIFE 내부에 선언된 변수에 접근하지 못하도록 할 수 있다.
 */

var counter = (function () {
  let count = 0;
  return {
    increase: () => {
      count++;
      console.log(count);
    },
    decrease: () => {
      count--;
      console.log(count);
    },
    getCounter: () => {
      console.log(count);
      return count;
    },
  };
})();

var counterTest = () => {
  // 계속 0으로 초기화된다. (이전 상태 저장 X)
  let count = 0;
  return {
    increase: () => {
      count++;
      console.log(count);
    },
    decrease: () => {
      count--;
      console.log(count);
    },
    getCounter: () => {
      console.log(count);
      return count;
    },
  };
};
