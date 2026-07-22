'use strict';

const { EventBus, EVENT_TYPES } = require('./bus');

const defaultEventBus = new EventBus();

module.exports = {
  eventBus: defaultEventBus,
  EVENT_TYPES,
  EventBus
};
