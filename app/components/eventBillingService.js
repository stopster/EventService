class EventBillingService {
  constructor(eventBillingPersistence){
    this._persistence = eventBillingPersistence;
  }

  processEventBillingInfo(eventBillingInfo){
    this._persistence.saveEventBillingInfo(eventBillingInfo);
    // TODO
  }
}

module.exports = EventBillingService;
