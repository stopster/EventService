const chai = require('chai');
const sinon = require('sinon');
const assert = chai.assert;

const EventAuthorizedAPI = require('../app/components/eventAuthorizedAPI');

describe('EventAuthorizedAPI', () => {
  const httpProvider = {
    get: (route) => {},
    use: () => {},
  }

  const getSpy = sinon.spy(httpProvider, 'get');
  const eventAuthorizedAPI = new EventAuthorizedAPI(httpProvider);

  it('should expose GET "event" endpoint', () => {
    assert(getSpy.called, 'endpoint was not provided');
    assert.equal(getSpy.getCall(0).args[0], '/event', 'route is not correct');
  });
});
