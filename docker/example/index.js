const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello NodeJS"));

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
})

/**
 * $ docker build -t app .
 * $ docker run -p 5000:3000 app
 * $ docker run -p 5000:3000 -v $PWD:/example app
 */