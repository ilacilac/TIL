const EventEmitter = require("events"); // node js module
const emitter = new EventEmitter(); // events 안에 있는 class

emitter.on("ming", (args) => {
  console.log("first callback -", args);
});

emitter.on("ming", (args) => {
  console.log("second callback -", args);
});

emitter.emit("ming", { message: 1 });
