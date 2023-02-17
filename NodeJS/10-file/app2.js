const fs = require("fs").promises;

fs.readFile("./text.txt", "utf-8").then(console.log).catch(console.error);

// writing a file
// fs.writeFile("./file.txt", "Hello! ming").catch(console.error);
fs.appendFile("./file.txt", "hahaha")
  .then(() => {
    fs.copyFile("./file.txt", "./file2.txt").catch(console.error);
  })
  .catch(console.error);

fs.mkdir("sub-folder").catch(console.error);
