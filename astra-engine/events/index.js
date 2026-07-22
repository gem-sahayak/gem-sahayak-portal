'use strict';

const EventBusEngine = require('./eventBus');
const eventQueue = require('./eventQueue');
const eventDispatcher = require('./eventDispatcher');
const listenersRegistry = require('./listeners');
const publisher = require('./publish');
const subscriber = require('./subscribe');
const eventMetrics = require('./eventMetrics');

const defaultBus = new EventBusEngine();

module.exports = {
  eventBus: defaultBus,
  EventBusEngine,
  eventQueue,
  eventDispatcher,
  listenersRegistry,
  publisher,
  subscriber,
  eventMetrics
};
