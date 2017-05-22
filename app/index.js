// 3rd party modules
const express = require('express');
const bodyParser = require('body-parser');

// configuration
const config = require('./configs/dev');

// dependencies
const MySQLDatabase = require('./shared/utils/MySQLDatabase');

// our components
const EventService = require('./components/EventService');
const EventPersistence = require('./components/EventPersistence');
const EventAPI = require('./components/eventAPI');
const EventAuthorizedAPI = require('./components/eventAuthorizedAPI');

// Actual initialization of the componets by layers
// Database Layer
const database = new MySQLDatabase(config.eventDBConfig);
database.connect();
database.reconnectOnError();

// Persistence Layer
const eventPersistence = new EventPersistence(database);

// Business Layer
const eventService = new EventService(eventPersistence);

// Presentation Layer
const app = express();
  // isolate APIs by routers
const apiRouter = express.Router();
const authorApiRouter = express.Router();
const eventAPI = new EventAPI(apiRouter, eventService);
const authorizationAPI = new EventAuthorizedAPI(authorApiRouter, eventService, config.authorizedAPIPassword);


// Start
app.use(bodyParser.json());
app.use(apiRouter);
app.use(authorApiRouter);
app.listen(8080);
