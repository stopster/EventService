const chai = require('chai');
const sinon = require('sinon');
const assert = chai.assert;

const Event = require('../app/shared/models/event');
const EventBillingInfo = require('../app/shared/models/eventBillingInfo');
const EventBillingService = require('../app/components/eventBillingService');

describe('EventBillingService', () => {
  const eventBillingPersistence = {
    saveEventBillingInfo: (eventBillingInfo) => {}
  }

  const eventBillingService = new EventBillingService(eventBillingPersistence);
  const processEventSpy = sinon.spy(eventBillingService, 'processEventBillingInfo');
  const saveEventSpy = sinon.spy(eventBillingPersistence, 'saveEventBillingInfo');
  const dummyEvent = new Event({});

  it('should provide "processEventBillingInfo" method', () => {
    assert.isFunction (eventBillingService.processEventBillingInfo, 'method is not provided');
  });

  it('should call "saveEventBillingInfo" method of the EventBillingPersistence', () => {
    eventBillingService.processEventBillingInfo(dummyEvent.getBillingInfo());

    assert(saveEventSpy.calledOnce, 'save method was not called');
    assert.instanceOf(saveEventSpy.getCall(0).args[0], EventBillingInfo, 'argument is not of type EventBillingInfo');
  });
});
