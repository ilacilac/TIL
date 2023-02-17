const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zilbStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file4.zip");
const piping = readStream.pipe(zilbStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done!!");
});

// pipe는 서버를 만들때도 도움이 됨
// 서버 -> 파일을 읽은 다음에 데이터를 반응해서 보여준다
const http = require("http");
const server = http.createServer((req, res) => {
  // X
  // fs.readFile("file.txt", (err, data) => {
  //   res.end(data);
  // });
  const stream = fs.createReadStream("./file.txt");
  stream.pipe(res);
});
server.listen(4000);
