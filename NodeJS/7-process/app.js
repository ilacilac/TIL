// node가 동작하고있는 process
// 현재 동작하는 Node process에 대한 정보
const process = require("process");

// nextTick : 현재 수행된 코드 다음에(콜스택이 비워진 이후)콜백함수를 태스크 큐에 담을 수 있음
setTimeout(() => {
  console.log("setTimeout");
}, 0);
// 우선순위가 높음
process.nextTick(() => {
  console.log("nextTick");
});
for (let i = 0; i < 100; i++) {
  console.log("for loop");
}
