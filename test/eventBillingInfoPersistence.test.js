const chai = require('chai');
const sinon = require('sinon');
const assert = chai.assert;

const EventBillingInfo = require('../app/shared/models/event');
const EventBillingInfoPersistence = require('../app/components/eventBillingInfoPersistence');

describe('EventBillingInfoPersistence', () => {
  const eventBillingInfoPersistence = new EventBillingInfoPersistence();
  it('should provide method "saveEventBillingInfo"', () => {
    assert.isFunction (eventBillingInfoPersistence.saveEventBillingInfo, 'method is not provided');
  });
});
