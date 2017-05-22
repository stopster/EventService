const mysql = require('mysql');
const Logger = require('./logger');


class MySQLDatabase {
  constructor (config){
    this._config = config;
    this._isConnected = false;
    this._logger = new Logger();
  }

  connect(){
    let that = this;
    if(this._isConnected){
      return Promise.resolve();
    }

    this._connection = mysql.createConnection(this._config);

    return new Promise((resolve, reject) => {
      this._connection.connect((err) => {
        if(err){
          logger.error(`Can not connect to mysql database: ${this._config.database} on ${this._config.host}`);
          reject();
        }
        this._isConnected = true;
        this._reconnectLeft = 3;

        resolve();
      });
    });
  }

  reconnectOnError(){
    this._connection.on('error', (err) => {
      if(err) this._logger.error(err);

      // Try to reconnect
      if(this._reconnectLeft > 0){
        this._logger.info(`Reconnecting to ${this._config.database} on ${this._config.host}`);
        this._reconnectLeft--;
        this.connect();
      }
    });
  }

  query(query, values){
    return new Promise((resolve, reject) => {
      let that = this;
      this._connection.query(mysql.format(query, values), values, function (err, result){
        if(err){
          that._logger.warn(`Can not query database: ${that._config.database} on ${that._config.host}`);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = MySQLDatabase;
