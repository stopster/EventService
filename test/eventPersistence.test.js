const chai = require('chai');
const sinon = require('sinon');
const assert = chai.assert;

const EventPersistence = require('../app/components/eventPersistence');

const database = {
  query: () => {},
  connect: () => {}
}
describe('EventPersistence', () => {
  const eventPersistence = new EventPersistence(database);

  it('should provide "persist" method', () => {
    assert.isFunction(eventPersistence.persist, 'method was not provided');
  });

  it('should provide "find" method', () => {
    assert.isFunction(eventPersistence.find, 'method was not provided');
  });
});
