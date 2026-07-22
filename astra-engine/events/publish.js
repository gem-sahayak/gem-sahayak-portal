'use strict';

const eventQueue = require('./eventQueue');
const eventDispatcher = require('./eventDispatcher');
const eventMetrics = require('./eventMetrics');

class Publisher {
  publish(eventType, payload = {}) {
    const event = { type: eventType, payload, timestamp: new Date().toISOString() };
    eventQueue.enqueue(event);
    eventMetrics.recordPublish();
    eventDispatcher.dispatch(event);
    return event;
  }
}

module.exports = new Publisher();
