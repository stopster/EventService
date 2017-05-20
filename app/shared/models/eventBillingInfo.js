class EventBillingInfo{
  constructor(clientIP, userAgent, UID, duration){
    this._clientAPI = clientIP;
    this._userAgent = userAgent;
    this._UID = UID;
    this._duration = duration;
  }
}

module.exports = EventBillingInfo;
