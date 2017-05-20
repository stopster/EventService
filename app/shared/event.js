class Event {
  constructor (config){
    this.timestamp = config.timestamp || Date.now();
  }
}

module.exports = Event;
