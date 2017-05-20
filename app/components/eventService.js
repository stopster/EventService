class EventService{
  constructor(eventPersistance, eventBillingService){
    this._eventPersistance = eventPersistance;
    this._eventBillingService = eventBillingService;
  }

  processEvent(event){
    this._eventPersistance.saveEvent(event);
    this._eventBillingService.processEvent(event.getBillingInfo());
  }
}

module.exports = EventService;
