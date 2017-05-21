class EventPersistence {
  constructor(){
    // TODO connect to DB
  }

  persist(event){
    // TODO save the event to the DB
  }

  find(criteria){
    // TODO build a query from the criteria
    // TODO make a call to DB
    // TODO return a promise
    return new Promise((resolve, reject) => {
    });
  }
}

module.exports = EventPersistence;
