const fs = require('fs');

let instance;

// Should, probably, use some 3rd party loggers with Buffers and stuff
class Logger{
  constructor(logFilePath){
    if(!instance){
      instance = this;
    }

    this._path = logFilePath || 'log.txt';
    this._stream = fs.createWriteStream(this._path);
    return instance;
  }

  info(message){
    this._stream.write(`! [INFO]: ${message}\n`);
  }

  warn(message){
    this._stream.write(`!! [WARN]: ${message}\n`);
  }

  error(message){
    this._stream.write(`!!! [ERR]: ${message}\n`);
  }
}

// Make Logger a static class
module.exports = Logger;
