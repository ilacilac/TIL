const fs = require("fs");

// 사용하고있는 메모리 상태
const beforeMem = process.memoryUsage().rss;

fs.readFile("./file.txt", (_, data) => {
  // file2에 저장
  fs.writeFile("./file2.txt", data, () => {});

  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  // 다 읽어서 쓰는데 까지 들어가는 메모리
  // 모든 데이터를 읽어서 쓰는건 비효율적! -> stream을 이용하면 buffer별로 하나 읽었다 쓰고.. 를 반복하면서 데이터를 순차적으로 처리할 수 있음
  console.log(`Consumed Memory : ${consumed}MB`);
});
