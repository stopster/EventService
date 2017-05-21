const EventBillingInfo = require('./eventBillingInfo');
const EventUID = require('./eventUID');

class Event {
  constructor (config){
    this.timestamp = config.timestamp || Date.now();
    this.UID = new EventUID(this);
  }

  getBillingInfo(){
    return new EventBillingInfo(this.clientIP, this.userAgent, this.UID, this.duration);
  }
}

module.exports = Event;
