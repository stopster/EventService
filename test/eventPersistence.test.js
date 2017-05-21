const chai = require('chai');
const sinon = require('sinon');
const assert = chai.assert;

const EventPersistence = require('../app/components/eventPersistence');
describe('EventPersistence', () => {
  const eventPersistence = new EventPersistence();

  it('should provide "persist" method', () => {
    assert.isFunction(eventPersistence.persist, 'method was not provided');
  });

  it('should provide "find" method', () => {
    assert.isFunction(eventPersistence.find, 'method was not provided');
    assert.instanceOf(eventPersistence.find(), Promise, 'returned value is not a promise');
  });
});
