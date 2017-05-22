const Logger = require('../shared/utils/logger');

class EventAuthorizedAPI {
  constructor(httpProvider, eventService, password) {
    this._httpProvider = httpProvider;
    this._eventService = eventService;
    this._password = password;
    this._logger = new Logger;

    // Protect API with authorization
    // wrap into arrow func to get correct this
    this._httpProvider.use(this.authorizeRequest.bind(this));
    this.exposeAPI();
  }

  exposeAPI(){
    this._httpProvider.get('/event', (req, res) => {
      let criteria, value;

      // Get only one criteria from the query
      for(let i in req.query){
        if(req.query.hasOwnProperty(i)){
          criteria = i;
          value = req.query[i];
          break;
        }
      }

      this._eventService.findEvent(criteria, value).then((result) => {
        res.send(result);
      }, (err) => {
        this._logger.warn('Cannot get queries');
      });
    });
  }

  authorizeRequest(req, res, next){
    if(req.headers.authorization === this._password){
      next();
    } else {
      this._logger.warn('Unauthorized request.');
      res.status(403).send('You shall not pass!!!');
    }
  }
}

module.exports = EventAuthorizedAPI;
