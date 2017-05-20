const EventBillingInfo = require('./eventBillingInfo');

class Event {
  constructor (config){
    this.timestamp = config.timestamp || Date.now();
  }

  getBillingInfo(){
    return new EventBillingInfo(this.clientIP, this.userAgent, this.UID, this.duration);
  }
}

module.exports = Event;
