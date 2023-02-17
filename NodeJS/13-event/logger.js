const EventEmitter = require("events"); // node js module
const emitter = new EventEmitter(); // events 안에 있는 class

class Logger extends EventEmitter {
  log(callback) {
    this.emit("log", "started...");
    callback();
    this.emit("log", "ended!");
  }
}

module.exports.Logger = Logger;
