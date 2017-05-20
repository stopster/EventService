class EventService{
  constructor(eventPersistence, eventBillingService){
    this._eventPersistence = eventPersistence;
    this._eventBillingService = eventBillingService;
  }

  processEvent(event){
    this._eventPersistence.saveEvent(event);
    this._eventBillingService.processEvent(event.getBillingInfo());
  }
}

module.exports = EventService;
