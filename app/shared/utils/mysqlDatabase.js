const mysql = require('mysql');
const logger = require('./logger');

class MySQLDatabase {
  constructor (config){
    this._config = config;
    this._isConnected = false;
  }

  connect(){
    let that = this;
    if(this._isConnected){
      return Promise.resolve();
    }

    this._connection = mysql.createConnection(this._config);

    return new Promise((resolve, reject) => {
      this._connection.connect(function (err){
        if(err){
          logger.error(`Can not connect to mysql database: ${this._config.database} on ${this._config.host}`);
          reject();
        }
        this._isConnected = true;
        resolve();
      });
    });
  }

  query(sql){
    return new Promise((resolve, reject) => {
      this._connection.query(sql, function (err, result){
        if(err){
          this._logger.warn(`Can not query database: ${this._config.database} on ${this._config.host}`);
          reject();
        } else {
          resolve(result);
        }
      });
    })
  }

  destroy(){
    this._connection.destroy();
  }
}

module.exports = MySQLDatabase;
