const chai = require('chai');
const sinon = require('sinon');
const assert = chai.assert;

const Event = require('../app/shared/models/event');
const EventBillingInfo = require('../app/shared/models/eventBillingInfo');
const EventService = require('../app/components/eventService');

describe('EventService', ()=>{
  const eventPersistence = {
    saveEvent: (event) => {}
  }
  const eventBillingService = {
    processEvent: (eventBillingInfo) => {}
  }
  const saveEventSpy = sinon.spy(eventPersistence, 'saveEvent');
  const billingProcessEventSpy = sinon.spy(eventBillingService, 'processEvent');

  const eventService = new EventService(eventPersistence, eventBillingService);
  const dummyEvent = new Event({});

  it('should provide "processEvent" method', ()=>{
    assert.isFunction(eventService.processEvent, '"processEvent" method is not provided');
  });

  // TODO do a bonus task
  // it('should call "processEvent" of the EventBillingService', ()=>{
  //   assert(billingProcessEventSpy.calledOnce, '"processEvent" was not called');
  //   assert(billingProcessEventSpy.getCall(0).args[0], EventBillingInfo, '"processEvent" method doesn\'t get EventBillingInfo object');
  // });
});
