const EventBillingInfo = require('./eventBillingInfo');
const EventID = require('./eventID');

class Event {
  constructor (config){
    this.ID = new EventID(this);
    this.timestamp = config.timestamp || Date.now();
    this.userID = config.userID;
    this.pageID = config.pageID;
    this.pageReferer = config.pageReferer;
    this.userAgent = config.userAgent;
    this.screenResolution = config.screenResolution;
    this.userIP = config.userIP;
    this.browser = config.browser;
    this.country_name = config.country_name;
  }

  getBillingInfo(){
    return new EventBillingInfo(this.clientIP, this.userAgent, this.UID, this.duration);
  }
}

module.exports = Event;
