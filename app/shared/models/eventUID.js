let crypto;
try{
  crypto = require('crypto');
} catch (err){
  console.log('crypto support is disabled');
  crypto = require('../shared/utils/dummyCrypto');
}

class EventUID {
  constructor(event){
    this._UID = this.generateNewUID(event.timestamp, event.pageId, event.clientId);
  }

  generateNewUID(timestamp, pageId, clientId){
    let hash = crypto.createHash('sha256');
    hash.update('' + timestamp)
        .update('' + pageId)
        .update('' + clientId);

    return hash.digest('hex');
  }

  toString (){
    return this._UID;
  }
}

module.exports = EventUID;
