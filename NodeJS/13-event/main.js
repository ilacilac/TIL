const logger = require("./logger.js");
const emiiter = new logger.Logger();

emiiter.on("log", (event) => {
  console.log(event);
});

emiiter.log(() => {
  console.log("doing something......");
});
