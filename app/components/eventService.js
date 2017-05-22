class EventService{
  constructor(eventPersistence, eventBillingService){
    this._eventPersistence = eventPersistence;
    this._eventBillingService = eventBillingService;
  }

  processEvent(event){
    return new Promise((resolve, reject) => {
      this._eventPersistence.persist(event).then((result)=>{
        resolve(result);
        // TODO make a call to billing service
        //this._eventBillingService.processEvent(event.getBillingInfo());
      }, (error) => {
        reject(error);
      });
    });
  }

  findEvent(criteria, groupBy){
    return this._eventPersistence.find(criteria, groupBy);
  }
}

module.exports = EventService;
