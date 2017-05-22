const Event = require('../shared/models/event');

class EventAPI{
  constructor (httpProvider, eventService) {
    this._httpProvider = httpProvider;
    this._eventService = eventService;

    this.exposeAPI();
  }

  exposeAPI(){
    this._httpProvider.post('/event', (req, res)=>{
      let event = new Event(req.body);
      this._eventService.processEvent(event).then((result) => {
        res.send('OK');
      }, (error) => {
        res.status (500).send('NOT OK');
      });
    });
  }
}

module.exports = EventAPI;
