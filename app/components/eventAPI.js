const Event = require('../shared/event');

class EventAPI{
  constructor (httpProvider, eventService) {
    this._httpProvider = httpProvider;
    this._eventService = eventService;

    this.exposeAPI();
  }

  exposeAPI(){
    this._httpProvider.post('/event', (req, res)=>{
      // TODO implement save event request;
      let event = new Event(req.body);
      this._eventService.processEvent(event);
    });
  }
}

module.exports = EventAPI;
