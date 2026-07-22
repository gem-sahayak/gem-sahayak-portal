'use strict';

const publisher = require('./publish');
const subscriber = require('./subscribe');
const eventMetrics = require('./eventMetrics');

class EventBusEngine {
  constructor() {
    this.manifest = {
      name: 'Event Engine Bus',
      version: '1.9.0',
      description: 'Publish-subscribe event bus with queue buffering and listener dispatching'
    };
  }

  publish(type, payload) {
    return publisher.publish(type, payload);
  }

  subscribe(type, cb) {
    return subscriber.subscribe(type, cb);
  }

  getMetrics() {
    return eventMetrics.getMetrics();
  }
}

module.exports = EventBusEngine;
