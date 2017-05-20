const chai = require('chai');
const sinon = require('sinon');
const express = require('express');
const assert = chai.assert;

const Event = require('../app/shared/models/event');
const EventAPI = require('../app/components/eventAPI');

describe('EventAPI', ()=>{
  const httpProvider = {
    post: (url, callBack) => {}
  };

  const eventService = {
    processEvent: (event) => {}
  };

  const postSpy = sinon.spy(httpProvider, 'post');
  const processEventSpy = sinon.spy(eventService, 'processEvent');
  const eventAPI = new EventAPI(httpProvider, eventService);

  it('should expose endpoint POST "event"', ()=>{
    assert(postSpy.calledOnce, 'not called once');
    assert.equal('/event', httpProvider.post.getCall(0).args[0]);
  });

  it('should call eventService.processEvent() with event object', ()=>{
    const callBack = postSpy.getCall(0).args[1];
    const clientEventData = {body: {}};

    // simulate calling post method of httpProvider
    callBack(clientEventData);

    assert.isFunction(callBack, 'function', 'callback is not a function');
    assert(processEventSpy.calledOnce, 'not called once');
    assert.instanceOf(processEventSpy.getCall(0).args[0], Event, 'doesn\'t pass the Event object');
  });
});
