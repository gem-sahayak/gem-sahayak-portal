'use strict';

const listenersRegistry = require('./listeners');
const eventMetrics = require('./eventMetrics');

class EventDispatcher {
  dispatch(event) {
    const callbacks = listenersRegistry.get(event.type);
    for (const cb of callbacks) {
      try {
        cb(event.payload);
      } catch (err) {}
    }
    eventMetrics.recordDispatch();
  }
}

module.exports = new EventDispatcher();
