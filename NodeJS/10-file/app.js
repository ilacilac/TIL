const fs = require("fs");

// rename(..., callback(error, data)) 비동기
// try {renameSync(....)} catch(e) { } 동기
// promises.rename().then().catch()

// fs.renameSync("./file1.txt", "./file-new.txt");

// 아래와같이 동기적으로 사용하는건 비추천
try {
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
  console.error(error);
}

fs.rename("./text-new.txt", "./text.txt", (error) => {
  console.error(error);
});

fs.promises
  .rename("./text2.txt", "./text-new.txt")
  .then(() => console.log("Done!"))
  .catch(console.error);
