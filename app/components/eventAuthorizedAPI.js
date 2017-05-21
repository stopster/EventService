class EventAuthorizedAPI {
  constructor(httpProvider, eventService) {
    this._httpProvider = httpProvider;
    this._eventService = eventService;

    this.exposeAPI();
  }

  exposeAPI(){
    this._httpProvider.get('/event', (res, req) => {
      // TODO validate query
      this._eventService.findEvent(res.query);
    });
  }
}

module.exports = EventAuthorizedAPI;
