const sql = require('sql-bricks');
const Logger = require('../shared/utils/logger');

// Hardcode queries, because of a strange syntax of sql-bricks ((
const _INSERT_EVENT = "INSERT INTO events SET ID = ?, timestamp = ?, userID = ?, pageID = ?, pageReferer = ?, userAgent = ?, screenResolution = ?, userIP = ?, browser = ?, country_name = ?;";
const _SELECT_EVENT_BY_PAGE = "SELECT * FROM events WHERE pageID = ?";
const _SELECT_EVENT_BY_BROWSER = "SELECT * FROM events WHERE browser = ?";
const _SELECT_EVENT_BY_COUNTRY = "SELECT * FROM events WHERE country_name = ?";
const _SELECT_ALL = "SELECT * FROM events ORDER BY timestamp DESC";

class EventPersistence {
  constructor(database){
    this._database = database;
    this._logger = new Logger();
    this._table = 'events';
  }

  persist(e){
    let values = [
      e.ID.toString(),
      e.timestamp,
      e.userID || '',
      e.pageID || '',
      e.pageReferer || '',
      e.userAgent || '',
      e.screenResolution || '',
      e.userIP || '',
      e.browser || '',
      e.country_name || ''
    ];

    return this._database.query(_INSERT_EVENT, values, function (err, result){
      if(err){
        this._logger.error(`EventPersistence can not persist event (ID: ${e.ID}) to the database`);
      }
    });
  }

  // TODO burn it to ashes and rewrite it...
  find(criteria, value, groupBy){
    let query;
    let values = [];
    values.push(value);

    // Really bad stuff ((
    switch(criteria){
      case 'pageID':
        query = _SELECT_EVENT_BY_PAGE;
        break;
      case 'browser':
        query = _SELECT_EVENT_BY_BROWSER;
        break;
      case 'country_name':
        query = _SELECT_EVENT_BY_COUNTRY;
        break;
      default:
        query = _SELECT_ALL;
    }

    if(!groupBy) values.push('pageID');

    return this._database.query(query, values);
  }
}

module.exports = EventPersistence;
