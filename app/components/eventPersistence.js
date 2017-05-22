const Logger = require('logger');

class EventPersistence {
  constructor(database){
    this._database = database;
    this._logger = new Logger();
  }

  persist(event){
    this._database.query(sql, function (err, result){
      if(err){
        this._logger.error('EventPersistence can not persist event to the database');
      }
    });
  }

  find(criteria){
    // TODO build a query from the criteria
    // TODO make a call to DB
    // TODO return a promise
    return new Promise((resolve, reject) => {
    });
  }
}

module.exports = EventPersistence;
