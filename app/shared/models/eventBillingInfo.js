class EventBillingInfo{
  constructor(clientIP, userAgent, ID, duration){
    this._clientAPI = clientIP;
    this._userAgent = userAgent;
    this._ID = ID;
    this._duration = duration;
  }
}

module.exports = EventBillingInfo;
