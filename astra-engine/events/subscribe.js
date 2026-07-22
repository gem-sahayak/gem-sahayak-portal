'use strict';

const listenersRegistry = require('./listeners');

class Subscriber {
  subscribe(eventType, callback) {
    listenersRegistry.on(eventType, callback);
  }
}

module.exports = new Subscriber();
