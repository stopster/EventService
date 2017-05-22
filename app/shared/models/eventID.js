let crypto;
try{
  crypto = require('crypto');
} catch (err){
  console.log('crypto support is disabled');
  crypto = require('../shared/utils/dummyCrypto');
}

class EventID {
  constructor(event){
    this._ID = this.generateNewID(event.timestamp, event.pageID, event.clientID);
  }

  generateNewID(timestamp, pageId, clientId){
    let hash = crypto.createHash('sha256');
    hash.update('' + timestamp)
        .update('' + pageId)
        .update('' + clientId);

    return hash.digest('hex');
  }

  toString (){
    return this._ID;
  }
}

module.exports = EventID;
