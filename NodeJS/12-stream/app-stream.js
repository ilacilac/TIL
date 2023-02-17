const fs = require("fs");
const data = [];

// path, options
// highWaterMark : 한번에 얼만큼 읽어올지 데이터의 양 (Buffer size)
// Event Base
const readStream = fs
  .createReadStream("./file.txt", {
    // highWaterMark: 8, // 64KB
    // encoding: "utf-8",
  })
  .on("data", (chunk) => {
    data.push(chunk);
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (error) => {
    console.log(error);
  });
